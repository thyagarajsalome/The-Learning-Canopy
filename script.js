// Toggle the mobile navigation menu
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//

document.addEventListener("DOMContentLoaded", () => {
  // Array of card objects containing the title and link for each card
  const cardsData = [
    { title: "Computer Science", link: "./cs.html" },
    { title: "Data Structures & Algorithms (DSA)", link: "./dsa.html" },
    {
      title: "DSA Visulization",
      link: "https://dsa-viz-beta.vercel.app/",
    },
    { title: "Design Patterns", link: "./designpatterns.html" },
    { title: "HTML & CSS", link: "./html&css.html" },
    { title: " Web UI-UX ", link: "./ui&ux.html" },
    { title: "JavaScript", link: "./javascript.html" },
    { title: "Backend", link: "./backend.html" },
    { title: "Frontend", link: "./frontend.html" },
    { title: "React", link: "./react.html" },
    { title: "API", link: "./api.html" },
    { title: "Data fetching", link: "./datafetch.html" },
    { title: "Project Architecture", link: "./projectarch.html" },
  ];

  // Select the container where the cards will be added
  const cardsContainer = document.querySelector(".cards");

  // Loop through the cardsData array and create each card dynamically
  cardsData.forEach((card) => {
    // Create the card div element
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // Create and set up the card title element
    const titleElement = document.createElement("h3");
    titleElement.textContent = card.title;
    cardDiv.appendChild(titleElement);

    // Create and set up the card link element
    const linkElement = document.createElement("a");
    linkElement.href = card.link;
    linkElement.target = "_blank";
    linkElement.className = "card-link";
    linkElement.textContent = "Explore";
    cardDiv.appendChild(linkElement);

    // Append the card to the cards container
    cardsContainer.appendChild(cardDiv);
  });
});
