/* =========================================================
   ART CAMP GALLERY
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const galleryLoader =
    document.getElementById("galleryLoader");

const loadingText =
    document.getElementById("loadingText");

const galleryInstructions =
    document.getElementById("galleryInstructions");

const columns =
    document.querySelectorAll(".gallery-column");

const mobileStrip =
    document.querySelector(".mobile-art-strip");

const mobileFrame =
    document.querySelector(".mobile-gallery-frame");


/* =========================================================
   GALLERY STATE
========================================================= */

let currentIndex = 0;

let canScroll = true;

let touchStartY = 0;


/* =========================================================
   DEVICE DETECTION
========================================================= */

function isMobile() {

    return window.matchMedia(
        "(max-width: 1000px)"
    ).matches;

}


/* =========================================================
   BUILD MOBILE GALLERY
=========================================================

   The desktop artwork already exists in the HTML.

   On mobile we clone those images into the
   mobile gallery before we begin preloading.

========================================================= */

function buildMobileGallery() {

    if (!mobileStrip) {
        return;
    }


    /*
       Don't create duplicates if this
       function is accidentally called again.
    */

    mobileStrip.innerHTML = "";


    const desktopImages =
        document.querySelectorAll(
            ".gallery-container .art-strip img"
        );


    desktopImages.forEach(img => {

        const clone =
            img.cloneNode(true);

        mobileStrip.appendChild(clone);

    });

}


/* =========================================================
   GET IMAGE COLLECTIONS
========================================================= */

function getMobileImages() {

    if (!mobileStrip) {
        return [];
    }

    return Array.from(
        mobileStrip.querySelectorAll("img")
    );

}


function getDesktopCounts() {

    return [...columns].map(column => {

        return column.querySelectorAll(
            ".art-strip img"
        ).length;

    });

}


function getMaxImages() {

    if (isMobile()) {

        return getMobileImages().length;

    }


    const counts =
        getDesktopCounts();


    return Math.max(...counts);

}


/* =========================================================
   IMAGE PRELOADING
========================================================= */

function waitForImage(img) {

    return new Promise(resolve => {


        /*
           Image is already loaded.
        */

        if (
            img.complete &&
            img.naturalWidth > 0
        ) {

            resolve();

            return;

        }


        /*
           Successful load.
        */

        img.addEventListener(
            "load",
            resolve,
            {
                once: true
            }
        );


        /*
           Failed image.

           We resolve instead of hanging
           the entire gallery.
        */

        img.addEventListener(
            "error",
            () => {

                console.warn(
                    "Gallery image failed to load:",
                    img.src
                );

                resolve();

            },
            {
                once: true
            }
        );

    });

}


/*
   Preload an image using a new Image()
   object as well.

   This forces the browser to request
   the image even when the visible image
   is hidden with opacity: 0.
*/

function preloadImage(src) {

    return new Promise(resolve => {

        const image =
            new Image();


        image.onload =
            resolve;


        image.onerror =
            () => {

                console.warn(
                    "Preload failed:",
                    src
                );

                resolve();

            };


        image.src = src;

    });

}


/* =========================================================
   PRELOAD ENTIRE GALLERY
========================================================= */

async function preloadGallery() {


    /*
       Get every gallery image AFTER
       mobile images have been created.
    */

    const galleryImages =
        Array.from(
            document.querySelectorAll(
                ".gallery-container img, " +
                ".mobile-gallery-frame img"
            )
        );


    /*
       Get unique image URLs.
    */

    const sources =
        [
            ...new Set(
                galleryImages.map(
                    img => img.currentSrc || img.src
                )
            )
        ];


    if (loadingText) {

        loadingText.textContent =
            "Loading artwork...";

    }


    /*
       Load every image.

       Promise.all waits for the complete
       gallery before continuing.
    */

    await Promise.all(
        sources.map(
            src => preloadImage(src)
        )
    );


    if (loadingText) {

        loadingText.textContent =
            "Gallery ready.";

    }

}


/* =========================================================
   DISPLAY ARTWORK
========================================================= */

function showImage(index) {


    /* -----------------------------------------
       MOBILE
    ----------------------------------------- */

    if (isMobile()) {

        const images =
            getMobileImages();


        images.forEach(
            (img, i) => {

                img.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


        return;

    }


    /* -----------------------------------------
       DESKTOP
    ----------------------------------------- */

    columns.forEach(column => {

        const images =
            column.querySelectorAll(
                ".art-strip img"
            );


        images.forEach(
            (img, i) => {

                img.classList.toggle(
                    "active",
                    i === index
                );

            }
        );

    });

}


/* =========================================================
   DISMISS PERSISTENT INSTRUCTIONS
========================================================= */

function dismissInstructions() {

    if (!galleryInstructions) {
        return;
    }


    galleryInstructions.classList.add(
        "dismissed"
    );

}


/* =========================================================
   DESKTOP SCROLL
========================================================= */

window.addEventListener(
    "wheel",
    event => {


        /*
           Ignore mouse wheel on mobile.
        */

        if (isMobile()) {
            return;
        }


        event.preventDefault();


        if (!canScroll) {
            return;
        }


        canScroll = false;


        if (event.deltaY > 0) {

            currentIndex++;

        } else {

            currentIndex--;

        }


        currentIndex =
            Math.max(
                0,
                Math.min(
                    currentIndex,
                    getMaxImages() - 1
                )
            );


        showImage(
            currentIndex
        );


        dismissInstructions();


        setTimeout(
            () => {

                canScroll = true;

            },
            500
        );

    },
    {
        passive: false
    }
);


/* =========================================================
   MOBILE SWIPE
========================================================= */

if (mobileFrame) {


    mobileFrame.addEventListener(
        "touchstart",
        event => {

            touchStartY =
                event.changedTouches[0]
                    .clientY;

        },
        {
            passive: true
        }
    );


    mobileFrame.addEventListener(
        "touchend",
        event => {


            const touchEndY =
                event.changedTouches[0]
                    .clientY;


            const distance =
                touchStartY -
                touchEndY;


            /*
               Ignore taps / tiny movements.
            */

            if (
                Math.abs(distance) < 50
            ) {

                return;

            }


            if (distance > 0) {

                currentIndex++;

            } else {

                currentIndex--;

            }


            currentIndex =
                Math.max(
                    0,
                    Math.min(
                        currentIndex,
                        getMaxImages() - 1
                    )
                );


            showImage(
                currentIndex
            );


            dismissInstructions();

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   HANDLE SCREEN SIZE CHANGES
========================================================= */

window.addEventListener(
    "resize",
    () => {

        /*
           Keep current artwork visible
           if the device orientation changes.
        */

        currentIndex =
            Math.min(
                currentIndex,
                getMaxImages() - 1
            );


        showImage(
            currentIndex
        );

    }
);


/* =========================================================
   INITIALIZE GALLERY
========================================================= */

async function initializeGallery() {


    /*
       Build mobile images FIRST.

       This is important because the mobile
       images did not exist when you previously
       attempted to preload them.
    */

    buildMobileGallery();


    /*
       Preload everything.
    */

    await preloadGallery();


    /*
       Show the first artwork.
    */

    currentIndex = 0;

    showImage(0);


    /*
       Give the browser two paint frames to
       actually render the first artwork.
    */

    await new Promise(resolve => {

        requestAnimationFrame(() => {

            requestAnimationFrame(
                resolve
            );

        });

    });


    /*
       Finally remove the full-screen loader.
    */

    if (galleryLoader) {

        galleryLoader.classList.add(
            "loaded"
        );

    }

}


/* =========================================================
   START
========================================================= */

initializeGallery();
