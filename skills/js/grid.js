/*
==========================================
GRID_V2.JS
Portfolio.xlsx Spreadsheet Website

Compatible with:
workbook_v2.js

Handles:
- Table rendering
- Dashboard rendering
- Cell selection
- Spreadsheet styling
- Chart.js visualization
==========================================
*/


// ==========================================
// ELEMENTS
// ==========================================

const spreadsheet =
    document.getElementById("spreadsheet");


const formulaBar =
    document.getElementById("formula-bar");


const nameBox =
    document.querySelector(".name-box");



let selectedCell = null;


// ==========================================
// GRID SETTINGS
// ==========================================

const ROW_HEIGHT = 25;



// ==========================================
// MAIN RENDER FUNCTION
// ==========================================

function generateGrid() {


    if (!spreadsheet) {

        console.error(
            "Spreadsheet container missing"
        );

        return;

    }


    spreadsheet.innerHTML = "";


    const sheet =
        Workbook.getActiveSheet();



    if (!sheet) return;



    if (sheet.type === "dashboard") {


        renderDashboard();


        return;

    }



    if (sheet.type === "table") {


        renderTable(sheet);


        return;

    }


}



// ==========================================
// TABLE RENDERER
// ==========================================

function renderTable(sheet) {


    spreadsheet.style.gridTemplateColumns =
        `50px repeat(${sheet.columns.length}, 160px)`;


    spreadsheet.style.gridAutoRows =
        "32px";


    /*
    --------------------------
    CORNER CELL
    --------------------------
    */


    const corner =
        document.createElement("div");


    corner.className =
        "corner-cell";


    spreadsheet.appendChild(corner);



    /*
    --------------------------
    COLUMN HEADERS
    --------------------------
    */

    function getColumnLetter(index) {


    let letter = "";


    while(index >= 0){


        letter =
            String.fromCharCode(
                (index % 26) + 65
            )
            +
            letter;


        index =
            Math.floor(index / 26) - 1;


    }


    return letter;

}


    sheet.columns.forEach(
        (column, index) => {


            const header =
                document.createElement("div");


            header.className =
                "column-header";


            header.textContent =
                getColumnLetter(index);


            spreadsheet.appendChild(header);



        }
    );



    /*
    --------------------------
    TABLE HEADER ROW
    --------------------------
    */


    const headerRow =
        document.createElement("div");


    headerRow.className =
        "row-header";


    headerRow.textContent =
        "1";


    spreadsheet.appendChild(headerRow);



    sheet.columns.forEach(
        column => {


            const cell =
                createCell(
                    column,
                    true
                );


            cell.classList.add(
                "table-header"
            );


            spreadsheet.appendChild(cell);


        }
    );



    /*
    --------------------------
    DATA ROWS
    --------------------------
    */


    sheet.rows.forEach(
        (row, rowIndex) => {


            const rowHeader =
                document.createElement("div");


            rowHeader.className =
                "row-header";


            rowHeader.textContent =
                rowIndex + 2;


            spreadsheet.appendChild(
                rowHeader
            );



            sheet.columns.forEach(
                column => {


                    const value =
                        row[column];



                    const cell =
                        createCell(
                            value,
                            false,
                            column,
                            rowIndex
                        );



                    spreadsheet.appendChild(
                        cell
                    );


                }
            );


        }
    );


}


// ==========================================
// CREATE CELL
// ==========================================

function createCell(
    value,
    header=false,
    column="",
    rowIndex=0
) {


    const cell =
        document.createElement("div");



    cell.className =
        "cell";



    if (header) {

        cell.classList.add(
            "header-cell"
        );

    }



    /*
    --------------------------
    SKILL LEVEL FORMATTING
    --------------------------
    */


    if (

        Workbook.state.activeSheet === "Skills"

        &&

        column === "Level"

        &&

        typeof value === "number"

    ) {


        cell.textContent =
            "★".repeat(value);



        cell.classList.add(
            `level-${value}`
        );


    }

    else {


        cell.textContent =
            value ?? "";


    }




    cell.addEventListener(
        "click",
        () => {

            selectCell(cell);

        }
    );



    return cell;


}



// ==========================================
// DASHBOARD
// ==========================================

function renderDashboard() {


    const metrics =
        Workbook.getSkillMetrics();



    spreadsheet.innerHTML = `

        <div class="dashboard-grid">


            <div class="kpi-card">

                <h3>Total Skills</h3>

                <span>
                    ${metrics.totalSkills}
                </span>

            </div>


            <div class="kpi-card">

                <h3>Total Experience</h3>

                <span>
                    ${metrics.totalYears} yrs
                </span>

            </div>


            <div class="kpi-card">

                <h3>Average Level</h3>

                <span>
                    ${metrics.averageLevel}
                    ★
                </span>

            </div>


        </div>


        <div class="chart-container">

            <canvas id="skillsCategoryChart"></canvas>

        </div>


    `;



    createCategoryChart(
        metrics.categories
    );


}



// ==========================================
// CHART.JS
// ==========================================

function createCategoryChart(categories) {


    const canvas =
        document.getElementById(
            "skillsCategoryChart"
        );


    if (!canvas) return;



    new Chart(
        canvas,
        {

            type: "bar",


            data: {


                labels:
                    Object.keys(categories),


                datasets: [

                    {

                        label:
                            "Skills by Category",


                        data:
                            Object.values(categories),


                        backgroundColor:
                            "#107C41"

                    }

                ]


            },


            options: {

                responsive:true,


                plugins: {

                    legend: {

                        display:false

                    }

                }


            }


        }

    );


}



// ==========================================
// CELL SELECTION
// ==========================================

function selectCell(cell) {


    if (!cell) return;



    if (selectedCell) {


        selectedCell.classList.remove(
            "selected"
        );


    }



    selectedCell =
        cell;



    selectedCell.classList.add(
        "selected"
    );



    if (formulaBar) {


        formulaBar.value =
            cell.textContent;


    }



}



// ==========================================
// SHEET RENDER HOOK
// ==========================================

function renderSheet() {


    generateGrid();


}



// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        generateGrid();


    }
);



// ==========================================
// EXPORT
// ==========================================

window.Grid = {


    generateGrid,

    renderSheet


};