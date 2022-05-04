function displayMessage(){
    const portfolioBtnWinter = document.querySelector('.btn-black-winter');
    const portfolioBtnSpring = document.querySelector('.btn-black-spring');
    const portfolioBtnSummer = document.querySelector('.btn-black-summer');
    const portfolioBtnAutumn = document.querySelector('.btn-black-autumn');
    
        const portfolioImage1 = document.querySelector('.portfolio-image-1');
        const portfolioImage2 = document.querySelector('.portfolio-image-2');
        const portfolioImage3 = document.querySelector('.portfolio-image-3');
        const portfolioImage4 = document.querySelector('.portfolio-image-4');
        const portfolioImage5 = document.querySelector('.portfolio-image-5');
        const portfolioImage6 = document.querySelector('.portfolio-image-6');
    
        portfolioBtnWinter.addEventListener('click', () => {
          portfolioImage1.src = "./assets/img/winter/1.jpg"
          portfolioImage2.src = "./assets/img/winter/2.jpg"
          portfolioImage3.src = "./assets/img/winter/3.jpg"
          portfolioImage4.src = "./assets/img/winter/4.jpg"
          portfolioImage5.src = "./assets/img/winter/5.jpg"
          portfolioImage6.src = "./assets/img/winter/6.jpg"
          portfolioBtnWinter.style = "background-color: #bdae82; color: black";
          portfolioBtnSpring.style = "background-color: black"
          portfolioBtnSummer.style = "background-color: black"
          portfolioBtnAutumn.style = "background-color: black"
          
    });

        portfolioBtnSpring.addEventListener('click', () => {
            portfolioImage1.src = "./assets/img/spring/1.jpg"
            portfolioImage2.src = "./assets/img/spring/2.jpg"
            portfolioImage3.src = "./assets/img/spring/3.jpg"
            portfolioImage4.src = "./assets/img/spring/4.jpg"
            portfolioImage5.src = "./assets/img/spring/5.jpg"
            portfolioImage6.src = "./assets/img/spring/6.jpg"
            portfolioBtnSpring.style = "background-color: #bdae82; color: black";
            portfolioBtnWinter.style = "background-color: black"
            portfolioBtnSummer.style = "background-color: black"
            portfolioBtnAutumn.style = "background-color: black"
            
            
    });

        portfolioBtnSummer.addEventListener('click', () => {
            portfolioImage1.src = "./assets/img/summer/1.jpg"
            portfolioImage2.src = "./assets/img/summer/2.jpg"
            portfolioImage3.src = "./assets/img/summer/3.jpg"
            portfolioImage4.src = "./assets/img/summer/4.jpg"
            portfolioImage5.src = "./assets/img/summer/5.jpg"
            portfolioImage6.src = "./assets/img/summer/6.jpg"
            portfolioBtnSummer.style = "background-color: #bdae82; color: black";
            portfolioBtnWinter.style = "background-color: black"
            portfolioBtnSpring.style = "background-color: black"
            portfolioBtnAutumn.style = "background-color: black"
    });

        portfolioBtnAutumn.addEventListener('click', () => {
            portfolioImage1.src = "./assets/img/autumn/1.jpg"
            portfolioImage2.src = "./assets/img/autumn/2.jpg"
            portfolioImage3.src = "./assets/img/autumn/3.jpg"
            portfolioImage4.src = "./assets/img/autumn/4.jpg"
            portfolioImage5.src = "./assets/img/autumn/5.jpg"
            portfolioImage6.src = "./assets/img/autumn/6.jpg"
            portfolioBtnAutumn.style = "background-color: #bdae82; color: black";
            portfolioBtnWinter.style = "background-color: black"
            portfolioBtnSpring.style = "background-color: black"
            portfolioBtnSummer.style = "background-color: black"
    });


    



} displayMessage();




document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'light') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'light')
    }
    addLightClassToHTML()
  });
  
  function addLightClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'light') {
        document.querySelector('html').classList.add('light');
        document.querySelector('.themetoggle span').innerHTML = "<img src ='./assets/svg/carbon_sun.svg' wight = '45' height = '45'>";
      }
      else {
        document.querySelector('html').classList.remove('light');
        document.querySelector('.themetoggle span').innerHTML = "<img src ='./assets/svg/moon.svg' wight = '45' height = '45'>";
      }
    } catch (err) { }
  }
  
  addLightClassToHTML();



  var btnContainer = document.getElementById("switch-lng");
    
    
  var btns = btnContainer.getElementsByClassName("btn_swtch");
  
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  function preloadSummerImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/summer/${i}.jpg`;
    }
  }
  preloadSummerImages();

  function preloadWinterImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/winter/${i}.jpg`;
    }
  }
  preloadWinterImages();

  function preloadSpringImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/spring/${i}.jpg`;
    }
  }
  preloadSpringImages();

  function preloadAutumnImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/autumn/${i}.jpg`;
    }
  }
  preloadAutumnImages();




