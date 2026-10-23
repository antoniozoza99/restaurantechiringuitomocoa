import re
import json

main_js_path = r"C:\Users\Antonio Zoza\Documents\Chiringuito\chiringuito\main.js"
detalles_js_path = r"C:\Users\Antonio Zoza\Documents\Chiringuito\chiringuito\detalles.js"
index_html_path = r"C:\Users\Antonio Zoza\Documents\Chiringuito\chiringuito\index.html"

# data to inject
dishes_data = [
    {"id": "empanadas-carne", "cat": "appetizers", "name": "Empanaditas de Iglesia (Carne y papa)", "ingr_short": "Maíz trillado, carne, papa, guacamole, pico de gallo", "story": "Nacidas de los sabores que compartía con viajeros en la Posada Dantayaco, estas empanaditas llevan un relleno tradicional de carne y papa, pero con un toque global: se sirven con guacamole y pico de gallo, un guiño a las rancherías mexicanas que conocí en el camino.", "price": "$ 15.000"},
    {"id": "empanadas-queso", "cat": "appetizers", "name": "Empanaditas de Iglesia (Queso)", "ingr_short": "Maíz trillado, queso, mermelada de la casa", "story": "La versión en queso de nuestras empanaditas es un homenaje a los desayunos europeos que tanto admiro. Acompañadas de una mermelada de la casa (recuerdo de las confituras artesanales que aprendí de una abuela francesa), convierten lo sencillo en una experiencia única.", "price": "$ 15.000"},
    {"id": "quesadilla-javi", "cat": "appetizers", "name": "Quesadilla Javi (ESP)", "ingr_short": "Tortilla de harina, pollo salteado en finas hierbas, rúcula, huevo cocido en láminas, mozzarella", "story": "Esta quesadilla nació de una noche de intercambio con un cocinero español que recorría Sudamérica. Tortilla de harina, pollo salteado en finas hierbas, rúcula, huevo cosido en láminas y nuestro toque de mozzarella. Un pedazo de España con alma de Chiringuito.", "price": "$ 20.000"},

    {"id": "ensalada-especial", "cat": "mains", "name": "Ensalada Especial Dantayaco", "ingr_short": "Lechuga crespa, espinaca, rúcula, tomate cherry, almendras, cebolla morada, vinagreta balsámica", "story": "Esta ensalada es el reflejo de mi pasión por la gastronomía saludable: lechuga crespa, espinaca, rúcula, tomate cherry, almendras y cebolla morada, todo bañado en una vinagreta balsámica que aprendí de un chef italiano que pasó una temporada en la posada. Frescura viajera en cada hoja.", "price": "$ 25.000"},
    {"id": "lomo-queso-azul", "cat": "mains", "name": "Lomo de Res en Salsa de Queso Azul", "ingr_short": "Lomo fino (220g), salsa de queso azul o vino tinto, papa criolla, tomate cherry", "story": "Para este lomo fino de 220 gramos, me inspiré en las cervecerías de Múnich y los asados argentinos. La salsa de queso azul (o la opción de vino tinto) le da un carácter audaz, mientras que la papa criolla y el tomate cherry en reducción balsámica le recuerdan a uno sus raíces colombianas.", "price": "$ 62.000"},
    {"id": "ceviche-champinones", "cat": "mains", "name": "Ceviche de Champiñones", "ingr_short": "Champiñones, cebolla morada, perejil, limón, aceite de oliva", "story": "Un viaje vegetal que descubrí cocinando para mochileros vegetarianos. Los champiñones se marinan con cebolla morada, perejil, limón y aceite de oliva, logrando esa textura y frescura que tanto aman quienes prueban el ceviche por primera vez… sin necesidad de pescado.", "price": "$ 25.000"},
    {"id": "piraroku-azai", "cat": "mains", "name": "Piraroku en Salsa de Azaí", "ingr_short": "Pirarokú, finas hierbas, salsa de azaí, chips de yuca, ensalada de temporada", "story": "Este es mi plato más personal: el piraroku, un pez gigante de nuestra Amazonía, salteado en finas hierbas y bañado en salsa de azaí (ese fruto morado que me enseñaron a venerar los indígenas de la región). Con chips de yuca y ensalada de temporada, es la sofisticación de la selva en un plato.", "price": "$ 65.000"},

    {"id": "pizza-primavera", "cat": "pizzas", "name": "Primavera", "ingr_short": "Salsa pomodoro, mozzarella, tomate cherry, rúcula, láminas de ajo, jamón serrano, parmesano", "story": "Sobre nuestra salsa pomodoro, mozzarella, tomate cherry, rúcula, láminas de ajo, jamón serrano y parmesano. Es una pizza que canta a los mercados europeos, pero con el sol tropical encima.", "price": "$ 55.000"},
    {"id": "pizza-diavola", "cat": "pizzas", "name": "Diávola", "ingr_short": "Pomodoro picante, mozzarella, pepperoni, pimentón asado, salami, cebolla en julianas", "story": "Picante y atrevida, como aquellos viajeros que buscaban emociones fuertes. Lleva pomodoro picante, mozzarella, pepperoni, pimentón asado, salami y cebolla en julianas. El diablo se esconde en cada rebanada.", "price": "$ 55.000"},
    {"id": "pizza-espinaca-azul", "cat": "pizzas", "name": "Espinaca y Queso Azul", "ingr_short": "Espinaca fresca, tomate cherry, ajo, cebolla en julianas, salsa de queso azul, pomodoro, mozzarella", "story": "La combinación que aprendí de una quesería en los Alpes suizos. Espinaca fresca, tomate cherry, ajo, cebolla en julianas y una generosa salsa de queso azul sobre nuestra base de pomodoro y mozzarella. Para los que saben que lo vegetal puede ser pecado.", "price": "$ 50.000"},
    {"id": "pizza-napolitana", "cat": "pizzas", "name": "Napolitana", "ingr_short": "Pomodoro, mozzarella, albahaca, burrata", "story": "La más pura de todas: pomodoro, mozzarella, albahaca y burrata. Sin artificios, como la pizza que compartí con un grupo de napolitanos que me enseñaron que menos es más. Un homenaje a la sencillez divina.", "price": "$ 55.000"},
    {"id": "pizza-tocipollo", "cat": "pizzas", "name": "Tocipollo", "ingr_short": "Maicitos, filete de pechuga, tocineta, champiñones, pomodoro, mozzarella", "story": "Este sabor nació pidiéndole a una mamá viajera que me enseñara qué pedían sus hijos. Maicitos, filete de pechuga, tocineta y champiñones, todo sobre nuestra salsa pomodoro y mozzarella. La pizza favorita de la familia.", "price": "$ 50.000"},
    {"id": "pizza-hawaiana", "cat": "pizzas", "name": "Hawaiana", "ingr_short": "Jamón, trocitos de piña, pomodoro, mozzarella", "story": "Sé que la hawaiana genera pasiones encontradas. Pero la incluyo porque un mochilero de Honolulu me convenció: jamón y trocitos de piña sobre pomodoro y mozzarella. Dulce y salada, como un atardecer en la playa. Pídela sin prejuicios.", "price": "$ 45.000"},
    {"id": "pizza-cuatro-quesos", "cat": "pizzas", "name": "Cuatro Quesos", "ingr_short": "Mozzarella, queso azul, ricotta, pecorino, pomodoro", "story": "Mozzarella, queso azul, ricotta y pecorino se funden sobre nuestra base de pomodoro. Es la pizza que nació de una cata de quesos andinos y europeos que organicé para los huéspedes de la posada. Un viaje lácteo inolvidable.", "price": "$ 55.000"},
    {"id": "pizza-dantayaco", "cat": "pizzas", "name": "Dantayaco", "ingr_short": "Tomates frescos, berenjenas, cebolla caramelizada, rúcula, burrata de albahaca, pomodoro, mozzarella", "story": "La estrella de la casa: tomates frescos, berenjenas, cebolla caramelizada, rúcula y burrata de albahaca sobre pomodoro y mozzarella. Cada ingrediente representa una parada de mi viaje: la berenjena de Turquía, la burrata de Italia, la cebolla caramelizada de Francia… todo reunido en Chiringuito.", "price": "$ 60.000"},

    {"id": "mandinga-clasica", "cat": "fastfood", "name": "Mandinga Clásica", "ingr_short": "Papas fritas, carne molida, pollo desmechado, tocineta, mozzarella, maíz tierno, salsas de ajo y miel mostaza", "story": "Bautizada así por un mochilero australiano que pedía “algo con muchas cosas”, esta mandinga es una explosión de texturas: papas fritas, carne molida, pollo desmechado, tocineta, mozzarella, maíz tierno y nuestras salsas de ajo y miel mostaza. El alma callejera del mundo, en una sola porción.", "price": "$ 30.000"},
    {"id": "mandinga-montanera", "cat": "fastfood", "name": "Mandinga Montañera", "ingr_short": "Carne desmechada, chorizo, chicharrón, maduritos, maicitos, papas, salsas de la casa", "story": "Versión campesina de la mandinga, donde la carne desmechada, el chorizo, el chicharrón y los maduritos le rinden tributo a los desayunos de las fincas colombianas. Lleva maicitos y la misma base de papas y salsas de la casa. Un plato que sabe a cordillera y a fiesta.", "price": "$ 35.000"},
    {"id": "ceviche-dantayaco", "cat": "fastfood", "name": "Ceviche Dantayaco", "ingr_short": "Camarones frescos, chontaduro picante, cebolla, cilantro, limón, chips de plátano verde", "story": "Este ceviche nació en una noche calurosa en la que un pescador peruano me enseñó a usar chontaduro picante. Los camarones frescos se sumergen en esa salsa única, con cebolla, cilantro y limón, acompañados de chips de plátano verde. El mar y la selva se dan la mano.", "price": "$ 35.000"},
    {"id": "pechuga-curry", "cat": "fastfood", "name": "Pechuga con Vegetales al Curry", "ingr_short": "Pechuga, brócoli, cebolla, zanahoria, pimentón, curry, papas criollas con mantequilla, limón y perejil", "story": "El curry llegó a mi cocina de la mano de un viajero de Tailandia. Aquí, la pechuga salteada en hierbas se encuentra con brócoli, cebolla, zanahoria y pimentón salteados en curry, y papas criollas bañadas en mantequilla, limón y perejil. Un puente entre el sudeste asiático y los Andes.", "price": "$ 45.000"},
    {"id": "hamburguesa-clasica", "cat": "fastfood", "name": "Hamburguesa Clásica", "ingr_short": "Carne de res (130g), tocineta, mozzarella, tomate, lechuga, salsas, papas a la francesa", "story": "Nuestra versión de la hamburguesa americana, pero con el cariño de la casa: 130 gramos de carne de res, tocineta, mozzarella, tomate, lechuga y nuestras salsas (cebolla y tomate). Acompañada de papas a la francesa. Simple, perfecta, viajera.", "price": "$ 25.000"},
    {"id": "hamburguesa-crunch", "cat": "fastfood", "name": "Hamburguesa Crunch", "ingr_short": "Carne de res apanada, queso mozzarella, tomate, lechuga, miel, salsas de la casa", "story": "Un giro crujiente que aprendí de un food truck en Bogotá: la misma carne de res pero apanada, con queso mozzarella, tomate, lechuga, miel y salsas de la casa. El contraste entre lo crocante y lo suave te hará cerrar los ojos en cada mordisco.", "price": "$ 28.000"},
    {"id": "burrito", "cat": "fastfood", "name": "Burrito", "ingr_short": "Pan de pita, pollo desmechado, carne, vegetales salteados, salsas, papas a la francesa", "story": "Este burrito es un mapa de sabores: pan de pita (una adaptación que hicimos para darle más ligereza), relleno con pollo desmechado y carne desmechada o molida, vegetales salteados y nuestras salsas. Con papas a la francesa al lado, es el abrazo entre México y Colombia.", "price": "$ 25.000"},

    {"id": "pasta-carbonara", "cat": "pastas", "name": "Pasta Carbonara", "ingr_short": "Pasta (120g), salsa de huevo, tocineta, parmesano, pan tostado", "story": "Una carbonara que no le pide nada a Roma. 120 gramos de pasta al dente, salsa hecha con huevo, tocineta y parmesano, y pan tostado para no dejar ni una gota. La receta la perfeccioné gracias a un chef italiano que se quedó tres meses en la posada.", "price": "$ 30.000"},
    {"id": "pasta-puttanesca", "cat": "pastas", "name": "Pasta Puttanesca", "ingr_short": "Pasta, anchoas, cebolla, aceitunas, alcaparras, tomate, perejil", "story": "Osada y llena de carácter, esta puttanesca lleva anchoas, cebolla, aceitunas, alcaparras, tomate y perejil. Es intensa, como las conversaciones nocturnas con viajeros que no querían irse. Un guiño a Nápoles desde nuestra selva.", "price": "$ 32.000"},
    {"id": "pasta-bolognesa", "cat": "pastas", "name": "Pasta Bolognesa", "ingr_short": "Pasta (120g), salsa pomodoro, carne molida, pan tostado", "story": "La bolognesa de Chiringuito es lenta, amorosa y casera: salsa pomodoro con carne molida, cocinada a fuego bajo como me enseñó una nonna de Bolonia. Sobre 120 gramos de pasta al dente, con su pan tostado. Un clásico universal con alma de hogar.", "price": "$ 30.000"},

    {"id": "brownie-helado", "cat": "desserts", "name": "Brownie con Helado", "ingr_short": "Brownie caliente, helado de vainilla, salsa de chocolate o caramelo", "story": "El brownie caliente que aprendí a hacer de una pastelera estadounidense que se quedó varada en la posada por una semana. Lo servimos bañado en helado de vainilla y salsa de chocolate o caramelo. Un final dulce y reconfortante.", "price": "$ 15.000"},
    {"id": "copa-dantayaco", "cat": "desserts", "name": "Copa Dantayaco", "ingr_short": "Yogur griego, fruta de temporada, mermelada de la casa", "story": "Para quienes buscan algo más ligero, esta copa es mi día a día: yogur griego, fruta de temporada (la que dé la huerta) y nuestra mermelada de la casa. Es el desayuno de los viajeros, convertido en postre.", "price": "$ 12.000"}
]

# Update main.js
with open(main_js_path, "r", encoding="utf-8") as f:
    main_js = f.read()

# We need to inject the dict and menuItems
# Dict modification:
dict_additions = []
menu_items_dict = {
    "appetizers": [],
    "mains": [],
    "pizzas": [],
    "fastfood": [],
    "pastas": [],
    "desserts": []
}

for d in dishes_data:
    desc_key = f"{d['id']}-desc"
    dict_additions.append(f'"{desc_key}": "{d["ingr_short"]}"')
    menu_items_dict[d["cat"]].append(f'{{ id: "{d["id"]}", name: "{d["name"]}", descKey: "{desc_key}", price: "{d["price"]}" }}')

dict_additions_str = ",\n        ".join(dict_additions)
# Just append to the end of ES dict (before `en: {`)
main_js = main_js.replace('"btn-show-less": "Ver menos"\n    },', f'"btn-show-less": "Ver menos",\n        "fastfood-title": "Comidas Rápidas",\n        "pastas-title": "Pastas",\n        "desserts-title": "Postres",\n        {dict_additions_str}\n    }},')

# Add to English dict as well just so it doesn't break
main_js = main_js.replace('"btn-show-less": "Show less"\n    }\n};', f'"btn-show-less": "Show less",\n        "fastfood-title": "Fast Food",\n        "pastas-title": "Pasta",\n        "desserts-title": "Desserts",\n        {dict_additions_str}\n    }}\n}};')

# Update menuItems
menu_items_str = f"""
const menuItems = {{
    appetizers: [
        {",".join(menu_items_dict["appetizers"])}
    ],
    mains: [
        {",".join(menu_items_dict["mains"])}
    ],
    pizzas: [
        {",".join(menu_items_dict["pizzas"])}
    ],
    fastfood: [
        {",".join(menu_items_dict["fastfood"])}
    ],
    pastas: [
        {",".join(menu_items_dict["pastas"])}
    ],
    desserts: [
        {",".join(menu_items_dict["desserts"])}
    ],
"""
main_js = re.sub(r'const menuItems = \{[\s\S]*?drinksRefresh: \[', menu_items_str + 'drinksRefresh: [', main_js)

# Update renderMenu categories
main_js = main_js.replace("['appetizers', 'mains', 'pizzas', 'drinksRefresh', 'drinksCava']", "['appetizers', 'mains', 'pizzas', 'fastfood', 'pastas', 'desserts', 'drinksRefresh', 'drinksCava']")

# Update updateTexts keys
main_js = main_js.replace('"appetizers-title", "mains-title", "pizzas-title", "pizzas-intro",', '"appetizers-title", "mains-title", "pizzas-title", "fastfood-title", "pastas-title", "desserts-title", "pizzas-intro",')

with open(main_js_path, "w", encoding="utf-8") as f:
    f.write(main_js)

# Update detalles.js
detalles_js = """const dict = {
    es: {
        "btn-back": "<i class=\\"fas fa-arrow-left\\"></i> Volver al Menú",
        "btn-order": "Ordenar Plato",
"""

for d in dishes_data:
    detalles_js += f'        "{d["id"]}-title": "{d["name"]}",\n'
    detalles_js += f'        "{d["id"]}-essence": "{d["story"]}",\n'
    ingr_li = "".join([f"<li>{i.strip()}</li>" for i in d["ingr_short"].split(",")])
    detalles_js += f'        "{d["id"]}-ingr": "{ingr_li}",\n'

detalles_js += """    },
    en: {
        "btn-back": "<i class=\\"fas fa-arrow-left\\"></i> Back to Menu",
        "btn-order": "Order Dish",
"""

for d in dishes_data:
    detalles_js += f'        "{d["id"]}-title": "{d["name"]}",\n'
    detalles_js += f'        "{d["id"]}-essence": "{d["story"]}",\n'
    ingr_li = "".join([f"<li>{i.strip()}</li>" for i in d["ingr_short"].split(",")])
    detalles_js += f'        "{d["id"]}-ingr": "{ingr_li}",\n'

detalles_js += """    }
};

const WA_NUMBER = "573138961302";
const dishes = [""" + ", ".join([f'"{d["id"]}"' for d in dishes_data]) + """];

let currentLang = 'es';

function renderDetails() {
    const container = document.getElementById('details-container');
    if (!container) return;
    container.innerHTML = '';

    dishes.forEach(id => {
        const title = dict[currentLang][`${id}-title`];
        const essence = dict[currentLang][`${id}-essence`];
        const ingredients = dict[currentLang][`${id}-ingr`];
        
        const washMsg = `¡Hola! Quisiera ordenar / Hi! I want to order: ${title}`;
        const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(washMsg)}`;

        const section = document.createElement('section');
        section.id = id;
        section.className = 'dish-detail-section';
        
        let carouselHTML = `
            <div class="carousel-slide active" style="background-image: url('./images/${id}.jpg');"></div>
            <div class="carousel-slide" style="background-image: url('./images/${id}.jpg'); transform: scale(1.05);"></div>
            <div class="carousel-slide" style="background-image: url('./images/${id}.jpg'); transform: scale(1.1) rotate(2deg);"></div>
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
                    <a href="${waUrl}" target="_blank" class="order-btn details-order-btn-premium">
                        <i class="fab fa-whatsapp"></i> ${dict[currentLang]["btn-order"]}
                    </a>
                </div>
            </div>
        `;
        
        container.appendChild(section);
    });

    const backBtn = document.getElementById("btn-back");
    if (backBtn) backBtn.innerHTML = dict[currentLang]["btn-back"];
}

function setLanguage(lang) {
    currentLang = lang;
    const esBtn = document.getElementById("btn-es");
    if (esBtn) esBtn.classList.toggle("active", lang === "es");
    const enBtn = document.getElementById("btn-en");
    if (enBtn) enBtn.classList.toggle("active", lang === "en");
    renderDetails();
}

const esBtn = document.getElementById("btn-es");
if (esBtn) esBtn.addEventListener("click", () => setLanguage("es"));
const enBtn = document.getElementById("btn-en");
if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));

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

document.addEventListener('DOMContentLoaded', renderDetails);
"""

with open(detalles_js_path, "w", encoding="utf-8") as f:
    f.write(detalles_js)

# Update index.html
with open(index_html_path, "r", encoding="utf-8") as f:
    index_html = f.read()

# Add the new sections to index.html (fastfood, pastas, desserts)
new_sections = """
        <!-- Comidas Rápidas -->
        <div class="menu-category">
            <h3 id="fastfood-title" class="category-title">Comidas Rápidas</h3>
            <div class="carousel-wrapper">
                <button class="carousel-btn prev-btn" onclick="slideCarousel('fastfood-grid', -1)"><i class="fas fa-chevron-left"></i></button>
                <div class="menu-grid" id="fastfood-grid">
                    <!-- Injected via JS -->
                </div>
                <button class="carousel-btn next-btn" onclick="slideCarousel('fastfood-grid', 1)"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>

        <!-- Pastas -->
        <div class="menu-category">
            <h3 id="pastas-title" class="category-title">Pastas</h3>
            <div class="carousel-wrapper">
                <button class="carousel-btn prev-btn" onclick="slideCarousel('pastas-grid', -1)"><i class="fas fa-chevron-left"></i></button>
                <div class="menu-grid" id="pastas-grid">
                    <!-- Injected via JS -->
                </div>
                <button class="carousel-btn next-btn" onclick="slideCarousel('pastas-grid', 1)"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>

        <!-- Postres -->
        <div class="menu-category">
            <h3 id="desserts-title" class="category-title">Postres</h3>
            <div class="carousel-wrapper">
                <button class="carousel-btn prev-btn" onclick="slideCarousel('desserts-grid', -1)"><i class="fas fa-chevron-left"></i></button>
                <div class="menu-grid" id="desserts-grid">
                    <!-- Injected via JS -->
                </div>
                <button class="carousel-btn next-btn" onclick="slideCarousel('desserts-grid', 1)"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
"""

# Insert new sections before "Para Refrescar el Paladar"
index_html = index_html.replace('<!-- Bebidas: Para Refrescar el Paladar -->', new_sections + '\n        <!-- Bebidas: Para Refrescar el Paladar -->')

# Move about-me section to the end
about_me_match = re.search(r'<section class="about-me">.*?</section>', index_html, re.DOTALL)
if about_me_match:
    about_me_html = about_me_match.group(0)
    index_html = index_html.replace(about_me_html, '')
    index_html = index_html.replace('</section>\n\n    <footer>', '</section>\n\n    ' + about_me_html + '\n\n    <footer>')

with open(index_html_path, "w", encoding="utf-8") as f:
    f.write(index_html)

# Create sobre-nosotros.html
sobre_nosotros_html = """<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conoce más SOBRE NOSOTROS - Chiringuito</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Collage Layout */
        .collage-section {
            padding: 4rem 5% 8rem;
            max-width: 1300px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 4rem;
            align-items: center;
        }

        .collage-images {
            flex: 1;
            min-width: 400px;
            position: relative;
            min-height: 600px;
        }

        .collage-img-1 {
            width: 65%;
            height: 500px;
            object-fit: cover;
            border-radius: 4px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            box-shadow: 0 20px 40px rgba(0,0,0,0.8);
        }

        .collage-img-2 {
            width: 55%;
            height: 300px;
            object-fit: cover;
            border-radius: 4px;
            position: absolute;
            top: 60%;
            right: 0;
            z-index: 1;
            box-shadow: 0 15px 30px rgba(0,0,0,0.8);
        }

        .collage-img-3 {
            width: 50%;
            height: 250px;
            object-fit: cover;
            border-radius: 4px;
            position: absolute;
            bottom: -100px;
            left: 10%;
            z-index: 3;
            box-shadow: 0 10px 25px rgba(0,0,0,0.8);
        }

        .collage-bg-block {
            position: absolute;
            top: -10%;
            right: -5%;
            width: 60%;
            height: 70%;
            background: linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(13,13,13,0) 100%);
            z-index: 0;
            border: 1px solid rgba(212,175,55,0.3);
        }

        .collage-text {
            flex: 1;
            min-width: 400px;
            padding: 2rem;
        }

        .collage-title {
            font-family: var(--font-serif);
            font-size: 2.8rem;
            color: var(--accent-gold);
            margin-bottom: 2rem;
            line-height: 1.2;
        }

        .collage-desc {
            font-family: var(--font-sans);
            font-size: 1.1rem;
            color: var(--text-main);
            opacity: 0.9;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .signature-wrapper {
            margin-top: 2rem;
        }

        .signature-img {
            max-height: 60px;
            filter: opacity(0.8);
        }

        /* Original History text */
        .history-section { 
            padding: 4rem 5% 6rem; 
            max-width: 1000px; 
            margin: auto; 
        }
        .history-text { 
            font-family: var(--font-serif); 
            font-size: 1.4rem; 
            line-height: 2; 
            color: var(--text-main); 
            margin-bottom: 2rem; 
            font-style: italic;
            text-align: center;
            opacity: 0.85;
        }

        /* Team Section */
        .team-section {
            padding: 6rem 5%;
            background: rgba(255,255,255,0.02);
            border-top: 1px solid rgba(212,175,55,0.2);
            position: relative;
        }

        .team-slider-wrapper {
            position: relative;
            max-width: 1300px;
            margin: auto;
        }

        .team-slider {
            display: flex;
            gap: 2rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 2rem;
            scrollbar-width: none; /* Firefox */
        }

        .team-slider::-webkit-scrollbar {
            display: none;
        }

        .team-card {
            flex: 0 0 calc(33.333% - 1.33rem);
            min-width: 280px;
            background: var(--bg-card);
            border: 1px solid rgba(212,175,55,0.2);
            border-radius: 8px;
            overflow: hidden;
            scroll-snap-align: center;
            transition: transform 0.4s ease;
        }

        .team-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent-gold);
            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }

        .team-img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-bottom: 2px solid var(--accent-gold);
            filter: grayscale(30%) contrast(1.1);
            transition: filter 0.4s ease;
        }

        .team-card:hover .team-img {
            filter: grayscale(0%) contrast(1);
        }

        .team-info {
            padding: 1.5rem;
            text-align: center;
        }

        .team-name {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            color: var(--accent-gold);
            margin-bottom: 0.5rem;
        }

        .team-role {
            font-family: var(--font-sans);
            font-weight: 600;
            color: var(--text-main);
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        .team-desc {
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.5;
        }

        .hero-about {
            height: 40vh !important;
            min-height: 300px !important;
        }

        .hero-title-about {
            font-size: 3.5rem !important;
            white-space: nowrap;
        }

        .team-section-title {
            margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
            .collage-images { min-height: 450px; }
            .team-card { flex: 0 0 calc(50% - 1rem); }
        }
        @media (max-width: 600px) {
            .team-card { flex: 0 0 100%; }
            .collage-title { font-size: 2.2rem; }
            .collage-img-1 { width: 80%; }
            .collage-img-2 { width: 65%; top: 50%; }
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-premium glass-panel">
        <div class="logo"><a href="index.html" style="color: inherit; text-decoration: none;">Chiringuito</a></div>
        <div class="lang-switch">
            <a href="index.html" class="lang-btn active" style="text-decoration:none;">Volver al Menú</a>
        </div>
    </nav>

    <header class="hero hero-about" id="hero-section">
        <div class="overlay"></div>
        <div class="hero-content">
            <h1 id="hero-title" class="hero-title-about">Conoce más SOBRE NOSOTROS</h1>
        </div>
    </header>

    <!-- 1. Collage Design Section -->
    <section class="collage-section">
        <div class="collage-images">
            <div class="collage-bg-block"></div>
            <!-- Perfil Chef -->
            <img src="images/Chiringuito_4.jpg" alt="Chef Chiringuito" class="collage-img-1">
            <!-- Plato 1 -->
            <img src="images/PLATOS FUERTES/LOMO DE RES EN SALSA DE QUESO AZUL/Lomo_queso_azul_.jpg" alt="Plato Especial" class="collage-img-2">
            <!-- Plato 2 -->
            <img src="images/PLATOS FUERTES/PIRAROKU EN SALSA DE AZAÍ/PIRARUKU_ASAI_AMAZONAS_.jpg" alt="Pirarokú" class="collage-img-3">
        </div>
        
        <div class="collage-text">
            <h2 class="collage-title">Una historia de tradición y pasión</h2>
            <p class="collage-desc">
                "Mi historia comenzó entre los aromas de la cocina comunitaria en la Posada Turística Dantayaco. Allí, recibiendo a mochileros y viajeros de todo el mundo, no solo compartí recetas; aprendí de sus culturas, de sus sabores favoritos and de sus técnicas. Ese intercambio constante me transformó.
            </p>
            <p class="collage-desc">
                Hoy, en Chiringuito, cada plato es una evolución de ese aprendizaje: una mezcla de la sofisticación global que conocí y el amor por los ingredientes de mi tierra. Mis creaciones no son solo recetas al azar; son el resultado de años de perfeccionar ese 'toque de la casa' que hoy quiero compartir contigo."
            </p>
            <p class="collage-desc">
                Nos esforzamos por utilizar siempre los ingredientes más frescos y de la más alta calidad, poniendo el corazón y el alma de nuestra cocina amazónica y global en cada creación. Ofrecemos un servicio amigable y personalizado, haciendo de cada visita una experiencia memorable.
            </p>
            <div class="signature-wrapper">
                <img src="images/consultoria-logo.png" alt="Firma" class="signature-img">
            </div>
        </div>
    </section>

    <!-- 3. Equipo Section -->
    <section class="team-section">
        <h2 class="section-title text-center team-section-title">Nuestro Equipo</h2>
        <div class="team-slider-wrapper">
            <div class="team-slider" id="teamSlider">
                <!-- Chef Principal -->
                <div class="team-card">
                    <img src="images/Chiringuito_3.jpg" alt="Chef Principal" class="team-img">
                    <div class="team-info">
                        <h3 class="team-name">Chef Principal</h3>
                        <p class="team-role">Líder Culinario</p>
                        <p class="team-desc">El creador detrás de los sabores inconfundibles de Chiringuito. Aporta la visión, la fusión amazónica y el alma de cada receta.</p>
                    </div>
                </div>
                <!-- Chef Secundario -->
                <div class="team-card">
                    <img src="images/Chiringuito_1.jpg" alt="Chef Secundario" class="team-img">
                    <div class="team-info">
                        <h3 class="team-name">Chef Secundario</h3>
                        <p class="team-role">Magia en Ejecución</p>
                        <p class="team-desc">Mano derecha en la cocina, garantizando que cada técnica y cocción alcance la perfección para llegar a tu mesa.</p>
                    </div>
                </div>
                <!-- Ayudante de Cocina -->
                <div class="team-card">
                    <img src="images/Chiringuito_2.jpg" alt="Ayudante de Cocina" class="team-img">
                    <div class="team-info">
                        <h3 class="team-name">Ayudante de Cocina</h3>
                        <p class="team-role">El Motor del Sabor</p>
                        <p class="team-desc">Pieza clave en la preparación, cuidando la frescura de cada ingrediente antes de convertirse en arte culinario.</p>
                    </div>
                </div>
                <!-- Mesera -->
                <div class="team-card">
                    <img src="images/hero.jpg" alt="Mesera" class="team-img">
                    <div class="team-info">
                        <h3 class="team-name">Atención al Cliente</h3>
                        <p class="team-role">Mesera Estrella</p>
                        <p class="team-desc">La sonrisa que te da la bienvenida y el servicio personalizado que convierte tu cena en una experiencia inolvidable.</p>
                    </div>
                </div>
                <!-- Cocinero Comida Rápida -->
                <div class="team-card">
                    <img src="images/pollo.jpg" alt="Cocinero Comida Rápida" class="team-img">
                    <div class="team-info">
                        <h3 class="team-name">Especialista Fast Food</h3>
                        <p class="team-role">Sabor Crunch</p>
                        <p class="team-desc">Maestro en hamburguesas, pizzas y comidas rápidas. Rápido, preciso y siempre con el mejor sabor callejero-gourmet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer-premium">
        <div class="footer-container-premium">
            <div class="footer-column">
                <div>
                    <h2 class="footer-logo-premium">Chiringuito</h2>
                    <p id="footer-location" class="footer-loc-text"><i class="fas fa-map-marker-alt"></i> Visit us at KM 6 Mocoa - Vía Villa Garzón, Posada Turística Dantayaco</p>
                </div>
            </div>
            
            <div class="footer-divider-premium"></div>
            
            <div class="footer-column">
                <div>
                    <img src="images/consultoria-logo.png" alt="Logo Consultoría e Innovación" class="footer-consultoria-logo" style="max-height: 120px;">
                    <h4 class="footer-consultoria-title" style="letter-spacing: 2px; font-size: 1.1rem;">Consultoría e Innovación</h4>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>
"""

with open(r"C:\Users\Antonio Zoza\Documents\Chiringuito\chiringuito\sobre-nosotros.html", "w", encoding="utf-8") as f:
    f.write(sobre_nosotros_html)

print("Updates completed successfully.")
