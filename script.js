// window.addEventListener("scroll", setScrollVar)
// window.addEventListener("resize", setScrollVar)

// function setScrollVar() {
//   const htmlElement = document.documentElement;
//   const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
//   console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
//   htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
// }

// function setScrollVar() {
//   const compensation = window.innerHeight;
//   const scrollY = window.scrollY;
//   const sec2Start = document.querySelector(".sec-2").offsetTop - compensation;
//   const sec2Height = document.querySelector(".sec-2").scrollHeight + compensation
//   const sec2Scrolled = (scrollY - sec2Start);
//   const sec2ScrolledPercent = Math.min(Math.max((sec2Scrolled / sec2Height) * 100, 0), 100);
//   console.log('scrolled', sec2ScrolledPercent)
// }

// setScrollVar()


// VARIABLES FOR SCROLL ANIMATIONS

const about2 = document.getElementById("about-text-2");
const about3 = document.getElementById("about-text-3");
const about4 = document.getElementById("about-text-4");
const compensation = window.innerHeight / 2;
const sec2Start = document.querySelector(".sec-2").offsetTop - compensation;
const sec2Height = document.querySelector(".sec-2").scrollHeight + compensation

window.addEventListener('scroll', () => {
  const sec2Scrolled = (scrollY - sec2Start);
  const sec2ScrolledPercent = Math.min(Math.max((sec2Scrolled / sec2Height) * 100, 0), 100);
  // console.log('window', window.scrollY)
  // console.log('start', sec2Start)
  console.log('scroll', sec2ScrolledPercent)


  if (sec2ScrolledPercent < 30) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (sec2ScrolledPercent >= 30 && sec2ScrolledPercent < 50) {
    about2.style.opacity = "1"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (sec2ScrolledPercent >= 50 && sec2ScrolledPercent < 70) {
    about2.style.opacity = "0"
    about3.style.opacity = "1"
    about4.style.opacity = "0"
  } 
  if (sec2ScrolledPercent >= 70 && sec2ScrolledPercent < 100) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "1"
  } 
})
