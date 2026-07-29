 /*
==========================================
NAVIGATION.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Excel worksheet tabs
- Sheet switching
- Active states
- Sheet creation UI
==========================================
*/


// ==========================================
// ELEMENT REFERENCES
// ==========================================

const sheetTabsContainer =
    document.querySelector(".sheet-tabs");


// ==========================================
// INITIALIZE NAVIGATION
// ==========================================

function initializeNavigation() {

    if (!sheetTabsContainer) {

        console.error(
            "Sheet tab container not found"
        );

        return;

    }


    renderSheetTabs();

}



// ==========================================
// CREATE SHEET TABS
// ==========================================

function renderSheetTabs() {


    sheetTabsContainer.innerHTML = "";


    const sheets =
        Workbook.getSheets();


    Object.keys(sheets).forEach(
        sheetName => {


            const sheet =
                sheets[sheetName];


            const tab =
                document.createElement("button");


            tab.className =
                "sheet-tab";


            tab.textContent =
                sheet.name;


            /*
            Apply sheet color
            */

            if (sheet.color) {

                tab.classList.add(
                    sheet.color
                );

            }



            /*
            Active state
            */

            if (

                Workbook.state.activeSheet
                ===
                sheetName

            ) {

                tab.classList.add(
                    "active"
                );

            }



            /*
            Click event
            */

            tab.addEventListener(
                "click",
                () => {


                    switchWorkbookSheet(
                        sheetName
                    );


                }
            );


            sheetTabsContainer.appendChild(
                tab
            );


        }
    );


    createAddSheetButton();


}



// ==========================================
// SWITCH SHEET
// ==========================================

function switchWorkbookSheet(sheetName) {


    Workbook.switchSheet(
        sheetName
    );


    refreshSheetTabs();


}



// ==========================================
// UPDATE ACTIVE TAB
// ==========================================

function refreshSheetTabs() {


    const tabs =
        document.querySelectorAll(
            ".sheet-tab"
        );


    tabs.forEach(tab => {


        tab.classList.remove(
            "active"
        );


        if (

            tab.textContent
            ===
            Workbook.state.activeSheet

        ) {

            tab.classList.add(
                "active"
            );

        }


    });


}



// ==========================================
// ADD SHEET BUTTON
// ==========================================

function createAddSheetButton() {


    const button =
        document.createElement("button");


    button.className =
        "add-sheet";


    button.innerHTML =
        "+";


    button.title =
        "Create new worksheet";


    button.addEventListener(
        "click",
        createNewSheet
    );


    sheetTabsContainer.appendChild(
        button
    );


}



// ==========================================
// CREATE NEW WORKSHEET
// ==========================================

function createNewSheet() {


    const sheetCount =
        Object.keys(
            Workbook.getSheets()
        ).length;


    const newName =
        `Sheet${sheetCount + 1}`;



    Workbook.createSheet(
        newName,
        "green"
    );


    renderSheetTabs();


    switchWorkbookSheet(
        newName
    );


}



// ==========================================
// REMOVE SHEET TAB
// ==========================================

function removeSheetTab(sheetName) {


    Workbook.deleteSheet(
        sheetName
    );


    renderSheetTabs();


}



// ==========================================
// INITIAL LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavigation();

    }
);



// ==========================================
// PUBLIC API
// ==========================================

window.WorkbookNavigation = {

    renderSheetTabs,

    switchWorkbookSheet,

    refreshSheetTabs,

    createNewSheet

};