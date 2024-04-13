const categoriesList = document.querySelector("#categories");

const categories = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryTitle = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("ul > li");
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
})