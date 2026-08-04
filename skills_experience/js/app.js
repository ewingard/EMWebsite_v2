/*
==========================================
APP.JS
Portfolio.xlsx Spreadsheet Website

Main application controller

Handles:
- Application startup
- Component initialization
- Loading screen
- Global events
==========================================
*/


// ==========================================
// APPLICATION STATE
// ==========================================

const App = {

    version: "1.0",

    initialized: false,

    startTime: null

};



// ==========================================
// INITIALIZE APPLICATION
// ==========================================

function initializeApp() {


    if (App.initialized) {

        return;

    }


    App.startTime =
        performance.now();



    console.log(
        "Starting Portfolio.xlsx..."
    );



    initializeWorkbook();


    initializeGrid();


    initializeNavigation();


    initializeTheme();



    finishLoading();



    App.initialized = true;



    const loadTime =
        Math.round(
            performance.now()
            -
            App.startTime
        );



    console.log(
        `Portfolio.xlsx loaded in ${loadTime}ms`
    );


}



// ==========================================
// WORKBOOK INITIALIZATION
// ==========================================

function initializeWorkbook() {


    if (!window.Workbook) {

        console.error(
            "Workbook module missing"
        );

        return;

    }


    console.log(
        "Workbook loaded:",
        Workbook.state
    );


}



// ==========================================
// GRID INITIALIZATION
// ==========================================

function initializeGrid() {


    if (!window.Grid) {

        console.error(
            "Grid module missing"
        );

        return;

    }


    Grid.generateGrid();


}



// ==========================================
// NAVIGATION INITIALIZATION
// ==========================================

function initializeNavigation() {


    if (!window.WorkbookNavigation) {

        console.error(
            "Navigation module missing"
        );

        return;

    }


    WorkbookNavigation.renderSheetTabs();


}



// ==========================================
// THEME INITIALIZATION
// ==========================================

function initializeTheme() {


    const themeButton =
        document.getElementById(
            "theme-toggle"
        );


    if (!themeButton) {

        return;

    }



    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );



    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }



    themeButton.addEventListener(
        "click",
        toggleTheme
    );


}



// ==========================================
// TOGGLE DARK MODE
// ==========================================

function toggleTheme() {


    document.body.classList.toggle(
        "dark-mode"
    );



    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );



    localStorage.setItem(

        "portfolio-theme",

        isDark
            ? "dark"
            : "light"

    );


}



// ==========================================
// LOADING SCREEN
// ==========================================

function finishLoading() {


    const loadingScreen =
        document.getElementById(
            "loading-screen"
        );



    if (!loadingScreen) {

        return;

    }



    setTimeout(
        () => {


            loadingScreen.classList.add(
                "loaded"
            );



            setTimeout(
                () => {


                    loadingScreen.remove();


                },
                500
            );


        },
        400
    );


}



// ==========================================
// GLOBAL KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener(
    "keydown",
    event => {


        /*
        Ctrl + S
        Prevent browser save dialog
        */

        if (

            event.ctrlKey &&
            event.key === "s"

        ) {

            event.preventDefault();


            showToast(
                "Workbook saved locally"
            );


        }



        /*
        Ctrl + /
        Focus search
        */

        if (

            event.ctrlKey &&
            event.key === "/"

        ) {

            event.preventDefault();


            const search =
                document.getElementById(
                    "search-input"
                );


            if (search) {

                search.focus();

            }

        }


    }
);



// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

function showToast(message) {


    let toast =
        document.querySelector(
            ".toast"
        );



    if (!toast) {


        toast =
            document.createElement(
                "div"
            );


        toast.className =
            "toast";


        document.body.appendChild(
            toast
        );


    }



    toast.textContent =
        message;



    toast.classList.add(
        "show"
    );



    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );


}



// ==========================================
// WINDOW EVENTS
// ==========================================

window.addEventListener(
    "beforeunload",
    () => {


        console.log(
            "Closing Portfolio.xlsx"
        );


    }
);



// ==========================================
// START APPLICATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);



// ==========================================
// EXPORT
// ==========================================

window.App = {

    state: App,

    initializeApp,

    toggleTheme,

    showToast

};