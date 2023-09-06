// Get references to the checkbox and description elements
let lever = document.getElementById("lever");
let textarea = document.getElementById("mainDescriptionPara");


// Function to update the description text
function updateDescription() {
    if (lever.checked) {
        textarea.innerHTML = "We, RoboVITics-The official club of VIT, are a collection of vehement tech enthusiasts with the aspiration to learn and hone our skills & the drive to excel. As the official robotics club of VIT Vellore, our motto is to support aspiring robotics enthusiasts in working on jaw-dropping projects and discovering their specialities by holding numerous interactive workshops, seminars, and practical sessions. We work together on some remarkable projects and support exemplary teams that have received numerous accolades.";

        textarea.style.padding = "2rem";
    } else {
        textarea.innerHTML = "ROBOWARS is the flagship event of graVITas and one of the biggest combat robotics events in India. More than 40 bots engage in thrilling battles around-the-clock in the largest and safest arena in India for a chance to win the championship with their war machines. It proves to be an adrenaline rush to the participants as well as the audience. Teams all over the globe gather here to show off their fighting spirits and attain glory."; // Clear the description if the checkbox is not checked

        textarea.style.padding = "2rem";
    }
}

// Add an event listener to the checkbox to detect changes
lever.addEventListener("change", updateDescription);

// Call the updateDescription function initially to set the initial state
updateDescription();

// Select all elements with the "animate-on-scroll" class
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  // Add the "show" class to animate the element when it becomes visible
  entry.target.classList.add('show');
  // Stop observing the element to avoid multiple animations
  observer.unobserve(entry.target);
}
});
}, {
threshold: 0.5, // Adjust this threshold as needed
rootMargin: '0px'
});

// Observe each animated element
animatedElements.forEach(element => {
observer.observe(element);
});

function scrollToAboutUs() {
    const aboutUsSection = document.getElementById("aboutUsSection");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToFaq() {
    const faqsection = document.getElementById("faqsection");
    faqsection.scrollIntoView({ behavior: "smooth" });
}

function scrollTocontactUs() {
    const contactus = document.getElementById("contactussection");
    contactus.scrollIntoView({ behavior: "smooth" });
}
