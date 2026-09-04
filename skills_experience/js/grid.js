/*
==========================================
GRID.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Table rendering
- Mobile table rendering
- Dashboard rendering
- Cell selection
- Spreadsheet styling
- Cell comments
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

function isMobileView() {

    return window.matchMedia(
        "(max-width: 700px)"
    ).matches;

}


// ==========================================
// GENERATE GRID
// ==========================================

function generateGrid() {

    if (!spreadsheet) {

        console.error(
            "Spreadsheet container missing."
        );

        return;

    }

    renderSheet();

}


// ==========================================
// COLUMN WIDTH
// ==========================================

function getColumnWidth(
    sheet,
    columnName
) {

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


    const mobile =
        isMobileView();


    // ======================================
    // MOBILE WIDTHS
    // ======================================

    if (mobile) {

        if (sheet.name === "Skills") {

            const mobileWidths = {

                Skill: 150,
                Category: 120,
                Type: 100,
                Years: 65,
                Level: 90

            };

            return mobileWidths[
                columnName
            ] ?? 120;

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

            return mobileWidths[
                columnName
            ] ?? 150;

        }

    }


    // ======================================
    // DESKTOP WIDTHS
    // ======================================

    return Math.min(
        Math.max(
            longest * 8 + 16,
            80
        ),
        560
    );

}


// ==========================================
// TABLE RENDERER
// ==========================================

function renderTable(sheet) {

    document.body.classList.remove(
        "dashboard-active"
    );

    spreadsheet.classList.remove(
        "dashboard-mode"
    );


    /*
    ------------------------------------------
    DESKTOP SPREADSHEET
    ------------------------------------------
    */

    const widths =
        sheet.columns.map(
            column =>
                `${getColumnWidth(
                    sheet,
                    column
                )}px`
        );


    spreadsheet.style.gridTemplateColumns =
        `50px ${widths.join(" ")}`;


    spreadsheet.style.gridAutoRows =
        "32px";


    /*
    ------------------------------------------
    CORNER CELL
    ------------------------------------------
    */

    const corner =
        document.createElement("div");

    corner.className =
        "corner-cell";

    spreadsheet.appendChild(
        corner
    );


    /*
    ------------------------------------------
    COLUMN LETTERS
    ------------------------------------------
    */

    function getColumnLetter(index) {

        let letter = "";

        while (index >= 0) {

            letter =
                String.fromCharCode(
                    (index % 26) + 65
                ) +
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

            spreadsheet.appendChild(
                header
            );

        }
    );


    /*
    ------------------------------------------
    TABLE HEADER ROW
    ------------------------------------------
    */

    const headerRow =
        document.createElement("div");

    headerRow.className =
        "row-header";

    headerRow.textContent =
        "1";

    spreadsheet.appendChild(
        headerRow
    );


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

            spreadsheet.appendChild(
                cell
            );

        }
    );


    /*
    ------------------------------------------
    DATA ROWS
    ------------------------------------------
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


// ==========================================
// MOBILE TABLE RENDERER
// ==========================================

function renderMobileTable(sheet) {

    if (
        !sheet.mobileView ||
        !Array.isArray(
            sheet.mobileView.columns
        )
    ) {

        console.warn(
            `No mobileView defined for ${sheet.name}.`
        );

        return;

    }


    const mobileView =
        sheet.mobileView;


    const table =
        document.createElement("table");


    table.className =
        `mobile-table mobile-${sheet.name.toLowerCase()}`;


    /*
    ------------------------------------------
    HEADER
    ------------------------------------------
    */

    const thead =
        document.createElement("thead");

    const headerRow =
        document.createElement("tr");


    mobileView.columns.forEach(
        column => {

            const th =
                document.createElement("th");

            /*
            mobileView currently stores
            column names directly as strings.
            */

            const key =
                typeof column === "string"
                    ? column
                    : column.key;


            const label =
                typeof column === "string"
                    ? column
                    : column.label ?? column.key;


            th.textContent =
                label;


            if (
                mobileView.widths &&
                mobileView.columns.indexOf(column)
                    < mobileView.widths.length
            ) {

                th.style.width =
                    mobileView.widths[
                        mobileView.columns.indexOf(
                            column
                        )
                    ];

            }


            headerRow.appendChild(
                th
            );

        }
    );


    thead.appendChild(
        headerRow
    );

    table.appendChild(
        thead
    );


    /*
    ------------------------------------------
    BODY
    ------------------------------------------
    */

    const tbody =
        document.createElement("tbody");


    sheet.rows.forEach(
        (row, rowIndex) => {

            const tr =
                document.createElement("tr");


            mobileView.columns.forEach(
                column => {

                    const td =
                        document.createElement("td");


                    const key =
                        typeof column === "string"
                            ? column
                            : column.key;


                    const value =
                        Workbook.getCellValue(
                            row,
                            key
                        );


                    /*
                    Links need to remain
                    clickable on mobile.
                    */

                    if (
                        key === "Link" &&
                        value
                    ) {

                        const anchor =
                            document.createElement("a");

                        anchor.href =
                            value;

                        anchor.target =
                            "_blank";

                        anchor.rel =
                            "noopener noreferrer";

                        anchor.className =
                            "pdf-link";

                        anchor.textContent =
                            "View PDF";

                        td.appendChild(
                            anchor
                        );

                    }

                    else {

                        td.textContent =
                            typeof value === "string"
                                ? value.trim()
                                : value ?? "";

                    }


                    /*
                    --------------------------------
                    MOBILE ROW SELECTION
                    --------------------------------
                    */

                    td.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();

                            /*
                            Remove previous
                            mobile selection.
                            */

                            document
                                .querySelectorAll(
                                    ".mobile-table tr.selected"
                                )
                                .forEach(
                                    selected => {

                                        selected.classList.remove(
                                            "selected"
                                        );

                                    }
                                );


                            tr.classList.add(
                                "selected"
                            );


                            if (formulaBar) {

                                formulaBar.value =
                                    String(
                                        value ?? ""
                                    ).trim();

                            }

                        }
                    );


                    tr.appendChild(
                        td
                    );

                }
            );


            tbody.appendChild(
                tr
            );

        }
    );


    table.appendChild(
        tbody
    );


    /*
    ------------------------------------------
    RETURN MOBILE TABLE
    ------------------------------------------
    */

    return table;

}


// ==========================================
// CELL COMMENTS
// ==========================================

function getCellComment(
    row,
    column
) {

    return row?.cellComments?.[column] || null;

}


// ==========================================
// DASHBOARD
// ==========================================

function renderDashboard(sheet) {

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
    ------------------------------------------
    KPI CARDS
    ------------------------------------------
    */

    const metricSection =
        document.createElement("div");


    metricSection.className =
        "metric-grid";


    sheet.metrics.forEach(
        metric => {

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


            metricSection.appendChild(
                card
            );

        }
    );


    dashboard.appendChild(
        metricSection
    );


    /*
    ------------------------------------------
    CHARTS
    ------------------------------------------
    */

    const chartSection =
        document.createElement("div");


    chartSection.className =
        "chart-grid";


    sheet.charts.forEach(
        chart => {

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

        }
    );


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

    const cell =
        document.createElement("div");


    cell.className =
        "cell";


    /*
    ------------------------------------------
    COMMENT
    ------------------------------------------
    */

    const comment =
        !header
            ? getCellComment(
                row,
                column
            )
            : null;


    /*
    ------------------------------------------
    HEADER
    ------------------------------------------
    */

    if (header) {

        cell.classList.add(
            "header-cell"
        );

    }


    /*
    ------------------------------------------
    CELL VALUE
    ------------------------------------------
    */

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


    /*
    ------------------------------------------
    CELL SELECTION
    ------------------------------------------
    */

    cell.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            selectCell(cell);

        }
    );


    /*
    ------------------------------------------
    COMMENTS
    ------------------------------------------
    */

    if (comment) {

        cell.classList.add(
            "has-comment"
        );


        const earmark =
            document.createElement("span");


        earmark.className =
            "comment-earmark";


        earmark.setAttribute(
            "aria-label",
            "Show comment"
        );


        cell.appendChild(
            earmark
        );


        const commentBox =
            document.createElement("div");


        commentBox.className =
            "cell-comment";


        /*
        --------------------------------------
        COMMENT TITLE
        --------------------------------------
        */

        if (comment.title) {

            const title =
                document.createElement("div");

            title.className =
                "cell-comment-title";

            title.textContent =
                comment.title;

            commentBox.appendChild(
                title
            );

        }


        /*
        --------------------------------------
        COMMENT TEXT
        --------------------------------------
        */

        if (comment.text) {

            const text =
                document.createElement("div");

            text.className =
                "cell-comment-text";

            text.textContent =
                comment.text;

            commentBox.appendChild(
                text
            );

        }


        /*
        --------------------------------------
        COMMENT LINKS
        --------------------------------------
        */

        if (
            Array.isArray(comment.links) &&
            comment.links.length
        ) {

            const links =
                document.createElement("div");


            links.className =
                "cell-comment-links";


            comment.links.forEach(
                link => {

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


                    links.appendChild(
                        anchor
                    );

                }
            );


            commentBox.appendChild(
                links
            );

        }


        /*
        --------------------------------------
        PUT COMMENT ON BODY
        --------------------------------------
        */

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


        /*
        --------------------------------------
        OPEN COMMENT
        --------------------------------------
        */

        function openComment() {

            document
                .querySelectorAll(
                    ".cell-comment.comment-open"
                )
                .forEach(
                    other => {

                        other.style.display =
                            "none";

                        other.classList.remove(
                            "comment-open"
                        );

                    }
                );


            const rect =
                cell.getBoundingClientRect();


            commentBox.style.display =
                "block";


            const popupWidth =
                commentBox.offsetWidth;


            const popupHeight =
                commentBox.offsetHeight;


            const gap =
                4;


            const padding =
                10;


            const mobile =
                isMobileView();


            /*
            ----------------------------------
            MOBILE
            ----------------------------------
            */

            if (mobile) {

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


            /*
            ----------------------------------
            DESKTOP
            ----------------------------------
            */

            let left =
                rect.right + gap;


            let top =
                rect.top;


            if (
                left + popupWidth >
                window.innerWidth - padding
            ) {

                left =
                    rect.left -
                    popupWidth -
                    gap;

            }


            if (left < padding) {

                left =
                    padding;

            }


            if (
                top + popupHeight >
                window.innerHeight - padding
            ) {

                top =
                    window.innerHeight -
                    popupHeight -
                    padding;

            }


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


        /*
        --------------------------------------
        CLOSE COMMENT
        --------------------------------------
        */

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


        /*
        --------------------------------------
        TOGGLE COMMENT
        --------------------------------------
        */

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


        /*
        --------------------------------------
        EARMARK CLICK
        --------------------------------------
        */

        earmark.addEventListener(
            "click",
            toggleComment
        );


        /*
        --------------------------------------
        CLICK INSIDE COMMENT
        --------------------------------------
        */

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
// CLOSE COMMENTS OUTSIDE
// ==========================================

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                ".cell-comment"
            )
        ) {

            return;

        }


        document
            .querySelectorAll(
                ".cell-comment.comment-open"
            )
            .forEach(
                comment => {

                    comment.style.display =
                        "none";

                    comment.classList.remove(
                        "comment-open"
                    );

                }
            );

    }
);


// ==========================================
// CHART.JS
// ==========================================

function createChart(
    canvas,
    chart,
    metrics
) {

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

            data: {

                labels:
                    Object.keys(data),

                datasets: [

                    {

                        label:
                            chart.title,

                        data:
                            Object.values(data),

                        backgroundColor: [

                            "#217346",
                            "#3f8077",
                            "#2e3e64",
                            "#5e4c83",
                            "#947394",
                            "#e2738c",
                            "#cd5f66",
                            "#ffa67c",
                            "#f5e1a2",
                            "#61bb46"

                        ],

                        borderColor:
                            "#2e3e64",

                        borderWidth:
                            1

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                scales:

                    chart.type === "radar"

                        ? {

                            r: {

                                beginAtZero: true,

                                min: 0,

                                max: 5

                            }

                        }

                        : {},

                plugins: {

                    legend: {

                        display:
                            chart.type !== "bar" &&
                            chart.type !== "radar"

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


    /*
    ------------------------------------------
    SAFETY CHECK
    ------------------------------------------
    */

    if (!sheet) {

        console.error(
            "No active sheet."
        );

        return;

    }


    /*
    ------------------------------------------
    REMOVE OLD COMMENT POPUPS
    ------------------------------------------
    */

    document
        .querySelectorAll(
            ".cell-comment"
        )
        .forEach(
            comment => comment.remove()
        );


    /*
    ------------------------------------------
    CLEAR PREVIOUS SHEET
    ------------------------------------------
    */

    spreadsheet.innerHTML = "";

    /*
    ------------------------------------------
    CLEAR DESKTOP GRID STYLES
    ------------------------------------------
    */

    spreadsheet.style.gridTemplateColumns = "";
    spreadsheet.style.gridAutoRows = "";
    spreadsheet.style.display = "";

    /*
    ------------------------------------------
    CLEAR PREVIOUS SELECTION
    ------------------------------------------
    */

    selectedCell = null;

    /*
    ------------------------------------------
    DASHBOARD
    ------------------------------------------
    */

    if (
        sheet.type === "dashboard"
    ) {

        document.body.classList.add(
            "dashboard-active"
        );

        spreadsheet.classList.add(
            "dashboard-mode"
        );


        renderDashboard(
            sheet
        );


        updateSheetTitle(
            sheet.name
        );


        return;

    }


    /*
    ------------------------------------------
    TABLE
    ------------------------------------------
    */

    if (
        sheet.type === "table"
    ) {

        document.body.classList.remove(
            "dashboard-active"
        );

        spreadsheet.classList.remove(
            "dashboard-mode"
        );


        /*
        MOBILE:
        Show ONLY mobileView.
        */

        if (
            isMobileView()
        ) {

            const mobileTable =
                renderMobileTable(
                    sheet
                );


            if (mobileTable) {

                spreadsheet.appendChild(
                    mobileTable
                );

            }

        }

        /*
        DESKTOP:
        Show ONLY normal Excel grid.
        */

        else {

            renderTable(
                sheet
            );

        }


        updateSheetTitle(
            sheet.name
        );


        return;

    }


    /*
    ------------------------------------------
    UNKNOWN SHEET
    ------------------------------------------
    */

    console.warn(
        "Unknown sheet type:",
        sheet.type
    );

}


// ==========================================
// HANDLE MOBILE/DESKTOP RESIZE
// ==========================================

let previousMobileState =
    isMobileView();


window.addEventListener(
    "resize",
    () => {

        const currentMobileState =
            isMobileView();


        if (
            currentMobileState !==
            previousMobileState
        ) {

            previousMobileState =
                currentMobileState;


            renderSheet();

        }

    }
);


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
