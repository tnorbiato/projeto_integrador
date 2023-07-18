let sliderCartaz = tns({
  container : ".my-sliderCartaz",
  "slideBy" : 1,
  "speed" : 400,
  "nav" : false,
  controlsContainer : "#controlsCartaz",
  prevButton : ".prevCartaz",
  nextButton : ".nextCartaz",
  responsive : {
    1600: {
      items : 5,
      gutter : 10
    },
    1024: {
      items : 4,
      gutter : 10
    },
    768: {
      items : 3,
      gutter : 10
    },
    480: {
      items : 2,
      gutter : 10
    },
  }
});

let sliderBreve = tns({
  container : ".my-sliderBreve",
  "slideBy" : 1,
  "speed" : 400,
  "nav" : false,
  controlsContainer : "#controlsBreve",
  prevButton : ".prevBreve",
  nextButton : ".nextBreve",
  responsive : {
    1600: {
      items : 5,
      gutter : 10
    },
    1024: {
      items : 4,
      gutter : 10
    },
    768: {
      items : 3,
      gutter : 10
    },
    480: {
      items : 2,
      gutter : 10
    },
  }
});

let cartazFilme4 = document.querySelector("#tns1-item3 > div");
cartazFilme4.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-4">
      <a href="https://www.youtube.com/watch?v=BydjQP2aFd0&pp=ygURdHJhaWxlciBlbGVtZW50b3M%3D">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Elementos</h3>
    </div>
  </div>
</div>
`

let cartazFilme4Clone1 = document.querySelector("#tns1 > div:nth-child(20)");
cartazFilme4Clone1.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-4">
      <a href="https://www.youtube.com/watch?v=BydjQP2aFd0&pp=ygURdHJhaWxlciBlbGVtZW50b3M%3D">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Elementos</h3>
    </div>
  </div>
</div>
`
let cartazFilme4Clone2 = document.querySelector("#tns1 > div:nth-child(8)");
cartazFilme4Clone2.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-4">
      <a href="https://www.youtube.com/watch?v=BydjQP2aFd0&pp=ygURdHJhaWxlciBlbGVtZW50b3M%3D">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Elementos</h3>
    </div>
  </div>
</div>
`

let cartazFilme5 = document.querySelector("#tns1-item4 > div");
cartazFilme5.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-5">
        <a href="https://www.youtube.com/watch?v=e8-GtGmlu18&pp=ygUeU29icmVuYXR1cmFsOiBBIFBvcnRhIFZlcm1lbGhh">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Sobrenatural: A Porta Vermelha</h3>
    </div>
  </div>
</div>
`

let cartazFilme5Clone1 = document.querySelector("#tns1 > div:nth-child(21)");
cartazFilme5Clone1.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-5">
        <a href="https://www.youtube.com/watch?v=e8-GtGmlu18&pp=ygUeU29icmVuYXR1cmFsOiBBIFBvcnRhIFZlcm1lbGhh">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Sobrenatural: A Porta Vermelha</h3>
    </div>
  </div>
</div>
`

let cartazFilme5Clone2 = document.querySelector("#tns1 > div:nth-child(9)");
cartazFilme5Clone2.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-5">
        <a href="https://www.youtube.com/watch?v=e8-GtGmlu18&pp=ygUeU29icmVuYXR1cmFsOiBBIFBvcnRhIFZlcm1lbGhh">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Sobrenatural: A Porta Vermelha</h3>
    </div>
  </div>
</div>
`

let cartazFilme6 = document.querySelector("#tns1-item5 > div");
cartazFilme6.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-6">
        <a href="https://www.youtube.com/watch?v=L8sDZ0EsQ4w&pp=ygUPcGVyZGlkYSB0cmFpbGVy">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Perdida</h3>
    </div>
  </div>
</div>
`

let cartazFilme6Clone1 = document.querySelector("#tns1 > div:nth-child(22)");
cartazFilme6Clone1.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-6">
        <a href="https://www.youtube.com/watch?v=L8sDZ0EsQ4w&pp=ygUPcGVyZGlkYSB0cmFpbGVy">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Perdida</h3>
    </div>
  </div>
</div>
`

let cartazFilme6Clone2 = document.querySelector("#tns1 > div:nth-child(10)");
cartazFilme6Clone2.innerHTML = `
<div>
  <div class="slide">
    <div class="slide-img imgCartaz-6">
        <a href="https://www.youtube.com/watch?v=L8sDZ0EsQ4w&pp=ygUPcGVyZGlkYSB0cmFpbGVy">Ver trailer</a>
    </div>
    <br>
    <div>
        <h3>Perdida</h3>
    </div>
  </div>
</div>
`

let imgCartaz4 = document.querySelector("#tns1-item3 > div > div > div > div.slide-img.imgCartaz-4");
imgCartaz4.style.backgroundImage = "url('/img/filmes-index/elementos.jpg')";

let imgCartaz5 = document.querySelector("#tns1-item4 > div > div > div > div.slide-img.imgCartaz-5");
imgCartaz5.style.backgroundImage = "url('/img/filmes-index/sobrenatural-a-porta-vermelha.jpg')";

let imgCartaz6 = document.querySelector("#tns1-item5 > div > div > div > div.slide-img.imgCartaz-6");
imgCartaz6.style.backgroundImage = "url('/img/filmes-index/perdida.jpg')";

let imgCartaz4Clone1 = document.querySelector("#tns1 > div:nth-child(20) > div > div > div.slide-img.imgCartaz-4");
imgCartaz4Clone1.style.backgroundImage = "url('/img/filmes-index/elementos.jpg')";

let imgCartaz5Clone1 = document.querySelector("#tns1 > div:nth-child(21) > div > div > div.slide-img.imgCartaz-5");
imgCartaz5Clone1.style.backgroundImage = "url('/img/filmes-index/sobrenatural-a-porta-vermelha.jpg')";

let imgCartaz6Clone1 = document.querySelector("#tns1 > div:nth-child(22) > div > div > div.slide-img.imgCartaz-6");
imgCartaz6Clone1.style.backgroundImage = "url('/img/filmes-index/perdida.jpg')";

let imgCartaz4Clone2 = document.querySelector("#tns1 > div:nth-child(8) > div > div > div.slide-img.imgCartaz-4");
imgCartaz4Clone2.style.backgroundImage = "url('/img/filmes-index/elementos.jpg')";

let imgCartaz5Clone2 = document.querySelector("#tns1 > div:nth-child(9) > div > div > div.slide-img.imgCartaz-5");
imgCartaz5Clone2.style.backgroundImage = "url('/img/filmes-index/sobrenatural-a-porta-vermelha.jpg')";

let imgCartaz6Clone2 = document.querySelector("#tns1 > div:nth-child(10) > div > div > div.slide-img.imgCartaz-6");
imgCartaz6Clone2.style.backgroundImage = "url('/img/filmes-index/perdida.jpg')";