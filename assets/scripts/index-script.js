function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    navLinks.style.flexDirection = "column"; // Ensures vertical stacking
}
        
        document.addEventListener("DOMContentLoaded", function () {
            let userLang = localStorage.getItem("language") || "he"; // Default to Hebrew
            changeLanguage(userLang); // Load the saved language

            document.querySelectorAll("[data-lang]").forEach(button => {
                button.addEventListener("click", function () {
                    let lang = this.getAttribute("data-lang");
                    changeLanguage(lang);
                });
            });
        });

        function changeLanguage(lang) {
            fetch("./assets/index-content.json")
                .then(response => response.json())
                .then(data => {
                    if (!data[lang]) lang = "he"; // Fallback to Hebrew if language is missing
                    
                    document.documentElement.lang = lang; // Update <html lang="">
                    localStorage.setItem("language", lang); // Save selection

                    // Update all text elements
                    document.getElementById("page-title").innerText = data[lang].title;
                    document.getElementById("meta-description").setAttribute("content", data[lang].meta_description);
                    
                    document.getElementById("nav-home").innerText = data[lang].nav_home;
                    document.getElementById("nav-services").innerText = data[lang].nav_services;
                    document.getElementById("nav-about").innerText = data[lang].nav_about;
                    document.getElementById("nav-contact").innerText = data[lang].nav_contact;

                    document.getElementById("header-title").innerText = data[lang].header_title;
                    document.getElementById("phone-button").innerText = data[lang].phone_button;

                    document.getElementById("intro-title").innerText = data[lang].intro_title;
                    document.getElementById("intro-text").innerHTML = data[lang].intro_text;

                    document.getElementById("highlight-1-title").innerText = data[lang].highlight_1_title;
                    document.getElementById("highlight-1-text").innerText = data[lang].highlight_1_text;
                    document.getElementById("highlight-2-title").innerText = data[lang].highlight_2_title;
                    document.getElementById("highlight-2-text").innerText = data[lang].highlight_2_text;
                    document.getElementById("highlight-3-title").innerText = data[lang].highlight_3_title;
                    document.getElementById("highlight-3-text").innerText = data[lang].highlight_3_text;

                    document.getElementById("services-title").innerText = data[lang].services_title;
                    document.getElementById("services-description").innerText = data[lang].services_description;
                    document.getElementById("service-1-title").innerText = data[lang].service_1_title;
                    document.getElementById("service-1-text").innerText = data[lang].service_1_text;
                    document.getElementById('service-2-title').innerText = data[lang].service_2_title;
                    document.getElementById('service-2-text').innerHTML = data[lang].service_2_text; // Use innerHTML to insert links
                    document.getElementById("service-3-title").innerText = data[lang].service_3_title;
                    document.getElementById("service-3-text").innerText = data[lang].service_3_text;

                    document.getElementById("about-title").innerText = data[lang].about_title;
                    document.getElementById("about-text").innerHTML = data[lang].about_text;

                    document.getElementById("testimonials-title").innerText = data[lang].testimonials_title;
                    document.getElementById("testimonial-1").innerText = data[lang].testimonial_1;
                    document.getElementById("testimonial-2").innerText = data[lang].testimonial_2;

                    document.getElementById("contact-title").innerText = data[lang].contact_title;
                    document.getElementById("contact-description").innerText = data[lang].contact_description;
                    document.getElementById("call-us").innerText = data[lang].call_us;
                    document.getElementById("email-us").innerText = data[lang].email_us;

                    document.getElementById("footer-text").innerHTML = data[lang].footer_text;

                    // Update WhatsApp message
                    let message = encodeURIComponent(data[lang].whatsapp_message);
                    document.querySelector("#whatsapp-button").setAttribute("onclick", 
                        `window.open('https://wa.me/+972524796363?text=${message}', '_blank')`);
                })
                .catch(error => console.error("Error loading language file:", error));
        }