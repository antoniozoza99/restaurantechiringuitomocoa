const dict = {
    es: {
        "btn-back": "<i class=\"fas fa-arrow-left\"></i> Volver al Menú",
        "btn-order": "Ordenar Plato",
        "empanadas-carne-title": "Empanaditas de Iglesia (Carne y papa)",
        "empanadas-carne-essence": "Nacidas de los sabores que compartía con viajeros en la Posada Dantayaco, estas empanaditas llevan un relleno tradicional de carne y papa, pero con un toque global: se sirven con guacamole y pico de gallo, un guiño a las rancherías mexicanas que conocí en el camino.",
        "empanadas-carne-ingr": "<li>Masa de maíz trillado</li><li>Carne y papa</li><li>Guacamole y pico de gallo</li>",
        "empanadas-queso-title": "Empanaditas de Iglesia (Queso)",
        "empanadas-queso-essence": "La versión en queso de nuestras empanaditas es un homenaje a los desayunos europeos que tanto admiro. Acompañadas de una mermelada de la casa (recuerdo de las confituras artesanales que aprendí de una abuela francesa), convierten lo sencillo en una experiencia única.",
        "empanadas-queso-ingr": "<li>Masa de maíz trillado</li><li>Relleno de queso</li><li>Mermelada de la casa</li>",
        "quesadilla-javi-title": "Quesadilla Javi (ESP)",
        "quesadilla-javi-essence": "Esta quesadilla nació de una noche de intercambio con un cocinero español que recorría Sudamérica. Tortilla de harina, pollo salteado en finas hierbas, rúcula, huevo cosido en láminas y nuestro toque de mozzarella. Un pedazo de España con alma de Chiringuito.",
        "quesadilla-javi-ingr": "<li>Tortilla de harina</li><li>Pollo en finas hierbas</li><li>Mozzarella y huevo</li>",
        "ensalada-especial-title": "Ensalada Especial Dantayaco",
        "ensalada-especial-essence": "Esta ensalada es el reflejo de mi pasión por la gastronomía saludable: lechuga crespa, espinaca, rúcula, tomate cherry, almendras y cebolla morada, todo bañado en una vinagreta balsámica que aprendí de un chef italiano que pasó una temporada en la posada. Frescura viajera en cada hoja.",
        "ensalada-especial-ingr": "<li>Mix de lechugas, espinaca y rúcula</li><li>Almendras y tomate cherry</li><li>Vinagreta balsámica</li>",
        "lomo-queso-azul-title": "Lomo de Res en Salsa de Queso Azul",
        "lomo-queso-azul-essence": "Para este lomo fino de 220 gramos, me inspiré en las cervecerías de Múnich y los asados argentinos. La salsa de queso azul (o la opción de vino tinto) le da un carácter audaz, mientras que la papa criolla y el tomate cherry en reducción balsámica le recuerdan a uno sus raíces colombianas.",
        "lomo-queso-azul-ingr": "<li>220g de lomo fino</li><li>Salsa de queso azul o vino tinto</li><li>Papa criolla y tomate cherry</li>",
        "ceviche-champinones-title": "Ceviche de Champiñones",
        "ceviche-champinones-essence": "Un viaje vegetal que descubrí cocinando para mochileros vegetarianos. Los champiñones se marinan con cebolla morada, perejil, limón y aceite de oliva, logrando esa textura y frescura que tanto aman quienes prueban el ceviche por primera vez… sin necesidad de pescado.",
        "ceviche-champinones-ingr": "<li>Champiñones frescos</li><li>Limón, cebolla morada y perejil</li><li>Aceite de oliva</li>",
        "piraroku-azai-title": "Piraroku en Salsa de Azaí",
        "piraroku-azai-essence": "Este es mi plato más personal: el piraroku, un pez gigante de nuestra Amazonía, salteado en finas hierbas y bañado en salsa de azaí (ese fruto morado que me enseñaron a venerar los indígenas de la región). Con chips de yuca y ensalada de temporada, es la sofisticación de la selva en un plato.",
        "piraroku-azai-ingr": "<li>Piraroku fresco</li><li>Salsa de azaí</li><li>Chips de yuca</li>",
        "pizza-primavera-title": "Primavera",
        "pizza-primavera-essence": "Sobre nuestra salsa pomodoro, mozzarella, tomate cherry, rúcula, láminas de ajo, jamón serrano y parmesano. Es una pizza que canta a los mercados europeos, pero con el sol tropical encima.",
        "pizza-primavera-ingr": "<li>Pomodoro y mozzarella</li><li>Jamón serrano y rúcula</li><li>Tomate cherry y parmesano</li>",
        "pizza-diavola-title": "Diávola",
        "pizza-diavola-essence": "Picante y atrevida, como aquellos viajeros que buscaban emociones fuertes. Lleva pomodoro picante, mozzarella, pepperoni, pimentón asado, salami y cebolla en julianas. El diablo se esconde en cada rebanada.",
        "pizza-diavola-ingr": "<li>Pomodoro picante</li><li>Pepperoni y salami</li><li>Pimentón asado</li>",
        "pizza-espinaca-azul-title": "Espinaca y Queso Azul",
        "pizza-espinaca-azul-essence": "La combinación que aprendí de una quesería en los Alpes suizos. Espinaca fresca, tomate cherry, ajo, cebolla en julianas y una generosa salsa de queso azul sobre nuestra base de pomodoro y mozzarella. Para los que saben que lo vegetal puede ser pecado.",
        "pizza-espinaca-azul-ingr": "<li>Salsa de queso azul</li><li>Espinaca fresca</li><li>Tomate cherry</li>",
        "pizza-napolitana-title": "Napolitana",
        "pizza-napolitana-essence": "La más pura de todas: pomodoro, mozzarella, albahaca y burrata. Sin artificios, como la pizza que compartí con un grupo de napolitanos que me enseñaron que menos es más. Un homenaje a la sencillez divina.",
        "pizza-napolitana-ingr": "<li>Pomodoro clásico</li><li>Albahaca fresca</li><li>Burrata</li>",
        "pizza-tocipollo-title": "Tocipollo",
        "pizza-tocipollo-essence": "Este sabor nació pidiéndole a una mamá viajera que me enseñara qué pedían sus hijos. Maicitos, filete de pechuga, tocineta y champiñones, todo sobre nuestra salsa pomodoro y mozzarella. La pizza favorita de la familia.",
        "pizza-tocipollo-ingr": "<li>Pollo y tocineta</li><li>Champiñones y maicitos</li><li>Pomodoro y mozzarella</li>",
        "pizza-hawaiana-title": "Hawaiana",
        "pizza-hawaiana-essence": "Sé que la hawaiana genera pasiones encontradas. Pero la incluyo porque un mochilero de Honolulu me convenció: jamón y trocitos de piña sobre pomodoro y mozzarella. Dulce y salada, como un atardecer en la playa. Pídela sin prejuicios.",
        "pizza-hawaiana-ingr": "<li>Jamón</li><li>Trocitos de piña</li><li>Pomodoro y mozzarella</li>",
        "pizza-cuatro-quesos-title": "Cuatro Quesos",
        "pizza-cuatro-quesos-essence": "Mozzarella, queso azul, ricotta y pecorino se funden sobre nuestra base de pomodoro. Es la pizza que nació de una cata de quesos andinos y europeos que organicé para los huéspedes de la posada. Un viaje lácteo inolvidable.",
        "pizza-cuatro-quesos-ingr": "<li>Mozzarella y queso azul</li><li>Ricotta y pecorino</li><li>Base de pomodoro</li>",
        "pizza-dantayaco-title": "Dantayaco",
        "pizza-dantayaco-essence": "La estrella de la casa: tomates frescos, berenjenas, cebolla caramelizada, rúcula y burrata de albahaca sobre pomodoro y mozzarella. Cada ingrediente representa una parada de mi viaje: la berenjena de Turquía, la burrata de Italia, la cebolla caramelizada de Francia… todo reunido en Chiringuito.",
        "pizza-dantayaco-ingr": "<li>Berenjenas y cebolla caramelizada</li><li>Burrata de albahaca y rúcula</li><li>Tomates frescos</li>",
        "mandinga-clasica-title": "Mandinga Clásica",
        "mandinga-clasica-essence": "Bautizada así por un mochilero australiano que pedía “algo con muchas cosas”, esta mandinga es una explosión de texturas: papas fritas, carne molida, pollo desmechado, tocineta, mozzarella, maíz tierno y nuestras salsas de ajo y miel mostaza. El alma callejera del mundo, en una sola porción.",
        "mandinga-clasica-ingr": "<li>Papas fritas</li><li>Carne molida y pollo desmechado</li><li>Tocineta, mozzarella y maicitos</li>",
        "mandinga-montanera-title": "Mandinga Montañera",
        "mandinga-montanera-essence": "Versión campesina de la mandinga, donde la carne desmechada, el chorizo, el chicharrón y los maduritos le rinden tributo a los desayunos de las fincas colombianas. Lleva maicitos y la misma base de papas y salsas de la casa. Un plato que sabe a cordillera y a fiesta.",
        "mandinga-montanera-ingr": "<li>Carne desmechada y chorizo</li><li>Chicharrón y maduritos</li><li>Papas fritas y maicitos</li>",
        "ceviche-dantayaco-title": "Ceviche Dantayaco",
        "ceviche-dantayaco-essence": "Este ceviche nació en una noche calurosa en la que un pescador peruano me enseñó a usar chontaduro picante. Los camarones frescos se sumergen en esa salsa única, con cebolla, cilantro y limón, acompañados de chips de plátano verde. El mar y la selva se dan la mano.",
        "ceviche-dantayaco-ingr": "<li>Camarones frescos</li><li>Salsa de chontaduro picante</li><li>Chips de plátano verde</li>",
        "pechuga-curry-title": "Pechuga con Vegetales al Curry",
        "pechuga-curry-essence": "El curry llegó a mi cocina de la mano de un viajero de Tailandia. Aquí, la pechuga salteada en hierbas se encuentra con brócoli, cebolla, zanahoria y pimentón salteados en curry, y papas criollas bañadas en mantequilla, limón y perejil. Un puente entre el sudeste asiático y los Andes.",
        "pechuga-curry-ingr": "<li>Pechuga en hierbas</li><li>Vegetales al curry</li><li>Papas criollas a la mantequilla</li>",
        "hamburguesa-clasica-title": "Hamburguesa Clásica",
        "hamburguesa-clasica-essence": "Nuestra versión de la hamburguesa americana, pero con el cariño de la casa: 130 gramos de carne de res, tocineta, mozzarella, tomate, lechuga y nuestras salsas (cebolla y tomate). Acompañada de papas a la francesa. Simple, perfecta, viajera.",
        "hamburguesa-clasica-ingr": "<li>Carne de res (130g)</li><li>Tocineta y mozzarella</li><li>Vegetales frescos</li>",
        "hamburguesa-crunch-title": "Hamburguesa Crunch",
        "hamburguesa-crunch-essence": "Un giro crujiente que aprendí de un food truck en Bogotá: la misma carne de res pero apanada, con queso mozzarella, tomate, lechuga, miel y salsas de la casa. El contraste entre lo crocante y lo suave te hará cerrar los ojos en cada mordisco.",
        "hamburguesa-crunch-ingr": "<li>Carne de res apanada</li><li>Mozzarella y miel</li><li>Salsas de la casa</li>",
        "burrito-title": "Burrito",
        "burrito-essence": "Este burrito es un mapa de sabores: pan de pita (una adaptación que hicimos para darle más ligereza), relleno con pollo desmechado y carne desmechada o molida, vegetales salteados y nuestras salsas. Con papas a la francesa al lado, es el abrazo entre México y Colombia.",
        "burrito-ingr": "<li>Pan de pita</li><li>Carne y pollo desmechado</li><li>Vegetales salteados</li>",
        "pasta-carbonara-title": "Pasta Carbonara",
        "pasta-carbonara-essence": "Una carbonara que no le pide nada a Roma. 120 gramos de pasta al dente, salsa hecha con huevo, tocineta y parmesano, y pan tostado para no dejar ni una gota. La receta la perfeccioné gracias a un chef italiano que se quedó tres meses en la posada.",
        "pasta-carbonara-ingr": "<li>Pasta al dente</li><li>Salsa de huevo y parmesano</li><li>Tocineta y pan tostado</li>",
        "pasta-puttanesca-title": "Pasta Puttanesca",
        "pasta-puttanesca-essence": "Osada y llena de carácter, esta puttanesca lleva anchoas, cebolla, aceitunas, alcaparras, tomate y perejil. Es intensa, como las conversaciones nocturnas con viajeros que no querían irse. Un guiño a Nápoles desde nuestra selva.",
        "pasta-puttanesca-ingr": "<li>Anchoas y alcaparras</li><li>Aceitunas y tomate</li><li>Cebolla y perejil</li>",
        "pasta-bolognesa-title": "Pasta Bolognesa",
        "pasta-bolognesa-essence": "La bolognesa de Chiringuito es lenta, amorosa y casera: salsa pomodoro con carne molida, cocinada a fuego bajo como me enseñó una nonna de Bolonia. Sobre 120 gramos de pasta al dente, con su pan tostado. Un clásico universal con alma de hogar.",
        "pasta-bolognesa-ingr": "<li>Salsa pomodoro casera</li><li>Carne molida cocida a fuego lento</li><li>Pasta al dente</li>",
        "brownie-helado-title": "Brownie con Helado",
        "brownie-helado-essence": "El brownie caliente que aprendí a hacer de una pastelera estadounidense que se quedó varada en la posada por una semana. Lo servimos bañado en helado de vainilla y salsa de chocolate o caramelo. Un final dulce y reconfortante.",
        "brownie-helado-ingr": "<li>Brownie caliente casero</li><li>Helado de vainilla</li><li>Salsa de chocolate o caramelo</li>",
        "copa-dantayaco-title": "Copa Dantayaco",
        "copa-dantayaco-essence": "Para quienes buscan algo más ligero, esta copa es mi día a día: yogur griego, fruta de temporada (la que dé la huerta) y nuestra mermelada de la casa. Es el desayuno de los viajeros, convertido en postre.",
        "copa-dantayaco-ingr": "<li>Yogur griego</li><li>Fruta de temporada</li><li>Mermelada artesanal</li>"
    },
    en: {
        "btn-back": "<i class=\"fas fa-arrow-left\"></i> Back to Menu",
        "btn-order": "Order Dish"
    }
};

// Fallback a español para las claves que no están traducidas en inglés
for (let key in dict.es) {
    if (!dict.en[key]) {
        dict.en[key] = dict.es[key];
    }
}

const WA_NUMBER = "573138961302";
const dishes = [
    {id: "empanadas-carne", category: "ENTRADAS", anchor: "empanadas-carne", img: "empanadas.jpg", price: "$ 15.000"},
    {id: "empanadas-queso", category: "ENTRADAS", anchor: "empanadas-queso", img: "empanadas.jpg", price: "$ 15.000"},
    {id: "quesadilla-javi", category: "ENTRADAS", anchor: "quesadilla-javi", img: "empanadas.jpg", price: "$ 20.000"},
    
    {id: "ensalada-especial", category: "PLATOS FUERTES", anchor: "ensalada-especial", img: "ensalada.jpg", price: "$ 25.000"},
    {id: "lomo-queso-azul", category: "PLATOS FUERTES", anchor: "lomo-queso-azul", img: "PLATOS FUERTES/LOMO DE RES EN SALSA DE QUESO AZUL/Lomo_queso_azul_.jpg", price: "$ 62.000"},
    {id: "ceviche-champinones", category: "PLATOS FUERTES", anchor: "ceviche-champinones", img: "ceviche.jpg", price: "$ 25.000"},
    {id: "piraroku-azai", category: "PLATOS FUERTES", anchor: "piraroku-azai", img: "PLATOS FUERTES/PIRAROKU EN SALSA DE AZAÍ/PIRARUKU_ASAI_AMAZONAS_.jpg", price: "$ 65.000"},
    
    {id: "pizza-primavera", category: "PIZZAS ARTESANALES", anchor: "pizza-primavera", img: "primavera.jpg", price: "$ 55.000"},
    {id: "pizza-diavola", category: "PIZZAS ARTESANALES", anchor: "pizza-diavola", img: "diavola.jpg", price: "$ 55.000"},
    {id: "pizza-espinaca-azul", category: "PIZZAS ARTESANALES", anchor: "pizza-espinaca-azul", img: "napolitana.png", price: "$ 50.000"},
    {id: "pizza-napolitana", category: "PIZZAS ARTESANALES", anchor: "pizza-napolitana", img: "napolitana.png", price: "$ 55.000"},
    {id: "pizza-tocipollo", category: "PIZZAS ARTESANALES", anchor: "pizza-tocipollo", img: "napolitana.png", price: "$ 50.000"},
    {id: "pizza-hawaiana", category: "PIZZAS ARTESANALES", anchor: "pizza-hawaiana", img: "napolitana.png", price: "$ 45.000"},
    {id: "pizza-cuatro-quesos", category: "PIZZAS ARTESANALES", anchor: "pizza-cuatro-quesos", img: "napolitana.png", price: "$ 55.000"},
    {id: "pizza-dantayaco", category: "PIZZAS ARTESANALES", anchor: "pizza-dantayaco", img: "dantayaco.jpg", price: "$ 60.000"},
    
    {id: "mandinga-clasica", category: "COMIDAS RÁPIDAS", anchor: "mandinga-clasica", img: "dantayaco.jpg", price: "$ 30.000"},
    {id: "mandinga-montanera", category: "COMIDAS RÁPIDAS", anchor: "mandinga-montanera", img: "dantayaco.jpg", price: "$ 35.000"},
    {id: "ceviche-dantayaco", category: "COMIDAS RÁPIDAS", anchor: "ceviche-dantayaco", img: "ceviche.jpg", price: "$ 35.000"},
    {id: "pechuga-curry", category: "COMIDAS RÁPIDAS", anchor: "pechuga-curry", img: "pollo.jpg", price: "$ 45.000"},
    {id: "hamburguesa-clasica", category: "COMIDAS RÁPIDAS", anchor: "hamburguesa-clasica", img: "pollo.jpg", price: "$ 25.000"},
    {id: "hamburguesa-crunch", category: "COMIDAS RÁPIDAS", anchor: "hamburguesa-crunch", img: "pollo.jpg", price: "$ 28.000"},
    {id: "burrito", category: "COMIDAS RÁPIDAS", anchor: "burrito", img: "pollo.jpg", price: "$ 25.000"},
    
    {id: "pasta-carbonara", category: "PASTAS", anchor: "pasta-carbonara", img: "pollo.jpg", price: "$ 30.000"},
    {id: "pasta-puttanesca", category: "PASTAS", anchor: "pasta-puttanesca", img: "pollo.jpg", price: "$ 32.000"},
    {id: "pasta-bolognesa", category: "PASTAS", anchor: "pasta-bolognesa", img: "pollo.jpg", price: "$ 30.000"},
    
    {id: "brownie-helado", category: "POSTRES", anchor: "brownie-helado", img: "pollo.jpg", price: "$ 15.000"},
    {id: "copa-dantayaco", category: "POSTRES", anchor: "copa-dantayaco", img: "pollo.jpg", price: "$ 12.000"}
];

let currentLang = 'es';

function renderDetails() {
    const container = document.getElementById('details-container');
    container.innerHTML = '';
    
    let currentCategory = '';

    dishes.forEach(dish => {
        if (dish.category !== currentCategory) {
            currentCategory = dish.category;
            const catHeader = document.createElement('div');
            catHeader.className = 'details-category-header';
            catHeader.innerHTML = `<h3>${currentCategory}</h3>`;
            container.appendChild(catHeader);
        }

        const id = dish.id;
        const anchor = dish.anchor;
        const title = dict[currentLang][`${id}-title`];
        const essence = dict[currentLang][`${id}-essence`];
        const ingredients = dict[currentLang][`${id}-ingr`];
        
        const washMsg = `¡Hola! Quisiera ordenar / Hi! I want to order: ${title}`;
        const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(washMsg)}`;

        // Creating the section
        const section = document.createElement('section');
        section.id = anchor;
        section.className = 'dish-detail-section';
        
        const imgPath = encodeURI('./images/' + dish.img);
        let carouselHTML = `
            <div class="carousel-slide active" style="background-image: url('${imgPath}');"></div>
            <div class="carousel-slide" style="background-image: url('${imgPath}'); transform: scale(1.05);"></div>
            <div class="carousel-slide" style="background-image: url('${imgPath}'); transform: scale(1.1) rotate(2deg);"></div>
        `;

        section.innerHTML = `
            <div class="dish-detail-container">
                <div class="carousel-wrapper">
                    ${carouselHTML}
                    
                    <div class="carousel-controls">
                        <button class="carousel-btn" onclick="prevSlide(this)"><i class="fas fa-chevron-left"></i></button>
                        <button class="carousel-btn" onclick="nextSlide(this)"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                
                <div class="detail-text-content">
                    <h2 class="section-title details-title-premium">${title}</h2>
                    <p class="detail-essence">"${essence}"</p>
                    <div>
                        <h4 class="details-ingredients-title">Ingredientes Estrella / Star Ingredients</h4>
                        <ul class="ingredients-list">
                            ${ingredients}
                        </ul>
                    </div>
                    <div style="display:flex; gap:1rem; margin-top:1rem;">
                        <a href="${waUrl}" target="_blank" class="order-btn details-order-btn-premium">
                            <i class="fab fa-whatsapp"></i> ${dict[currentLang]["btn-order"]}
                        </a>
                        <button class="add-cart-btn details-order-btn-premium" onclick="addToCart('${title}', '${dish.price}')" title="Añadir al carrito">
                            <i class="fas fa-cart-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(section);
    });

    document.getElementById("btn-back").innerHTML = dict[currentLang]["btn-back"];
}

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById("btn-es").classList.toggle("active", lang === "es");
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    renderDetails();
}

document.getElementById("btn-es").addEventListener("click", () => setLanguage("es"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

// Carousel Logic
window.nextSlide = function(btn) {
    const wrapper = btn.closest('.carousel-wrapper');
    const slides = wrapper.querySelectorAll('.carousel-slide');
    let activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
    slides[activeIdx].classList.remove('active');
    activeIdx = (activeIdx + 1) % slides.length;
    slides[activeIdx].classList.add('active');
}

window.prevSlide = function(btn) {
    const wrapper = btn.closest('.carousel-wrapper');
    const slides = wrapper.querySelectorAll('.carousel-slide');
    let activeIdx = Array.from(slides).findIndex(s => s.classList.contains('active'));
    slides[activeIdx].classList.remove('active');
    activeIdx = (activeIdx - 1 + slides.length) % slides.length;
    slides[activeIdx].classList.add('active');
}

// Initial render
renderDetails();
