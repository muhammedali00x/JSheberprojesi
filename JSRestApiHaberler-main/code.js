const apiKaynakAdresi = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
const apiAyarlari = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 4dt29quqTUIne0aMPOL4DL:0l849tJwAWlI1Wy5PlP05N"
  }
};

let veriler;
let sunucuYaniti;
let slideIndex = 0;

async function haberListele() {
  try {
    sunucuYaniti = await fetch(apiKaynakAdresi, apiAyarlari);
    veriler = await sunucuYaniti.json();

    veriler.result.forEach(eleman => {
      const haberDiv = document.createElement('div');
      haberDiv.classList.add('mySlides'); // Her haber için bir slayt

      const haberBasligi = document.createElement('h2');
      haberBasligi.textContent = eleman.name;
      haberDiv.appendChild(haberBasligi);

      document.querySelector(".haberler").appendChild(haberDiv);
    });

    // İlk slaytı göster
    showSlides();
  } catch (error) {
    console.error(error);
  }
}

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Her 2 saniyede bir slaytı değiştir
}

haberListele();
