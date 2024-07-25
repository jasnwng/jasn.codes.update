const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("#title-main span, #title-secondary, a, button, .light");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
        // el.classList.add("bounce")
        })
        link.addEventListener("mouseleave", () => {
          el.classList.remove("hover");
          // el.classList.remove("bounce")
      })
    })
  })
})

window.addEventListener("click", () => {
  cursor.forEach(el => {
    el.classList.add("expand")
    setTimeout(() => {
      el.classList.remove("expand")
    }, 500)
  })
})


// VARIABLES FOR SCROLL ANIMATIONS


const about1 = document.getElementById("about-container-1");
const about2 = document.getElementById("about-container-2");
const about3 = document.getElementById("about-container-3");
const about4 = document.getElementById("about-container-4");

const compensation = window.innerHeight / 2;

const sec1Start = document.querySelector(".sec-1").offsetTop - compensation;
const sec1Height = document.querySelector(".sec-1").scrollHeight + compensation
const sec2Start = document.querySelector(".sec-2").offsetTop - compensation;
const sec2Height = document.querySelector(".sec-2").scrollHeight + compensation
const sec3Start = document.querySelector(".sec-3").offsetTop - compensation;
const sec3Height = document.querySelector(".sec-3").scrollHeight + compensation


const titleMain = document.querySelector("#title-main-container");
const worksContainer = document.querySelector(".works-item-container");


const showScrollIcon = () => {
  setTimeout(() => {
    if (scrollY < 50) {
      document.querySelector(".scroll-icon").style.opacity = '1';
    }
  }, 5000)
}

showScrollIcon();

window.addEventListener('scroll', () => {

  // console.log('sy', scrollY)

  if (scrollY > 50) {
    document.querySelector(".scroll-icon").style.opacity = '0';
  }


  // const sec1Scrolled = (scrollY - sec1Start);
  // const sec1ScrolledPercent = Math.max((sec1Scrolled / sec1Height) * 100, 0);
  // console.log('s1 %', sec1ScrolledPercent);

  // // SECTION 1 HEADING 

  // let titleTranslateYDistance = 38
  // let titleTranslateYCalc = Math.min(Math.max(sec1ScrolledPercent - 50, 0), 100) / 100 * titleTranslateYDistance

  // let fonts = Math.max(Math.min(`3vw`, `36px`), `24px`);

  // titleMain.style.top = `${40 - titleTranslateYCalc}vh`;
  // if (sec1ScrolledPercent > 100) {
  //   titleMain.style.width = `${5}em`;

  //   titleMain.style.fontSize = fonts;
  // }

  // SECTION 2 ABOUT ANIMATIONS
  
  const sec2Scrolled = (scrollY - sec2Start);
  const sec2ScrolledPercent = Math.min(Math.max((sec2Scrolled / sec2Height) * 100, 0), 100);
  

  if (sec2ScrolledPercent < 20) {
    about1.style.opacity = "1"
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (sec2ScrolledPercent >= 20 && sec2ScrolledPercent < 40) {
    about2.style.opacity = "1"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
    // about2.style.transform = "translate(0, 0%)"
  }
  if (sec2ScrolledPercent >= 40 && sec2ScrolledPercent < 60) {
    about2.style.opacity = "0"
    about3.style.opacity = "1"
    about4.style.opacity = "0"
    // about2.style.transform = "translate(0, -100%)"
    // about3.style.transform = "translate(0, 0%)"
  }
  if (sec2ScrolledPercent >= 60 && sec2ScrolledPercent < 100) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "1"
    // about2.style.transform = "translate(0, -100%)"
    // about3.style.transform = "translate(0, -100%)"
    // about4.style.transform = "translate(0, 0%)"
  }


  // SECTION 3 PROJECTS

  const mediaQueryCondition = window.matchMedia('( min-width: 1008px )')
  if (mediaQueryCondition.matches) {
    const sec3Scrolled = (scrollY - sec3Start);
    const sec3ScrolledPercent = Math.min(Math.max((sec3Scrolled / sec3Height) * 100, 0), 100);
    // console.log('s3', sec3ScrolledPercent)
    // console.log('s3calc', Math.min(Math.max(sec3ScrolledPercent - 20, 0), 50) / 50);
    let worksContainerDistance = 200;
    let worksContainerCalc = Math.min(Math.max(sec3ScrolledPercent - 10, 0), 80) / 80;
    // console.log('p', worksContainerCalc);
    worksContainer.style.transform = `translateX(${100 - worksContainerDistance * worksContainerCalc}%)`
  }
  
})

const lightThemeIcon = document.querySelector(".light-toggle-icon");
const toggleLight = () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    lightThemeIcon.src = "public/icons/moon.png";
    lightThemeIcon.style.width = "80%";
    lightThemeIcon.style.height = "80%";
  } else {
    lightThemeIcon.src = "public/icons/sun.png";
lightThemeIcon.style.width = "100%";
    lightThemeIcon.style.height = "100%";
  }

  
}

const navLinks = document.querySelectorAll(".nav-link, #nav-buttons, .nav-text");

const toggleNav = () => {

  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
  
  if (document.body.dataset.nav === 'true') {
    navLinks.forEach(link => {
      link.classList.add("rise") 
    })


  } else {
     navLinks.forEach(link => {
      link.classList.remove("rise") 
    })
  }
}



