const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll("#title-main span, a, button");

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



async function scrollDistance (callback, refresh) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Variables
	var isScrolling, start, end, distance;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Set starting position
		if (!start) {
			start = window.pageYOffset;
		}

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Calculate distance
			end = window.pageYOffset;
			distance = end - start;

			// Run the callback
			callback(distance, start, end);

			// Reset calculations
			start = null;
			end = null;
			distance = null;

		}, refresh || 66);

	}, false);

};



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

// const portfolioFestify = document.getElementById("festify-image");
// const portfolioSpot = document.getElementById("spot-image");
// const portfolioAr = document.getElementById("ar-image");


const compensation = window.innerHeight / 2;
const sec2Start = document.querySelector(".sec-2").offsetTop - compensation;
const sec2Height = document.querySelector(".sec-2").scrollHeight + compensation
// const sec3Start = document.querySelector(".sec-3").offsetTop - compensation;
// const sec3Height = document.querySelector(".sec-3").scrollHeight + compensation

window.addEventListener('scroll', () => {


  // SECTION 2 ABOUT ANIMATIONS
  
  const sec2Scrolled = (scrollY - sec2Start);
  const sec2ScrolledPercent = Math.min(Math.max((sec2Scrolled / sec2Height) * 100, 0), 100);
  
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
  
  // // SECTION 3 PORTFOLIO ANIMATIONS
  
  // const sec3Scrolled = (scrollY - sec3Start);
  // const sec3ScrolledPercent = Math.min(Math.max((sec3Scrolled / sec3Height) * 100, 0), 100);
  // console.log('scroll3', sec3ScrolledPercent)
  
  // if (sec3ScrolledPercent >= 0 && sec3ScrolledPercent < 100) {
  //   window.scrollTo(window.scrollY, 0)

  // }
  // if (sec3ScrolledPercent < 10) {
  //   portfolioFestify.style.opacity = "0"
  //   portfolioSpot.style.opacity = "0"
  //   portfolioAr.style.opacity = "0"
  // }


  // if (sec3ScrolledPercent >= 10 && sec3ScrolledPercent < 30) {
  //   portfolioFestify.style.opacity = "1"
  //   portfolioSpot.style.opacity = "0"
  //   portfolioAr.style.opacity = "0"
  // }

  // if (sec3ScrolledPercent >= 30 && sec3ScrolledPercent < 50) {
  //   portfolioFestify.style.opacity = "0"
  //   portfolioSpot.style.opacity = "1"
  //   portfolioAr.style.opacity = "0"
  // }

  //  if (sec3ScrolledPercent >= 50 && sec3ScrolledPercent < 100) {
  //   portfolioFestify.style.opacity = "0"
  //   portfolioSpot.style.opacity = "0"
  //   portfolioAr.style.opacity = "1"
  // }

})

const toggleNav = () => {
  console.log('nav')

  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';

  
}
