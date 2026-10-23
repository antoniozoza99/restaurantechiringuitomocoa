const WA_NUMBER = "573138961302";
let cart = JSON.parse(localStorage.getItem('chiringuito_cart') || '[]');

function saveCart() {
    localStorage.setItem('chiringuito_cart', JSON.stringify(cart));
}

function getCleanPrice(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

function formatPrice(num) {
    return '$ ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getTranslation(key) {
    const lang = window.currentLang || 'es';
    const activeDict = window.dict || {};
    if (activeDict[lang] && activeDict[lang][key]) {
        return activeDict[lang][key];
    }
    const fallbacks = {
        es: {
            "cart-empty": "Tu carrito está vacío.",
            "cart-total": "Total:",
            "wa-cart-intro": "¡Hola! Soy {name}, quiero pedir lo siguiente de *Chiringuito*:",
            "wa-cart-please-name": "Por favor, ingresa tu nombre antes de enviar la orden.",
            "flavor-error": "Por favor, selecciona un sabor."
        },
        en: {
            "cart-empty": "Your cart is empty.",
            "cart-total": "Total:",
            "wa-cart-intro": "Hi! I'm {name}, I'd like to order the following from *Chiringuito*:",
            "wa-cart-please-name": "Please enter your name before sending the order.",
            "flavor-error": "Please select a flavor."
        }
    };
    return (fallbacks[lang] && fallbacks[lang][key]) || (fallbacks['es'][key]) || key;
}

window.toggleCart = function() {
    const sidebar = document.getElementById("cart-sidebar");
    const overlay = document.getElementById("cart-overlay");
    if (sidebar) sidebar.classList.toggle("open");
    if (overlay) overlay.classList.toggle("show");
}

window.addToCart = function(nameKeyOrValue, priceStr, hasFlavors, itemId) {
    let flavor = null;
    if (hasFlavors) {
        const flavorInput = document.getElementById(`flavor-input-${itemId}`);
        flavor = flavorInput ? flavorInput.value : "";
        if (!flavor) {
            alert(getTranslation("flavor-error"));
            return;
        }
    }

    cart.push({
        nameKeyOrValue: nameKeyOrValue,
        priceStr: priceStr,
        priceVal: getCleanPrice(priceStr),
        flavor: flavor
    });
    saveCart();
    updateCartUI();
    
    if (hasFlavors) {
        const input = document.getElementById(`flavor-input-${itemId}`);
        const badge = document.getElementById(`flavor-badge-${itemId}`);
        if (input) input.value = '';
        if (badge) {
            badge.style.display = 'none';
            badge.innerText = '';
        }
    }
    
    // Bounce and pulse effect
    const floatingBtn = document.getElementById("floating-cart-btn");
    if (floatingBtn) {
        floatingBtn.style.transform = "scale(1.25)";
        floatingBtn.classList.add("pulse-cart");
        setTimeout(() => { 
            floatingBtn.style.transform = "scale(1)"; 
        }, 200);
        setTimeout(() => {
            floatingBtn.classList.remove("pulse-cart");
        }, 1000);
    }
}

window.removeFromCart = function(index) {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems[index]) {
        cartItems[index].style.opacity = '0';
        cartItems[index].style.transform = 'translateX(50px)';
        cartItems[index].style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            cart.splice(index, 1);
            saveCart();
            updateCartUI();
        }, 300);
    } else {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
    }
}

window.updateCartUI = function() {
    const countEl = document.getElementById("cart-count");
    if (countEl) {
        countEl.innerText = cart.length;
        if (cart.length > 0) {
            countEl.classList.add("has-items");
        } else {
            countEl.classList.remove("has-items");
        }
    }
    
    const container = document.getElementById("cart-items-container");
    if (!container) return;
    container.innerHTML = '';
    
    let total = 0;
    
    if (cart.length === 0) {
        container.innerHTML = `<p id="cart-empty" class="cart-empty-msg">${getTranslation("cart-empty")}</p>`;
    } else {
        cart.forEach((item, index) => {
            const activeLang = window.currentLang || 'es';
            let displayName = (window.dict && window.dict[activeLang] && window.dict[activeLang][item.nameKeyOrValue]) || item.nameKeyOrValue;
            if (item.flavor) {
                displayName += `<br><small class="cart-item-flavor">- ${item.flavor}</small>`;
            }
            total += item.priceVal;
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.style.opacity = '0';
            div.style.transform = 'translateY(10px)';
            div.style.transition = 'all 0.3s ease';
            div.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-name">${displayName}</span>
                    <span class="cart-item-price">${item.priceStr}</span>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            container.appendChild(div);
            // Staggered fade-in
            setTimeout(() => {
                div.style.opacity = '1';
                div.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
    
    const totalPriceEl = document.getElementById("cart-total-price");
    if (totalPriceEl) totalPriceEl.innerText = formatPrice(total);
}

window.checkout = function() {
    if (cart.length === 0) return;
    
    const nameInputEl = document.getElementById("customer-name");
    const nameInput = nameInputEl ? nameInputEl.value.trim() : "";
    if (!nameInput) {
        alert(getTranslation("wa-cart-please-name"));
        if (nameInputEl) nameInputEl.focus();
        return;
    }
    
    let total = 0;
    let itemsText = '';
    cart.forEach(item => {
        const activeLang = window.currentLang || 'es';
        let displayName = (window.dict && window.dict[activeLang] && window.dict[activeLang][item.nameKeyOrValue]) || item.nameKeyOrValue;
        if (item.flavor) {
            displayName += ` (${item.flavor})`;
        }
        itemsText += `- 1x ${displayName} (${item.priceStr})\n`;
        total += item.priceVal;
    });
    
    let introMsg = getTranslation("wa-cart-intro").replace('{name}', nameInput);
    const waMsg = `${introMsg}\n\n${itemsText}\n---\n*${getTranslation("cart-total")} ${formatPrice(total)}*`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, '_blank');
}

// Initial UI Sync on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});
