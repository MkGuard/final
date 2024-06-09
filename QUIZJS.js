const langData = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_quiz: "Quiz",
        quiz_title: "Health Quiz",
        quiz_q1: "How many hours of sleep should an adult get each night?",
        quiz_q1_a1: "6 hours",
        quiz_q1_a2: "7-9 hours",
        quiz_q1_a3: "10 hours",
        quiz_q2: "Which vitamin is known as the sunshine vitamin?",
        quiz_q2_a1: "Vitamin A",
        quiz_q2_a2: "Vitamin B",
        quiz_q2_a3: "Vitamin D",
        quiz_q3: "How much water should an adult drink each day?",
        quiz_q3_a1: "1 liter",
        quiz_q3_a2: "2 liters",
        quiz_q3_a3: "3 liters",
        quiz_submit: "Submit",
        quiz_result: "You scored {score} out of 3."
    },
    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_contact: "Контакты",
        nav_quiz: "Викторина",
        quiz_title: "Опрос по здоровью",
        quiz_q1: "Сколько часов сна должно быть у взрослого каждую ночь?",
        quiz_q1_a1: "6 часов",
        quiz_q1_a2: "7-9 часов",
        quiz_q1_a3: "10 часов",
        quiz_q2: "Какой витамин известен как солнечный витамин?",
        quiz_q2_a1: "Витамин А",
        quiz_q2_a2: "Витамин В",
        quiz_q2_a3: "Витамин D",
        quiz_q3: "Сколько воды должен пить взрослый каждый день?",
        quiz_q3_a1: "1 литр",
        quiz_q3_a2: "2 литра",
        quiz_q3_a3: "3 литра",
        quiz_submit: "Отправить",
        quiz_result: "Ваш результат: {score} из 3."
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        const text = langData[lang][key];
        if (text) {
            element.textContent = text;
        }
    });
}

// Event listener for language switcher
document.getElementById("languageSwitcher").addEventListener("change", function () {
    switchLanguage(this.value);
});

// Initial load
switchLanguage("en");

function submitQuiz() {
    const correctAnswers = {
        q1: "7-9",
        q2: "Vitamin D",
        q3: "2 liters"
    };

    let score = 0;
    const userAnswers = new FormData(document.getElementById('quizForm'));

    for (const [question, answer] of userAnswers.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    const resultText = langData[document.getElementById("languageSwitcher").value].quiz_result.replace("{score}", score);
    document.getElementById('quizResult').textContent = resultText;
}
