/*
==========================================
WORKBOOK.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Worksheet management
- Workbook state
- Sheet switching
- Cell data storage
==========================================
*/


// ==========================================
// WORKBOOK STATE
// ==========================================

const workbook = {

    activeSheet: "Home",

    sheets: {

        Home: {

            name: "Home",

            color: "green",

            cells: {

                A1: "Welcome to my Portfolio",

                A2: "Full Stack Developer",

                A4: "Navigate through the worksheets below",

                A6: "Portfolio.xlsx v1.0"

            }

        },


        Projects: {

            name: "Projects",

            color: "blue",

            cells: {

                A1: "Project Name",

                B1: "Technology",

                C1: "Status",

                D1: "Year",


                A2: "Portfolio Website",

                B2: "HTML / CSS / JS",

                C2: "Complete",

                D2: "2026",


                A3: "Dashboard App",

                B3: "React",

                C3: "Complete",

                D3: "2025"

            }

        },


        Skills: {

            name: "Skills",

            color: "orange",

            cells: {

                A1: "Skill",

                B1: "Experience",

                C1: "Level",


                A2: "JavaScript",

                B2: "5 Years",

                C2: "★★★★★",


                A3: "React",

                B3: "4 Years",

                C3: "★★★★☆",


                A4: "CSS",

                B4: "6 Years",

                C4: "★★★★★"

            }

        },


        Experience: {

            name: "Experience",

            color: "purple",

            cells: {

                A1: "Role",

                B1: "Company",

                C1: "Years",


                A2: "Frontend Developer",

                B2: "Company Name",

                C2: "2022-2025"

            }

        },


        Contact: {

            name: "Contact",

            color: "red",

            cells: {

                A1: "Contact Information",

                A3: "Email",

                B3: "email@example.com",

                A5: "LinkedIn",

                A6: "GitHub"

            }

        },


        Dashboard: {

            name: "Dashboard",

            color: "green",

            cells: {

                A1: "Portfolio Statistics",

                A3: "Projects",

                B3: "12",

                A4: "Languages",

                B4: "8",

                A5: "Years Coding",

                B5: "6"

            }

        }


    }

};



// ==========================================
// GET ACTIVE SHEET
// ==========================================

function getActiveSheet() {

    return workbook.sheets[
        workbook.activeSheet
    ];

}



// ==========================================
// GET ALL SHEETS
// ==========================================

function getSheets() {

    return workbook.sheets;

}



// ==========================================
// CHANGE ACTIVE SHEET
// ==========================================

function switchSheet(sheetName) {


    if (!workbook.sheets[sheetName]) {

        console.error(
            `Sheet "${sheetName}" does not exist`
        );

        return;

    }


    workbook.activeSheet = sheetName;


    renderSheet(sheetName);


}



// ==========================================
// LOAD SHEET DATA
// ==========================================

function loadSheetData(sheetName) {


    const sheet =
        workbook.sheets[sheetName];


    if (!sheet) return {};


    return sheet.cells;


}



// ==========================================
// UPDATE CELL VALUE
// ==========================================

function updateCell(
    sheetName,
    cellReference,
    value
) {


    const sheet =
        workbook.sheets[sheetName];


    if (!sheet) return;


    sheet.cells[cellReference] = value;


}



// ==========================================
// GET CELL VALUE
// ==========================================

function getCellValue(
    sheetName,
    cellReference
) {


    const sheet =
        workbook.sheets[sheetName];


    if (!sheet) return "";


    return (

        sheet.cells[cellReference]

        ||

        ""

    );


}



// ==========================================
// CREATE NEW SHEET
// ==========================================

function createSheet(
    sheetName,
    color="green"
) {


    if (workbook.sheets[sheetName]) {

        console.warn(
            "Sheet already exists"
        );

        return;

    }


    workbook.sheets[sheetName] = {

        name: sheetName,

        color: color,

        cells: {}

    };


}



// ==========================================
// DELETE SHEET
// ==========================================

function deleteSheet(sheetName) {


    if (

        sheetName === "Home"

    ) {

        console.warn(
            "Home sheet cannot be deleted"
        );

        return;

    }


    delete workbook.sheets[sheetName];


}



// ==========================================
// RENDER HOOK
// ==========================================
//
// grid.js will eventually implement this.
// This prevents errors while building.
//

function renderSheet(sheetName) {


    if (
        typeof generateGrid === "function"
    ) {

        generateGrid(
            loadSheetData(sheetName)
        );

    }


    updateSheetTitle(
        sheetName
    );


}



// ==========================================
// UPDATE WINDOW TITLE
// ==========================================

function updateSheetTitle(sheetName) {


    const title =
        document.querySelector(
            ".window-title"
        );


    if (!title) return;


    title.textContent =
        `Portfolio.xlsx - ${sheetName}`;


}



// ==========================================
// EXPORT
// ==========================================

window.Workbook = {


    state: workbook,

    getActiveSheet,

    getSheets,

    switchSheet,

    loadSheetData,

    updateCell,

    getCellValue,

    createSheet,

    deleteSheet

};