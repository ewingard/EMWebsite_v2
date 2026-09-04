/*
==========================================
FORMULABAR.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Excel-style formula bar display
- Selected cell reference
- Selected cell value
- Formula bar UI state

NOTE:
The formula bar is currently READ-ONLY.
Cell selection is controlled by grid.js.
==========================================
*/


// ==========================================
// ELEMENT REFERENCES
// ==========================================

const formulaInput =
    document.getElementById("formula-bar");

const cellReferenceBox =
    document.querySelector(".name-box");


// ==========================================
// FORMULA BAR OBJECT
// ==========================================

const FormulaBar = {

    activeCell: null,

    originalValue: "",

    editing: false

};


// ==========================================
// SET NAME BOX
// ==========================================

function setFormulaBarReference(reference) {

    if (!cellReferenceBox) {

        return;

    }


    if ("value" in cellReferenceBox) {

        cellReferenceBox.value =
            reference ?? "";

    }

    else {

        cellReferenceBox.textContent =
            reference ?? "";

    }

}


// ==========================================
// SET FORMULA BAR VALUE
// ==========================================

function setFormulaBarValue(value) {

    if (!formulaInput) {

        return;

    }


    /*
    Convert everything to a string.

    null / undefined become an empty
    formula bar.
    */

    if (
        value === null ||
        value === undefined
    ) {

        formulaInput.value = "";

        return;

    }


    formulaInput.value =
        String(value);

}


// ==========================================
// UPDATE FORMULA BAR
// ==========================================

function updateFormulaBar(
    cell,
    value = undefined
) {

    if (!cell) {

        resetFormulaBar();

        return;

    }


    FormulaBar.activeCell =
        cell;


    /*
    ------------------------------------------
    CELL REFERENCE
    ------------------------------------------

    grid.js stores:

    data-cell-address="C4"

    JavaScript accesses this as:

    cell.dataset.cellAddress
    */

    const reference =
        cell.dataset.cellAddress || "";


    /*
    ------------------------------------------
    CELL VALUE
    ------------------------------------------

    grid.js stores the original value in:

    data-raw-value

    This is preferable to textContent because
    textContent may contain:

    - icons
    - comments
    - links
    - star ratings
    */

    let displayValue;


    if (
        value !== undefined
    ) {

        displayValue =
            value;

    }

    else if (
        cell.dataset.rawValue !== undefined
    ) {

        displayValue =
            cell.dataset.rawValue;

    }

    else {

        displayValue =
            cell.textContent.trim();

    }


    FormulaBar.originalValue =
        displayValue ?? "";


    /*
    ------------------------------------------
    UPDATE UI
    ------------------------------------------
    */

    setFormulaBarReference(
        reference
    );


    setFormulaBarValue(
        displayValue
    );

}


// ==========================================
// RESET FORMULA BAR
// ==========================================

function resetFormulaBar() {

    FormulaBar.activeCell =
        null;


    FormulaBar.originalValue =
        "";


    FormulaBar.editing =
        false;


    setFormulaBarReference(
        "A1"
    );


    setFormulaBarValue(
        ""
    );

}


// ==========================================
// FORMULA EVALUATION FOUNDATION
// ==========================================

function evaluateFormula(value) {

    /*
    Formula support can be added later.

    For now, simply return the supplied
    value unchanged.
    */

    return value;

}


// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
        Do not overwrite the grid's initial
        A1 state if the elements exist.
        */

        if (cellReferenceBox) {

            setFormulaBarReference(
                "A1"
            );

        }

        if (formulaInput) {

            setFormulaBarValue(
                ""
            );

        }

    }
);


// ==========================================
// PUBLIC API
// ==========================================

window.FormulaBar = {

    updateFormulaBar,

    resetFormulaBar,

    evaluateFormula

};
