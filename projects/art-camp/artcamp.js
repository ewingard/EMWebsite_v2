const columns = document.querySelectorAll(".gallery-column");

let currentIndex = 0;
let canScroll = true;


// ------------------------------
// Build mobile gallery
// ------------------------------

const mobileStrip = document.querySelector(".mobile-art-strip");


if (mobileStrip) {

    document.querySelectorAll(".art-strip img")
        .forEach(img => {

            const clone = img.cloneNode(true);

            mobileStrip.appendChild(clone);

        });

}


// ------------------------------
// Store image collections
// ------------------------------

const mobileImages =
    document.querySelectorAll(".mobile-art-strip img");


const desktopCounts =
    [...columns].map(column =>
        column.querySelectorAll(".art-strip img").length
    );


function isMobile(){

    return window.matchMedia(
        "(max-width:1000px)"
    ).matches;

}


function getMaxImages(){

    if(isMobile() && mobileImages.length){

        return mobileImages.length;

    }


    return Math.max(...desktopCounts);

}


// ------------------------------
// Display artwork
// ------------------------------

function showImage(index){


    // MOBILE
    if(isMobile() && mobileImages.length){


        mobileImages.forEach((img,i)=>{

            img.classList.toggle(
                "active",
                i === index
            );

        });


        return;

    }



    // DESKTOP
    columns.forEach(column=>{


        const images =
            column.querySelectorAll(".art-strip img");


        images.forEach((img,i)=>{


            img.classList.toggle(
                "active",
                i === index
            );


        });


        const frame =
            column.querySelector(".museum-frame");


        if(frame){

            frame.classList.toggle(
                "active-frame",
                true
            );

        }


    });


}



// Initial image
showImage(0);



// ------------------------------
// Desktop mouse wheel
// ------------------------------

window.addEventListener(
    "wheel",
    (event)=>{


        if(isMobile()){

            return;

        }


        event.preventDefault();


        if(!canScroll){

            return;

        }


        canScroll = false;



        if(event.deltaY > 0){

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



        showImage(currentIndex);



        setTimeout(()=>{

            canScroll = true;

        },500);



    },
    {
        passive:false
    }
);



// ------------------------------
// Mobile swipe
// ------------------------------

let touchStartY = 0;
let touchEndY = 0;



window.addEventListener(
    "touchstart",
    (event)=>{


        if(!isMobile()){

            return;

        }


        event.preventDefault();


        touchStartY =
            event.changedTouches[0].screenY;


    },
    {
        passive:false
    }
);



window.addEventListener(
    "touchend",
    (event)=>{


        if(!isMobile()){

            return;

        }


        event.preventDefault();


        touchEndY =
            event.changedTouches[0].screenY;



        handleSwipe();


    },
    {
        passive:false
    }
);



function handleSwipe(){


    const distance =
        touchStartY - touchEndY;



    // Ignore tiny movements
    if(Math.abs(distance) < 40){

        return;

    }



    if(distance > 0){

        // swipe up
        currentIndex++;


    } else {


        // swipe down
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



    showImage(currentIndex);


}