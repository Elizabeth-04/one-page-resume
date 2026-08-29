const filterButtons = document.querySelectorAll(".filter__item");
const skills = document.querySelectorAll(".skills__item");
const searchInput = document.querySelector(".skills-search__input");
const skillsMessage = document.querySelector(".skills-message");

let selectedCategory = "all";

function updateSkills() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleSkills = 0;

    skills.forEach(function (skill) {
        const category = skill.dataset.category;
        const name = skill.textContent.toLowerCase().trim();

        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;

        const searchMatch = name.includes(searchText);

        if (categoryMatch && searchMatch) {
            skill.classList.remove("skills__item--hidden");
            visibleSkills++;
        } else {
            skill.classList.add("skills__item--hidden");
        }
    });

    if (visibleSkills === 0) {
        skillsMessage.style.display = "block";
    } else {
        skillsMessage.style.display = "none";
    }
}


// Фильтрация по категории
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (button) {
            button.classList.remove("filter__item--active");
        });

        button.classList.add("filter__item--active");

        updateSkills();
    });
});


// Поиск во время ввода
searchInput.addEventListener("input", function () {
    updateSkills();
});