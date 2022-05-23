## set():
 >Bütün Atomlara etki eder.
 <ul>
 Sadece Atomlara Etki Eder
 
 Atomlar sayfanın hareketli en küçük parçalarıdır.
 
 Durum değişiminde en hızlı cevabı atomlar verecektir.

 Sayfanın her hareketinde güncellenme özelliğine sahiptir.
 
 Kullanım şekli olarak eğer x değişkenini 1 arttırmak istersek...
 
 İçerisinde return edilebilen x değişkeni taşıyan bütün atomlarda etki gösterecektir.
 
 <code>set(x++)</code> yazmak bütün atomlara etki edecektir.
</ul>
<br><br>

## gVal():
>Belirli sayfayı güncellemeyi sağlar
<ul>
<li>Değiştirilmek istenen sayfa öğesinin güncellenmesini sağlar</li>
<br>
<li>Dışarıdan çağırılan sayfalar ve atomlar <b>String Interpolation</b> kullandığı için sayfanın bazı bölgelerinde tanımlanan değişkenleri güncellemek isteyebiliriz.</li>
<br>
<li>Bunun için gVal kullanım şekline örnek olarak... : <br><br>
Değiştirmek için istediğimiz sayfa header sayfası olsun ve header sayfasının değişken ismi sisteme header olarak tanıtılmış olsun...
<br><br>
<code>gVal("header",x++)</code>

Burada header sayfasını güncelleyerek callback olarak x değerini arttırmış olduk.
<br>


</li>
</ul>
