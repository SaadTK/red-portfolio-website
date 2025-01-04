// Email JS

const contactForm = document.getElementById("contact-form-id"),
  contactMessage = document.getElementById("contact-message-id");

const sendMail = (e) => {
  e.preventDefault();

  //service-id, template-id, #form-id, public key
  emailjs.init("oJnffhAMPJeUAOy_S");

  emailjs
    .sendForm(
      "service_vt7te7d", //service ID
      "template_1amcrwm", //template ID
      "#contact-form-id", //form-id
      "oJnffhAMPJeUAOy_S" //public key
    )
    .then(() => {
      contactMessage.textContent =
        "Message Sent Successfully. Let's Meet Soon!!!";
      contactMessage.style.color = "green";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 2000);
      contactForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      contactMessage.textContent = "Message not sent (service error). Sorry!!!";
      contactMessage.style.color = "red";
    });
};

console.log(contactForm);
contactForm.addEventListener("submit", sendMail);

// Show Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up-id");
  //when the scroll is higher than 250 viewport height, add the show-scroll class to the <a> tag with the scrollup class
  this.scrollY >= 250
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Scroll Sections Active Link

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__list a[href='#" + sectionId + "']"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: 400,
});

sr.reveal(`.profile, .contact__form`);
sr.reveal(`.info`, { origin: "left", delay: 800 });
sr.reveal(`.skills`, { origin: "left", delay: 800 });
sr.reveal(`.about`, { origin: "right", delay: 800 });
sr.reveal(
  `.projects__card, .services__card, .experience__card`,
  `.info__card`,
  {
    interval: 100,
  }
);
