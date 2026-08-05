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


        renderDashboard(sheet);


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
function getColumnWidth(sheet, columnName) {
    // Start with the header text
    let longest = String(columnName).length;

    // Check every cell in the column
    sheet.rows.forEach(row => {
        const value = String(row[columnName] ?? "").trim();
        longest = Math.max(longest, value.length);  
    });

    // Approximate character width (8px per character)
    const width = longest * 8 + 24;

    // Clamp to a reasonable range
    return Math.min(Math.max(width, 100), 475);
}

function renderTable(sheet) {

    
    document.body.classList.remove(
        "dashboard-active"
    );

    spreadsheet.classList.remove(
        "dashboard-mode"
    );


    if(sheet.type !== "dashboard"){

        document.body.classList.remove(
            "dashboard-active"
        );

    }

    const widths = sheet.columns.map(col =>
    `${getColumnWidth(sheet, col)}px`
);

    spreadsheet.style.gridTemplateColumns =
        `50px ${widths.join(" ")}`;


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
                            rowIndex,
                            row
                        );



                    spreadsheet.appendChild(
                        cell
                    );


                }
            );


        }
    );


}

function renderDashboard(sheet){

    document.body.classList.add(
        "dashboard-active"
    );

    spreadsheet.classList.add(
        "dashboard-mode"
    );

    const dashboard =
        document.createElement("div");


    dashboard.className =
        "dashboard-container";



    const metrics =
        Workbook.getSkillMetrics();



    /*
    ==========================
    KPI CARDS
    ==========================
    */

    const metricSection =
        document.createElement("div");


    metricSection.className =
        "metric-grid";



    sheet.metrics.forEach(metric=>{


        const card =
            document.createElement("div");


        card.className =
            "dashboard-card";


        card.innerHTML = `

            <div class="dashboard-title">

                ${metric.title}

            </div>


            <div class="dashboard-value">

                ${metrics[metric.value]}

            </div>

        `;


        metricSection.appendChild(card);


    });



    dashboard.appendChild(
        metricSection
    );



    /*
    ==========================
    CHARTS
    ==========================
    */


    const chartSection =
        document.createElement("div");


    chartSection.className =
        "chart-grid";



    sheet.charts.forEach(chart=>{


        const chartCard =
            document.createElement("div");


        chartCard.className =
            "chart-card";



        chartCard.innerHTML = `

            <h3>
                ${chart.title}
            </h3>

            <canvas></canvas>

        `;



        const canvas =
            chartCard.querySelector(
                "canvas"
            );


        chartSection.appendChild(
            chartCard
        );


        setTimeout(()=>{

        createChart(
            canvas,
            chart,
            metrics
        );

    },100);


    });



    dashboard.appendChild(
        chartSection
    );



    spreadsheet.appendChild(
        dashboard
    );


}


// ==========================================
// CREATE CELL
// ==========================================

function createCell(
    value,
    header=false,
    column="",
    rowIndex=0,
    row=null
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

    if (column === "Link" && value) {

        cell.innerHTML = `
            <a class="pdf-link"
               href="${value}"
               target="_blank"
               rel="noopener noreferrer">
                View PDF <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;

    }

    else if (column === "Thesis" && value && row?.Link) {

        cell.innerHTML = `
            ${value}
            <a class="project-link"
               href="${row.Link}"
               target="_blank"
               rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;

    }

    else {

        cell.textContent = typeof value === "string"
        ? value.trim()
        : value ?? "";

    }

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


// ==========================================
// CHART.JS RENDERER
// ==========================================

function createChart(
    canvas,
    chart,
    metrics
){


    const data =
        metrics[chart.source];


    if (!data) {

        console.warn(
            "Missing chart data:",
            chart.source
        );

        return;

    }



    new Chart(
        canvas,
        {


            type:
                chart.type,


            data:{


                labels:
                    Object.keys(data),


                datasets:[

                    {

                        label:
                            chart.title,


                        data:
                            Object.values(data),


                        backgroundColor:[
                            "#217346",
                            "#3f8077",
                            "#2e3e64",
                            "#5e4c83",
                            "#947394",                        
                            "#e2738c",
                            "#cd5f66",
                            "#ffa67c",
                            "#f5e1a2",
                            "#61bb46",
                        ],


                        borderColor:
                            "#2e3e64",

                        borderWidth:
                            1

                    }

                ]

            },


            options:{


                responsive:true,


                maintainAspectRatio:false,


                scales:

                    chart.type === "radar"

                    ?

                    {

                        r:{

                            beginAtZero:true,

                            min:0,

                            max:5

                        }

                    }

                    :

                    {},



                plugins:{


                    legend:{
                        display:
                            chart.type !== "bar" && chart.type !== "radar"
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
            formulaBar.value = cell.textContent.trim();


    }



}



// ==========================================
// SHEET RENDER HOOK
// ==========================================
function renderSheet(){


    const sheet =
        Workbook.getActiveSheet();


    if(!sheet){

        console.error(
            "No active sheet"
        );

        return;

    }


    if(sheet.type !== "dashboard"){

        document.body.classList.remove(
            "dashboard-active"
        );

        spreadsheet.classList.remove(
            "dashboard-mode"
        );

    }



    spreadsheet.innerHTML = "";


    switch(sheet.type){


        case "table":

            renderTable(sheet);

            break;


        case "dashboard":

            renderDashboard(sheet);

            break;


        default:

            console.warn(
                "Unknown sheet type:",
                sheet.type
            );

    }

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