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
          count: 45,
          title: "Startup Incubated",
        },
        {
          icon: "fa-solid fa-user",
          count: 500,
          title: "Entrepreneur Engaged",
        },
        {
          icon: "fas fa-hand-holding-usd",
          count: "18Cr",
          title: "Fund Raised",
        },
        {
          icon: "fa-solid fa-bullseye",
          count: "10k",
          title: "Job Created",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          count: "12",
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
   * @param {String} sliderTarget - Id of the target element for slider.
   */

  constructor(data = null, target = "LE-List", sliderTarget = "LE-dot-slider") {
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
    this.scoller_elem = null;
    this.sliderTarget = sliderTarget;
    this.next = true;
    let esper = this;
    $(".LE-ctr").click(function (e) {
      if (esper.next === true) {
        esper.next = false;
        let LE_List = $(".LE-slider-items");
        let dot_List = $(".LE-items-dot");
        clearInterval(esper.scoller_elem);
        if (e.target.classList.contains("LE-dr-lt")) {
          let elem = LE_List[0];
          LE_List[0].remove();
          document.getElementById(esper.target).append(elem);
          document.getElementById(esper.sliderTarget).append(dot_List[0]);
          // console.log('Left');
        } else if (e.target.classList.contains("LE-dr-rt")) {
          let elem = LE_List[LE_List.length - 1];
          LE_List[LE_List.length - 1].remove();
          // console.log(esper)
          document.getElementById(esper.target).prepend(elem);
          document
            .getElementById(esper.sliderTarget)
            .prepend(dot_List[dot_List.length - 1]);
          // console.log('Right');
        }
        setTimeout(() => {
          esper.next = true;
        }, 200);
        setTimeout(() => {
          clearInterval(esper.scoller_elem);
          esper.setSlider();
        }, 10000);
      }
    });
  }

  /**
   * Adds an Latest Events to the target element.
   * Imortant Note: The minimum no of element msut be 5.
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
    for (let i = 0; i < elem.length; i++) {
      let loderTarget = document.getElementById(this.sliderTarget);
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

      let dot = document.createElement("div");
      dot.classList.add("LE-items-dot");

      target.appendChild(div);
      loderTarget.appendChild(dot);
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
    this.scoller_elem = setInterval(() => {
      let LE_List = $(".LE-slider-items");
      let dot_List = $(".LE-items-dot");
      let elem = LE_List[0];
      let dot = dot_List[0];
      LE_List[0].remove();
      dot_List[0].remove();
      document.getElementById(this.target).append(elem);
      document.getElementById(this.sliderTarget).append(dot);
      // console.log("Sorry for the delay");
    }, delay);
  }
}

/**
 * Represents a class for managing Success Stories.
 * @class
 */
class SuccessStories {
  /**
   * Creates an instance of SuccessStories.
   * @param {JSON} data - JSON Object of Success Stories containing img, title, and desc.
   * @param {String} target - Id of the target element.
   * @returns {void}
   * @example
   * let SS = new SuccessStories();
   * SS.addElements({
   *  img: "https://nsutiif.in/img/gallery/2.jpeg",
   * title: "Startup Incubated",
   * desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
   * });
   */
  constructor(data = null, target = "SSS-List") {
    if (data === null) {
      this.data = [
        {
          img: "https://nsutiif.in/img/gallery/1.jpeg",
          title: "From beginning to end",
          desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                non molestias excepturi repellendus fugiat esse voluptate totam
                repellat eligendi et earum ipsam minus magni assumenda quod sed
                maiores, expedita aperiam! Optio minima deserunt porro soluta
                eaque reprehenderit quia expedita vel aspernatur placeat ut rem
                culpa est voluptate fuga eius maxime sit, mollitia hic illum
                voluptas, qui non tenetur. Atque, ab!`,
        },
        {
          img: "https://nsutiif.in/img/gallery/2.jpeg",
          title: "From beginning to end",
          desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                non molestias excepturi repellendus fugiat esse voluptate totam
                repellat eligendi et earum ipsam minus magni assumenda quod sed
                maiores, expedita aperiam! Optio minima deserunt porro soluta
                eaque reprehenderit quia expedita vel aspernatur placeat ut rem
                culpa est voluptate fuga eius maxime sit, mollitia hic illum
                voluptas, qui non tenetur. Atque, ab!`,
        },
        {
          img: "https://nsutiif.in/img/gallery/3.jpeg",
          title: "From beginning to end",
          desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                non molestias excepturi repellendus fugiat esse voluptate totam
                repellat eligendi et earum ipsam minus magni assumenda quod sed
                maiores, expedita aperiam! Optio minima deserunt porro soluta
                eaque reprehenderit quia expedita vel aspernatur placeat ut rem
                culpa est voluptate fuga eius maxime sit, mollitia hic illum
                voluptas, qui non tenetur. Atque, ab!`,
        },
        {
          img: "https://nsutiif.in/img/gallery/4.JPG",
          title: "From beginning to end",
          desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                non molestias excepturi repellendus fugiat esse voluptate totam
                repellat eligendi et earum ipsam minus magni assumenda quod sed
                maiores, expedita aperiam! Optio minima deserunt porro soluta
                eaque reprehenderit quia expedita vel aspernatur placeat ut rem
                culpa est voluptate fuga eius maxime sit, mollitia hic illum
                voluptas, qui non tenetur. Atque, ab!`,
        },
        {
          img: "https://nsutiif.in/img/gallery/5.JPG",
          title: "From beginning to end",
          desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                non molestias excepturi repellendus fugiat esse voluptate totam
                repellat eligendi et earum ipsam minus magni assumenda quod sed
                maiores, expedita aperiam! Optio minima deserunt porro soluta
                eaque reprehenderit quia expedita vel aspernatur placeat ut rem
                culpa est voluptate fuga eius maxime sit, mollitia hic illum
                voluptas, qui non tenetur. Atque, ab!`,
        },
      ];
    } else {
      this.data = data;
    }
    this.target = target;
    this.pos = 0;

    document.getElementById("SSS-add").addEventListener("click", (e) => {
      let arrow = document.querySelector("#SSS-add>i");
      let no = 0;
      if (arrow.classList.contains("fa-angle-down")) {
        this.addElements();
      } else {
        let target = document.getElementById(this.target);
        let window_width = $(window).width();
        if (window_width > 895) {
          no = 4;
        } else {
          no = 2;
        }
        let pos = target.childElementCount
        for (let i = no; i < pos; i++) {
          target.removeChild(target.lastChild);
          this.pos -= 1;
        }
        arrow.classList.remove("fa-angle-up");
        arrow.classList.add("fa-angle-down");
      }
    });
  }

  /**
   * Adds an Success Stories to the target element.
   * @param {JSON} elem - JSON Object of Success Stories containing img, title, and desc.
   * @param {Number} no - Number of elements to be added.
   * @returns {void}
   * @example
   * let SS = new SuccessStories();
   * SS.addElements({
   * img: "https://nsutiif.in/img/gallery/2.jpeg",
   * title: "Startup Incubated",
   * desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.",
   * }, 2);
   */
  addElements(elem = null, no = null) {
    if (elem === null) {
      elem = this.data;
    } else {
      if (!Array.isArray(elem)) {
        elem = [elem];
      } else if (Object.prototype.toString.call(elem) === "[object Object]") {
        elem = this.data;
      }
    }

    let window_width = $(window).width();
    if (no == null || no == 0) {
      if (window_width > 895) {
        no = 4;
      } else {
        no = 2;
      }
    }

    // console.log(elem);
    let current_pos = this.pos;
    if ((current_pos+no) >= elem.length) {
      let arrow = document.querySelector("#SSS-add>i");
      arrow.classList.remove("fa-angle-down");
      arrow.classList.add("fa-angle-up");
    }
    for (
      let i = current_pos;
      i < Math.min(current_pos + no, elem.length);
      i++
    ) {
      let target = document.getElementById(this.target);
      let div = document.createElement("div");
      div.classList.add("SSS-items");
      div.innerHTML = `
      <div class="sss-sudo-box">
            <div class="SSS-items-img">
              <img src="${elem[i].img}" alt="" />
            </div>
            <div class="SSS-items-data">
              <h4>${elem[i].title}</h4>
              <p>
                ${elem[i].desc}
              </p>
            </div>
          </div>
      `;
      target.appendChild(div);
      this.pos += 1;
    }
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

  // Initialize the SuccessStories Class
  let SS = new SuccessStories();
  // Clear the hard Success Stories List
  $("#SSS-List").empty();
  // Adding the Success Stories to the target element
  SS.addElements();
});

// function scrollright(){
//   let LE_List = $('.LE-slider-items');
//     let elem = LE_List[LE_List.length-1];
//     $('#LE-List').prepend(elem);
// }
