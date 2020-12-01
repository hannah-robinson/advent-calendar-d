const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const openDoor = (dayImagePath, dayUrlPath, event) => {
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
  }, 2000);
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

    dayNumber = i + 1;

    const urlPaths = {
      1: "https://www.youtube.com/watch?v=2fG1Vifk5-8",
    };

    let dayImagePath = `./images/advent-d-${dayNumber}.jpg`;
    let dayUrlPath = urlPaths[dayNumber];
    

    calendarDoorText.addEventListener("click", openDoor.bind(null, dayImagePath, dayUrlPath));
  }
}

calendarButton.addEventListener("click", createCalendar)