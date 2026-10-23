const WA_NUMBER = "573138961302";

const dict = {
    es: {
        "hero-title": "Chiringuito: Mi cocina, tu hogar",
        "about-title": "Mi Viaje a Través de los Fogones",
        "about-text": "\"Mi historia comenzó entre los aromas de la cocina comunitaria en la Posada Turística Dantayaco. Allí, recibiendo a mochileros y viajeros de todo el mundo, no solo compartí recetas; aprendí de sus culturas, de sus sabores favoritos y de sus técnicas. Ese intercambio constante me transformó. Hoy, en Chiringuito, cada plato es una evolución de ese aprendizaje: una mezcla de la sofisticación global que conocí y el amor por los ingredientes de mi tierra, como el Pirarokú y el Azaí. Mis pizzas no son solo masa y horno; son el resultado de años de perfeccionar ese 'toque de la casa' que hoy quiero compartir contigo.\"",
        "menu-title": "Nuestra Experiencia Gastronómica",
        "menu-intro": "Te sugiero probar cada detalle de este viaje de sabores.",
        "appetizers-title": "Entradas",
        "mains-title": "Platos Fuertes",
        "pizzas-title": "Pizzas Artesanales",
        "pizzas-intro": "\"Las preparo con masa artesanal de larga maduración para que sientas la textura perfecta en cada bocado.\"",
        "btn-order": "Ordenar Plato",
        "whatsapp-btn-text": "Reserva / Ordena tu Experiencia",
        "footer-location": "<i class=\"fas fa-map-marker-alt\"></i> Visítanos en el KM 6 Mocoa - Vía Villa Garzón, Posada Turística Dantayaco",
        "wa-welcome": "¡Hola! Vi tu menú interactivo y me encantó la historia. Me gustaría reservar una mesa (o hacer un pedido) para probar tus pizzas. ¿Me podrías ayudar?",
        "wa-dish": "¡Hola! Quisiera ordenar el plato: {dish}. ¿Me podrían ayudar, por favor?", // Custom per dish
        
        // Modals
        "info-piraroku-title": "¿Qué es el Pirarukú?",
        "info-piraroku-text": "Es el pez de escama más grande del Amazonas. Su carne es blanca, firme y delicada, considerada el 'bacalao del Amazonas'.",
        "info-azai-title": "¿Qué es el Azaí?",
        "info-azai-text": "Una superfruta silvestre de la selva amazónica, conocida por su intenso color púrpura y su altísimo contenido de antioxidantes.",
        "info-quesoazul-title": "¿Qué es el Queso Azul?",
        "info-quesoazul-text": "El queso azul es un queso madurado con vetas azules o verdosas formadas por mohos del género Penicillium. Se hace con leche de vaca, oveja o cabra y se perfora para que el moho crezca en su interior, desarrollando su sabor. Es intenso, salado y ligeramente picante, con aroma fuerte y textura que puede ser cremosa o desmenuzable.",

        "cart-title": "Tu Orden",
        "cart-empty": "Tu carrito está vacío.",
        "cart-total": "Total:",
        "btn-add-cart": "Añadir al carrito",
        "btn-checkout": "Enviar Orden",
        "name-placeholder": "Tu Nombre",
        "wa-cart-intro": "¡Hola! Soy {name}, quiero pedir lo siguiente de *Chiringuito*:",
        "wa-cart-please-name": "Por favor, ingresa tu nombre antes de enviar la orden.",

        "flavor-modal-title": "Selecciona tu Sabor",
        "flavor-placeholder": "Elige un sabor",
        "btn-confirm-flavor": "Confirmar",
        "btn-choose-flavor": "Elige tu sabor",
        "flavors-perm-opt": "Permanentes",
        "flavor-fresa": "Fresa",
        "flavor-mora": "Mora",
        "flavor-lulo": "Lulo",
        "flavor-maracuya": "Maracuyá",
        "flavor-mango": "Mango",
        "flavor-guanabana": "Guanábana",
        "flavor-pina": "Piña",
        "flavors-seas-opt": "De Temporada",
        "flavor-chontaduro": "Chontaduro",
        "flavor-azai": "Azaí",
        "flavor-araza": "Arazá",
        "flavor-copoazu": "Copoazú",
        "flavor-error": "Por favor, selecciona un sabor.",

        // Menu Descriptions
        "empanada-desc": "6 Mini empanadas de maíz trillado (Carne y Papa o Queso) acompañadas de mermelada de la casa o guacamole.",
        "ceviche-desc": "Camarones frescos en salsa picante de Chontaduro con cebolla, cilantro y limón. Acompañados de chips de plátano verde.",
        "ensalada-desc": "Mix fresco de lechugas, espinaca, rúcula, tomates cherry, almendras y cebolla morada con vinagreta balsámica.",
        
        "piraroku-desc": "\"Es mi tributo al Amazonas; lo baño en una reducción de Azaí que resalta la delicadeza de este pez gigante.\" Filete de Pirarukú sellado a las finas hierbas, chips de 'Yota' y ensalada de temporada.",
        "lomo-desc": "220g de tierno lomo fino de res en salsa cremosa de queso azul (o salsa de vino tinto), acompañado de papas nativas.",
        "pollo-desc": "Pechuga de pollo salteada en finas hierbas con vegetales al curry (brócoli, zanahoria, pimientos) y papas a la mantequilla.",

        "pizza-dantayaco": "Pomodoro, mozzarella, tomates frescos, berenjena, cebolla caramelizada, rúcula y burrata de albahaca.",
        "pizza-primavera": "Pomodoro, mozzarella, tomates cherry, rúcula, ajo, jamón serrano y queso parmesano.",
        "pizza-diavola": "Pomodoro picante, mozzarella, pepperoni, pimientos asados, salami y cebolla en julianas.",
        "pizza-napolitana": "Clásico pomodoro, mozzarella, albahaca fresca y burrata cremosa.",

        "drinks-title": "Bebidas",
        "drinks-refresh-title": "Para Refrescar el Paladar",
        "drinks-refresh-intro": "Estas son las opciones naturales y clásicas que he seleccionado para ti:",
        "drinks-cava-title": "La Cava de Chiringuito: Vinos y Licores",
        "drinks-cava-intro": "Para esos platos que exigen una compañía más sofisticada, como mis pizzas artesanales o el lomo al queso azul, he dispuesto esta selección especial:",
        "drinks-wines-title": "Nuestros Vinos",
        "drinks-wines-intro": "He elegido opciones que bailan perfectamente con los sabores de mi cocina. Puedes disfrutarlos por copa para un maridaje personal o pedir la botella para compartir una buena charla:",
        "liquors-title": "Selección de Tragos Fuertes",
        "liquors-text": "\"En Chiringuito, la sobremesa es un ritual. Te invito a consultar por nuestra selección de licores fuertes y destilados, seleccionados para cerrar con broche de oro tu experiencia en el corazón del Putumayo.\"",

        "btn-details": "Ver Detalles",
        "btn-flavors": "Ver Sabores Disponibles",
        "flavor-list": "<li><strong>Permanentes:</strong> Fresa, Mora, Lulo, Maracuyá, Mango, Guanábana y Piña.</li><li style='margin-top:0.4rem;'><strong>De Temporada:</strong> Chontaduro, Azaí, Araza y Copoazú <span style='font-size:0.85rem; color:var(--text-muted);'>*(Sujetas a cosecha amazónica)*</span>.</li>",
        
        "drink-jugo-agua": "Jugo Natural en Agua",
        "drink-jugo-agua-desc": "Preparado al instante con la mejor fruta fresa.",
        "drink-jugo-leche": "Jugo Natural en Leche",
        "drink-jugo-leche-desc": "Preparado al instante, suave y cremoso.",
        "drink-limonada": "Limonada Clásica",
        "drink-limonada-desc": "La clásica, cítrica y refrescante.",
        "drink-limonada-coco": "Limonada de Coco",
        "drink-limonada-coco-desc": "Cremosa y tropical.",
        "drink-limonada-jengibre": "Limonada de Jengibre y Menta",
        "drink-limonada-jengibre-desc": "Mi toque especial para limpiar el paladar.",
        "drink-agua": "Botella de Agua",
        "drink-soda": "Botella de Soda",
        "drink-cocacola": "Coca-Cola",
        "drink-cerveza": "Cerveza",
        "drink-cerveza-desc": "Una selección refrescante.",
        "drink-michelada": "Michelada",
        "drink-michelada-desc": "Preparada con soda o cerveza, sal, limón y nuestro toque.",
        "drink-vino-art-botella": "Botella de Vino Artesanal (Semidulce)",
        "drink-vino-art-desc": "Una opción con cuerpo y alma, perfecta para quienes buscan un matiz diferente.",
        "drink-vino-art-copa": "Copa de Vino Artesanal (Semidulce)",
        "drink-vino-seco-botella": "Botella de Vino Tinto Seco",
        "drink-vino-seco-desc": "Ideal para mis carnes y pizzas de sabores intensos.",
        "drink-vino-seco-copa": "Copa de Vino Tinto Seco",
        "btn-show-more": "Ver más",
        "btn-show-less": "Ver menos",
        "fastfood-title": "Comidas Rápidas",
        "pastas-title": "Pastas",
        "desserts-title": "Postres",
        "empanadas-carne-desc": "Maíz trillado, carne, papa, guacamole, pico de gallo",
        "empanadas-queso-desc": "Maíz trillado, queso, mermelada de la casa",
        "quesadilla-javi-desc": "Tortilla de harina, pollo salteado en finas hierbas, rúcula, huevo cocido en láminas, mozzarella",
        "ensalada-especial-desc": "Lechuga crespa, espinaca, rúcula, tomate cherry, almendras, cebolla morada, vinagreta balsámica",
        "lomo-queso-azul-desc": "Lomo fino (220g), salsa de queso azul o vino tinto, papa criolla, tomate cherry",
        "ceviche-champinones-desc": "Champiñones, cebolla morada, perejil, limón, aceite de oliva",
        "piraroku-azai-desc": "Pirarokú, finas hierbas, salsa de azaí, chips de yuca, ensalada de temporada",
        "pizza-primavera-desc": "Salsa pomodoro, mozzarella, tomate cherry, rúcula, láminas de ajo, jamón serrano, parmesano",
        "pizza-diavola-desc": "Pomodoro picante, mozzarella, pepperoni, pimentón asado, salami, cebolla en julianas",
        "pizza-espinaca-azul-desc": "Espinaca fresca, tomate cherry, ajo, cebolla en julianas, salsa de queso azul, pomodoro, mozzarella",
        "pizza-napolitana-desc": "Pomodoro, mozzarella, albahaca, burrata",
        "pizza-tocipollo-desc": "Maicitos, filete de pechuga, tocineta, champiñones, pomodoro, mozzarella",
        "pizza-hawaiana-desc": "Jamón, trocitos de piña, pomodoro, mozzarella",
        "pizza-cuatro-quesos-desc": "Mozzarella, queso azul, ricotta, pecorino, pomodoro",
        "pizza-dantayaco-desc": "Tomates frescos, berenjenas, cebolla caramelizada, rúcula, burrata de albahaca, pomodoro, mozzarella",
        "mandinga-clasica-desc": "Papas fritas, carne molida, pollo desmechado, tocineta, mozzarella, maíz tierno, salsas de ajo y miel mostaza",
        "mandinga-montanera-desc": "Carne desmechada, chorizo, chicharrón, maduritos, maicitos, papas, salsas de la casa",
        "ceviche-dantayaco-desc": "Camarones frescos, chontaduro picante, cebolla, cilantro, limón, chips de plátano verde",
        "pechuga-curry-desc": "Pechuga, brócoli, cebolla, zanahoria, pimentón, curry, papas criollas con mantequilla, limón y perejil",
        "hamburguesa-clasica-desc": "Carne de res (130g), tocineta, mozzarella, tomate, lechuga, salsas, papas a la francesa",
        "hamburguesa-crunch-desc": "Carne de res apanada, queso mozzarella, tomate, lechuga, miel, salsas de la casa",
        "burrito-desc": "Pan de pita, pollo desmechado, carne, vegetales salteados, salsas, papas a la francesa",
        "pasta-carbonara-desc": "Pasta (120g), salsa de huevo, tocineta, parmesano, pan tostado",
        "pasta-puttanesca-desc": "Pasta, anchoas, cebolla, aceitunas, alcaparras, tomate, perejil",
        "pasta-bolognesa-desc": "Pasta (120g), salsa pomodoro, carne molida, pan tostado",
        "brownie-helado-desc": "Brownie caliente, helado de vainilla, salsa de chocolate o caramelo",
        "copa-dantayaco-desc": "Yogur griego, fruta de temporada, mermelada de la casa"
    },
    en: {
        "hero-title": "Chiringuito: My kitchen, your home",
        "about-title": "My Journey Through the Kitchen",
        "about-text": "\"My story began among the aromas of the communal kitchen at Posada Turística Dantayaco. There, welcoming backpackers and travelers from all over the world, I did more than just share recipes; I learned from their cultures, their favorite flavors, and their techniques. That constant exchange transformed me. Today, at Chiringuito, every dish is an evolution of that journey: a blend of the global sophistication I discovered and the love for my land's ingredients, such as Pirarokú and Azaí. My pizzas are more than just dough and fire; they are the result of years of perfecting that 'house touch' I now want to share with you.\"",
        "menu-title": "Our Gastronomic Experience",
        "menu-intro": "I recommend trying every detail of this flavor journey.",
        "appetizers-title": "Appetizers",
        "mains-title": "Main Courses",
        "pizzas-title": "Artisanal Pizzas",
        "pizzas-intro": "\"I prepare them with slow-fermented artisanal dough so you can feel the perfect texture in every bite.\"",
        "btn-order": "Order Dish",
        "whatsapp-btn-text": "Reserve / Order your Experience",
        "footer-location": "<i class=\"fas fa-map-marker-alt\"></i> Visit us at KM 6 Mocoa - Vía Villa Garzón, Posada Turística Dantayaco",
        "wa-welcome": "Hi! I just saw your interactive menu and I'm fascinated by your story. I'd love to try your Amazonian dishes and artisanal pizzas. Could you help me with a reservation/order?",
        "wa-dish": "Hi! I would like to order: {dish}. Could you help me, please?",
        
        // Modals
        "info-piraroku-title": "What is Pirarukú?",
        "info-piraroku-text": "Known as the giant of the Amazon, it is one of the largest freshwater fish in the world. Its white, firm, and delicate meat is often called the 'cod of the Amazon'.",
        "info-azai-title": "What is Azaí?",
        "info-azai-text": "A wild superberry from the Amazon rainforest, famous for its deep purple color and powerful antioxidant properties.",
        "info-quesoazul-title": "What is Blue Cheese?",
        "info-quesoazul-text": "Blue cheese is an aged cheese with blue or greenish veins formed by Penicillium molds. Made with cow, sheep, or goat milk, it is pierced to let the mold grow inside, developing its unique flavor. It is intense, salty, slightly spicy, with a strong aroma and a texture that can be creamy or crumbly.",

        "cart-title": "Your Order",
        "cart-empty": "Your cart is empty.",
        "cart-total": "Total:",
        "btn-add-cart": "Add to Cart",
        "btn-checkout": "Send Order",
        "name-placeholder": "Your Name",
        "wa-cart-intro": "Hi! I'm {name}, I'd like to order the following from *Chiringuito*:",
        "wa-cart-please-name": "Please enter your name before sending the order.",

        "flavor-modal-title": "Select your Flavor",
        "flavor-placeholder": "Choose a flavor",
        "btn-confirm-flavor": "Confirm",
        "btn-choose-flavor": "Choose flavor",
        "flavors-perm-opt": "Permanent",
        "flavor-fresa": "Strawberry",
        "flavor-mora": "Blackberry",
        "flavor-lulo": "Lulo",
        "flavor-maracuya": "Passion Fruit",
        "flavor-mango": "Mango",
        "flavor-guanabana": "Soursop",
        "flavor-pina": "Pineapple",
        "flavors-seas-opt": "Seasonal",
        "flavor-chontaduro": "Peach Palm (Chontaduro)",
        "flavor-azai": "Azaí",
        "flavor-araza": "Arazá",
        "flavor-copoazu": "Copoazú",
        "flavor-error": "Please select a flavor.",

        // Menu Descriptions
        "empanada-desc": "6 traditional bite-sized corn empanadas (Beef & Potato or Cheese) served with homemade jam or guacamole.",
        "ceviche-desc": "Fresh shrimp in a spicy 'Chontaduro' (peach palm) sauce with onions, cilantro, and lime. Served with green plantain chips.",
        "ensalada-desc": "Fresh mix of lettuce, spinach, arugula, cherry tomatoes, almonds, and red onions with balsamic vinaigrette.",

        "piraroku-desc": "\"It is my tribute to the Amazon; bathed in an Azaí reduction that highlights the delicacy of this giant fish.\" Sautéed Pirarukú fillet in fine herbs, 'Yota' chips and seasonal salad.",
        "lomo-desc": "220g of tender beef tenderloin in a creamy blue cheese sauce (or Red Wine sauce), served with native potatoes.",
        "pollo-desc": "Chicken breast sautéed in herbs with curry vegetables (broccoli, carrots, peppers) and buttered potatoes.",

        "pizza-dantayaco": "Pomodoro, mozzarella, fresh tomatoes, eggplant, caramelized onions, arugula, and basil burrata.",
        "pizza-primavera": "Pomodoro, mozzarella, cherry tomatoes, arugula, garlic, serrano ham, and parmesan cheese.",
        "pizza-diavola": "Spicy pomodoro, mozzarella, pepperoni, roasted peppers, salami, and julienne onions.",
        "pizza-napolitana": "Classic pomodoro, mozzarella, fresh basil, and creamy burrata.",
        "drinks-title": "Beverages",
        "drinks-refresh-title": "To Refresh Your Palate",
        "drinks-refresh-intro": "These are the natural and classic options I have selected for you:",
        "drinks-cava-title": "Chiringuito's Cellar: Wines and Liquors",
        "drinks-cava-intro": "For those dishes that demand a more sophisticated company, like my artisanal pizzas or the blue cheese tenderloin, I have prepared this special selection:",
        "drinks-wines-title": "Our Wines",
        "drinks-wines-intro": "I have chosen options that dance perfectly with the flavors of my kitchen. You can enjoy them by the glass for a personal pairing or order the bottle to share a good conversation:",
        "liquors-title": "Strong Liquors Selection",
        "liquors-text": "\"At Chiringuito, the after-dinner conversation is a ritual. I invite you to ask about our selection of strong liquors and spirits, chosen to perfectly cap your experience in the heart of Putumayo.\"",

        "btn-details": "View Details",
        "btn-flavors": "View Available Flavors",
        "flavor-list": "<li><strong>Permanent:</strong> Strawberry, Blackberry, Lulo, Passion Fruit, Mango, Soursop, and Pineapple.</li><li style='margin-top:0.4rem;'><strong>Seasonal:</strong> Chontaduro, Azaí, Araza, and Copoazú <span style='font-size:0.85rem; color:var(--text-muted);'>*(Subject to local Amazon harvest)*</span>.</li>",

        "drink-jugo-agua": "Natural Juice (Water Base)",
        "drink-jugo-agua-desc": "Prepared instantly with the best fresh fruit.",
        "drink-jugo-leche": "Natural Juice (Milk Base)",
        "drink-jugo-leche-desc": "Prepared instantly, smooth and creamy.",
        "drink-limonada": "Classic Lemonade",
        "drink-limonada-desc": "The classic, citrusy and refreshing.",
        "drink-limonada-coco": "Coconut Lemonade",
        "drink-limonada-coco-desc": "Creamy and tropical.",
        "drink-limonada-jengibre": "Ginger and Mint Lemonade",
        "drink-limonada-jengibre-desc": "My special touch to cleanse the palate.",
        "drink-agua": "Bottled Water",
        "drink-soda": "Bottled Soda",
        "drink-cocacola": "Coca-Cola",
        "drink-cerveza": "Beer",
        "drink-cerveza-desc": "A refreshing selection.",
        "drink-michelada": "Michelada",
        "drink-michelada-desc": "Prepared with soda or beer, salt, lime, and our special touch.",
        "drink-vino-art-botella": "Bottle of Artisanal Wine (Semi-sweet)",
        "drink-vino-art-desc": "An option with body and soul, perfect for those seeking a different nuance.",
        "drink-vino-art-copa": "Glass of Artisanal Wine (Semi-sweet)",
        "drink-vino-seco-botella": "Bottle of Dry Red Wine",
        "drink-vino-seco-desc": "Ideal for my meats and intense-flavored pizzas.",
        "drink-vino-seco-copa": "Glass of Dry Red Wine",
        "btn-show-more": "Show more",
        "btn-show-less": "Show less",
        "fastfood-title": "Fast Food",
        "pastas-title": "Pasta",
        "desserts-title": "Desserts",
        "empanadas-carne-desc": "Yellow corn, beef, potato, guacamole, pico de gallo",
        "empanadas-queso-desc": "Yellow corn, cheese, house jam",
        "quesadilla-javi-desc": "Flour tortilla, herb-sautéed chicken, arugula, sliced boiled egg, mozzarella",
        "ensalada-especial-desc": "Crisp lettuce, spinach, arugula, cherry tomato, almonds, red onion, balsamic vinaigrette",
        "lomo-queso-azul-desc": "Beef tenderloin (220g), blue cheese or red wine sauce, native potato, cherry tomato",
        "ceviche-champinones-desc": "Mushrooms, red onion, parsley, lime, olive oil",
        "piraroku-azai-desc": "Pirarokú, fine herbs, azaí sauce, cassava chips, seasonal salad",
        "pizza-primavera-desc": "Pomodoro sauce, mozzarella, cherry tomato, arugula, garlic slices, serrano ham, parmesan",
        "pizza-diavola-desc": "Spicy pomodoro, mozzarella, pepperoni, roasted bell pepper, salami, julienned onion",
        "pizza-espinaca-azul-desc": "Fresh spinach, cherry tomato, garlic, julienned onion, blue cheese sauce, pomodoro, mozzarella",
        "pizza-napolitana-desc": "Pomodoro, mozzarella, basil, burrata",
        "pizza-tocipollo-desc": "Sweet corn, chicken breast, bacon, mushrooms, pomodoro, mozzarella",
        "pizza-hawaiana-desc": "Ham, pineapple chunks, pomodoro, mozzarella",
        "pizza-cuatro-quesos-desc": "Mozzarella, blue cheese, ricotta, pecorino, pomodoro",
        "pizza-dantayaco-desc": "Fresh tomatoes, eggplants, caramelized onion, arugula, basil burrata, pomodoro, mozzarella",
        "mandinga-clasica-desc": "French fries, ground beef, shredded chicken, bacon, mozzarella, sweet corn, garlic and honey mustard sauces",
        "mandinga-montanera-desc": "Shredded beef, chorizo, pork rind, sweet plantains, sweet corn, fries, house sauces",
        "ceviche-dantayaco-desc": "Fresh shrimp, spicy peach palm, onion, cilantro, lime, green plantain chips",
        "pechuga-curry-desc": "Chicken breast, broccoli, onion, carrot, bell pepper, curry, native potatoes with butter, lime, and parsley",
        "hamburguesa-clasica-desc": "Beef patty (130g), bacon, mozzarella, tomato, lettuce, sauces, french fries",
        "hamburguesa-crunch-desc": "Breaded beef patty, mozzarella cheese, tomato, lettuce, honey, house sauces",
        "burrito-desc": "Pita bread, shredded chicken, beef, sautéed vegetables, sauces, french fries",
        "pasta-carbonara-desc": "Pasta (120g), egg sauce, bacon, parmesan, toasted bread",
        "pasta-puttanesca-desc": "Pasta, anchovies, onion, olives, capers, tomato, parsley",
        "pasta-bolognesa-desc": "Pasta (120g), pomodoro sauce, ground beef, toasted bread",
        "brownie-helado-desc": "Warm brownie, vanilla ice cream, chocolate or caramel sauce",
        "copa-dantayaco-desc": "Greek yogurt, seasonal fruit, house jam"
    }
};

const menuItems = {
    appetizers: [
        { id: "empanadas-carne", name: "Empanaditas de Iglesia (Carne y papa)", descKey: "empanadas-carne-desc", price: "$ 15.000" },
        { id: "empanadas-queso", name: "Empanaditas de Iglesia (Queso)", descKey: "empanadas-queso-desc", price: "$ 15.000" },
        { id: "quesadilla-javi", name: "Quesadilla Javi (ESP)", descKey: "quesadilla-javi-desc", price: "$ 20.000" }
    ],
    mains: [
        { id: "ensalada-especial", imgId: "ensalada", name: "Ensalada Especial Dantayaco", descKey: "ensalada-especial-desc", price: "$ 25.000" },
        { id: "lomo-queso-azul", imgId: "PLATOS FUERTES/LOMO DE RES EN SALSA DE QUESO AZUL/Lomo_queso_azul_", name: "Lomo de Res en Salsa de Queso Azul", descKey: "lomo-queso-azul-desc", price: "$ 62.000" },
        { id: "ceviche-champinones", imgId: "ceviche", name: "Ceviche de Champiñones", descKey: "ceviche-champinones-desc", price: "$ 25.000" },
        { id: "piraroku-azai", imgId: "PLATOS FUERTES/PIRAROKU EN SALSA DE AZAÍ/PIRARUKU_ASAI_AMAZONAS_", name: "Piraroku en Salsa de Azaí", descKey: "piraroku-azai-desc", price: "$ 65.000" }
    ],
    pizzas: [
        { id: "pizza-primavera", name: "Primavera", descKey: "pizza-primavera-desc", price: "$ 55.000" },
        { id: "pizza-diavola", name: "Diávola", descKey: "pizza-diavola-desc", price: "$ 55.000" },
        { id: "pizza-espinaca-azul", name: "Espinaca y Queso Azul", descKey: "pizza-espinaca-azul-desc", price: "$ 50.000" },
        { id: "pizza-napolitana", name: "Napolitana", descKey: "pizza-napolitana-desc", price: "$ 55.000" },
        { id: "pizza-tocipollo", name: "Tocipollo", descKey: "pizza-tocipollo-desc", price: "$ 50.000" },
        { id: "pizza-hawaiana", name: "Hawaiana", descKey: "pizza-hawaiana-desc", price: "$ 45.000" },
        { id: "pizza-cuatro-quesos", name: "Cuatro Quesos", descKey: "pizza-cuatro-quesos-desc", price: "$ 55.000" },
        { id: "pizza-dantayaco", name: "Dantayaco", descKey: "pizza-dantayaco-desc", price: "$ 60.000" }
    ],
    fastfood: [
        { id: "mandinga-clasica", name: "Mandinga Clásica", descKey: "mandinga-clasica-desc", price: "$ 30.000" },
        { id: "mandinga-montanera", name: "Mandinga Montañera", descKey: "mandinga-montanera-desc", price: "$ 35.000" },
        { id: "ceviche-dantayaco", name: "Ceviche Dantayaco", descKey: "ceviche-dantayaco-desc", price: "$ 35.000" },
        { id: "pechuga-curry", name: "Pechuga con Vegetales al Curry", descKey: "pechuga-curry-desc", price: "$ 45.000" },
        { id: "hamburguesa-clasica", name: "Hamburguesa Clásica", descKey: "hamburguesa-clasica-desc", price: "$ 25.000" },
        { id: "hamburguesa-crunch", name: "Hamburguesa Crunch", descKey: "hamburguesa-crunch-desc", price: "$ 28.000" },
        { id: "burrito", name: "Burrito", descKey: "burrito-desc", price: "$ 25.000" }
    ],
    pastas: [
        { id: "pasta-carbonara", name: "Pasta Carbonara", descKey: "pasta-carbonara-desc", price: "$ 30.000" },
        { id: "pasta-puttanesca", name: "Pasta Puttanesca", descKey: "pasta-puttanesca-desc", price: "$ 32.000" },
        { id: "pasta-bolognesa", name: "Pasta Bolognesa", descKey: "pasta-bolognesa-desc", price: "$ 30.000" }
    ],
    desserts: [
        { id: "brownie-helado", name: "Brownie con Helado", descKey: "brownie-helado-desc", price: "$ 15.000" },
        { id: "copa-dantayaco", name: "Copa Dantayaco", descKey: "copa-dantayaco-desc", price: "$ 12.000" }
    ],
    drinksRefresh: [
        { id: "jugo-agua", nameKey: "drink-jugo-agua", descKey: "drink-jugo-agua-desc", price: "$ 10.000", hasFlavors: true },
        { id: "jugo-leche", nameKey: "drink-jugo-leche", descKey: "drink-jugo-leche-desc", price: "$ 15.000", hasFlavors: true },
        { id: "limonada", nameKey: "drink-limonada", descKey: "drink-limonada-desc", price: "$ 10.000" },
        { id: "limonada-coco", nameKey: "drink-limonada-coco", descKey: "drink-limonada-coco-desc", price: "$ 15.000" },
        { id: "limonada-jengibre", nameKey: "drink-limonada-jengibre", descKey: "drink-limonada-jengibre-desc", price: "$ 15.000" },
        { id: "agua", nameKey: "drink-agua", price: "$ 5.000" },
        { id: "soda", nameKey: "drink-soda", price: "$ 7.000" },
        { id: "cocacola", nameKey: "drink-cocacola", price: "$ 6.000" },
        { id: "cerveza", nameKey: "drink-cerveza", descKey: "drink-cerveza-desc", price: "$ 6.000" },
        { id: "michelada", nameKey: "drink-michelada", descKey: "drink-michelada-desc", price: "$ 15.000" }
    ],
    drinksCava: [
        { id: "vino-seco-botella", nameKey: "drink-vino-seco-botella", descKey: "drink-vino-seco-desc", price: "$ 50.000" },
        { id: "vino-seco-copa", nameKey: "drink-vino-seco-copa", descKey: "drink-vino-seco-desc", price: "$ 15.000" },
        { id: "vino-art-botella", nameKey: "drink-vino-art-botella", descKey: "drink-vino-art-desc", price: "$ 50.000" },
        { id: "vino-art-copa", nameKey: "drink-vino-art-copa", descKey: "drink-vino-art-desc", price: "$ 15.000" }
    ]
};

let currentLang = 'es';

let pendingFlavorItemId = null;
let drinksRefreshExpanded = false;
const DRINKS_COLLAPSED_COUNT = 4;

const availableFlavors = [
    { type: "header", key: "flavors-perm-opt" },
    { type: "flavor", key: "flavor-fresa" },
    { type: "flavor", key: "flavor-mora" },
    { type: "flavor", key: "flavor-lulo" },
    { type: "flavor", key: "flavor-maracuya" },
    { type: "flavor", key: "flavor-mango" },
    { type: "flavor", key: "flavor-guanabana" },
    { type: "flavor", key: "flavor-pina" },
    { type: "header", key: "flavors-seas-opt" },
    { type: "flavor", key: "flavor-chontaduro" },
    { type: "flavor", key: "flavor-azai" },
    { type: "flavor", key: "flavor-araza" },
    { type: "flavor", key: "flavor-copoazu" }
];

function getCleanPrice(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

function formatPrice(num) {
    return '$ ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderMenu() {
    ['appetizers', 'mains', 'pizzas', 'fastfood', 'pastas', 'desserts', 'drinksRefresh', 'drinksCava'].forEach(category => {
        let containerId = category === 'drinksRefresh' ? 'drinks-refresh-grid' : (category === 'drinksCava' ? 'drinks-cava-grid' : `${category}-grid`);
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        let itemsToRender = menuItems[category];
        
        if (category === 'drinksRefresh' && !drinksRefreshExpanded) {
            itemsToRender = menuItems[category].slice(0, DRINKS_COLLAPSED_COUNT);
        }

        itemsToRender.forEach(item => {
            let infoBtns = '';
            if (item.info) {
                item.info.forEach(infoType => {
                    infoBtns += `<span class="info-icon" onclick="showInfo('${infoType}')" title="Info"><i class="fas fa-info"></i></span>`;
                });
            }

            const itemName = item.name || dict[currentLang][item.nameKey];
            const dishWaMsg = dict[currentLang]["wa-dish"].replace('{dish}', itemName);
            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dishWaMsg)}`;

            const card = document.createElement('div');
            const isDrink = category.startsWith('drinks');
            card.className = (isDrink ? 'drink-card' : 'dish-card') + ' fade-in-up';
            
            if (isDrink) {
                let descHtml = item.descKey ? `<p class="drink-desc">${dict[currentLang][item.descKey]}</p>` : '';
                
                if (item.hasFlavors) {
                    descHtml += `
                        <div class="flavor-selection-ui">
                            <button class="choose-flavor-btn" onclick="openFlavorSelect('${item.id}')">
                                ${dict[currentLang]["btn-choose-flavor"] || "Elige tu sabor"}
                            </button>
                            <span id="flavor-badge-${item.id}" class="flavor-badge" style="display: none;"></span>
                            <input type="hidden" id="flavor-input-${item.id}" value="">
                        </div>
                    `;
                }

                card.innerHTML = `
                    <div class="drink-header">
                        <span class="drink-name">${itemName}</span>
                        <div class="drink-dots"></div>
                        <span class="drink-price">${item.price}</span>
                    </div>
                    ${descHtml}
                    <div class="btn-group">
                        <button class="add-cart-btn" onclick="addToCart('${item.nameKey || item.name}', '${item.price}', ${!!item.hasFlavors}, '${item.id}')" title="${dict[currentLang]["btn-add-cart"]}">
                            <i class="fas fa-cart-plus"></i> <span class="btn-cart-text">${dict[currentLang]["btn-add-cart"]}</span>
                        </button>
                    </div>
                `;
            } else {
                const imgName = item.imgId || item.id;
                card.innerHTML = `
                    <div class="dish-image" style="background-image: url('./images/${encodeURI(imgName)}.jpg');">
                        <div class="image-overlay-actions">
                            ${infoBtns}
                            <a href="detalles.html#${item.id}" class="details-link-minimal" title="${dict[currentLang]["btn-details"]}">
                                <i class="fas fa-search-plus"></i>
                            </a>
                        </div>
                    </div>
                    <div class="dish-content-wrapper">
                        <div>
                            <div class="dish-header">
                                <h4 class="dish-title">${itemName}</h4>
                                <span class="dish-price">${item.price}</span>
                            </div>
                            <p class="dish-desc">${dict[currentLang][item.descKey]}</p>
                        </div>
                        <div class="btn-group">
                            <a href="${waUrl}" target="_blank" class="order-btn" title="${dict[currentLang]["btn-order"]}">
                                <span>${dict[currentLang]["btn-order"]}</span>
                            </a>
                            <button class="add-cart-btn" onclick="addToCart('${item.nameKey || item.name}', '${item.price}', false, '${item.id}')" title="${dict[currentLang]["btn-add-cart"]}">
                                <i class="fas fa-cart-plus"></i> <span>Añadir</span>
                            </button>
                        </div>
                    </div>
                `;
            }
            container.appendChild(card);
        });

        if (category === 'drinksRefresh') {
            const toggleWrapper = document.createElement('div');
            toggleWrapper.className = 'toggle-wrapper';
            toggleWrapper.style.textAlign = 'center';
            toggleWrapper.style.marginTop = '2rem';
            
            const btn = document.createElement('button');
            btn.className = 'show-more-btn';
            btn.innerHTML = drinksRefreshExpanded ? 
                `<span>${dict[currentLang]["btn-show-less"]}</span> <i class="fas fa-chevron-up"></i>` : 
                `<span>${dict[currentLang]["btn-show-more"]}</span> <i class="fas fa-chevron-down"></i>`;
            
            btn.onclick = toggleDrinksRefresh;
            toggleWrapper.appendChild(btn);
            container.appendChild(toggleWrapper);
        }
    });

    // Setup Intersection Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appeared');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    if (window.updateCartUI) window.updateCartUI(); // Update texts inside cart when re-rendering
}

window.toggleDrinksRefresh = function() {
    drinksRefreshExpanded = !drinksRefreshExpanded;
    renderMenu();
}

function updateTexts() {
    const keys = ["hero-title", "about-title", "about-text", "menu-title", "menu-intro", 
                  "appetizers-title", "mains-title", "pizzas-title", "fastfood-title", "pastas-title", "desserts-title", "pizzas-intro", 
                  "drinks-refresh-title", "drinks-refresh-intro", "drinks-cava-title", "drinks-cava-intro",
                  "drinks-wines-title", "drinks-wines-intro", "liquors-title", "liquors-text",
                  "whatsapp-btn-text", "cart-title", "cart-empty", "cart-total-label"];
    
    keys.forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            if (key === "cart-total-label") {
                el.innerText = dict[currentLang]["cart-total"];
            } else {
                el.innerText = dict[currentLang][key];
            }
        }
    });

    const footerLoc = document.getElementById("footer-location");
    if (footerLoc) footerLoc.innerHTML = dict[currentLang]["footer-location"];

    const welcomeMsg = dict[currentLang]["wa-welcome"];
    const mainWaBtn = document.getElementById("main-whatsapp-btn");
    if (mainWaBtn) {
        mainWaBtn.onclick = () => {
            window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(welcomeMsg)}`, "_blank");
        };
    }
    
    const checkoutBtn = document.getElementById("btn-checkout");
    if(checkoutBtn) checkoutBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${dict[currentLang]["btn-checkout"]}`;
    
    const nameInput = document.getElementById("customer-name");
    if(nameInput) nameInput.placeholder = dict[currentLang]["name-placeholder"];

    renderMenu();
}

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById("btn-es").classList.toggle("active", lang === "es");
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    const langList = document.getElementById("lang-list");
    if (langList) langList.classList.remove("show"); // Close dropdown
    updateTexts();
}

document.getElementById("btn-es").addEventListener("click", () => setLanguage("es"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));

// Modal logic
const modal = document.getElementById("info-modal");

window.showInfo = function(type) {
    document.getElementById("modal-title").innerText = dict[currentLang][`info-${type}-title`];
    document.getElementById("modal-text").innerText = dict[currentLang][`info-${type}-text`];
    modal.classList.add("show");
}

window.closeModal = function() {
    modal.classList.remove("show");
}

window.openFlavorSelect = function(itemId) {
    pendingFlavorItemId = itemId;
    document.getElementById("flavor-modal-title").innerText = dict[currentLang]["flavor-modal-title"];
    document.getElementById("btn-confirm-flavor").innerText = dict[currentLang]["btn-confirm-flavor"];
    
    const select = document.getElementById("flavor-select");
    select.innerHTML = `<option value="">${dict[currentLang]["flavor-placeholder"]}</option>`;
    
    availableFlavors.forEach(f => {
        const option = document.createElement("option");
        if (f.type === "header") {
            option.disabled = true;
            option.style.fontWeight = "bold";
            option.style.color = "var(--text-muted)";
            option.innerHTML = dict[currentLang][f.key];
        } else {
            option.value = dict[currentLang][f.key];
            option.innerText = dict[currentLang][f.key];
        }
        select.appendChild(option);
    });
    
    document.getElementById("flavor-modal").classList.add("show");
}

window.closeFlavorModal = function() {
    document.getElementById("flavor-modal").classList.remove("show");
    pendingFlavorItemId = null;
}

window.confirmFlavorSelection = function() {
    const select = document.getElementById("flavor-select");
    const flavor = select.value;
    
    if (!flavor) {
        alert(dict[currentLang]["flavor-error"]);
        return;
    }
    
    if (pendingFlavorItemId) {
        document.getElementById(`flavor-input-${pendingFlavorItemId}`).value = flavor;
        const badge = document.getElementById(`flavor-badge-${pendingFlavorItemId}`);
        badge.innerText = flavor;
        badge.style.display = 'inline-block';
        
        closeFlavorModal();
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
    const flavorModal = document.getElementById("flavor-modal");
    if (event.target === flavorModal) {
        closeFlavorModal();
    }
}

// Carousel Logic
window.slideCarousel = function(gridId, direction) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    if (grid.children.length === 0) return;
    
    const style = window.getComputedStyle(grid);
    const gap = parseFloat(style.gap) || 32; 
    const card = grid.children[0];
    const scrollAmount = card.offsetWidth + gap;
    
    if (direction === 1) {
        if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10) {
            grid.appendChild(grid.firstElementChild);
            grid.scrollLeft -= scrollAmount;
        }
        grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        if (grid.scrollLeft <= 10) {
            grid.prepend(grid.lastElementChild);
            grid.scrollLeft += scrollAmount;
        }
        grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}
