/*
==========================================
FORMULABAR.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Excel-style formula bar
- Cell value editing
- Formula display
- Commit/cancel edits
==========================================
*/


// ==========================================
// ELEMENT REFERENCES
// ==========================================

const formulaInput =
    document.getElementById(
        "formula-bar"
    );


const cellReferenceBox =
    document.querySelector(
        ".name-box"
    );



// ==========================================
// STATE
// ==========================================

const FormulaBar = {

    editing: false,

    originalValue: "",

    activeCell: null

};



// ==========================================
// CONNECT TO GRID SELECTION
// ==========================================

function updateFormulaBar(cell) {


    if (!cell) return;


    FormulaBar.activeCell =
        cell;



    const reference =
        cell.dataset.cell;



    const value =
        Workbook.getCellValue(

            Workbook.state.activeSheet,

            reference

        );



    FormulaBar.originalValue =
        value;



    if (cellReferenceBox) {

        cellReferenceBox.textContent =
            reference;

    }



    if (formulaInput) {

        formulaInput.value =
            value;

    }


}



// ==========================================
// BEGIN EDITING
// ==========================================

function startFormulaEdit() {


    if (!formulaInput) return;



    FormulaBar.editing =
        true;



    formulaInput.focus();



    formulaInput.select();



    formulaInput.classList.add(
        "editing"
    );


}



// ==========================================
// SAVE VALUE
// ==========================================

function commitFormulaEdit() {


    if (
        !FormulaBar.activeCell
    ) {

        return;

    }



    const reference =
        FormulaBar.activeCell.dataset.cell;



    const value =
        formulaInput.value;



    Workbook.updateCell(

        Workbook.state.activeSheet,

        reference,

        value

    );



    FormulaBar.activeCell.textContent =
        value;



    FormulaBar.originalValue =
        value;



    FormulaBar.editing =
        false;



    formulaInput.classList.remove(
        "editing"
    );


}



// ==========================================
// CANCEL EDIT
// ==========================================

function cancelFormulaEdit() {


    if (!formulaInput) return;



    formulaInput.value =
        FormulaBar.originalValue;



    FormulaBar.editing =
        false;



    formulaInput.classList.remove(
        "editing"
    );


}



// ==========================================
// FORMULA PARSER FOUNDATION
// ==========================================

function evaluateFormula(value) {


    /*
    Future formulas:

    =PROJECTCOUNT()
    =SKILLS()
    =YEAR()

    For now:
    return text values.
    */


    if (
        typeof value !== "string"
    ) {

        return value;

    }



    if (
        !value.startsWith("=")
    ) {

        return value;

    }



    const formula =
        value.substring(1);



    switch(formula) {


        case "PROJECTCOUNT()":

            return countProjects();



        case "SKILLS()":

            return countSkills();



        default:

            return value;


    }

}



// ==========================================
// EXAMPLE FUNCTIONS
// ==========================================

function countProjects() {


    const projects =
        Workbook.state.sheets.Projects;



    if (!projects)
        return 0;



    return Object.keys(
        projects.cells
    )
    .length;

}



function countSkills() {


    const skills =
        Workbook.state.sheets.Skills;



    if (!skills)
        return 0;



    return Object.keys(
        skills.cells
    )
    .length;


}



// ==========================================
// KEYBOARD EVENTS
// ==========================================

if (formulaInput) {


    formulaInput.addEventListener(
        "focus",
        startFormulaEdit
    );



    formulaInput.addEventListener(
        "keydown",
        event => {


            if (
                event.key === "Enter"
            ) {


                event.preventDefault();


                commitFormulaEdit();



                FormulaBar.activeCell.blur();


            }



            if (
                event.key === "Escape"
            ) {


                event.preventDefault();


                cancelFormulaEdit();


            }


        }
    );



    formulaInput.addEventListener(
        "blur",
        () => {


            if (
                FormulaBar.editing
            ) {

                commitFormulaEdit();

            }


        }
    );


}



// ==========================================
// CONNECT WITH GRID
// ==========================================

function attachFormulaBar() {


    const originalSelect =
        window.selectCell;



    window.selectCell =
        function(cell) {


            if (
                originalSelect
            ) {

                originalSelect(cell);

            }


            updateFormulaBar(cell);


        };


}



// ==========================================
// SHEET CHANGE RESET
// ==========================================

function resetFormulaBar() {


    FormulaBar.activeCell =
        null;


    FormulaBar.originalValue =
        "";



    if (formulaInput) {

        formulaInput.value =
            "";

    }


}



// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        attachFormulaBar();


    }
);



// ==========================================
// PUBLIC API
// ==========================================

window.FormulaBar = {

    updateFormulaBar,

    commitFormulaEdit,

    cancelFormulaEdit,

    resetFormulaBar,

    evaluateFormula

};