# Menu Board Slider Uygulaması
https://radiant-praline-ee25a2.netlify.app

Bu örnek bir restaurant menü tabelası slider uygulamasıdır.
Bu içerik 1920x1080 pixel çözünürlüğünde, Google Chrome tarayıcısında çalıştırılmak üzere tasarlanmıştır.
İçerik herhangi bir paket içermemektedir.


## Uygulamayı Çalıştırma

Aşağıdaki komutla projeyi klonlayın.

    git clone https://github.com/bgryks18/menuboard.git
Ve proje klasörüne geçin

    cd menuboard

Uygulamanın bir sunucuda çalışması gerekir.
Uygulamanın testi live-server'da yapılmıştır. 
Kurulum için aşağıdaki komutu çalıştırabilirsiniz.

    npm install -g live-server


## Uygulamayı Test Etme

    live-server
  komutu ile live-server'ı çalıştırın (veya hangi sunucuyu kullanıyorsanız onu çalıştırın) ve sunucu adresinizi tarayıcıda açın.
  
## Slider Nasıl Çalışıyor
  Slider, data.json dosyasından gelen verileri fetch edip delay ile birlikte bir döngüye sokarak önceki verinin DOM elementini silip yeni gelen veriyi DOM'a ekleyerek çalışıyor. 
Datadan gelen her ürünün kategorisi belirlenmiş durumda. Delay ile gerçekleştirilen döngüde bu kategoriye karşılık gelen CSS class'ını, create ettiğimiz DOM elementine ekliyoruz ve animasyonu oluşuyor.
Eklenen her element sayfadan kaldırılırken belirli bir javascript animasyonu ile sağa kaydırılarak kaldırılıyor.
Ancak sayfaya eklenirken kendine özel animasyonu uygulanıyor.

## Delay Süresi
Delay süresi varsayılan 11 saniye olarak ayarlanmış durumda. Animasyon geçişlerinin de belirli bir süre almasından ve müşterinin ürünlere belirli bir süre bakabilmesi açısından azaltılmasını önermiyorum.

## Veriler

Bu örnek uygulamada, veriler uygulamanın kendi içindeki data.json dosyasında tutuluyor.

    /menuboard/js/data.json
  Bu data.json dosyasında 3 çeşit veri tipi var. Hamburgerler, tatlılar, kahveler. 
  Her kategori ismi için CSS tarafında o kategorinin ismiyle tasarlama yapıldı.
  Yeni bir kategori eklemek için o kategori ismini data.json'da belirlenmesi ve o kategori isminde CSS class'ın tasarlanması gerekir.
   

## Resimler

Uygulamadaki halihazır resimler **img** klasöründe tutuluyor.
data.json dosyasından verilerin img propertylerini dış kaynak veya yerel olarak kendi isteğiniz doğrultusunda değiştirebilirsiniz.

## Sıralama

Örnek bir uygulama olduğu için datadan gelen veriler, özel olarak bir sıralandırmaya tabii tutulmadı.
Slide edilecek her element kendi animasyonuyla slide ediliyor ve sağa kayarak sayfadan çıkıyor. Dolayısıyla verilerin karışık bir sıralamayla eklenmesi sliderı bozmayacaktır. 
