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
   WINDOW DIMENSION STORAGE
   ========================================= */

const windowDefaults = new Map();


windows.forEach(windowElement => {

    /*
     * Store the original dimensions and position.
     *
     * These are used as the minimum dimensions for
     * windows that cannot be made smaller.
     */

    windowDefaults.set(windowElement.id, {
        width: windowElement.offsetWidth,
        height: windowElement.offsetHeight,
        left: windowElement.offsetLeft,
        top: windowElement.offsetTop
    });

});


/* =========================================
   GET WINDOW DEFAULTS
   ========================================= */

function getWindowDefaults(windowElement) {

    return windowDefaults.get(windowElement.id) || {
        width: 250,
        height: 250,
        left: 0,
        top: 0
    };

}


/* =========================================
   OPEN WINDOWS
   ========================================= */

function openWindow(windowId) {

    const windowElement =
        document.getElementById(windowId);

    if (!windowElement) return;


    const defaults =
        getWindowDefaults(windowElement);


    /*
     * If a window has somehow ended up smaller
     * than its original dimensions, repair it
     * before opening it.
     */

    const resizeType =
        windowElement.dataset.resize;


    if (
        resizeType === "both-grow" ||
        resizeType === "paint" ||
        resizeType === "horizontal"
    ) {

        if (
            windowElement.offsetWidth <
            defaults.width
        ) {

            windowElement.style.width =
                `${defaults.width}px`;

        }

    }


    if (
        resizeType === "both-grow" ||
        resizeType === "paint"
    ) {

        if (
            windowElement.offsetHeight <
            defaults.height
        ) {

            windowElement.style.height =
                `${defaults.height}px`;

        }

    }


    windowElement.classList.add("active");
    windowElement.classList.remove("minimized");

    bringToFront(windowElement);

    updateTaskbar();


    /*
     * Paint needs to calculate its canvas after
     * becoming visible.
     */

    if (windowId === "paintWindow") {

        requestAnimationFrame(() => {

            resizePaintCanvas();

        });

    }

}


/* =========================================
   CLOSE WINDOWS
   ========================================= */

/* =========================================
   CLOSE WINDOWS
   ========================================= */

function closeWindow(windowElement) {

    /*
     * If this is the interest information window,
     * return all interest folder icons to their
     * closed-folder image.
     */

    if (
        windowElement.id === "interestInfoWindow"
    ) {

        resetInterestFolderIcons();

        delete windowElement.dataset.openFolder;

    }


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

    windowElement.style.zIndex =
        highestZ;

}


/* =========================================
   DESKTOP ICONS
   ========================================= */

desktopIcons.forEach(icon => {

    icon.addEventListener("click", event => {

        event.preventDefault();

        const windowId =
            icon.dataset.window;

        openWindow(windowId);

    });


    /*
     * Single click on mobile.
     */

    icon.addEventListener("click", () => {

        if (window.innerWidth <= 600) {

            const windowId =
                icon.dataset.window;

            openWindow(windowId);

        }

    });

});


/* =========================================
   WINDOW BUTTONS
   ========================================= */

windows.forEach(windowElement => {

    const closeButton =
        windowElement.querySelector(".close");

    const minimizeButton =
        windowElement.querySelector(".minimize");

    const maximizeButton =
        windowElement.querySelector(".maximize");


    if (closeButton) {

        closeButton.addEventListener("click", event => {

            event.stopPropagation();

            closeWindow(windowElement);

        });

    }


    if (minimizeButton) {

        minimizeButton.addEventListener("click", event => {

            event.stopPropagation();

            minimizeWindow(windowElement);

        });

    }


    if (maximizeButton) {

        maximizeButton.addEventListener("click", event => {

            event.stopPropagation();

            windowElement.classList.toggle("maximized");

            bringToFront(windowElement);


            if (
                windowElement.id === "paintWindow"
            ) {

                requestAnimationFrame(() => {

                    resizePaintCanvas();

                });

            }

        });

    }


    /*
     * Clicking anywhere in the window brings
     * it forward.
     */

    windowElement.addEventListener("mousedown", () => {

        bringToFront(windowElement);

    });

});


/* =========================================
   START MENU
   ========================================= */

if (startButton && startMenu) {

    startButton.addEventListener("click", event => {

        event.stopPropagation();

        startMenu.classList.toggle("open");

    });


    document.addEventListener("click", event => {

        if (
            !startMenu.contains(event.target) &&
            !startButton.contains(event.target)
        ) {

            startMenu.classList.remove("open");

        }

    });

}


/* =========================================
   START MENU WINDOW LINKS
   ========================================= */

document.querySelectorAll("[data-window]")
    .forEach(button => {

        /*
         * Desktop icons already have their own
         * handlers. This additionally supports
         * Start Menu buttons/links.
         */

        if (
            button.classList.contains("desktop-icon")
        ) {
            return;
        }


        button.addEventListener("click", event => {

            const windowId =
                button.dataset.window;

            if (!windowId) return;

            event.preventDefault();

            openWindow(windowId);

            if (startMenu) {
                startMenu.classList.remove("open");
            }

        });

    });


/* =========================================
   TASKBAR
   ========================================= */

function updateTaskbar() {

    if (!taskbarItems) return;

    taskbarItems.innerHTML = "";


    windows.forEach(windowElement => {

        const isActive =
            windowElement.classList.contains("active");

        const isMinimized =
            windowElement.classList.contains("minimized");


        if (!isActive && !isMinimized) {
            return;
        }


        const titleElement =
            windowElement.querySelector(".title");

        if (!titleElement) return;


        const title =
            titleElement.innerText.trim();


        const taskButton =
            document.createElement("button");

        taskButton.className =
            "taskbar-item";

        taskButton.innerText =
            title;


        if (isMinimized) {

            taskButton.classList.add(
                "taskbar-minimized"
            );

        }


        taskButton.addEventListener("click", () => {

            if (
                windowElement.classList.contains(
                    "minimized"
                )
            ) {

                restoreWindow(windowElement);

            } else {

                bringToFront(windowElement);

            }

        });


        taskbarItems.appendChild(taskButton);

    });

}


/* =========================================
   WINDOW DRAGGING
   ========================================= */

windows.forEach(windowElement => {

    const titleBar =
        windowElement.querySelector(".title-bar");


    if (!titleBar) return;


    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    /*
     * ONLY the title bar moves the window.
     *
     * Resize detection is deliberately NOT
     * performed here.
     */

    titleBar.addEventListener("mousedown", event => {

        /*
         * Never drag when clicking window buttons.
         */

        if (
            event.target.closest(".window-buttons")
        ) {
            return;
        }


        if (
            windowElement.classList.contains("maximized")
        ) {
            return;
        }


        isDragging = true;

        bringToFront(windowElement);


        offsetX =
            event.clientX -
            windowElement.offsetLeft;

        offsetY =
            event.clientY -
            windowElement.offsetTop;


        event.preventDefault();

    });


    document.addEventListener("mousemove", event => {

        if (!isDragging) return;


        let newX =
            event.clientX - offsetX;

        let newY =
            event.clientY - offsetY;


        /*
         * Keep the window partially visible.
         */

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


        windowElement.style.left =
            `${newX}px`;

        windowElement.style.top =
            `${newY}px`;

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


    const defaults =
        getWindowDefaults(windowElement);


    /*
     * =====================================
     * RESIZE DIRECTION
     * =====================================
     */

    function getResizeDirection(event) {

        /*
         * Maximized windows cannot be resized.
         */

        if (
            windowElement.classList.contains(
                "maximized"
            )
        ) {
            return "";
        }


        /*
         * The title bar is MOVE ONLY.
         *
         * This prevents its edges from acting
         * as resize handles.
         */

        const titleBar =
            windowElement.querySelector(".title-bar");


        if (
            titleBar &&
            event.target.closest(".title-bar")
        ) {
            return "";
        }


        const resizeType =
            windowElement.dataset.resize;


        if (!resizeType) {
            return "";
        }


        const rect =
            windowElement.getBoundingClientRect();

        const edgeSize = 8;


        const nearLeft =
            event.clientX -
            rect.left <= edgeSize;

        const nearRight =
            rect.right -
            event.clientX <= edgeSize;

        const nearTop =
            event.clientY -
            rect.top <= edgeSize;

        const nearBottom =
            rect.bottom -
            event.clientY <= edgeSize;


        /*
         * =====================================
         * HORIZONTAL
         * My Computer
         * =====================================
         */

        if (resizeType === "horizontal") {

            if (nearLeft) {
                return "w";
            }

            if (nearRight) {
                return "e";
            }

            return "";
        }


        /*
         * =====================================
         * BOTH
         * README
         * =====================================
         */

        if (resizeType === "both") {

            if (
                nearTop &&
                nearLeft
            ) {
                return "nw";
            }

            if (
                nearTop &&
                nearRight
            ) {
                return "ne";
            }

            if (
                nearBottom &&
                nearLeft
            ) {
                return "sw";
            }

            if (
                nearBottom &&
                nearRight
            ) {
                return "se";
            }

            if (nearLeft) {
                return "w";
            }

            if (nearRight) {
                return "e";
            }

            if (nearTop) {
                return "n";
            }

            if (nearBottom) {
                return "s";
            }

            return "";
        }


        /*
         * =====================================
         * BOTH-GROW
         * =====================================
         *
         * Only right/bottom edges.
         *
         * This means these windows can grow,
         * but cannot become smaller.
         */

        if (resizeType === "both-grow") {

            if (
                nearBottom &&
                nearRight
            ) {
                return "se";
            }

            if (nearRight) {
                return "e";
            }

            if (nearBottom) {
                return "s";
            }

            return "";
        }


        /*
         * =====================================
         * PAINT
         * =====================================
         */

        if (resizeType === "paint") {

            if (
                nearTop &&
                nearLeft
            ) {
                return "nw";
            }

            if (
                nearTop &&
                nearRight
            ) {
                return "ne";
            }

            if (
                nearBottom &&
                nearLeft
            ) {
                return "sw";
            }

            if (
                nearBottom &&
                nearRight
            ) {
                return "se";
            }

            if (nearLeft) {
                return "w";
            }

            if (nearRight) {
                return "e";
            }

            if (nearTop) {
                return "n";
            }

            if (nearBottom) {
                return "s";
            }

            return "";
        }


        return "";
    }


    /*
     * =====================================
     * CURSOR
     * =====================================
     */

    windowElement.addEventListener(
        "mousemove",
        event => {

            if (isResizing) {
                return;
            }


            const direction =
                getResizeDirection(event);


            windowElement.dataset.resizeDirection =
                direction;

        }
    );


    /*
     * =====================================
     * START RESIZE
     * =====================================
     */

    windowElement.addEventListener(
        "mousedown",
        event => {

            const direction =
                getResizeDirection(event);


            if (!direction) {
                return;
            }


            event.preventDefault();
            event.stopPropagation();


            isResizing = true;

            resizeDirection =
                direction;


            startX =
                event.clientX;

            startY =
                event.clientY;


            startWidth =
                windowElement.offsetWidth;

            startHeight =
                windowElement.offsetHeight;


            startLeft =
                windowElement.offsetLeft;

            startTop =
                windowElement.offsetTop;


            bringToFront(windowElement);

        }
    );


    /*
     * =====================================
     * PERFORM RESIZE
     * =====================================
     */

    document.addEventListener(
        "mousemove",
        event => {

            if (!isResizing) {
                return;
            }


            const resizeType =
                windowElement.dataset.resize;


            const deltaX =
                event.clientX - startX;

            const deltaY =
                event.clientY - startY;


            let newWidth =
                startWidth;

            let newHeight =
                startHeight;

            let newLeft =
                startLeft;

            let newTop =
                startTop;


            /* =================================
               MY COMPUTER
               Horizontal only
               ================================= */

            if (
                resizeType === "horizontal"
            ) {

                if (
                    resizeDirection === "e"
                ) {

                    newWidth =
                        Math.max(
                            defaults.width,
                            startWidth + deltaX
                        );

                }


                if (
                    resizeDirection === "w"
                ) {

                    newWidth =
                        Math.max(
                            defaults.width,
                            startWidth - deltaX
                        );


                    if (
                        newWidth >
                        defaults.width
                    ) {

                        newLeft =
                            startLeft + deltaX;

                    } else {

                        newLeft =
                            startLeft +
                            startWidth -
                            defaults.width;

                    }

                }


                windowElement.style.width =
                    `${newWidth}px`;

                windowElement.style.left =
                    `${newLeft}px`;


                return;
            }


            /* =================================
               BOTH-GROW
               ================================= */

            if (
                resizeType === "both-grow"
            ) {

                if (
                    resizeDirection === "e" ||
                    resizeDirection === "se"
                ) {

                    newWidth =
                        Math.max(
                            defaults.width,
                            startWidth + deltaX
                        );

                }


                if (
                    resizeDirection === "s" ||
                    resizeDirection === "se"
                ) {

                    newHeight =
                        Math.max(
                            defaults.height,
                            startHeight + deltaY
                        );

                }


                windowElement.style.width =
                    `${newWidth}px`;

                windowElement.style.height =
                    `${newHeight}px`;


                return;
            }


            /* =================================
               README / BOTH
               ================================= */

            if (
                resizeType === "both"
            ) {

                /*
                 * RIGHT
                 */

                if (
                    resizeDirection.includes("e")
                ) {

                    newWidth =
                        Math.max(
                            250,
                            startWidth + deltaX
                        );

                }


                /*
                 * LEFT
                 */

                if (
                    resizeDirection.includes("w")
                ) {

                    newWidth =
                        Math.max(
                            250,
                            startWidth - deltaX
                        );


                    if (
                        newWidth > 250
                    ) {

                        newLeft =
                            startLeft + deltaX;

                    } else {

                        newLeft =
                            startLeft +
                            startWidth -
                            250;

                    }

                }


                /*
                 * BOTTOM
                 */

                if (
                    resizeDirection.includes("s")
                ) {

                    newHeight =
                        Math.max(
                            150,
                            startHeight + deltaY
                        );

                }


                /*
                 * TOP
                 */

                if (
                    resizeDirection.includes("n")
                ) {

                    newHeight =
                        Math.max(
                            150,
                            startHeight - deltaY
                        );


                    if (
                        newHeight > 150
                    ) {

                        newTop =
                            startTop + deltaY;

                    } else {

                        newTop =
                            startTop +
                            startHeight -
                            150;

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


                /*
                 * Make sure the text editor retains
                 * enough whitespace to remain usable.
                 */

                const textEditor =
                    windowElement.querySelector(
                        ".text-editor"
                    );


                if (textEditor) {

                    textEditor.style.minHeight =
                        "250px";

                }


                return;
            }


            /* =================================
               MS PAINT
               ================================= */

            if (
                resizeType === "paint"
            ) {

                /*
                 * RIGHT
                 */

                if (
                    resizeDirection.includes("e")
                ) {

                    newWidth =
                        Math.max(
                            defaults.width,
                            startWidth + deltaX
                        );

                }


                /*
                 * LEFT
                 */

                if (
                    resizeDirection.includes("w")
                ) {

                    newWidth =
                        Math.max(
                            defaults.width,
                            startWidth - deltaX
                        );


                    if (
                        newWidth >
                        defaults.width
                    ) {

                        newLeft =
                            startLeft + deltaX;

                    } else {

                        newLeft =
                            startLeft +
                            startWidth -
                            defaults.width;

                    }

                }


                /*
                 * BOTTOM
                 */

                if (
                    resizeDirection.includes("s")
                ) {

                    newHeight =
                        Math.max(
                            defaults.height,
                            startHeight + deltaY
                        );

                }


                /*
                 * TOP
                 */

                if (
                    resizeDirection.includes("n")
                ) {

                    newHeight =
                        Math.max(
                            defaults.height,
                            startHeight - deltaY
                        );


                    if (
                        newHeight >
                        defaults.height
                    ) {

                        newTop =
                            startTop + deltaY;

                    } else {

                        newTop =
                            startTop +
                            startHeight -
                            defaults.height;

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


                resizePaintCanvas();

            }

        }
    );


    /*
     * =====================================
     * STOP RESIZE
     * =====================================
     */

    document.addEventListener(
        "mouseup",
        () => {

            isResizing = false;

            resizeDirection = "";

        }
    );

});

/* =========================================
   INTEREST FOLDER ICONS
   ========================================= */

/* =========================================
   INTEREST FOLDER ICONS
   ========================================= */

function setInterestFolderIcon(folder, isOpen) {

    const image =
        folder.querySelector("img");

    if (!image) return;

    image.src = isOpen
        ? "/assets/images/95_icons/w95_5.ico"
        : "/assets/images/95_icons/w95_4.ico";

}


/*
 * Reset ALL interest folder icons to closed.
 */

function resetInterestFolderIcons() {

    document.querySelectorAll(
        ".folder[data-interest]"
    ).forEach(folder => {

        setInterestFolderIcon(
            folder,
            false
        );

    });

}

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
    document.getElementById(
        "interestInfoWindow"
    );

const interestInfoTitle =
    document.getElementById(
        "interestInfoTitle"
    );

const interestInfoHeading =
    document.getElementById(
        "interestInfoHeading"
    );

const interestInfoContent =
    document.getElementById(
        "interestInfoContent"
    );


document.querySelectorAll(
    ".folder[data-interest]"
).forEach(folder => {

    folder.addEventListener("click", () => {

        const interest =
            folder.dataset.interest;

        const data =
            interestData[interest];


        if (!data) return;


        /*
         * Reset every interest folder first.
         *
         * This guarantees that only the folder
         * belonging to the currently displayed
         * information window uses w95_5.
         */

        resetInterestFolderIcons();


        /*
         * If the interest information window is
         * currently open, keep using that same
         * window rather than allowing multiple
         * interest windows to appear.
         */

        if (
            interestInfoWindow.classList.contains(
                "active"
            )
        ) {

            /*
             * The window is already visible.
             * Just replace its contents.
             */

            interestInfoTitle.innerText =
                data.title;

            interestInfoHeading.innerText =
                data.title;

            interestInfoContent.innerHTML =
                data.content;


            /*
             * This is now the ONLY folder that
             * receives the open-folder icon.
             */

            setInterestFolderIcon(
                folder,
                true
            );


            interestInfoWindow.dataset.openFolder =
                interest;


            bringToFront(
                interestInfoWindow
            );

            updateTaskbar();

            return;

        }


        /*
         * If it was minimized, restore it instead
         * of creating another visible window.
         */

        if (
            interestInfoWindow.classList.contains(
                "minimized"
            )
        ) {

            interestInfoWindow.classList.remove(
                "minimized"
            );

        }


        /*
         * Update the information window.
         */

        interestInfoTitle.innerText =
            data.title;

        interestInfoHeading.innerText =
            data.title;

        interestInfoContent.innerHTML =
            data.content;


        /*
         * Remember which folder owns the
         * currently displayed information.
         */

        interestInfoWindow.dataset.openFolder =
            interest;


        /*
         * Only this folder gets w95_5.
         */

        setInterestFolderIcon(
            folder,
            true
        );


        /*
         * Open/activate the single information
         * window.
         */

        openWindow(
            "interestInfoWindow"
        );

    });

});


/* =========================================
   MS PAINT
   ========================================= */

const canvas =
    document.getElementById("paintCanvas");

const paintContext =
    canvas
        ? canvas.getContext("2d")
        : null;

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


if (canvas && paintContext) {

    /*
     * Initial white canvas.
     */

    paintContext.fillStyle =
        "#ffffff";

    paintContext.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    canvas.style.cursor =
        'url("/assets/cursors/handwriting.cur"), crosshair';


    /* =====================================
       CANVAS POSITION
       ===================================== */

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


    /* =====================================
       START DRAWING
       ===================================== */

    canvas.addEventListener(
        "mousedown",
        event => {

            isDrawing = true;


            const position =
                getCanvasPosition(event);


            paintContext.beginPath();

            paintContext.moveTo(
                position.x,
                position.y
            );

        }
    );


    /* =====================================
       DRAW
       ===================================== */

    canvas.addEventListener(
        "mousemove",
        event => {

            if (!isDrawing) return;


            const position =
                getCanvasPosition(event);


            if (
                currentTool === "eraser"
            ) {

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


            paintContext.lineCap =
                "round";

            paintContext.lineJoin =
                "round";


            paintContext.lineTo(
                position.x,
                position.y
            );

            paintContext.stroke();


            if (paintStatus) {

                paintStatus.innerText =
                    `${Math.round(position.x)}, ${Math.round(position.y)}`;

            }

        }
    );


    /* =====================================
       STOP DRAWING
       ===================================== */

    canvas.addEventListener(
        "mouseup",
        () => {

            isDrawing = false;

            paintContext.closePath();

        }
    );


    canvas.addEventListener(
        "mouseleave",
        () => {

            isDrawing = false;

            paintContext.closePath();

        }
    );


    /* =====================================
       PENCIL
       ===================================== */

    if (pencilTool) {

        pencilTool.addEventListener(
            "click",
            () => {

                currentTool =
                    "pencil";

                pencilTool.classList.add(
                    "active"
                );

                eraserTool.classList.remove(
                    "active"
                );

                canvas.style.cursor =
                    'url("/assets/cursors/handwriting.cur"), crosshair';

            }
        );

    }


    /* =====================================
       ERASER
       ===================================== */

    if (eraserTool) {

        eraserTool.addEventListener(
            "click",
            () => {

                currentTool =
                    "eraser";

                eraserTool.classList.add(
                    "active"
                );

                pencilTool.classList.remove(
                    "active"
                );

                canvas.style.cursor =
                    'url("/assets/cursors/handwriting.cur"), crosshair';

            }
        );

    }


    /* =====================================
       COLORS
       ===================================== */

    paintColors.forEach(
        colorButton => {

            colorButton.addEventListener(
                "click",
                () => {

                    currentColor =
                        colorButton.dataset.color;

                    currentTool =
                        "pencil";


                    pencilTool.classList.add(
                        "active"
                    );

                    eraserTool.classList.remove(
                        "active"
                    );


                    paintColors.forEach(
                        button => {

                            button.classList.remove(
                                "active"
                            );

                        }
                    );


                    colorButton.classList.add(
                        "active"
                    );


                    canvas.style.cursor =
                        'url("/assets/cursors/handwriting.cur"), crosshair';

                }
            );

        }
    );


    /* =====================================
       CLEAR CANVAS
       ===================================== */

    if (clearCanvas) {

        clearCanvas.addEventListener(
            "click",
            () => {

                paintContext.fillStyle =
                    "#ffffff";

                paintContext.fillRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );


                if (paintStatus) {

                    paintStatus.innerText =
                        "Ready";

                }

            }
        );

    }

}


/* =========================================
   PAINT FILE MENU
   ========================================= */

const paintFileMenu =
    document.getElementById(
        "paintFileMenu"
    );

const paintFileDropdown =
    document.getElementById(
        "paintFileDropdown"
    );

const savePainting =
    document.getElementById(
        "savePainting"
    );


if (
    paintFileMenu &&
    paintFileDropdown
) {

    paintFileMenu.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            paintFileDropdown.classList.toggle(
                "open"
            );

        }
    );

}


if (savePainting && canvas) {

    savePainting.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const image =
                canvas.toDataURL(
                    "image/png"
                );


            const downloadLink =
                document.createElement("a");


            downloadLink.download =
                "my-painting.png";

            downloadLink.href =
                image;


            downloadLink.click();


            paintFileDropdown.classList.remove(
                "open"
            );

        }
    );

}


/* =========================================
   CLOSE PAINT FILE MENU
   ========================================= */

document.addEventListener(
    "click",
    event => {

        if (
            paintFileMenu &&
            paintFileDropdown &&
            !paintFileMenu.contains(
                event.target
            ) &&
            !paintFileDropdown.contains(
                event.target
            )
        ) {

            paintFileDropdown.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   RESIZE PAINT CANVAS
   ========================================= */

function resizePaintCanvas() {

    const paintWindow =
        document.getElementById(
            "paintWindow"
        );


    if (
        !paintWindow ||
        !canvas ||
        !paintContext
    ) {
        return;
    }


    /*
     * Don't attempt to measure a hidden window.
     */

    if (
        !paintWindow.classList.contains(
            "active"
        )
    ) {
        return;
    }


    const paintContainer =
        paintWindow.querySelector(
            ".paint-canvas-container"
        );


    if (!paintContainer) {
        return;
    }


    const containerWidth =
        paintContainer.clientWidth - 10;

    const containerHeight =
        paintContainer.clientHeight - 10;


    if (
        containerWidth <= 0 ||
        containerHeight <= 0
    ) {
        return;
    }


    /*
     * Don't recreate the canvas if its dimensions
     * haven't actually changed.
     */

    if (
        canvas.width === containerWidth &&
        canvas.height === containerHeight
    ) {
        return;
    }


    /*
     * Preserve existing drawing.
     */

    const oldCanvas =
        document.createElement("canvas");


    oldCanvas.width =
        canvas.width;

    oldCanvas.height =
        canvas.height;


    const oldContext =
        oldCanvas.getContext("2d");


    oldContext.drawImage(
        canvas,
        0,
        0
    );


    /*
     * Resize the actual drawing surface.
     */

    canvas.width =
        containerWidth;

    canvas.height =
        containerHeight;


    /*
     * Restore white background.
     */

    paintContext.fillStyle =
        "#ffffff";

    paintContext.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /*
     * Restore existing drawing without
     * stretching it.
     */

    paintContext.drawImage(
        oldCanvas,
        0,
        0
    );

}


/* =========================================
   CLOCK
   ========================================= */

function updateClock() {

    const clock =
        document.getElementById("clock");


    if (!clock) return;


    const now =
        new Date();


    clock.innerText =
        now.toLocaleTimeString(
            [],
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );

}


setInterval(
    updateClock,
    1000
);

updateClock();


/* =========================================
   INITIAL WINDOW
   ========================================= */

/*
 * Only My Computer is opened automatically.
 *
 * Paint, Favorites, Interests, README, etc.
 * remain closed until the user opens them.
 */

openWindow("computerWindow");


/* =========================================
   PAINT RESIZE ON WINDOW RESIZE
   ========================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            canvas &&
            document
                .getElementById("paintWindow")
                ?.classList.contains("active")
        ) {

            resizePaintCanvas();

        }

    }
);