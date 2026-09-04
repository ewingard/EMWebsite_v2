/*
==========================================
GRID.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Table rendering
- Mobile table rendering
- Dashboard rendering
- Cell selection
- Excel-style name box
- Formula bar
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
// CONSTANTS
// ==========================================

const ROW_HEIGHT = 25;


// ==========================================
// MOBILE CHECK
// ==========================================

function isMobileView() {

    return window.matchMedia(
        "(max-width: 700px)"
    ).matches;

}


// ==========================================
// EXCEL COLUMN LETTER
// ==========================================

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


// ==========================================
// EXCEL CELL ADDRESS
// ==========================================

function getCellAddress(
    columnIndex,
    rowNumber
) {

    return (
        getColumnLetter(columnIndex) +
        rowNumber
    );

}


// ==========================================
// SET NAME BOX
// ==========================================

function setNameBox(address) {

    if (!nameBox) {

        return;

    }


    const value =
        address ?? "";


    /*
    Supports either:

    <input class="name-box">

    or:

    <div class="name-box">
    */

    if (
        "value" in nameBox
    ) {

        nameBox.value =
            value;

    }

    else {

        nameBox.textContent =
            value;

    }

}


// ==========================================
// SET FORMULA BAR
// ==========================================

function setFormulaBar(value) {

    if (!formulaBar) {

        return;

    }


    let displayValue = "";


    if (
        value !== null &&
        value !== undefined
    ) {

        displayValue =
            String(value);

    }


    /*
    Supports input / textarea and
    normal elements.
    */

    if (
        "value" in formulaBar
    ) {

        formulaBar.value =
            displayValue;

    }

    else {

        formulaBar.textContent =
            displayValue;

    }

}


// ==========================================
// UPDATE SELECTION UI
// ==========================================

function updateSelectionUI(
    cell,
    value
) {

    if (!cell) {

        return;

    }


    const address =
        cell.dataset.cellAddress || "";


    /*
    Name box
    */

    if (address) {

        setNameBox(
            address
        );

    }


    /*
    Formula bar

    Use the explicitly supplied value.
    This is the original cell value and
    not the rendered HTML.
    */

    setFormulaBar(
        value
    );


    /*
    Notify FormulaBar.js if it exists.

    This is optional and does not control
    selection. It simply keeps the separate
    FormulaBar object synchronized.
    */

    if (
        window.FormulaBar &&
        typeof window.FormulaBar.updateFormulaBar ===
        "function"
    ) {

        window.FormulaBar.updateFormulaBar(
            cell,
            value
        );

    }

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


    if (!Array.isArray(sheet.rows)) {

        return 80;

    }


    sheet.rows.forEach(
        row => {

            const value =
                columnName === "Dates"
                    ? Workbook.formatDates(row)
                    : row[columnName];


            longest =
                Math.max(
                    longest,
                    String(value ?? "").length
                );

        }
    );


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
    DESKTOP GRID COLUMNS
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

    sheet.columns.forEach(
        (column, columnIndex) => {

            const header =
                document.createElement("div");


            header.className =
                "column-header";


            header.textContent =
                getColumnLetter(
                    columnIndex
                );


            spreadsheet.appendChild(
                header
            );

        }
    );


    /*
    ------------------------------------------
    TABLE HEADER
    ------------------------------------------

    Row 1 contains the actual column names.
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
        (column, columnIndex) => {

            const address =
                getCellAddress(
                    columnIndex,
                    1
                );


            const cell =
                createCell(
                    column,
                    true,
                    column,
                    0,
                    null,
                    address
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

            /*
            Spreadsheet row numbers start
            at 2 because row 1 is the header.
            */

            const spreadsheetRow =
                rowIndex + 2;


            /*
            ----------------------------------
            ROW HEADER
            ----------------------------------
            */

            const rowHeader =
                document.createElement("div");


            rowHeader.className =
                "row-header";


            rowHeader.textContent =
                spreadsheetRow;


            spreadsheet.appendChild(
                rowHeader
            );


            /*
            ----------------------------------
            CELLS
            ----------------------------------
            */

            sheet.columns.forEach(
                (column, columnIndex) => {

                    let value;


                    /*
                    Dates are a calculated/display
                    value rather than a direct row
                    property.
                    */

                    if (
                        column === "Dates"
                    ) {

                        value =
                            Workbook.formatDates(
                                row
                            );

                    }

                    else {

                        value =
                            row[column];

                    }


                    const address =
                        getCellAddress(
                            columnIndex,
                            spreadsheetRow
                        );


                    const cell =
                        createCell(
                            value,
                            false,
                            column,
                            rowIndex,
                            row,
                            address
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

        return null;

    }


    const mobileView =
        sheet.mobileView;


    const table =
        document.createElement("table");


    table.className =
        `mobile-table mobile-${sheet.name.toLowerCase()}`;


    table.style.width =
        "100%";


    table.style.borderCollapse =
        "collapse";


    table.style.borderSpacing =
        "0";


    /*
    ------------------------------------------
    COLUMN WIDTHS
    ------------------------------------------
    */

    const colgroup =
        document.createElement("colgroup");


    mobileView.columns.forEach(
        (column, index) => {

            const col =
                document.createElement("col");


            if (
                mobileView.widths &&
                mobileView.widths[index]
            ) {

                col.style.width =
                    mobileView.widths[index];

            }


            colgroup.appendChild(
                col
            );

        }
    );


    table.appendChild(
        colgroup
    );


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

            const label =
                typeof column === "string"
                    ? column
                    : column.label ??
                      column.key;


            const th =
                document.createElement("th");


            th.textContent =
                label;


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
                (column, columnIndex) => {

                    const key =
                        typeof column === "string"
                            ? column
                            : column.key;


                    const td =
                        document.createElement("td");


                    const value =
                        Workbook.getCellValue(
                            row,
                            key
                        );


                    /*
                    --------------------------------
                    MOBILE CELL ADDRESS
                    --------------------------------

                    Mobile does not currently use
                    the desktop name box, but we
                    still store the address.
                    */

                    const address =
                        getCellAddress(
                            columnIndex,
                            rowIndex + 2
                        );


                    td.dataset.cellAddress =
                        address;


                    td.dataset.rawValue =
                        value ?? "";


                    /*
                    --------------------------------
                    PDF LINK
                    --------------------------------
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
                    MOBILE SELECTION
                    --------------------------------
                    */

                    td.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();


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


                            /*
                            Mobile intentionally
                            does not update the
                            desktop name box.
                            */

                            setFormulaBar(
                                value
                            );

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
    rowIndex = 0,
    row = null,
    cellAddress = ""
) {

    const cell =
        document.createElement("div");


    cell.className =
        "cell";


    /*
    ------------------------------------------
    STORE CELL ADDRESS
    ------------------------------------------

    Example:

    data-cell-address="C2"

    JavaScript:

    cell.dataset.cellAddress
    */

    if (cellAddress) {

        cell.dataset.cellAddress =
            cellAddress;

    }


    /*
    ------------------------------------------
    STORE RAW CELL VALUE
    ------------------------------------------

    IMPORTANT:

    This is what the formula bar uses.

    It is intentionally stored separately
    from rendered HTML/text.

    That prevents:

    - PDF icons
    - comment markers
    - star ratings
    - link text

    from corrupting the formula bar.
    */

    cell.dataset.rawValue =
        value ?? "";


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

        /*
        Display stars in the grid.

        Formula bar still receives the raw
        numeric value because of data-raw-value.
        */

        cell.textContent =
            "★".repeat(value);


        cell.classList.add(
            `level-${value}`
        );

    }

    else if (
    !header &&
    column === "Link" &&
    value
    ) {

        const anchor =
            document.createElement("a");


        anchor.className =
            "pdf-link";


        anchor.href =
            value;


        anchor.target =
            "_blank";


        anchor.rel =
            "noopener noreferrer";


        anchor.textContent =
            "View PDF";


        const icon =
            document.createElement("i");


        icon.className =
            "fa-solid fa-arrow-up-right-from-square";


        anchor.appendChild(
            document.createTextNode(" ")
        );


        anchor.appendChild(
            icon
        );


        cell.appendChild(
            anchor
        );

    }

    else if (
        column === "Thesis" &&
        value &&
        row?.Link
    ) {

        const anchor =
            document.createElement("a");


        anchor.className =
            "project-link";


        anchor.href =
            row.Link;


        anchor.target =
            "_blank";


        anchor.rel =
            "noopener noreferrer";


        anchor.textContent =
            value;


        const icon =
            document.createElement("i");


        icon.className =
            "fa-solid fa-arrow-up-right-from-square";


        anchor.appendChild(
            document.createTextNode(" ")
        );


        anchor.appendChild(
            icon
        );


        cell.appendChild(
            anchor
        );

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

    This is the ONLY place where normal
    desktop cell selection happens.
    */

    cell.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            selectCell(
                cell,
                value
            );

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


        commentBox.style.position =
            "fixed";


        commentBox.style.display =
            "none";


        commentBox.style.zIndex =
            "99999";


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
        ADD COMMENT TO BODY
        --------------------------------------
        */

        document.body.appendChild(
            commentBox
        );


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

                responsive:
                    true,

                maintainAspectRatio:
                    false,

                scales:

                    chart.type === "radar"

                        ? {

                            r: {

                                beginAtZero:
                                    true,

                                min:
                                    0,

                                max:
                                    5

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

function selectCell(
    cell,
    value = undefined
) {

    if (!cell) {

        return;

    }


    /*
    ------------------------------------------
    REMOVE PREVIOUS SELECTION
    ------------------------------------------
    */

    if (
        selectedCell &&
        selectedCell !== cell
    ) {

        selectedCell.classList.remove(
            "selected"
        );

    }


    /*
    ------------------------------------------
    SET NEW SELECTED CELL
    ------------------------------------------
    */

    selectedCell =
        cell;


    selectedCell.classList.add(
        "selected"
    );


    /*
    ------------------------------------------
    GET RAW VALUE
    ------------------------------------------
    */

    let cellValue;


    if (
        value !== undefined
    ) {

        cellValue =
            value;

    }

    else if (
        cell.dataset.rawValue !== undefined
    ) {

        cellValue =
            cell.dataset.rawValue;

    }

    else {

        cellValue =
            cell.textContent.trim();

    }


    /*
    ------------------------------------------
    DESKTOP SELECTION
    ------------------------------------------
    */

    if (
        !isMobileView()
    ) {

        updateSelectionUI(
            cell,
            cellValue
        );

    }

}


// ==========================================
// SHEET TITLE
// ==========================================

function updateSheetTitle(
    sheetName
) {

    const title =
        document.querySelector(
            ".window-title"
        );


    if (!title) {

        return;

    }


    title.textContent =
        `Portfolio.xlsx - ${sheetName}`;

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

    spreadsheet.innerHTML =
        "";


    /*
    ------------------------------------------
    CLEAR DESKTOP GRID STYLES
    ------------------------------------------
    */

    spreadsheet.style.removeProperty(
        "grid-template-columns"
    );


    spreadsheet.style.removeProperty(
        "grid-template-rows"
    );


    spreadsheet.style.removeProperty(
        "grid-auto-columns"
    );


    spreadsheet.style.removeProperty(
        "grid-auto-rows"
    );


    spreadsheet.style.removeProperty(
        "display"
    );


    /*
    ------------------------------------------
    CLEAR SELECTION
    ------------------------------------------
    */

    selectedCell =
        null;


    /*
    ------------------------------------------
    RESET NAME BOX
    ------------------------------------------

    Desktop starts at A1.

    The formula bar starts blank because
    no actual cell has been selected yet.
    */

    if (
        !isMobileView()
    ) {

        setNameBox(
            "A1"
        );


        setFormulaBar(
            ""
        );

    }


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
        --------------------------------------
        MOBILE
        --------------------------------------
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
        --------------------------------------
        DESKTOP
        --------------------------------------
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
// MOBILE/DESKTOP RESIZE
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

        /*
        --------------------------------------
        DESKTOP
        --------------------------------------

        Name box starts at A1.
        Formula bar starts blank.
        */

        if (
            !isMobileView()
        ) {

            setNameBox(
                "A1"
            );


            setFormulaBar(
                ""
            );

        }


        generateGrid();

    }
);


// ==========================================
// EXPORT
// ==========================================

window.Grid = {

    generateGrid,

    renderSheet,

    selectCell

};
