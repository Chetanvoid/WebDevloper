let shop = document.getElementById("shop");
 //for store the data in local strorage is receive to the screen and if 
 ////     not then receive empty array.
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>           
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};
// line no 21 and 10  no main use e che ke refrace kariye tyre + and _ kareli item show nathi 
//karti to show kare ena mate 
generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);

   //for store the data in local strorage
  localStorage.setItem("data", JSON.stringify(basket));
};




let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
//  65 & 62   line for jyre item 0 hoi ane apde - press kariye to error dshoe kare e na thai ena mate e 
//    kem thai kem ke local storage khali hoi jethi search function undefine hoi atele
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
// line no 71 no use ke apde item 0 kari daie to pan e no data apda bucket na 
//   local storage ma hoi to   ane bucket mathi remove karava 


  //for store the data in local strorage
  localStorage.setItem("data", JSON.stringify(basket));
};



let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};



let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
// a function ne outside cal karvanu reason ke upper cart ma refrace kariye tyre data show nathi thata 
// to e thai ena mate every time call the function in globle.