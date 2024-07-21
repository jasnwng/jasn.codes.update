const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("#title-main span, #title-secondary, a, button");

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

const about2 = document.getElementById("about-text-2");
const about3 = document.getElementById("about-text-3");
const about4 = document.getElementById("about-text-4");

const compensation = window.innerHeight / 2;
const sec2Start = document.querySelector(".sec-2").offsetTop - compensation;
const sec2Height = document.querySelector(".sec-2").scrollHeight + compensation

const showScrollIcon = () => {
  setTimeout(() => {
    if (scrollY < 50) {
      document.querySelector(".scroll-icon").style.opacity = '1';
    }
  }, 5000)
}

showScrollIcon();

window.addEventListener('scroll', () => {

  console.log(scrollY)

  if (scrollY > 50) {
    document.querySelector(".scroll-icon").style.opacity = '0';
  }


  // SECTION 2 ABOUT ANIMATIONS
  
  const sec2Scrolled = (scrollY - sec2Start);
  const sec2ScrolledPercent = Math.min(Math.max((sec2Scrolled / sec2Height) * 100, 0), 100);
  
  if (sec2ScrolledPercent < 30) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (sec2ScrolledPercent >= 30 && sec2ScrolledPercent < 45) {
    about2.style.opacity = "1"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (sec2ScrolledPercent >= 45 && sec2ScrolledPercent < 60) {
    about2.style.opacity = "0"
    about3.style.opacity = "1"
    about4.style.opacity = "0"
  } 
  if (sec2ScrolledPercent >= 60 && sec2ScrolledPercent < 100) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "1"
  } 

})

const toggleLight = () => {
  console.log('light');
  document.body.classList.toggle("light-theme");

  
}

const navLinks = document.querySelectorAll(".nav-link, #nav-buttons, .nav-text");

const toggleNav = () => {

  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
  
  if (document.body.dataset.nav === 'true') {
    console.log('true')

    navLinks.forEach(link => {
      link.classList.add("rise") 
    })


  } else {
    console.log('false')
     navLinks.forEach(link => {
      link.classList.remove("rise") 
    })
  }
}



