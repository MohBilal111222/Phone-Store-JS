const phones = [
  {
      brand: 'Samsung',
      model: 'S20',
      ram: 8,
      rom: 256,
      camera: '20 megapixel',
      price: 15000
  },
  {
      brand: 'Xiomi',
      model: 'note10',
      ram: 4,
      rom: 64,
      camera: '10 megapixel',
      price: 15000
  },
  {
      brand: 'Infinix',
      model: 'z10',
      ram: 2,
      rom: 16,
      camera: '5 megapixel',
      price: 15000
  },
  {
      brand: 'Tecno',
      model: 'spark10',
      ram: 12,
      rom: 512,
      camera: '25 megapixel',
      price: 15000
  },
  {
      brand: 'Iphone',
      model: '14',
      ram: 4,
      rom: 1024,
      camera: '30 megapixel',
      price: 15000
  },
  {
      brand: 'Oppo',
      model: 'F11',
      ram: 8,
      rom: 256,
      camera: '20 megapixel',
      price: 15000
  },
  {
      brand: 'Vivo',
      model: 'y20',
      ram: 4,
      rom: 64,
      camera: '8 megapixel',
      price: 15000
  },
  {
      brand: 'Samsung',
      model: 's50',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 300000
  },

  {
      brand: 'Google pixel',
      model: '9pro',
      ram: 50,
      rom: 1024,
      camera: '600 megapixel',
      price: 6700000
  },

  {
      brand: 'Nokia',
      model: '3310',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 910000
  },

  {
      brand: 'Huawei',
      model: '10Plus',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 9900
  },

  {
      brand: 'Aquas',
      model: '5G',
      ram: 80,
      rom: 1500,
      camera: '60 megapixel',
      price: 67000
  },

  {
      brand: 'Jio',
      model: 'A10',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 80000
  },


  {
      brand: 'Real me ',
      model: '9pro',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 45000
  },

  {
      brand: 'Samsung',
      model: 's50',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 300000
  },


  {
      brand: 'Redmi',
      model: '5I',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 600000
  },

  {
      brand: 'Iphone',
      model: 'X',
      ram: 64,
      rom: 1024,
      camera: '60 megapixel',
      price: 150000
  },

  {
      brand: 'Infinix',
      model: 'x5',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 70000
  },

  {
      brand: 'Q Mobile',
      model: '90',
      ram: 50,
      rom: 1024,
      camera: '60 megapixel',
      price: 3000
  },


]

let arr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
  arr = [];
}else{
  arr = items;
  console.log(arr)
}

const div = document.querySelector('.products');
function renderItems (){
  for(let i = 0; i < phones.length; i++){
      div.innerHTML += `
      <div class="card bg-dark text-light border-light" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${phones[i].brand +' '+ phones[i].model}</h5>
              <p class="card-text">Rs ${phones[i].price}</p>
              <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
          </div>
      </div>
      `
  }
}

renderItems()

function addtocart(index){
  if(arr.includes(phones[index])){
      console.log('item included');
      phones[index].quantity += 1;
  }else{
      phones[index].quantity = 1;
      arr.push(phones[index]);
  }
  console.log(arr);
}

function gotocart(){
  console.log('cart');
  localStorage.setItem('cartItems' , JSON.stringify(arr));
  window.location = 'cart.html';
}