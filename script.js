const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const urlPaths = {
  1: "https://www.youtube.com/watch?v=2fG1Vifk5-8",
  2: "https://www.youtube.com/watch?v=f2BZNowCXws",
  3: "https://www.youtube.com/watch?v=s2bzP9GSnAU",
  4: "https://www.youtube.com/watch?v=L0z4elIB2Mw",
  5: "https://www.youtube.com/watch?v=cExeSvmSXMA",
  6: "https://twitter.com/BobHagh/status/877920282710859776",
  7: "https://www.youtube.com/watch?v=n9kfdEyV3RQ",
  8: "https://twitter.com/RawBeautyKristi/status/1276404767099482112",
  9: "https://twitter.com/MikeSington/status/1299074699385663488",
  10: "https://www.youtube.com/watch?v=2tk9wuADoxA",
  11: "https://twitter.com/PAYOLETTER/status/1274400424741789698",
  12: "https://www.youtube.com/watch?v=29LDBdpNMRc",
  13: "https://twitter.com/capnsaveahood/status/1033202382098722817",
  14: "https://www.youtube.com/watch?v=Z8XJRXnIeow",
  15: "https://twitter.com/vaughndavis/status/844623663357837313",
  16: "https://twitter.com/Daily__Goats/status/1288375490563186688",
  17: "https://www.youtube.com/watch?v=yg4Mq5EAEzw&feature=emb_logo",
};

const openDoor = (event) => {
  // Check if door is allowed to be opened yet
  let currentTime = new Date();
  let today = currentTime.getDate();

  if (today < event.target.parentNode.id) {
    // Build "You're too early" modal
    const modal = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalContent = document.createElement("div");
    const closeBtn = document.createElement("span"); 
    const textBackground = document.createElement("div");

    modal.classList.add("modal");
    document.body.appendChild(modal);

    modalContainer.classList.add("modal-container");
    modal.appendChild(modalContainer);

    modalContent.classList.add("modal-content");
    modalContainer.appendChild(modalContent);

    closeBtn.classList.add("closeBtn");
    closeBtn.innerHTML = "&times;";
    modalContent.appendChild(closeBtn);

    textBackground.classList.add("text-background");
    textBackground.innerHTML = `<p>You're too early<img class="finger" src="./images/finger.png" alt="finger wagging"></p>`;
    modalContent.appendChild(textBackground);
    
    // Get random dog photo for modal
    let randomNumber = Math.floor(Math.random() * 6);
    modalContent.style.backgroundImage = `url("./images/early-${randomNumber}.jpg")`;

    // Modal events
    closeBtn.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", outsideClick);

    // Open modal
    function openModal() {
      modal.style.display = "block";
    }

    // Close modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Close modal for outside click
    function outsideClick(event) {
      if (event.target == modalContainer) {
        modal.style.display = "none";
      }
    }
    // Open modal
    openModal();

  } else {
    // Open calendar door
      event.target.removeEventListener("click", openDoor);
      event.target.style.opacity = "0";
      event.target.style.backgroundColor = "#394e34";
      setTimeout(() => {
        event.target.classList.remove("number");
        event.target.classList.add("play-btn");
        event.target.parentNode.style.backgroundImage = `url(./images/advent-d-${event.target.parentNode.id}.jpg)`;
        event.target.innerHTML = `<a href=${urlPaths[event.target.parentNode.id]} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
        event.target.style.opacity = "100";
        event.target.style.backgroundColor = '';
      }, 750);
    }
}

// Build calendar UI
const createCalendar = () => {
  for(let i = 1; i <= calendarDays; i++) {
    
    const calendarDoor = document.createElement("div");
    const calendarDoorContents = document.createElement("div");
    
    let dayNumber = i;
    
    calendarDoor.id = dayNumber;
    calendarDoor.classList.add("door")
    calendarDoor.style.gridArea = "door" + (dayNumber);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorContents.classList.add("number");
    calendarDoorContents.innerHTML = dayNumber;
    calendarDoor.appendChild(calendarDoorContents);
    
    calendarDoorContents.addEventListener("click", openDoor);
  }
}
calendarButton.addEventListener("click", createCalendar);