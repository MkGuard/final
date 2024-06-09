// Language data
const langData = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_quiz: "Quiz",
        contact_title: "Contact Us",
        contact_name_label: "Name",
        contact_name_placeholder: "Enter your name",
        contact_country_label: "Country",
        contact_select_country: "Select Country",
        contact_phone_label: "Phone",
        contact_email_label: "Email",
        contact_message_label: "Message",
        contact_submit: "Submit"
    },
    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_contact: "Контакты",
        nav_quiz: "Викторина",
        contact_title: "Связаться с нами",
        contact_name_label: "Имя",
        contact_name_placeholder: "Введите ваше имя",
        contact_country_label: "Страна",
        contact_select_country: "Выберите страну",
        contact_phone_label: "Телефон",
        contact_email_label: "Электронная почта",
        contact_message_label: "Сообщение",
        contact_submit: "Отправить"
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        element.textContent = langData[lang][element.getAttribute("data-lang")];
        if (element.placeholder) {
            element.placeholder = langData[lang][element.getAttribute("data-lang")];
        }
    });
}

// Event listener for language switcher
document.getElementById("languageSwitcher").addEventListener("change", function() {
    switchLanguage(this.value);
});

// Initial load
switchLanguage("en");

// Country codes
const countryCodes = {
    "US": "+1", "RU": "+7"
    // Add other country codes here
};

// Update phone number placeholder based on country selection
function updatePhoneNumberPlaceholder() {
    const countrySelect = document.getElementById('country');
    const phoneNumberInput = document.getElementById('phone');
    const selectedCountry = countrySelect.value;
    if (selectedCountry && countryCodes[selectedCountry]) {
        phoneNumberInput.placeholder = "e.g. " + countryCodes[selectedCountry] + " 1234567890";
    } else {
        phoneNumberInput.placeholder = "Enter phone number";
    }
}

document.getElementById('country').addEventListener('change', updatePhoneNumberPlaceholder);

// Reset placeholders on load
window.onload = function () {
    updatePhoneNumberPlaceholder();
};
