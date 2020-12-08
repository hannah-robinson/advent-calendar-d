const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const openDoor = (dayNumber, dayImagePath, dayUrlPath, event) => {
  let currentTime = new Date();
  let today = currentTime.getDate();
  if (today < dayNumber) {
    console.log("You're too early")
  } else {
    event.target.parentNode.style.backgroundImage = `url(${dayImagePath})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#394e34";
    setTimeout(() => {
      event.target.classList.remove("number")
      event.target.classList.add("play-btn")
      event.target.innerHTML = `<a href=${dayUrlPath} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
      event.target.style.opacity = "100";
      event.target.style.backgroundColor = '';
      event.target.removeEventListener("click", openDoor);
    }, 1500);
  }
}

const createCalendar = () => {
  for(let i = 0; i < calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image")
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("number");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    const urlPaths = {
      1: "https://www.youtube.com/watch?v=2fG1Vifk5-8",
      2: "https://www.youtube.com/watch?v=f2BZNowCXws",
      3: "https://www.youtube.com/watch?v=s2bzP9GSnAU",
      4: "https://www.youtube.com/watch?v=L0z4elIB2Mw",
      5: "https://www.youtube.com/watch?v=cExeSvmSXMA",
      6: "https://twitter.com/BobHagh/status/877920282710859776",
      7: "https://www.youtube.com/watch?v=n9kfdEyV3RQ",
      8: "https://twitter.com/RawBeautyKristi/status/1276404767099482112",
    };

    let dayNumber = i + 1;
    let dayImagePath = `./images/advent-d-${dayNumber}.jpg`;
    let dayUrlPath = urlPaths[dayNumber];

    calendarDoorText.addEventListener("click", openDoor.bind(null, dayNumber, dayImagePath, dayUrlPath), {once:true});
  }
}

calendarButton.addEventListener("click", createCalendar)