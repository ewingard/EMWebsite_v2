/*
==========================================
NAVIGATION_V2.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Workbook tabs
- Sheet switching
- Active states
==========================================
*/


const sheetTabsContainer =
    document.querySelector(".sheet-tabs");




// ==========================================
// INITIALIZE
// ==========================================

function initializeNavigation() {


    if (!sheetTabsContainer) {


        console.error(
            "Sheet tabs container missing"
        );


        return;


    }


    renderSheetTabs();


}




// ==========================================
// RENDER TABS
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



            if(sheet.color){


                tab.classList.add(
                    sheet.color
                );


            }



            if(

                Workbook.state.activeSheet
                ===
                sheetName

            ){


                tab.classList.add(
                    "active"
                );


            }



            tab.addEventListener(
                "click",
                ()=>{


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


}




// ==========================================
// SWITCH SHEET
// ==========================================

function switchWorkbookSheet(sheetName){

    Workbook.switchSheet(
        sheetName
    );


    refreshSheetTabs();

}




// ==========================================
// UPDATE ACTIVE TAB
// ==========================================

function refreshSheetTabs(){


    const tabs =
        document.querySelectorAll(
            ".sheet-tab"
        );



    tabs.forEach(
        tab=>{


            tab.classList.remove(
                "active"
            );


            if(

                tab.textContent
                ===
                Workbook.state.activeSheet

            ){


                tab.classList.add(
                    "active"
                );


            }


        }
    );


}




// ==========================================
// START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initializeNavigation();


    }
);




// ==========================================
// EXPORT
// ==========================================

window.WorkbookNavigation = {


    renderSheetTabs,

    switchWorkbookSheet,

    refreshSheetTabs


};