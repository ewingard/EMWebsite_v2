const columns = document.querySelectorAll(".gallery-column");
let currentIndex = 0;
let canScroll = true;


// Count images in each frame
const maxImages = Math.max(
    ...[...columns].map(column =>
        column.querySelectorAll(".art-strip img").length
    )
);


function showImage(index) {

    columns.forEach(column => {

        const images =
            column.querySelectorAll(".art-strip img");

        const frame =
            column.querySelector(".museum-frame");


        images.forEach((img, i) => {

            img.classList.toggle(
                "active",
                i === index && i < images.length
            );

        });


        frame.classList.toggle(
            "active-frame",
            index < images.length
        );

    });

}


// Start with first paintings
showImage(0);


// Capture scrolling without moving the page
window.addEventListener(
    "wheel",
    (event)=>{

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
                    maxImages - 1
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

let touchStartY = 0;
let touchEndY = 0;


window.addEventListener(
    "touchstart",
    (event)=>{

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


    // Ignore tiny accidental touches
    if(Math.abs(distance) < 40){
        return;
    }


    if(distance > 0){

        // swipe up = next painting
        currentIndex++;

    } else {

        // swipe down = previous painting
        currentIndex--;

    }


    currentIndex =
        Math.max(
            0,
            Math.min(
                currentIndex,
                maxImages - 1
            )
        );


    showImage(currentIndex);

}