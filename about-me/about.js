/* =========================================
   WINDOWS 95 ABOUT PAGE JS
   ========================================= */

const windows = document.querySelectorAll(".window");
const desktopIcons = document.querySelectorAll(".desktop-icon");
const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");
const taskbarItems = document.getElementById("taskbarItems");

let highestZ = 10;


/* =========================================
   OPEN WINDOWS
   ========================================= */

function openWindow(windowId) {

    const windowElement = document.getElementById(windowId);

    if (!windowElement) return;

    windowElement.classList.add("active");

    bringToFront(windowElement);

    updateTaskbar();
}


/* =========================================
   CLOSE WINDOWS
   ========================================= */

function closeWindow(windowElement) {

    windowElement.classList.remove("active");

    updateTaskbar();
}


/* =========================================
   BRING WINDOW TO FRONT
   ========================================= */

function bringToFront(windowElement) {

    highestZ++;

    windowElement.style.zIndex = highestZ;
}


/* =========================================
   DESKTOP ICONS
   ========================================= */

desktopIcons.forEach(icon => {

    icon.addEventListener("dblclick", () => {

        const windowId = icon.dataset.window;

        openWindow(windowId);

    });

});


/* Also allow a single click on mobile */

desktopIcons.forEach(icon => {

    icon.addEventListener("click", () => {

        if (window.innerWidth <= 600) {

            const windowId = icon.dataset.window;

            openWindow(windowId);

        }

    });

});


/* =========================================
   WINDOW BUTTONS
   ========================================= */

windows.forEach(windowElement => {

    const closeButton = windowElement.querySelector(".close");
    const minimizeButton = windowElement.querySelector(".minimize");
    const maximizeButton = windowElement.querySelector(".maximize");

    closeButton.addEventListener("click", () => {

        closeWindow(windowElement);

    });


    minimizeButton.addEventListener("click", () => {

        windowElement.classList.remove("active");

        updateTaskbar();

    });


    maximizeButton.addEventListener("click", () => {

        windowElement.classList.toggle("maximized");

        bringToFront(windowElement);

    });


    windowElement.addEventListener("mousedown", () => {

        bringToFront(windowElement);

    });

});


/* =========================================
   START MENU
   ========================================= */

startButton.addEventListener("click", (event) => {

    event.stopPropagation();

    startMenu.classList.toggle("open");

});


document.addEventListener("click", (event) => {

    if (
        !startMenu.contains(event.target) &&
        !startButton.contains(event.target)
    ) {

        startMenu.classList.remove("open");

    }

});


/* =========================================
   START MENU WINDOW LINKS
   ========================================= */

document.querySelectorAll("[data-window]").forEach(button => {

    button.addEventListener("click", () => {

        const windowId = button.dataset.window;

        openWindow(windowId);

        startMenu.classList.remove("open");

    });

});


/* =========================================
   TASKBAR
   ========================================= */

function updateTaskbar() {

    taskbarItems.innerHTML = "";

    windows.forEach(windowElement => {

        if (!windowElement.classList.contains("active")) {
            return;
        }

        const title =
            windowElement.querySelector(".title").innerText;

        const taskButton = document.createElement("button");

        taskButton.className = "taskbar-item";

        taskButton.innerText = title;

        taskButton.addEventListener("click", () => {

            bringToFront(windowElement);

        });

        taskbarItems.appendChild(taskButton);

    });

}


/* =========================================
   DRAGGABLE WINDOWS
   ========================================= */

windows.forEach(windowElement => {

    const titleBar =
        windowElement.querySelector(".title-bar");

    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    titleBar.addEventListener("mousedown", (event) => {

        if (windowElement.classList.contains("maximized")) {
            return;
        }

        isDragging = true;

        bringToFront(windowElement);

        offsetX =
            event.clientX - windowElement.offsetLeft;

        offsetY =
            event.clientY - windowElement.offsetTop;

    });


    document.addEventListener("mousemove", (event) => {

        if (!isDragging) return;

        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;


        /* Keep window partially on screen */

        newX = Math.max(
            -windowElement.offsetWidth + 100,
            Math.min(
                window.innerWidth - 100,
                newX
            )
        );


        newY = Math.max(
            0,
            Math.min(
                window.innerHeight - 50,
                newY
            )
        );


        windowElement.style.left = `${newX}px`;
        windowElement.style.top = `${newY}px`;

    });


    document.addEventListener("mouseup", () => {

        isDragging = false;

    });

});


/* =========================================
   CLOCK
   ========================================= */

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    clock.innerText =
        now.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
        });

}

setInterval(updateClock, 1000);

updateClock();


/* =========================================
   INITIAL WINDOW
   ========================================= */

openWindow("computerWindow");