/*
==========================================
GRID.JS
Portfolio.xlsx Spreadsheet Website

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
// GRID INITIALIZATION
// ==========================================

const ROW_HEIGHT = 25;

function generateGrid() {

    if (!spreadsheet) {

        console.error(
            "Spreadsheet container missing."
        );
        renderSheet();
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

    let longest =
        String(columnName).length;

    sheet.rows.forEach(row => {

        const value =
            columnName === "Dates"
                ? Workbook.formatDates(row)
                : row[columnName];

        longest = Math.max(
            longest,
            String(value ?? "").length
        );

    });

    const isMobile =
        window.matchMedia(
            "(max-width: 700px)"
        ).matches;


    /*
    ======================================
    MOBILE
    ======================================
    */

    if (isMobile) {

        if (sheet.name === "Skills") {

            const mobileWidths = {

                Skill: 150,
                Category: 120,
                Type: 100,
                Years: 65,
                Level: 90

            };

            return mobileWidths[columnName] ?? 120;

        }


        if (sheet.name === "Background") {

            const mobileWidths = {

                Type: 90,
                Title: 180,
                Organization: 220,
                Location: 130,
                Field: 120,
                Description: 220,
                Achievements: 280,
                Dates: 160

            };

            return mobileWidths[columnName] ?? 150;

        }

    }


    /*
    ======================================
    DESKTOP
    ======================================
    */

    return Math.min(
        Math.max(longest * 8 + 16, 80),
        560
    );
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
                    column === "Dates"
                        ? Workbook.formatDates(row)
                        : row[column];



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

function getCellComment(row, column) {
     return row?.cellComments?.[column] || null;

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



    /*==========================
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

        createChart(
            canvas,
            chart,
            metrics
        );
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
    header = false,
    column = "",
    rowIndex,
    row = null
) {

    const cell = document.createElement("div");

    cell.className = "cell";


    // ======================================================
    // COMMENT
    // ======================================================

    const comment =
        !header
            ? getCellComment(row, column)
            : null;


    // ======================================================
    // HEADER
    // ======================================================

    if (header) {

        cell.classList.add("header-cell");

    }


    // ======================================================
    // CELL VALUE
    // ======================================================

    if (
        Workbook.state.activeSheet === "Skills" &&
        column === "Level" &&
        typeof value === "number"
    ) {

        cell.textContent =
            "★".repeat(value);

        cell.classList.add(
            `level-${value}`
        );

    }

    else if (
        column === "Link" &&
        value
    ) {

        cell.innerHTML = `
            <a
                class="pdf-link"
                href="${value}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View PDF
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;

    }

    else if (
        column === "Thesis" &&
        value &&
        row?.Link
    ) {

        cell.innerHTML = `
            <a
                class="project-link"
                href="${row.Link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${value}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;

    }

    else {

        cell.textContent =
            typeof value === "string"
                ? value.trim()
                : value ?? "";

    }


    // ======================================================
    // CELL SELECTION
    //
    // Every cell gets exactly one selection listener.
    // Comments are handled independently.
    // ======================================================

    cell.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            selectCell(cell);

        }
    );


    // ======================================================
    // COMMENT
    // ======================================================

    if (comment) {

        cell.classList.add("has-comment");


        // --------------------------------------------------
        // RED EARMARK
        // --------------------------------------------------

        const earmark =
            document.createElement("span");

        earmark.className =
            "comment-earmark";

        earmark.setAttribute(
            "aria-label",
            "Show comment"
        );

        cell.appendChild(earmark);


        // --------------------------------------------------
        // COMMENT BOX
        // --------------------------------------------------

        const commentBox =
            document.createElement("div");

        commentBox.className =
            "cell-comment";


        // --------------------------------------------------
        // COMMENT TITLE
        // --------------------------------------------------

        if (comment.title) {

            const title =
                document.createElement("div");

            title.className =
                "cell-comment-title";

            title.textContent =
                comment.title;

            commentBox.appendChild(title);

        }


        // --------------------------------------------------
        // COMMENT TEXT
        // --------------------------------------------------

        if (comment.text) {

            const text =
                document.createElement("div");

            text.className =
                "cell-comment-text";

            text.textContent =
                comment.text;

            commentBox.appendChild(text);

        }


        // --------------------------------------------------
        // COMMENT LINKS
        // --------------------------------------------------

        if (
            Array.isArray(comment.links) &&
            comment.links.length
        ) {

            const links =
                document.createElement("div");

            links.className =
                "cell-comment-links";


            comment.links.forEach(link => {

                const anchor =
                    document.createElement("a");

                anchor.href =
                    link.url;

                anchor.textContent =
                    link.label;

                anchor.target =
                    "_blank";

                anchor.rel =
                    "noopener noreferrer";

                links.appendChild(anchor);

            });


            commentBox.appendChild(links);

        }


        // --------------------------------------------------
        // PUT COMMENT ON BODY
        // --------------------------------------------------

        document.body.appendChild(
            commentBox
        );

        commentBox.style.position =
            "fixed";

        commentBox.style.display =
            "none";

        commentBox.style.zIndex =
            "99999";


        cell._commentBox =
            commentBox;


        // ==================================================
        // OPEN COMMENT
        // ==================================================

        function openComment() {

            // Close other comments
            document
                .querySelectorAll(
                    ".cell-comment.comment-open"
                )
                .forEach(other => {

                    other.style.display =
                        "none";

                    other.classList.remove(
                        "comment-open"
                    );

                });


            const rect =
                cell.getBoundingClientRect();


            commentBox.style.display =
                "block";


            const popupWidth =
                commentBox.offsetWidth;

            const popupHeight =
                commentBox.offsetHeight;


            const gap = 4;
            const padding = 10;


            const isMobile =
                window.matchMedia(
                    "(max-width: 700px)"
                ).matches;


            // ------------------------------------------
            // MOBILE
            // ------------------------------------------

            if (isMobile) {

                commentBox.style.left =
                    "10px";

                commentBox.style.right =
                    "10px";

                commentBox.style.bottom =
                    "10px";

                commentBox.style.top =
                    "auto";

                commentBox.style.width =
                    "calc(100vw - 20px)";

                commentBox.style.maxWidth =
                    "none";

                commentBox.classList.add(
                    "mobile-comment"
                );

                commentBox.classList.add(
                    "comment-open"
                );

                return;

            }


            // ------------------------------------------
            // DESKTOP
            // ------------------------------------------

            let left =
                rect.right + gap;

            let top =
                rect.top;


            // Not enough room on right
            if (
                left + popupWidth >
                window.innerWidth - padding
            ) {

                left =
                    rect.left -
                    popupWidth -
                    gap;

            }


            // Keep inside left edge
            if (left < padding) {

                left =
                    padding;

            }


            // Keep inside bottom edge
            if (
                top + popupHeight >
                window.innerHeight - padding
            ) {

                top =
                    window.innerHeight -
                    popupHeight -
                    padding;

            }


            // Keep inside top edge
            if (top < padding) {

                top =
                    padding;

            }


            commentBox.style.left =
                `${left}px`;

            commentBox.style.top =
                `${top}px`;


            commentBox.classList.add(
                "comment-open"
            );

        }


        // ==================================================
        // CLOSE COMMENT
        // ==================================================

        function closeComment() {

            commentBox.style.display =
                "none";

            commentBox.classList.remove(
                "comment-open"
            );

            commentBox.classList.remove(
                "mobile-comment"
            );

        }


        // ==================================================
        // TOGGLE COMMENT
        // ==================================================

        function toggleComment(event) {

            event.stopPropagation();


            const isOpen =
                commentBox.classList.contains(
                    "comment-open"
                );


            if (isOpen) {

                closeComment();

            }

            else {

                openComment();

            }

        }


        // ==================================================
        // RED EARMARK CLICK
        // ==================================================

        earmark.addEventListener(
            "click",
            toggleComment
        );


        // ==================================================
        // CLICK INSIDE COMMENT
        // ==================================================

        commentBox.addEventListener(
            "click",
            event => {

                event.stopPropagation();

            }
        );

    }


    return cell;

}

// ==========================================
// CLOSE COMMENTS WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener(
    "click",
    event => {

        /*
        If the click occurred inside a comment,
        leave the comment open.
        */

        if (
            event.target.closest(
                ".cell-comment"
            )
        ) {

            return;

        }


        /*
        Otherwise close every open comment.
        */

        document
            .querySelectorAll(
                ".cell-comment.comment-open"
            )
            .forEach(comment => {

                comment.style.display =
                    "none";

                comment.classList.remove(
                    "comment-open"
                );

            });

    }
);

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
            cell.textContent.trim();

    }

}



// ==========================================
// SHEET RENDER HOOK
// ==========================================
function renderSheet() {

    const sheet =
        Workbook.getActiveSheet();


    if (!sheet) {

        console.error(
            "No active sheet"
        );

        return;

    }


    // Remove old comment popups
    document
        .querySelectorAll(".cell-comment")
        .forEach(
            comment => comment.remove()
        );


    // Clear selection from previous sheet
    selectedCell = null;


    // Reset spreadsheet
    spreadsheet.innerHTML = "";


    // Dashboard styling
    if (sheet.type === "dashboard") {

        document.body.classList.add(
            "dashboard-active"
        );

        spreadsheet.classList.add(
            "dashboard-mode"
        );

    }

    else {

        document.body.classList.remove(
            "dashboard-active"
        );

        spreadsheet.classList.remove(
            "dashboard-mode"
        );

    }


    switch (sheet.type) {

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


    updateSheetTitle(
        sheet.name
    );

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