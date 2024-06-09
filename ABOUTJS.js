// Animations
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // Animation for Hero Section
    setTimeout(function() {
        heroTitle.classList.add('slideInDown');
        heroSubtitle.classList.add('slideInUp');
    }, 500);
});

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
      carousel_title_1: "Our Journey",
      carousel_content_1: "Embark on a journey with us as we recount our humble beginnings and the remarkable milestones we've achieved over the years.",
      carousel_title_2: "Our Team",
      carousel_content_2: "Meet the dedicated team behind our success - a diverse group of medical professionals committed to providing compassionate care to our patients.",
      carousel_title_3: "Our Achievements",
      carousel_content_3: "Discover our achievements and contributions to the healthcare industry, from groundbreaking research to community outreach programs.",
      our_story_title: "Our Story",
      our_story_content: "We started as a small clinic in 1990, founded by Dr. Sana Sarmau. Over the years, we have grown into a leading medical center, serving thousands of patients every year. Our commitment to providing high-quality healthcare remains unwavering.",
      our_vision_title: "Our Vision",
      our_vision_content: "Our vision is to be the preferred healthcare provider in our community, known for excellence in patient care, medical education, and research."
    },
    ru: {
      nav_home: "Главная",
      nav_about: "О нас",
      nav_services: "Услуги",
      nav_contact: "Контакты",
      nav_quiz: "Викторина",
      carousel_title_1: "Наш путь",
      carousel_content_1: "Отправьтесь в путешествие вместе с нами, вспоминая наши скромные начала и замечательные достижения за годы.",
      carousel_title_2: "Наша команда",
      carousel_content_2: "Познакомьтесь с преданной командой, стоящей за нашим успехом - разнообразная группа медицинских специалистов, готовых оказывать сострадательный уход нашим пациентам.",
      carousel_title_3: "Наши достижения",
      carousel_content_3: "Откройте для себя наши достижения и вклад в медицинскую индустрию, от революционных исследований до программ помощи сообществу.",
      our_story_title: "Наша История",
      our_story_content: "Мы начали как небольшая клиника в 1990 году, основанная доктором Сана Сармау. С течением времени мы превратились в ведущий медицинский центр, обслуживающий тысячи пациентов ежегодно. Наше обязательство предоставлять высококачественную медицинскую помощь остается неизменным.",
      our_vision_title: "Наше Видение",
      our_vision_content: "Наша цель - стать предпочтительным медицинским учреждением в нашем сообществе, известным своими достижениями в области медицинского обслуживания пациентов, медицинского образования и научных исследований."
    }
  };
  
  
// Function to switch language
function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
      const key = element.getAttribute("data-lang");
      element.textContent = langData[lang][key];
    });
  }
  
  // Event listener for language switcher
  document.getElementById("languageSwitcher").addEventListener("change", function() {
    switchLanguage(this.value);
  });
  
  // Initial load
  switchLanguage("en");
  
  