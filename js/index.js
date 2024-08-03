function loadHeader() {
  fetch("header-nav.partial.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
}

// Виклик функції завантаження при завантаженні сторінки
document.addEventListener("DOMContentLoaded", loadHeader);

function includeHTML() {
  let elements = document.querySelectorAll("[data-include]");
  elements.forEach((element) => {
    let file = element.getAttribute("data-include");
    fetch(file)
      .then((response) => {
        if (response.ok) return response.text();
        throw new Error(`Error loading ${file}`);
      })
      .then((data) => {
        element.innerHTML = data;
      })
      .catch((error) => console.error(error));
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);