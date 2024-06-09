// Language data
const langData = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_quiz: "Quiz",
        services_title: "Our Services",
        service1_title: "General Checkup",
        service1_desc: "Comprehensive health checkups for all ages. ",
        service2_title: "Cardiology",
        service2_desc: "Expert cardiac care for your heart health.",
        service3_title: "Pharmacy",
        service3_desc: "Full-service pharmacy with prescription fulfillment.",
        service4_title: "Radiology",
        service4_desc: "State-of-the-art imaging services for accurate diagnosis.",
        service5_title: "Pediatrics",
        service5_desc: "Specialized care for infants, children, and adolescents.",
        service6_title: "Dermatology",
        service6_desc: "Treatment and management of skin conditions and diseases.",
        // Add translations for more services here
        about_title: "Our Story",

    },
    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_contact: "Контакты",
        nav_quiz: "Викторина",
        services_title: "Наши Услуги",
        service1_title: "Общий осмотр",
        service1_desc: "Комплексные медицинские осмотры для всех возрастов.",
        service2_title: "Кардиология",
        service2_desc: "Экспертная кардиологическая помощь для вашего здоровья сердца.",
        service3_title: "Аптека",
        service3_desc: "Полный комплекс услуг по рецептурному обслуживанию.",
        service4_title: "Радиология",
        service4_desc: "Современные методы обследования для точной диагностики.",
        service5_title: "Педиатрия",
        service5_desc: "Специализированная медицинская помощь для детей и подростков.",
        service6_title: "Дерматология",
        service6_desc: "Лечение и уход за кожей, диагностика и лечение заболеваний кожи.",
        // Add translations for more services here
        about_title: "Наша История",
}};

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