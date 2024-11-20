document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".header__dropdown");
  const button = document.querySelector(".header__button");
  const dropdownList = document.querySelector(".header__dropdown-list");

  button.addEventListener("click", function (event) {
    event.stopPropagation(); 
    dropdown.classList.toggle("active"); 
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active"); 
    }
  });

  const listItems = dropdownList.querySelectorAll("a"); 
  listItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); 

      const selectedLang = item.dataset.lang; 
      button.textContent = selectedLang; 

      dropdown.classList.remove("active"); 
    });
  });
});
