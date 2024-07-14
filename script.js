window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
}

setScrollVar()


const about2 = document.getElementById("about-text-2");
const about3 = document.getElementById("about-text-3");
const about4 = document.getElementById("about-text-4");

// const screenHeight = htmlElement.clientHeight;
window.addEventListener('scroll', () => {
  if (window.scrollY < 1300) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (window.scrollY >= 1300 && window.scrollY < 2300) {
    about2.style.opacity = "1"
    about3.style.opacity = "0"
    about4.style.opacity = "0"
  }
  if (window.scrollY >= 2300 && window.scrollY < 3300) {
    about2.style.opacity = "0"
    about3.style.opacity = "1"
    about4.style.opacity = "0"
  } 
  if (window.scrollY >= 3300 && window.scrollY < 4300) {
    about2.style.opacity = "0"
    about3.style.opacity = "0"
    about4.style.opacity = "1"
  } 
})
