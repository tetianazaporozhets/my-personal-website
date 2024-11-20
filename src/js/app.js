document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".header__dropdown");
  const button = document.querySelector(".header__button");
  const dropdownList = document.querySelector(".header__dropdown-list");

  // Открытие/закрытие выпадающего списка при клике на кнопку
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Останавливает распространение события на родительские элементы
    dropdown.classList.toggle("active"); // Переключаем класс для отображения/скрытия списка
  });

  // Закрытие выпадающего списка при клике вне кнопки или списка
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active"); // Убирает активный класс, скрывая список
    }
  });

  // Обработка клика на пункт списка
  const listItems = dropdownList.querySelectorAll("a"); // Выбираем все элементы списка
  listItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Останавливаем переход по ссылке

      const selectedLang = item.dataset.lang; // Получаем язык из атрибута data-lang
      button.textContent = selectedLang; // Меняем текст кнопки

      dropdown.classList.remove("active"); // Закрываем выпадающий список
    });
  });
});
