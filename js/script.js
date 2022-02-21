// Sliderı başlatacak olan fonksiyon
const startSlider = (data) => {
    // döngü iterationu
    let i = 0;

    //delay saniyesi
    let seconds = 11;
    
     // Slide'ı başlatacak olan fonksiyon
    const productSlide = (i,page,seconds) => {

      // iteration değerinin kaçıncı item'a karşılık geldiğini bulmak için modunu alıyoruz
      const index = i%data.length;

      console.log("index:",index);
      console.log("data",data);
      console.log("i",i);
      
      // Eğer mevcutta bir slide varsa onu kaldırıyoruz
      if (document.querySelector(`.header`))
      {
          document.querySelector(`.header`).remove();
      }
      // board'umuzu içerecek header divini oluşturuyoruz
      const products = document.createElement(`div`);

      // classlarımızı ekliyoruz
      products.classList = `header ${page}`;
      
      // Oluşturduğumuz elemente belirli bir süre sonra geçiş yaparak gitmesini sağlıyoruz.
      products.animate(
          [
          { opacity:0,transform:'translate(2500px,-50%)'}
          ],
          {
          duration:1300,
          
          // delayı seconds kadar verirsek slide efekti görünmeden element kaldırılır o yüzden duration kadar azaltıyoruz
          delay:seconds-1300
          }
      )
      // ürünün resmi için div oluşturuyoruz
      const header_img = document.createElement(`div`);

          // gerekli classı ekliyoruz
          header_img.classList = 'header_img';
          if (page === 'burgers') {
              // sayfa burgers ise patates ve cola imgleri de olacak o yüzden ona özel işlem yapıyoruz.

              // bu ek imgleri kapsaycak divi oluşturuyoruz
              const img_div = document.createElement(`div`);

              // burger img'ini oluşturuyoruz
              const burger_img = document.createElement(`img`);

              // patates img'ini oluşturuyoruz
              const fries_img = document.createElement(`img`);

              // cola img'ini oluşturuyoruz
              const cola_img = document.createElement(`img`);

              // burger img'ine data'dan aldığımız src'yi atıyoruz
              burger_img.setAttribute("src",data[index].img);

              // burger img'ine data'dan gelen page değerini class olarak atıyoruz.
              burger_img.classList = page;

              // patates img'ine gerekli img'i atıyoruz
              fries_img.setAttribute("src",'img/fries.png');

              // patates img'ine gerekli class'ı atıyoruz
              fries_img.classList = 'fries';

              // cola img'ine gerekli img'i atıyoruz
              cola_img.setAttribute("src",'img/cocacola.png');

              // cola img'ine gerekli class'ı atıyoruz
              cola_img.classList = 'cola';

              // ürün resmi için oluşturduğumuz div elementine burger img'ini ekliyoruz
              header_img.append(burger_img);

              // patates ve cola için kapsayıcı olan div elementinin içine cola img'ini ekliyoruz
              img_div.append(cola_img);

              // patates ve cola için kapsayıcı olan div elementinin içine patates img'ini ekliyoruz
              img_div.append(fries_img);

              // ürün resmi için oluşturduğumuz div elementine burger img'ini ekliyoruz
              header_img.append(img_div);
          } else {
              // sayfa burgers değilse 
              
              // ürün img'ini oluşturuyoruz
              const product_img = document.createElement(`img`);

              // ürün img'ine data'dan aldığımız src'yi atıyoruz
              product_img.setAttribute("src",data[index].img);

              // ürün img'ine data'dan gelen page değerini class atıyoruz
              product_img.classList = page;

              // ürün resmi için oluşturduğumuz div elementine ürün img'ini atıyoruz.
              header_img.append(product_img);
          }
      // sayfanın başlığını içerecek h1 elementini seçiyoruz
      const title = document.querySelector("#slideTitle");

      /*
      bu elementin içeriği data'dan gelen kategori değerine yani page değerinin büyük harfle çevrilmiş haline eşit değilse
      bu içeriği animasyonla birlikte kategori değeriyle değiştiriyoruz
      */
      if (title.textContent !== page.toUpperCase()){
        title.animate([
          {opacity:0},
          {opacity:1}
        ],
        {
          duration:2000
        })
        title.textContent = page.toUpperCase();
      }
      // ürün başlık, fiyat ve yazı alanı için kapsayıcı div elementini oluşturuyoruz
      const header_description = document.createElement(`div`);

      // bu elemente gerekli class'ı ekliyoruz
      header_description.classList = 'header_description';

          // ürün başlık elementini oluşturuyoruz
          const header_description_h1 = document.createElement(`h1`);

          // ürün fiyat elementini oluşturuyoruz
          const header_description_h3 = document.createElement(`h3`);

          // ürün açıklama elementini oluşturuyoruz
          const header_description_p = document.createElement(`p`);

          //ürün başlık elementini kapsayıcı div elementine ekliyoruz
          header_description.append(header_description_h1);

          //ürün fiyat elementini kapsayıcı div elementine ekliyoruz
          header_description.append(header_description_h3);

          //ürün açıklama elementini kapsayıcı div elementine ekliyoruz
          header_description.append(header_description_p);
      
      // board'umuzu içerecek olan div elementine ürün img'ini içeren div elementi ekliyoruz
      products.append(header_img);

      // board'umuzu içerecek olan div elementine ürün bilgilerini içeren div elementi ekliyoruz
      products.append(header_description);

      // board'umuzu içerecek olan div elementini belirlediğimiz board kapsayıcı divine ekliyoruz.
      document.querySelector('.board').append(products)
      
      // eklediğimiz ürün başlık elementinin içeriğine data'dan gelen ürün adını ekliyoruz
      document.querySelector(`.${page} .header_description h1`).textContent = data[index].name;

      // eklediğimiz ürün fiyat elementinin içeriğine data'dan gelen ürün fiyatını ekliyoruz
      document.querySelector(`.${page} .header_description h3`).textContent = data[index].price;

      // eklediğimiz ürün açıklama elementinin içeriğine data'dan gelen ürün açıklamasını ekliyoruz
      document.querySelector(`.${page} .header_description p`).textContent = data[index].description;
    }

    // sayfa ilk açıldığında çalışması için slide fonksiyonunu çağırıyoruz
    productSlide(i,data[(i%data.length)].category,seconds*1000);

    // timer'ı ayarlıyoruz ve her delay süresi tanımlandığında slide fonksiyonunu çağırıyor
    const productSlideTime = setInterval(()=>{
      // iteration her zaman birer birer artacak
      // ikinci paramtere kategoriyi gönderiyoruz ve ona göre element class'ı set ediliyor
      // üçüncü parametre delay süresi, board'un kapanma süresini ayarlamada kullanılacak
      productSlide(++i,data[(i%data.length)].category,seconds*1000);
    },seconds*1000)
}
const getProducts = () => {
  // data'dan fetch'le verileri alıyoruz
  fetch('./js/data.json').then((res)=>{
    return res.json()
  }).then(data=>{
    // başarılı olursa slider'ı başlatıyoruz
    startSlider(data.products);
  }).catch(err=>{
    // Bir hata olursa burada alert ile yazacak
   alert(err.message+"\nVeriler getirilirken bir hata oluştu.");
  })
}
getProducts();