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
    windowElement.classList.remove("minimized");

    bringToFront(windowElement);

    updateTaskbar();
}


/* =========================================
   CLOSE WINDOWS
   ========================================= */

function closeWindow(windowElement) {

    windowElement.classList.remove("active");
    windowElement.classList.remove("minimized");

    updateTaskbar();
}


/* =========================================
   MINIMIZE WINDOWS
   ========================================= */

function minimizeWindow(windowElement) {

    windowElement.classList.remove("active");
    windowElement.classList.add("minimized");

    updateTaskbar();
}


/* =========================================
   RESTORE MINIMIZED WINDOW
   ========================================= */

function restoreWindow(windowElement) {

    windowElement.classList.add("active");
    windowElement.classList.remove("minimized");

    bringToFront(windowElement);

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


    closeButton.addEventListener("click", (event) => {

        event.stopPropagation();

        closeWindow(windowElement);

    });


    minimizeButton.addEventListener("click", (event) => {

        event.stopPropagation();

        minimizeWindow(windowElement);

    });


    maximizeButton.addEventListener("click", (event) => {

        event.stopPropagation();

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

        const isActive =
            windowElement.classList.contains("active");

        const isMinimized =
            windowElement.classList.contains("minimized");

        if (!isActive && !isMinimized) {
            return;
        }


        const title =
            windowElement.querySelector(".title").innerText.trim();

        const taskButton =
            document.createElement("button");

        taskButton.className = "taskbar-item";

        taskButton.innerText = title;


        if (isMinimized) {

            taskButton.classList.add("taskbar-minimized");

        }


        taskButton.addEventListener("click", () => {

            if (windowElement.classList.contains("minimized")) {

                restoreWindow(windowElement);

            } else {

                bringToFront(windowElement);

            }

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

        if (
            windowElement.classList.contains("maximized") ||
            event.target.closest(".window-buttons")
        ) {
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
   WINDOW RESIZING
   ========================================= */

windows.forEach(windowElement => {

    let isResizing = false;

    let resizeDirection = "";

    let startX = 0;
    let startY = 0;

    let startWidth = 0;
    let startHeight = 0;

    let startLeft = 0;
    let startTop = 0;


    function getResizeDirection(event) {

        if (windowElement.classList.contains("maximized")) {
            return "";
        }

        const rect =
            windowElement.getBoundingClientRect();

        const edgeSize = 8;

        const nearLeft =
            event.clientX - rect.left <= edgeSize;

        const nearRight =
            rect.right - event.clientX <= edgeSize;

        const nearTop =
            event.clientY - rect.top <= edgeSize;

        const nearBottom =
            rect.bottom - event.clientY <= edgeSize;


        if (nearTop && nearLeft) return "nw";
        if (nearTop && nearRight) return "ne";
        if (nearBottom && nearLeft) return "sw";
        if (nearBottom && nearRight) return "se";

        if (nearLeft) return "w";
        if (nearRight) return "e";
        if (nearTop) return "n";
        if (nearBottom) return "s";

        return "";
    }


    windowElement.addEventListener("mousemove", (event) => {

        if (isResizing) return;

        const direction =
            getResizeDirection(event);

        windowElement.dataset.resizeDirection =
            direction;

    });


    windowElement.addEventListener("mousedown", (event) => {

        const direction =
            getResizeDirection(event);

        if (!direction) return;

        event.preventDefault();
        event.stopPropagation();

        isResizing = true;

        resizeDirection = direction;

        startX = event.clientX;
        startY = event.clientY;

        startWidth =
            windowElement.offsetWidth;

        startHeight =
            windowElement.offsetHeight;

        startLeft =
            windowElement.offsetLeft;

        startTop =
            windowElement.offsetTop;

        bringToFront(windowElement);

    });


    document.addEventListener("mousemove", (event) => {

        if (!isResizing) return;


        const deltaX =
            event.clientX - startX;

        const deltaY =
            event.clientY - startY;

        const minWidth = 250;
        const minHeight = 150;


        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startLeft;
        let newTop = startTop;


        /* RIGHT */

        if (
            resizeDirection.includes("e")
        ) {

            newWidth =
                Math.max(
                    minWidth,
                    startWidth + deltaX
                );

        }


        /* LEFT */

        if (
            resizeDirection.includes("w")
        ) {

            newWidth =
                Math.max(
                    minWidth,
                    startWidth - deltaX
                );

            if (newWidth > minWidth) {

                newLeft =
                    startLeft + deltaX;

            } else {

                newLeft =
                    startLeft +
                    startWidth -
                    minWidth;

            }

        }


        /* BOTTOM */

        if (
            resizeDirection.includes("s")
        ) {

            newHeight =
                Math.max(
                    minHeight,
                    startHeight + deltaY
                );

        }


        /* TOP */

        if (
            resizeDirection.includes("n")
        ) {

            newHeight =
                Math.max(
                    minHeight,
                    startHeight - deltaY
                );

            if (newHeight > minHeight) {

                newTop =
                    startTop + deltaY;

            } else {

                newTop =
                    startTop +
                    startHeight -
                    minHeight;

            }

        }


        windowElement.style.width =
            `${newWidth}px`;

        windowElement.style.height =
            `${newHeight}px`;

        windowElement.style.left =
            `${newLeft}px`;

        windowElement.style.top =
            `${newTop}px`;

    });


    document.addEventListener("mouseup", () => {

        isResizing = false;

    });

});


/* =========================================
   INTEREST INFORMATION
   ========================================= */

const interestData = {

    art: {
        title: "Art",
        content: `
            <p>
                I enjoy drawing and exploring different forms of visual art.
                This is also where my interest in creative projects and
                digital experimentation comes together.
            </p>
        `
    },

    books: {
        title: "Books",
        content: `
            <p>
                Books are a big part of how I explore new subjects, particularly
                history, medicine, culture, and other unusual areas of research.
            </p>
        `
    },

    music: {
        title: "Music",
        content: `
            <p>
                I spend a lot of time listening to music. My music collection
                covers a variety of artists and genres, depending on what I'm
                in the mood for.
            </p>
        `
    },

    travel: {
        title: "Travel",
        content: `
            <p>
                I enjoy traveling, exploring unfamiliar places, and learning
                about the history and culture connected to them.
            </p>
        `
    },

    technology: {
        title: "Technology",
        content: `
            <p>
                I'm interested in technology, digital preservation, coding,
                websites, and the ways technology can be used to make
                information more accessible.
            </p>
        `
    },

    other: {
        title: "Other Stuff",
        content: `
            <p>
                This is the miscellaneous folder for all the other things
                I find interesting, including cooking, hiking, horror media,
                dinosaurs, and medical history.
            </p>
        `
    }

};


const interestInfoWindow =
    document.getElementById("interestInfoWindow");

const interestInfoTitle =
    document.getElementById("interestInfoTitle");

const interestInfoHeading =
    document.getElementById("interestInfoHeading");

const interestInfoContent =
    document.getElementById("interestInfoContent");


document.querySelectorAll(".folder[data-interest]")
    .forEach(folder => {

        folder.addEventListener("click", () => {

            const interest =
                folder.dataset.interest;

            const data =
                interestData[interest];

            if (!data) return;

            interestInfoTitle.innerText =
                data.title;

            interestInfoHeading.innerText =
                data.title;

            interestInfoContent.innerHTML =
                data.content;

            openWindow("interestInfoWindow");

        });

    });


/* =========================================
   MS PAINT
   ========================================= */

const canvas =
    document.getElementById("paintCanvas");

const paintContext =
    canvas.getContext("2d");

const pencilTool =
    document.getElementById("pencilTool");

const eraserTool =
    document.getElementById("eraserTool");

const clearCanvas =
    document.getElementById("clearCanvas");

const paintStatus =
    document.getElementById("paintStatus");

const paintColors =
    document.querySelectorAll(".paint-color");


let isDrawing = false;

let currentColor = "#000000";

let currentTool = "pencil";


/* White drawing surface */

paintContext.fillStyle = "#ffffff";

paintContext.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
);


/* =========================================
   PAINT CURSOR
   ========================================= */

canvas.style.cursor =
    'url("/assets/cursors/handwriting.cur"), crosshair';


/* =========================================
   GET CANVAS POSITION
   ========================================= */

function getCanvasPosition(event) {

    const rect =
        canvas.getBoundingClientRect();

    const scaleX =
        canvas.width / rect.width;

    const scaleY =
        canvas.height / rect.height;


    return {

        x:
            (event.clientX - rect.left) *
            scaleX,

        y:
            (event.clientY - rect.top) *
            scaleY

    };

}


/* =========================================
   START DRAWING
   ========================================= */

canvas.addEventListener("mousedown", event => {

    isDrawing = true;

    const position =
        getCanvasPosition(event);

    paintContext.beginPath();

    paintContext.moveTo(
        position.x,
        position.y
    );

});


/* =========================================
   DRAW
   ========================================= */

canvas.addEventListener("mousemove", event => {

    if (!isDrawing) return;

    const position =
        getCanvasPosition(event);


    if (currentTool === "eraser") {

        paintContext.strokeStyle =
            "#ffffff";

        paintContext.lineWidth =
            15;

    } else {

        paintContext.strokeStyle =
            currentColor;

        paintContext.lineWidth =
            2;

    }


    paintContext.lineCap = "round";

    paintContext.lineJoin = "round";


    paintContext.lineTo(
        position.x,
        position.y
    );

    paintContext.stroke();


    paintStatus.innerText =
        `${Math.round(position.x)}, ${Math.round(position.y)}`;

});


/* =========================================
   STOP DRAWING
   ========================================= */

canvas.addEventListener("mouseup", () => {

    isDrawing = false;

    paintContext.closePath();

});


canvas.addEventListener("mouseleave", () => {

    isDrawing = false;

    paintContext.closePath();

});


/* =========================================
   PENCIL TOOL
   ========================================= */

pencilTool.addEventListener("click", () => {

    currentTool = "pencil";

    pencilTool.classList.add("active");
    eraserTool.classList.remove("active");

    canvas.style.cursor =
        'url("/assets/cursors/handwriting.cur"), crosshair';

});


/* =========================================
   ERASER TOOL
   ========================================= */

eraserTool.addEventListener("click", () => {

    currentTool = "eraser";

    eraserTool.classList.add("active");
    pencilTool.classList.remove("active");

    canvas.style.cursor =
        'url("/assets/cursors/handwriting.cur"), crosshair';

});


/* =========================================
   COLORS
   ========================================= */

paintColors.forEach(colorButton => {

    colorButton.addEventListener("click", () => {

        currentColor =
            colorButton.dataset.color;

        currentTool = "pencil";

        pencilTool.classList.add("active");
        eraserTool.classList.remove("active");


        paintColors.forEach(button => {

            button.classList.remove("active");

        });


        colorButton.classList.add("active");

        canvas.style.cursor =
            'url("/assets/cursors/handwriting.cur"), crosshair';

    });

});


/* =========================================
   CLEAR CANVAS
   ========================================= */

clearCanvas.addEventListener("click", () => {

    paintContext.fillStyle =
        "#ffffff";

    paintContext.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    paintStatus.innerText =
        "Ready";

});

/* =========================================
   MS PAINT FILE MENU
   ========================================= */

const paintFileMenu =
    document.getElementById("paintFileMenu");

const paintFileDropdown =
    document.getElementById("paintFileDropdown");

const savePainting =
    document.getElementById("savePainting");


/* Open / close File menu */

paintFileMenu.addEventListener("click", (event) => {

    event.stopPropagation();

    paintFileDropdown.classList.toggle("open");

});


/* Save painting as PNG */

savePainting.addEventListener("click", () => {

    const image =
        canvas.toDataURL("image/png");

    const downloadLink =
        document.createElement("a");

    downloadLink.download =
        "my-painting.png";

    downloadLink.href =
        image;

    downloadLink.click();

    paintFileDropdown.classList.remove("open");

});


/* Close Paint File menu when clicking elsewhere */

document.addEventListener("click", (event) => {

    if (
        !paintFileMenu.contains(event.target) &&
        !paintFileDropdown.contains(event.target)
    ) {

        paintFileDropdown.classList.remove("open");

    }

});


/* =========================================
   CLOCK
   ========================================= */

function updateClock() {

    const clock =
        document.getElementById("clock");

    const now =
        new Date();

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