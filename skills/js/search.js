/*
==========================================
SEARCH.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Workbook search
- Cell matching
- Result navigation
- Search highlighting
==========================================
*/


// ==========================================
// SEARCH STATE
// ==========================================

const Search = {

    query: "",

    results: [],

    currentIndex: 0

};



// ==========================================
// ELEMENT REFERENCES
// ==========================================

const searchInput =
    document.getElementById(
        "search-input"
    );


const searchButton =
    document.getElementById(
        "search-btn"
    );



// ==========================================
// SEARCH WORKBOOK
// ==========================================

function searchWorkbook(query) {


    Search.query =
        query.trim()
        .toLowerCase();



    Search.results = [];

    Search.currentIndex = 0;



    if (!Search.query) {

        clearSearchHighlights();

        updateSearchStatus();

        return;

    }



    const sheets =
        Workbook.getSheets();



    Object.keys(sheets).forEach(
        sheetName => {


            const sheet =
                sheets[sheetName];



            /*
            Search sheet name
            */

            if (
                sheetName
                    .toLowerCase()
                    .includes(Search.query)
            ) {


                Search.results.push({

                    type: "sheet",

                    sheet: sheetName,

                    cell: null

                });


            }



            /*
            Search cell values
            */

            Object.keys(
                sheet.cells
            )
            .forEach(reference => {


                const value =
                    String(
                        sheet.cells[reference]
                    )
                    .toLowerCase();



                if (
                    value.includes(
                        Search.query
                    )
                ) {


                    Search.results.push({

                        type:"cell",

                        sheet:sheetName,

                        cell:reference,

                        value:
                            sheet.cells[reference]

                    });


                }


            });


        }
    );



    highlightSearchResults();


    updateSearchStatus();



    return Search.results;

}



// ==========================================
// HIGHLIGHT RESULTS
// ==========================================

function highlightSearchResults() {


    clearSearchHighlights();



    Search.results.forEach(result => {


        if (
            result.type !== "cell"
        ) {

            return;

        }



        /*
        Only highlight current sheet
        */

        if (

            result.sheet !==
            Workbook.state.activeSheet

        ) {

            return;

        }



        const cell =
            document.querySelector(
                `[data-cell="${result.cell}"]`
            );



        if (cell) {


            cell.classList.add(
                "search-match"
            );


        }


    });


}



// ==========================================
// CLEAR HIGHLIGHTS
// ==========================================

function clearSearchHighlights() {


    document
        .querySelectorAll(
            ".search-match"
        )
        .forEach(cell => {


            cell.classList.remove(
                "search-match"
            );


        });


}



// ==========================================
// GO TO NEXT RESULT
// ==========================================

function nextSearchResult() {


    if (
        Search.results.length === 0
    ) {

        return;

    }



    Search.currentIndex++;



    if (

        Search.currentIndex >=
        Search.results.length

    ) {

        Search.currentIndex = 0;

    }



    openSearchResult(
        Search.results[
            Search.currentIndex
        ]
    );


}



// ==========================================
// OPEN RESULT
// ==========================================

function openSearchResult(result) {


    if (
        result.type === "sheet"
    ) {


        Workbook.switchSheet(
            result.sheet
        );


        return;

    }



    if (
        result.type === "cell"
    ) {


        if (

            Workbook.state.activeSheet
            !==
            result.sheet

        ) {


            Workbook.switchSheet(
                result.sheet
            );


        }



        setTimeout(
            () => {


                const cell =
                    document.querySelector(
                        `[data-cell="${result.cell}"]`
                    );



                if (cell) {


                    cell.scrollIntoView({

                        behavior:"smooth",

                        block:"center",

                        inline:"center"

                    });



                    if (
                        window.selectCell
                    ) {

                        selectCell(cell);

                    }


                }


            },
            100
        );


    }


}



// ==========================================
// SEARCH STATUS
// ==========================================

function updateSearchStatus() {


    let status =
        document.querySelector(
            ".search-status"
        );



    if (!status) {


        status =
            document.createElement(
                "span"
            );


        status.className =
            "search-status";


        const searchPanel =
            document.querySelector(
                ".search-panel"
            );


        if (searchPanel) {

            searchPanel.appendChild(
                status
            );

        }


    }



    status.textContent =

        Search.results.length > 0

        ?

        `${Search.results.length} results found`

        :

        "No results";



}



// ==========================================
// SEARCH INPUT EVENTS
// ==========================================

if (searchInput) {


    searchInput.addEventListener(
        "input",
        event => {


            searchWorkbook(
                event.target.value
            );


        }
    );



}



// ==========================================
// SEARCH BUTTON
// ==========================================

if (searchButton) {


    searchButton.addEventListener(
        "click",
        () => {


            if (searchInput) {


                searchInput.focus();


            }


        }
    );


}



// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener(
    "keydown",
    event => {


        /*
        Ctrl + /
        Open search
        */

        if (

            event.ctrlKey &&
            event.key === "/"

        ) {


            event.preventDefault();



            if (searchInput) {

                searchInput.focus();

            }


        }



        /*
        Enter
        Next result
        */

        if (

            event.key === "Enter" &&
            document.activeElement === searchInput

        ) {


            nextSearchResult();


        }


        /*
        Escape
        Clear search
        */

        if (

            event.key === "Escape"

        ) {


            if (searchInput) {

                searchInput.value = "";

            }


            clearSearchHighlights();


        }


    }
);



// ==========================================
// PUBLIC API
// ==========================================

window.WorkbookSearch = {

    searchWorkbook,

    nextSearchResult,

    clearSearchHighlights,

    openSearchResult

};