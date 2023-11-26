// Section 6,7, 8

// Do not modify the below following code
/**
 * Represents a class for managing achievements.
 * @class
 */
class OurAchievements {
  /**
   * Creates an instance of OurAchievements.
   * @param {Array} data - JSON Objects of Achievements List containing icon, count, and title in Dictionary format.
   * @param {String} target - Id of the target element.
   */
  constructor(data = null, target = "OA-List") {
    if (data === null) {
      this.data = [
        {
          icon: "fa-solid fa-rocket",
          count: 50,
          title: "Startup Incubated",
        },
        {
          icon: "fa-solid fa-user",
          count: 500,
          title: "Entrepreneur Engaged",
        },
        {
          icon: "fas fa-hand-holding-usd",
          count: "10Cr",
          title: "Fund Raised",
        },
        {
          icon: "fa-solid fa-bullseye",
          count: "10k",
          title: "Job Created",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          count: "500",
          title: "Graduated",
        },
        {
          icon: "fa-solid fa-arrow-up-right-dots",
          count: "100Cr",
          title: "Valuation",
        },
      ];
    } else {
      this.data = data;
    }
    this.target = target;
  }

  /**
   * Adds an achievement to the target element.
   * @param {JSON} elem - JSON Object of Achievement containing icon, count, and title.
   * @returns {void}
   * @example
   * let OA = new OurAchievements();
   * OA.addAchievement({
   *   icon: "fa-solid fa-rocket",
   *   count: 50,
   *   title: "Startup Incubated",
   * });
   */
  addElements(elem = null) {
    if (elem === null) {
      elem = this.data;
    } else {
      if (!Array.isArray(elem)) {
        elem = [elem];
      } else if (Object.prototype.toString.call(elem) === "[object Object]") {
        elem = this.data;
      }
    }

    for (let i = 0; i < elem.length; i++) {
      let target = document.getElementById(this.target);
      let div = document.createElement("div");
      div.classList.add("OA-items");
      div.innerHTML = `
        <div class="OA-items">
          <div class="OA-items-logo flext-center">
            <i class="flext-center ${elem[i].icon}"></i>
          </div>
          <div class="OA-items-data">
            <div class="OA-items-data-num">
              <span>${elem[i].count}</span>+
            </div>
            <div class="OA-items-data-text">
              <span>${elem[i].title}</span>
            </div>
          </div>
        </div>
      `;
      target.appendChild(div);
    }
  }
}

/**
 * Represents a class for managing Latest Events.
 * @class
 */
class LatestEvents {
  /**
   * Creates an instance of LatestEvents.
   * @param {JSON} data - JSON Object of Latest Events containing img, title, date, and desc.
   * @param {String} target - Id of the target element.
   */

  constructor(data = null, target = "LE-List") {
    if (data === null) {
      this.data = [
        {
          img: "https://nsutiif.in/img/gallery/1.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/2.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/3.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/4.JPG",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/5.JPG",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/3.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/4.JPG",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/1.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/2.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/5.JPG",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/3.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/4.JPG",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/1.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
        {
          img: "https://nsutiif.in/img/gallery/2.jpeg",
          title: "Startup Incubated",
          date: "10/10/2021",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
        },
      ];
    } else {
      this.data = data;
    }
    this.target = target;
  }

  /**
   * Adds an Latest Events to the target element.
   * @param {JSON} elem - JSON Object of Latest Events containing img, count, title, date and desc.
   * @returns {void}
   * @example
   * let LE = new LatestEvents();
   * LE.addAchievement({
   *   img: "https://nsutiif.in/img/gallery/2.jpeg",
   *   title: "Startup Incubated",
   *   date: "10/10/2021",
   *   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
   * });
   */
  addElements(elem = null) {
    if (elem === null) {
      elem = this.data;
    } else {
      if (!Array.isArray(elem)) {
        elem = [elem];
      } else if (Object.prototype.toString.call(elem) === "[object Object]") {
        elem = this.data;
      }
    }
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
      let target = document.getElementById(this.target);
      let div = document.createElement("div");
      div.classList.add("LE-slider-items");
      div.innerHTML = `
      <div class="LE-items-contens">
        <img src="${elem[i].img}" alt="" />
        <div class="LE-text">
          <h3>${elem[i].title}</h3>
          <p>
            ${elem[i].desc}
          </p>
        </div>
      </div>
      `;
      target.appendChild(div);
    }
  }

  /**
   * Adds an sliding effect to Latest Events section.
   * @param {Number} delay - Delay in milliseconds.
   * @returns {void}
   * @example
   * let LE = new LatestEvents();
   * LE.setSlider(1000);
   */
  setSlider(delay = 5000) {
    setInterval(() => {
      let LE_List = $(".LE-slider-items");
      let elem = LE_List[0];
      LE_List[0].remove();
      let target = document.getElementById(this.target).append(elem);
    }, delay);
  }
}

$(document).ready(function () {
  // Initialize the OurAchievements Class
  let OA = new OurAchievements();
  // Clear the hard Achievements List
  $("#OA-List").empty();
  // Adding the Achievements to the target element
  OA.addElements();

  // Initialize the LatestEvents Class
  let LE = new LatestEvents();
  // Clear the hard Latest Events List
  $("#LE-List").empty();
  // Adding the Latest Events to the target element
  LE.addElements();
  // Adding the sliding effect to Latest Events section
  LE.setSlider();
});









// function scrollright(){
//   let LE_List = $('.LE-slider-items');
//     let elem = LE_List[LE_List.length-1];
//     $('#LE-List').prepend(elem);
// } 
class SuccessStory {
  constructor(data = null, target = "#successStory") {
    this.Target = target;
    if (data) {
      this.Data = data;
    } else {
      this.Data = [
        {
          startup: "Startup 1",
          postion: "Founder",
          story:
            "Startup 1 Story,Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo magnam tempora perferendis eveniet doloremque labore nobis cum ullam blanditiis reiciendis vero est quaerat quas id atque, quibusdam ut nisi?",
          image: "https://nsutiif.in/img/event/event3.png",
        },
        {
          startup: "Startup 2",
          postion: "Founder",
          story:
            "Startup 2 Story,Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo magnam tempora perferendis eveniet doloremque labore nobis cum ullam blanditiis reiciendis vero est quaerat quas id atque, quibusdam ut nisi?",
          image: "https://nsutiif.in/img/event/event3.png",
        },
        {
          startup: "Startup 3",
          postion: "Founder",
          story:
            "Startup 3 Story, Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo magnam tempora perferendis eveniet doloremque labore nobis cum ullam blanditiis reiciendis vero est quaerat quas id atque, quibusdam ut nisi?",
          image: "https://nsutiif.in/img/event/event3.png",
        },
        {
          startup: "Startup 4",
          postion: "Founder",
          story:
            "Startup 4 Story, Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo magnam tempora perferendis eveniet doloremque labore nobis cum ullam blanditiis reiciendis vero est quaerat quas id atque, quibusdam ut nisi?",
          image: "https://nsutiif.in/img/event/event3.png",
        },
        {
          startup: "Startup 5",
          postion: "Founder",
          story:
            "Startup 5 Story, Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo magnam tempora perferendis eveniet doloremque labore nobis cum ullam blanditiis reiciendis vero est quaerat quas id atque, quibusdam ut nisi?",
          image: "https://nsutiif.in/img/event/event3.png",
        },
        {
          startup: "Startup 6",
          postion: "Founder",
          story:
            "Startup 6 Story, Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nemo magnam tempora perferendis eveniet doloremque labore nobis cum ullam blanditiis reiciendis vero est quaerat quas id atque, quibusdam ut nisi?",
          image: "https://nsutiif.in/img/event/event3.png",
        },
      ];
    }
  }
  setData(elem) {
    let content = `<div class="sCard-sudo">
      <div class="card sCard">
        <div class="sStory-header">
          <div class="sStory-img">
            <img
              src="${elem.image}"
              alt="${elem.startup}"
              srcset=""
              class=""
            />
          </div>
          <h3>${elem.postion} of <span>${elem.startup}</span></h3>
        </div>
        <hr>
        <p class="pt-0 card-body m-0">
          ${elem.story}
        </p>
      </div>
    </div>`;
    $(this.Target).append(content);
  }
}

// Do not modify the above following code

// Please modify the following code according to your need at time of creating Class object
$(document).ready(function () {
  // Push the data from here using data argument to pass json data

    // Initialize the OurAchievements Class
    let OA = new OurAchievements();
    // Clear the hard Achievements List
    $("#OA-List").empty();
    // Adding the Achievements to the target element
    OA.addElements();
  
    // Initialize the LatestEvents Class
    let LE = new LatestEvents();
    // Clear the hard Latest Events List
    $("#LE-List").empty();
    // Adding the Latest Events to the target element
    LE.addElements();
    // Adding the sliding effect to Latest Events section
    LE.setSlider();
  let successStory = new SuccessStory();
  $("#successStory").empty();
  successStory.Data.forEach(function (elem) {
    successStory.setData(elem);
  });

  $(".left").click(function () {
    var leftPos = $("div#eventList").scrollLeft();
    // console.log(leftPos);
    $("div#eventList").animate(
      {
        scrollLeft: leftPos - 300,
      },
      800
    );
  });

  $(".right").click(function () {
    var leftPos = $("div#eventList").scrollLeft();
    // console.log(leftPos);
    $("div#eventList").animate(
      {
        scrollLeft: leftPos + 300,
      },
      800
    );
  });
});




//Section 8(Offerings and Collaborations) JS
//Collaboration Container
const carousel1 = document.querySelector(".collaboration-carousel");
firstImg = carousel1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".collaboration-wrapper i");

let isDragStart1 = false, isDragging1 = false, prevPageX, prevScrollLeft, positionDiff;




const showHideIcons = () => {
    // getting max scrollable width
    let scrollWidth = carousel1.scrollWidth - carousel1.clientWidth;
    let scrollLeft = carousel1.scrollLeft;

    // setting a threshold for comparison
    let threshold = 1;

    // If the scroll position is less than the threshold, hide the left arrow
    arrowIcons[0].style.display = scrollLeft <= threshold ? "none" : "block";

    // If the scroll position is within a threshold of the max scrollable width, hide the right arrow
    arrowIcons[1].style.display = scrollLeft >= scrollWidth - threshold ? "none" : "block";
};




arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel1.scrollLeft - (carousel1.scrollWidth - carousel1.clientWidth) > -1 || carousel1.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel1.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel1.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel1.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart1 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart1 = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel1.scrollLeft;
}

const dragging1= (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart1) return;
    e.preventDefault();
    isDragging1 = true;
    carousel1.classList.add("dragging1");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop1 = () => {
    isDragStart1 = false;
    carousel1.classList.remove("dragging1");

    if(!isDragging1) return;
    isDragging1 = false;
    autoSlide();
}

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("touchstart", dragStart1);

document.addEventListener("mousemove", dragging1);
carousel1.addEventListener("touchmove", dragging1);

document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("touchend", dragStop1);


//---------------------------------------------------------------------------------------------------------------------


//Mobile View Offering Container
const wrapper = document.querySelector(".offering-wrapper");
const carousel = document.querySelector(".offering-carousel");
const firstCardWidth = carousel.querySelector(".offering-box").offsetWidth;
const arrowBtns = document.querySelectorAll(".offering-wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(section3_box => {
    carousel.insertAdjacentHTML("afterbegin", section3_box.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(section3_box => {
    carousel.insertAdjacentHTML("beforeend", section3_box.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

