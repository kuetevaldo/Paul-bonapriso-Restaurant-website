function filterMenu(category){

const items = document.querySelectorAll(".menu-item");

items.forEach(item => {

item.style.opacity = "0";

setTimeout(() => {

if(category === "all" || item.classList.contains(category)){
item.style.display = "block";

setTimeout(()=>{
item.style.opacity = "1";
},50);

}else{
item.style.display = "none";
}

},200);

});

}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if(hamburger){
hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
}

window.addEventListener("scroll", function(){

const header = document.querySelector(".header");

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});

window.addEventListener("load", function() {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
},500);

}, 1500); // loader visible for 1.5 seconds

});

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function(){

if(window.scrollY > 400){
scrollBtn.style.opacity="1";
scrollBtn.style.pointerEvents="auto";
}else{
scrollBtn.style.opacity="0";
scrollBtn.style.pointerEvents="none";
}

});

scrollBtn.addEventListener("click", function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const translations = {

en: {

heroTitle: "PAUL Bonapriso",
heroSubtitle: "French Bakery • Gourmet Cuisine • Elegant Atmosphere",
heroButton: "Explore Menu",

navHome: "Home",
navAbout: "About",
navMenu: "Menu",
navGallery: "Gallery",
navContact: "Contact",
navReserve: "Reserve",
heroTagline: "Since 1889",
heroBtn: "Explore Menu",

specialtiesTitle: "Our Specialties",
specialtiesSubtitle: "Discover some of our most loved dishes prepared with fresh ingredients and authentic French tradition.",

croissantTitle: "Butter Croissant",
croissantText: "Freshly baked croissant with rich French butter, perfect for breakfast.",

pizzaTitle: "Pizza Margherita",
pizzaText: "Classic pizza with tomato sauce and mozzarella.",

burgerTitle: "Classic Burger",
burgerText: "Juicy beef burger served with crispy fries.",

dessertTitle: "Chocolate Dessert",
dessertText: "Delicious chocolate pastry inspired by French pâtisserie.",

aboutTitle: "About PAUL",

aboutText1: "Founded in 1889, PAUL is a French bakery and restaurant brand known for its passion for traditional bread and refined cuisine. For generations, the family behind PAUL has preserved the art of French baking while creating delicious meals and pastries enjoyed around the world.",

aboutText2: "At PAUL Bonapriso, we bring this heritage to Douala by offering freshly baked bread, gourmet sandwiches, pastries, and carefully prepared dishes. Every recipe reflects our commitment to quality ingredients and authentic French culinary tradition.",

aboutText3: "More than just a restaurant, PAUL is a place where people come together to share good food, memorable moments, and the pleasure of authentic bakery craftsmanship.",

menuTitle: "Our Menu",

menuAll: "All",
menuViennoiseries: "Viennoiseries",
menuOmelettes: "Omelettes",
menuPizzas: "Pizzas",
menuBurgers: "Burgers",
menuDesserts: "Desserts",

galleryTitle: "Our Gallery",
gallerySubtitle: "Discover the atmosphere, flavors, and moments at PAUL Bonapriso.",

reservationTitle: "Reserve a Table",

reservationText: "Enjoy a unique dining experience at PAUL Bonapriso. Reserve your table and discover authentic French bakery specialties, delicious dishes, and a warm atmosphere perfect for breakfast, lunch, or dinner.",

reservationNote: "We recommend booking in advance during weekends and special events.",

reservationButton: "Book a Table",

contactTitle: "Contact Us",

contactLocation: "📍 Bonapriso, Douala, Cameroon",
contactPhone: "📞 +237 XXX XXX XXX",
contactEmail: "✉ info@paul-bonapriso.com",
contactHours: "🕒 Open Daily",
contactTime: "7:00 AM – 10:00 PM",

contactFormName: "Your Name",
contactFormEmail: "Your Email",
contactFormSubject: "Subject",
contactFormMessage: "Your Message",
contactFormButton: "Send Message",

footerText: "Authentic French bakery and restaurant offering fresh pastries, gourmet dishes, and a warm dining experience in the heart of Douala.",

footerLinks: "Quick Links",
footerHours: "Opening Hours",
footerFollow: "Follow Us",

footerRights: "© 2026 PAUL Bonapriso. All Rights Reserved.",
reservationSuccessMessage: "✅ Reservation Request Sent Thank you! Your reservation request has been sent successfully.Our team will contact you shortly to confirm your table."

},


fr: {

heroTitle: "PAUL Bonapriso",
heroSubtitle: "Boulangerie Française • Cuisine Gourmet • Atmosphère Élégante",
heroButton: "Voir le Menu",

navHome: "Accueil",
navAbout: "À propos",
navMenu: "Menu",
navGallery: "Galerie",
navContact: "Contact",
navReserve: "Réserver",
heroTagline: "Depuis 1889",
heroBtn: "Découvrir le Menu",

specialtiesTitle: "Nos Spécialités",
specialtiesSubtitle: "Découvrez quelques-uns de nos plats les plus appréciés, préparés avec des ingrédients frais et selon la tradition culinaire française.",

croissantTitle: "Croissant au beurre",
croissantText: "Croissant fraîchement préparé avec du beurre français, parfait pour le petit-déjeuner.",

pizzaTitle: "Pizza Margherita",
pizzaText: "Pizza classique avec sauce tomate et mozzarella.",

burgerTitle: "Burger Classique",
burgerText: "Burger de bœuf juteux servi avec des frites croustillantes.",

dessertTitle: "Dessert au Chocolat",
dessertText: "Délicieuse pâtisserie au chocolat inspirée de la pâtisserie française.",

aboutTitle: "À propos de PAUL",

aboutText1: "Fondée en 1889, PAUL est une boulangerie et un restaurant français reconnu pour sa passion du pain traditionnel et de la cuisine raffinée. Depuis plusieurs générations, la famille derrière PAUL perpétue l’art de la boulangerie française tout en proposant de délicieux plats et pâtisseries appréciés dans le monde entier.",

aboutText2: "Chez PAUL Bonapriso, nous apportons cet héritage à Douala en proposant du pain fraîchement préparé, des sandwiches gourmands, des pâtisseries et des plats soigneusement élaborés. Chaque recette reflète notre engagement envers des ingrédients de qualité et la tradition culinaire française.",

aboutText3: "Plus qu’un simple restaurant, PAUL est un lieu où les gens se réunissent pour partager de bons repas, créer des souvenirs et profiter du plaisir authentique de l’artisanat boulanger.",

menuTitle: "Notre Menu",

menuAll: "Tout",
menuViennoiseries: "Viennoiseries",
menuOmelettes: "Omelettes",
menuPizzas: "Pizzas",
menuBurgers: "Burgers",
menuDesserts: "Desserts",

galleryTitle: "Notre Galerie",
gallerySubtitle: "Découvrez l’ambiance, les saveurs et les moments partagés chez PAUL Bonapriso.",

reservationTitle: "Réserver une Table",

reservationText: "Profitez d’une expérience culinaire unique chez PAUL Bonapriso. Réservez votre table et découvrez les spécialités authentiques de la boulangerie française, des plats délicieux et une atmosphère chaleureuse idéale pour le petit-déjeuner, le déjeuner ou le dîner.",

reservationNote: "Nous recommandons de réserver à l’avance pendant les week-ends et les événements spéciaux.",

reservationButton: "Réserver une Table",

contactTitle: "Contactez-nous",

contactLocation: "📍 Bonapriso, Douala, Cameroun",
contactPhone: "📞 +237 XXX XXX XXX",
contactEmail: "✉ info@paul-bonapriso.com",
contactHours: "🕒 Ouvert tous les jours",
contactTime: "7h00 – 22h00",

contactFormName: "Votre nom",
contactFormEmail: "Votre email",
contactFormSubject: "Sujet",
contactFormMessage: "Votre message",
contactFormButton: "Envoyer le message",

footerText: "Boulangerie et restaurant français authentique proposant des pâtisseries fraîches, des plats gourmands et une expérience culinaire chaleureuse au cœur de Douala.",

footerLinks: "Liens rapides",
footerHours: "Heures d'ouverture",
footerFollow: "Suivez-nous",

footerRights: "© 2026 PAUL Bonapriso. Tous droits réservés.",
reservationSuccessMessage: "✅ Merci d’avoir choisi Paul Bonapriso. Votre demande de réservation a bien été reçue. Notre équipe vous contactera prochainement pour confirmer votre table."

}

};

function setLanguage(lang){

const elements = document.querySelectorAll("[data-lang]");

elements.forEach(el => {

const key = el.getAttribute("data-lang");

el.textContent = translations[lang][key];

});

}
function setLanguage(lang){

localStorage.setItem("language", lang);

const elements = document.querySelectorAll("[data-lang]");

elements.forEach(el => {

const key = el.getAttribute("data-lang");

el.textContent = translations[lang][key];

});

}

window.addEventListener("load", () => {

const savedLang = localStorage.getItem("language") || "en";

setLanguage(savedLang);

});

document
.getElementById("reservationForm")
.addEventListener("submit", function(e){

e.preventDefault();

const params = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
date: document.getElementById("date").value,
time: document.getElementById("time").value,
guests: document.getElementById("guests").value,
message: document.getElementById("message").value

};

emailjs.send(
"service_kwghelr",
"template_npgxrzc",
params
)
.then(function(){

document.getElementById("reservationSuccess").style.display = "block";
document.getElementById("reservationForm").reset();

});

});