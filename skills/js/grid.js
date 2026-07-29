/*
==========================================
GRID.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Spreadsheet rendering
- Cell creation
- Cell editing
- Selection
- Keyboard navigation
- Workbook integration
==========================================
*/


// ==========================================
// GRID SETTINGS
// ==========================================

const GRID_ROWS = 100;
const GRID_COLUMNS = 26;


// ==========================================
// ELEMENTS
// ==========================================

const spreadsheet =
    document.getElementById("spreadsheet");


const formulaBar =
    document.getElementById("formula-bar");


const nameBox =
    document.querySelector(".name-box");


// ==========================================
// ACTIVE CELL
// ==========================================

let selectedCell = null;


// ==========================================
// COLUMN LETTERS
// ==========================================

function getColumnLetter(index) {

    let letter = "";

    while (index >= 0) {

        letter =
            String.fromCharCode(
                (index % 26) + 65
            )
            + letter;

        index =
            Math.floor(index / 26) - 1;

    }

    return letter;

}



// ==========================================
// CREATE GRID
// ==========================================

function generateGrid() {


    if (!spreadsheet) {

        console.error(
            "Spreadsheet container missing"
        );

        return;

    }


    spreadsheet.innerHTML = "";


    const activeSheet =
        Workbook.getActiveSheet();


    const sheetData =
        activeSheet.cells;



    // Corner cell

    const corner =
        document.createElement("div");


    corner.className =
        "corner-cell";


    spreadsheet.appendChild(
        corner
    );



    // Column headers

    for (
        let col = 0;
        col < GRID_COLUMNS;
        col++
    ) {


        const header =
            document.createElement("div");


        header.className =
            "column-header";


        header.textContent =
            getColumnLetter(col);


        spreadsheet.appendChild(
            header
        );

    }



    // Rows + cells

    for (
        let row = 1;
        row <= GRID_ROWS;
        row++
    ) {


        const rowHeader =
            document.createElement("div");


        rowHeader.className =
            "row-header";


        rowHeader.textContent =
            row;


        spreadsheet.appendChild(
            rowHeader
        );



        for (
            let col = 0;
            col < GRID_COLUMNS;
            col++
        ) {


            const reference =
                `${getColumnLetter(col)}${row}`;



            const cell =
                document.createElement("div");



            cell.className =
                "cell";


            cell.dataset.cell =
                reference;



            cell.textContent =
                sheetData[reference]
                ||
                "";



            cell.addEventListener(
                "click",
                () => {

                    selectCell(cell);

                }
            );



            cell.addEventListener(
                "dblclick",
                () => {

                    editCell(cell);

                }
            );



            spreadsheet.appendChild(
                cell
            );


        }

    }



    selectCell(
        document.querySelector(
            '[data-cell="A1"]'
        )
    );


}



// ==========================================
// SELECT CELL
// ==========================================

function selectCell(cell) {


    if (!cell) return;


    if (selectedCell) {

        selectedCell.classList.remove(
            "selected"
        );

    }


    selectedCell = cell;


    selectedCell.classList.add(
        "selected"
    );


    const reference =
        cell.dataset.cell;



    if (nameBox) {

        nameBox.textContent =
            reference;

    }



    if (formulaBar) {

        formulaBar.value =
            Workbook.getCellValue(
                Workbook.state.activeSheet,
                reference
            );

    }


}



// ==========================================
// EDIT CELL
// ==========================================

function editCell(cell) {


    const reference =
        cell.dataset.cell;


    cell.contentEditable = true;


    cell.classList.add(
        "editing"
    );


    cell.focus();



    cell.addEventListener(
        "blur",
        finishEditing,
        {
            once:true
        }
    );



    cell.addEventListener(
        "keydown",
        event => {


            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                cell.blur();

            }


        }
    );



    function finishEditing() {


        cell.contentEditable = false;


        cell.classList.remove(
            "editing"
        );



        Workbook.updateCell(

            Workbook.state.activeSheet,

            reference,

            cell.textContent

        );


        if (formulaBar) {

            formulaBar.value =
                cell.textContent;

        }


    }

}



// ==========================================
// FORMULA BAR UPDATE
// ==========================================

if (formulaBar) {


    formulaBar.addEventListener(
        "change",
        () => {


            if (!selectedCell)
                return;



            const reference =
                selectedCell.dataset.cell;



            Workbook.updateCell(

                Workbook.state.activeSheet,

                reference,

                formulaBar.value

            );



            selectedCell.textContent =
                formulaBar.value;


        }
    );


}



// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener(
    "keydown",
    event => {


        if (!selectedCell)
            return;



        const current =
            selectedCell.dataset.cell;



        let column =
            current.charCodeAt(0) - 65;



        let row =
            parseInt(
                current.substring(1)
            );



        switch(event.key) {


            case "ArrowUp":

                row--;

                break;


            case "ArrowDown":

                row++;

                break;


            case "ArrowLeft":

                column--;

                break;


            case "ArrowRight":

                column++;

                break;


            case "Tab":

                event.preventDefault();

                column++;

                break;


            default:

                return;

        }



        if (

            row < 1 ||
            row > GRID_ROWS ||
            column < 0 ||
            column >= GRID_COLUMNS

        ) {

            return;

        }



        const nextReference =
            `${getColumnLetter(column)}${row}`;



        const nextCell =
            document.querySelector(
                `[data-cell="${nextReference}"]`
            );



        if (nextCell) {

            selectCell(nextCell);


            nextCell.scrollIntoView({
                block:"nearest",
                inline:"nearest"
            });

        }


    }
);



// ==========================================
// WORKBOOK CONNECTION
// ==========================================

function renderSheet(sheetName) {


    generateGrid();


}



// ==========================================
// START APPLICATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        generateGrid();


    }
);



// ==========================================
// GLOBAL EXPORT
// ==========================================

window.Grid = {

    generateGrid,

    renderSheet

};