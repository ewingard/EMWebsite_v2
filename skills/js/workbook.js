/*
==========================================
WORKBOOK_V2.JS
Portfolio.xlsx Spreadsheet Website

Data-driven workbook architecture

Handles:
- Workbook state
- Sheet navigation
- Table data
- Dashboard metrics
- Portfolio data models

Designed for grid_v2.js
==========================================
*/


// ==========================================
// WORKBOOK STATE
// ==========================================
    const dashboardData = {


        projectsCompleted: 12,


        publications: 5,


        yearsResearchExperience: 6,


        favoriteTools: [

            "Excel",
            "Python",
            "SQL",
            "REDCap"

        ]

    };

const workbook = {


    activeSheet: "Skills",


    sheets: {


        // ==================================
        // SHEET 1
        // SKILLS DATABASE
        // ==================================

        Skills: {

            name: "Skills",

            type: "table",

            color: "green",


            columns: [

                "Skill",
                "Category",
                "Type",
                "Years",
                "Level"

            ],


            rows: [

                {
                    Skill: "Microsoft Excel",
                    Category: "Data Analysis",
                    Type: "Software",
                    Years: 8,
                    Level: 5
                },


                {
                    Skill: "Power Query",
                    Category: "Data Analysis",
                    Type: "Software",
                    Years: 3,
                    Level: 4
                },


                {
                    Skill: "Power Pivot",
                    Category: "Data Analysis",
                    Type: "Software",
                    Years: 2,
                    Level: 3
                },


                {
                    Skill: "Python",
                    Category: "Programming",
                    Type: "Language",
                    Years: 6,
                    Level: 5
                },


                {
                    Skill: "JavaScript",
                    Category: "Programming",
                    Type: "Language",
                    Years: 5,
                    Level: 4
                },


                {
                    Skill: "HTML/CSS",
                    Category: "Programming",
                    Type: "Language",
                    Years: 6,
                    Level: 5
                },


                {
                    Skill: "SQL",
                    Category: "Database",
                    Type: "Language",
                    Years: 4,
                    Level: 4
                },


                {
                    Skill: "Chart.js",
                    Category: "Visualization",
                    Type: "Library",
                    Years: 1,
                    Level: 4
                },


                {
                    Skill: "Tableau",
                    Category: "Visualization",
                    Type: "Software",
                    Years: 2,
                    Level: 3
                },


                {
                    Skill: "SPSS",
                    Category: "Statistics",
                    Type: "Software",
                    Years: 5,
                    Level: 4
                },


                {
                    Skill: "REDCap",
                    Category: "Research",
                    Type: "Software",
                    Years: 5,
                    Level: 5
                },


                {
                    Skill: "E-Prime",
                    Category: "Research",
                    Type: "Software",
                    Years: 4,
                    Level: 4
                },


                {
                    Skill: "ResourceSpace",
                    Category: "Research",
                    Type: "Software",
                    Years: 2,
                    Level: 3
                }

            ]

        },



        // ==================================
        // SHEET 2
        // DASHBOARD
        // ==================================

Dashboard: {

    name: "Dashboard",

    type: "dashboard",

    color: "blue",


    metrics: [

        {
            title: "Total Skills",
            value: "totalSkills"
        },

        {
            title: "Unique Skill Domains",
            value: "skillDomains"
        },

        {
            title: "Average Proficiency",
            value: "averageLevel"
        }

    ],


    charts: [

    {
        type: "doughnut",
        title: "Skills by Category",
        source: "categories"
    },


    {
        type: "bar",
        title: "Experience Years",
        source: "experience"
    },


    {
        type: "radar",
        title: "Technical Proficiency",
        source: "proficiency"
    }

    ]

},



        // ==================================
        // SHEET 3
        // CERTIFICATIONS
        // ==================================

        Certifications: {

            name: "Certifications",

            type: "table",

            color: "orange",


            columns: [

                "Certification",
                "Provider",
                "Year",
                "Status"

            ],


            rows: [

                {
                    Certification:
                        "Google Data Analytics Certificate",

                    Provider:
                        "Google",

                    Year:
                        2025,

                    Status:
                        "Completed"
                },


                {
                    Certification:
                        "Microsoft Excel Certification",

                    Provider:
                        "Microsoft",

                    Year:
                        2024,

                    Status:
                        "Completed"
                }


            ]

        }


    }


};




// ==========================================
// SHEET MANAGEMENT
// ==========================================


function getActiveSheet() {

    return workbook.sheets[
        workbook.activeSheet
    ];

}



function getSheets() {

    return workbook.sheets;

}



function switchSheet(sheetName) {


    if (!workbook.sheets[sheetName]) {

        console.error(
            `Sheet ${sheetName} does not exist`
        );

        return;

    }


    workbook.activeSheet = sheetName;


    if (
        typeof renderSheet === "function"
    ) {

        renderSheet();

    }


    updateSheetTitle(sheetName);

}




// ==========================================
// DASHBOARD CALCULATIONS
// ==========================================


function getSkillMetrics() {


    const skills =
        workbook.sheets
            .Skills
            .rows;



    const totalSkills =
        skills.length;



    const skillDomains =
        new Set(
            skills.map(
                skill => skill.Category
            )
        ).size;



    const averageLevel =
        (

            skills.reduce(

                (sum, skill) =>
                    sum + skill.Level,

                0

            )

            /

            totalSkills

        ).toFixed(1);



    const categories = {};


    skills.forEach(skill => {

        if (!categories[skill.Category]) {

            categories[skill.Category] = 0;

        }

        categories[skill.Category]++;

    });



const experience =
    skills.reduce(
        (obj, skill)=>{

            obj[skill.Skill] =
                skill.Years;

            return obj;

        },
        {}
    );



const proficiency =
    skills.reduce(
        (obj, skill)=>{

            obj[skill.Skill] =
                skill.Level;

            return obj;

        },
        {}
    );



return {

    totalSkills,

    skillDomains,

    averageLevel,

    categories,

    experience,

    proficiency,

    projectsCompleted:
        dashboardData.projectsCompleted,

    publications:
        dashboardData.publications,

    yearsResearchExperience:
        dashboardData.yearsResearchExperience

};
}




// ==========================================
// TABLE HELPERS
// ==========================================


function getSheetRows(sheetName) {


    const sheet =
        workbook.sheets[sheetName];


    if (!sheet) return [];


    return sheet.rows || [];

}



function getSheetColumns(sheetName) {


    const sheet =
        workbook.sheets[sheetName];


    if (!sheet) return [];


    return sheet.columns || [];

}



// ==========================================
// WINDOW TITLE
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

    getSkillMetrics,

    getSheetRows,

    getSheetColumns

};