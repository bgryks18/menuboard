var burgers = [
    {
      name:'Double Whooper',
      description:`
      Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.
    
      *Weight based on pre-cooked patty
      
      Entreé only
      `,
      img:'img/doublewhooper.png',
      price: '$4.95',
      category: 'burgers'
    },
    {
      name:'Whooper Jr.',
      description:`
      Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.
    
      *Weight based on pre-cooked patty
      
      Entreé only
      `,
      img:'img/whooperjr.png',
      price: '$2.50',
      category: 'burgers'
    },
    {
      name:'Texas Burger',
      description:`
      Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.
    
      *Weight based on pre-cooked patty
      
      Entreé only
      `,
      img:'img/texas.png',
      price: '$5.25',
      category: 'burgers'
    },
    {
      name:'Cheeseburger',
      description:`
      Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.
    
      *Weight based on pre-cooked patty
      
      Entreé only
      `,
      img: 'img/cheeseburger.png',
      price: '$2.25',
      category: 'burgers'
    }
    ];
var sweets = [
    {
    name: 'Apple Pie',
    description: 'Cok lezzetli bir elmalı kurabiye',
    price: '$0.50',
    img: 'img/apple_pie.png',
    category: 'sweets'
    },
    {
    name: 'King Sundae',
    description: 'Cok lezzetli bir sundae',
    price:'$0.40',
    img: 'img/sundae.png',
    category: 'sweets'
    },
    {
    name:'Sufle',
    description: 'Cok lezzetli bir sufle',
    price: '$0.60',
    img: 'img/sufle.png',
    category: 'sweets'
    }
];
var coffees = [
    {
    name: 'Latte',
    description: 'Mis gibi latte',
    price: '$0.70',
    img: 'img/latte.png',
    category: 'coffees'
    },
    {
    name: 'Mocha',
    description: 'Cok lezzetli bir elmalı kurabiye',
    price: '$0.50',
    img: 'img/apple_pie.png',
    category: 'coffees'
    },
    {
    name: 'Cappucino',
    description: 'Cok lezzetli bir elmalı kurabiye',
    price: '$0.50',
    img: 'img/apple_pie.png',
    category: 'coffees'
    },
];
var pages = {
burgers,
sweets,
coffees
}
    let i = 0;
    let seconds = 11;
    const productSlide = (i,page,seconds) => {
    const index = i%pages[page].length;
    if (document.querySelector(`.${page}`))
    {
        document.querySelector(`.${page}`).remove();
    }
    const products = document.createElement(`div`);
    products.classList = `header ${page}`;
    products.animate(
        [
        { opacity:0,transform:'translate(2500px,-50%)'}
        ],
        {
        duration:1300,
        delay:seconds-1200
        }
    )
    const header_img = document.createElement(`div`);
        header_img.classList = 'header_img';
        if (page === 'burgers') {
            const img_div = document.createElement(`div`);
            const burger_img = document.createElement(`img`);
            const fries_img = document.createElement(`img`);
            const cola_img = document.createElement(`img`);
            burger_img.setAttribute("src",pages[page][index].img);
            burger_img.classList = page;
            fries_img.setAttribute("src",'img/fries.png');
            fries_img.classList = 'fries';
            cola_img.setAttribute("src",'img/cocacola.png');
            cola_img.classList = 'cola';
            header_img.append(burger_img);
            img_div.append(cola_img);
            img_div.append(fries_img);
            header_img.append(img_div);
        } else {
            const product_img = document.createElement(`img`);
            product_img.setAttribute("src",pages[page][index].img);
            product_img.classList = page;
            header_img.append(product_img);
        }

    const header_description = document.createElement(`div`);
    header_description.classList = 'header_description';
        const header_description_h1 = document.createElement(`h1`);
        const header_description_h3 = document.createElement(`h3`);
        const header_description_p = document.createElement(`p`);
        header_description.append(header_description_h1);
        header_description.append(header_description_h3);
        header_description.append(header_description_p);
    products.append(header_img);
    products.append(header_description);
    document.querySelector('.board').append(products)
    document.querySelector(`.${page} .header_description h1`).textContent = pages[page][index].name;
    document.querySelector(`.${page} .header_description h3`).textContent = pages[page][index].price;
    document.querySelector(`.${page} .header_description p`).textContent = pages[page][index].description;
    }
    productSlide(i,'burgers',seconds*1000);
    const productSlideTime = setInterval(()=>{
        productSlide(++i,'burgers',seconds*1000);
    },seconds*1000)