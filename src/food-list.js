import foods from "./food-data.js";

const foodList = document.querySelector(".foods");

function priceFormat(price) {
  price = price.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(price)) price = price.replace(pattern, "$1,$2");
  return price;
}

for (let i = 0; i < foods.length; i++) {
  foodList.innerHTML += `
        <div class="food">
            <div class="food-image">
            <img
                src="${foods[i].foodImage}"
            />
            </div>
            <div class="food-detail">
            <p id="food-name">${foods[i].food}</p>
            <h2>Rp. ${priceFormat(foods[i].price)}</h2>
            </div>
        </div>
    `;
}
