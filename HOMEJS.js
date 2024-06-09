// Event listeners and interactions
document.addEventListener('DOMContentLoaded', function() {
    const heroButton = document.querySelector('.hero .btn');
    heroButton.addEventListener('click', function() {
        alert('Learn more about our services!');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#007bff';
        });
        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    });
});

// Language data
const langData = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_quiz: "Quiz",
        hero_title: "Welcome to SanaSarmau Medical Center",
        hero_subtitle: "Your health is our priority",
        hero_button: "Learn More",
        services_title: "Our Services",
        service1_title: "General Checkup",
        service1_desc: "Comprehensive health checkups for all ages.",
        service2_title: "Cardiology",
        service2_desc: "Expert cardiac care for your heart health.",
        service3_title: "Pharmacy",
        service3_desc: "Full-service pharmacy with prescription fulfillment."
    },
    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_contact: "Контакты",
        nav_quiz: "Викторина",
        hero_title: "Добро пожаловать в медицинский центр SanaSarmau",
        hero_subtitle: "Ваше здоровье - наш приоритет",
        hero_button: "Узнать больше",
        services_title: "Наши услуги",
        service1_title: "Общий осмотр",
        service1_desc: "Комплексные медицинские осмотры для всех возрастов.",
        service2_title: "Кардиология",
        service2_desc: "Экспертная кардиологическая помощь для вашего здоровья сердца.",
        service3_title: "Аптека",
        service3_desc: "Полный комплекс услуг по рецептурному обслуживанию."
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        element.textContent = langData[lang][element.getAttribute("data-lang")];
    });
}

// Event listener for language switcher
document.getElementById("languageSwitcher").addEventListener("change", function() {
    switchLanguage(this.value);
});

// Initial load
switchLanguage("en");

