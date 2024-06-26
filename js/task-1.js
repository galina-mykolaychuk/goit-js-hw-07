const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;

  const elementsCount = item.querySelectorAll("ul.list-menu li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
