const startSlider = (data) => {
    let i = 8;
    let seconds = 11;
    const productSlide = (i,page,seconds) => {
      const index = i%data.length;
      console.log("index:",index);
      console.log("data",data);
      console.log("i",i);
      if (document.querySelector(`.header`))
      {
          document.querySelector(`.header`).remove();
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
              burger_img.setAttribute("src",data[index].img);
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
              product_img.setAttribute("src",data[index].img);
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

      document.querySelector(`.${page} .header_description h1`).textContent = data[index].name;
      document.querySelector(`.${page} .header_description h3`).textContent = data[index].price;
      document.querySelector(`.${page} .header_description p`).textContent = data[index].description;
    }
    productSlide(i,data[(i%data.length)].category,seconds*1000);
    const productSlideTime = setInterval(()=>{
      productSlide(++i,data[(i%data.length)].category,seconds*1000);
    },seconds*1000)
}
const getProducts = () => {
  fetch('./js/data.json').then((res)=>{
    return res.json()
  }).then(data=>{
    startSlider(data.products);
  }).catch(err=>{
   alert(err.message+"\nVeriler getirilirken bir hata oluştu.");
  })
}
getProducts();