/*
==========================================
WORKBOOK.JS
Portfolio.xlsx Spreadsheet Website

Handles:
- Workbook state
- Sheet navigation
- Table data
- Dashboard metrics
- Filtering
- Sorting
- Dates
- Formula evaluation
- Cell references
- Formula bar support
==========================================
*/

// ==========================================
// DASHBOARD DATA
// ==========================================

const dashboardData = {

    projectsCompleted: 1,

    publications: 1,

    favoriteTools: [
        "Excel"
    ]

};


// ==========================================
// WORKBOOK DATA
// ==========================================

const workbook = {

    activeSheet: "Background",

    filters: {
        Background: "All",
        Skills: "All",
        Certificates: "All"
    },

    sorts: {

        Background: {
            column: null,
            direction: null
        },

        Skills: {
            column: null,
            direction: null
        },

        Certificates: {
            column: null,
            direction: null
        }

    },


    /*
    ------------------------------------------
    CELL FORMULAS
    ------------------------------------------

    Optional formula storage.

    Example:

    formulas: {
        Background: {
            "I2": "=A2"
        }
    }

    */

    formulas: {},


    /*
    ------------------------------------------
    SHEETS
    ------------------------------------------
    */

    sheets: {

        // =====================================
        // BACKGROUND
        // =====================================

        Background: {

            name: "Background",

            type: "table",

            color: "red",

            columns: [

                "Type",
                "Title",
                "Organization",
                "Location",
                "Field",
                "Description",
                "Achievements",
                "Dates"

            ],

            rows: [

                {

                    Type: "Education",

                    Title:
                        "Master of Arts",

                    Organization:
                        "College of Charleston",

                    Location:
                        "Charleston, SC",

                    Field:
                        "History, Concentration in Public History",

                    Description:
                        "Graduate program",

                    Achievements:
                        "Received Principal's Fellowship Award AY 2026-2027",

                    StartYear:
                        2025,

                    EndYear:
                        2029

                },

                {

                    Type: "Education",

                    Title:
                        "Bachelor of Arts",

                    Organization:
                        "State University of New York at Oswego",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Cognitive Science, Psychology",

                    Description:
                        "Honors College",

                    Achievements:
                        "Summa Cum Laude; Distinguished Cognitive Science Senior; Excellence in French",

                    StartYear:
                        2019,

                    EndYear:
                        2023

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Digital Library Analyst",

                    Organization:
                        "College of Charleston, Lowcountry Digital Library",

                    Location:
                        "Charleston, SC",

                    Field:
                        "Library",

                    Description:
                        "Metadata, digitization, IT",

                    Achievements:
                        "Uploaded over 16,000 files across 43 collections.",

                    StartYear:
                        2025,

                    StartMonth:
                        8,

                    EndYear:
                        null,

                    EndMonth:
                        null

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Psychology Summer Camp",

                    Organization:
                        "University of South Carolina (B-RAD Lab, STARR Lab)",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Recruitment, EEG, Data Management",

                    Achievements:
                        "Coordinated four weeks of summer camps, increasing recruitment by 19%.",

                    StartYear:
                        2025,

                    StartMonth:
                        6,

                    EndYear:
                        2025,

                    EndMonth:
                        7

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Rooster Tales Summer Camp",

                    Organization:
                        "University of South Carolina (B-RAD Lab)",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Survey Administration, Data Management",

                    Achievements:
                        "Developed databases to host and track survey data for 18 participants across 2 cohorts.",

                    Periods: [

                        {

                            StartYear:
                                2024,

                            StartMonth:
                                6,

                            EndYear:
                                2024,

                            EndMonth:
                                7

                        },

                        {

                            StartYear:
                                2025,

                            StartMonth:
                                6,

                            EndYear:
                                2025,

                            EndMonth:
                                7

                        }

                    ]

                }

            ]

        },


        // =====================================
        // SKILLS
        // =====================================

        Skills: {

            name: "Skills",

            type: "table",

            color: "yellow",

            columns: [

                "Skill",
                "Category",
                "Type",
                "Years",
                "Level"

            ],

            rows: [

                {
                    Skill: "Excel",
                    Category: "Data Analysis",
                    Type: "Software",
                    Years: 3,
                    Level: 5
                },

                {
                    Skill: "Python",
                    Category: "Programming",
                    Type: "Language",
                    Years: 1,
                    Level: 3
                },

                {
                    Skill: "JavaScript",
                    Category: "Programming",
                    Type: "Language",
                    Years: 1,
                    Level: 3
                },

                {
                    Skill: "HTML5",
                    Category: "Programming",
                    Type: "Language",
                    Years: 4,
                    Level: 5
                },

                {
                    Skill: "CSS3",
                    Category: "Programming",
                    Type: "Language",
                    Years: 3,
                    Level: 4
                },

                {
                    Skill: "PostgreSQL",
                    Category: "Database",
                    Type: "Language",
                    Years: 1,
                    Level: 3
                },

                {
                    Skill: "R",
                    Category: "Data Analysis",
                    Type: "Language",
                    Years: 2,
                    Level: 4
                },

                {
                    Skill: "SPSS",
                    Category: "Data Analysis",
                    Type: "Language",
                    Years: 2,
                    Level: 4
                },

                {
                    Skill: "REDCap",
                    Category: "Research",
                    Type: "Software",
                    Years: 2,
                    Level: 4
                },

                {
                    Skill: "E-Prime",
                    Category: "Research",
                    Type: "Software",
                    Years: 2,
                    Level: 4
                },

                {
                    Skill: "E-Basic",
                    Category: "Research",
                    Type: "Language",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "ResourceSpace",
                    Category: "Library",
                    Type: "Software",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "Aviary",
                    Category: "Library",
                    Type: "Software",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "MS Office",
                    Category: "Productivity",
                    Type: "Software",
                    Years: 5,
                    Level: 5
                },

                {
                    Skill: "Google Suite",
                    Category: "Productivity",
                    Type: "Software",
                    Years: 5,
                    Level: 5
                },

                {
                    Skill: "Obsidian",
                    Category: "Organization",
                    Type: "Software",
                    Years: 2,
                    Level: 4
                },

                {
                    Skill: "Notion",
                    Category: "Organization",
                    Type: "Software",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "OpenAthens",
                    Category: "Library",
                    Type: "Software",
                    Years: 1,
                    Level: 3
                },

                {
                    Skill: "LibGuides",
                    Category: "Library",
                    Type: "Software",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "Photoshop",
                    Category: "Creative",
                    Type: "Software",
                    Years: 2,
                    Level: 4
                },

                {
                    Skill: "WordPress",
                    Category: "Library",
                    Type: "Software",
                    Years: 1,
                    Level: 5
                },

                {
                    Skill: "MATLAB",
                    Category: "Data Analysis",
                    Type: "Language",
                    Years: 2,
                    Level: 3
                },

                {
                    Skill: "Canva",
                    Category: "Creative",
                    Type: "Software",
                    Years: 4,
                    Level: 5
                },

                {
                    Skill: "Java",
                    Category: "Programming",
                    Type: "Language",
                    Years: 2,
                    Level: 3
                },

                {
                    Skill: "French",
                    Category: "Languages",
                    Type: "Language",
                    Years: 14,
                    Level: 5
                },

                {
                    Skill: "ASL",
                    Category: "Languages",
                    Type: "Language",
                    Years: 2,
                    Level: 3
                },

                {
                    Skill: "Zoom",
                    Category: "Productivity",
                    Type: "Software",
                    Years: 4,
                    Level: 5
                },

                {
                    Skill: "Basecamp",
                    Category: "Productivity",
                    Type: "Software",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "Trello",
                    Category: "Productivity",
                    Type: "Software",
                    Years: 2,
                    Level: 5
                },

                {
                    Skill: "GitHub",
                    Category: "Programming",
                    Type: "Software",
                    Years: 4,
                    Level: 4
                },

                {
                    Skill: "MODS",
                    Category: "Library",
                    Type: "Schema",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "Library of Congress Classification",
                    Category: "Library",
                    Type: "Classification",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "Paleography",
                    Category: "History",
                    Type: "Classification",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "Trint",
                    Category: "Library",
                    Type: "Software",
                    Years: 1,
                    Level: 4
                },

                {
                    Skill: "XML",
                    Category: "Library",
                    Type: "Schema",
                    Years: 2,
                    Level: 4
                }

            ]

        },


        // =====================================
        // DASHBOARD
        // =====================================

        Dashboard: {

            name: "Dashboard",

            type: "dashboard",

            color: "green",

            metrics: [

                {
                    title:
                        "Total Skills",

                    value:
                        "totalSkills"
                },

                {
                    title:
                        "Unique Skill Domains",

                    value:
                        "skillDomains"
                },

                {
                    title:
                        "Average Proficiency",

                    value:
                        "averageLevel"
                },

                {
                    title:
                        "Years of Experience (Overall)",

                    value:
                        "totalYearsExperience"
                }

            ],

            charts: [

                {
                    type:
                        "doughnut",

                    title:
                        "Skills by Category",

                    source:
                        "categories"
                },

                {
                    type:
                        "bar",

                    title:
                        "Years of Experience",

                    source:
                        "experience"
                },

                {
                    type:"radar",

                    title: "Skill Proficiencies",

                    source: "proficiency"
                }

            ]

        },
        // =====================================
        // CERTIFICATES
        // =====================================

        Certificates: {

            name:
                "Certificates",

            type:
                "table",

            color:
                "blue",

            columns: [

                "Certificates",
                "Provider",
                "Year",
                "Status",
                "Link"

            ],

            rows: [

                {
                    Certificates:
                        "Responsible Conduct of Research for Undergrad Students",

                    Provider:
                        "CITI Program",

                    Year:
                        2020,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Citi-ResponsibleUndergrad.pdf"
                },

                {
                    Certificates:
                        "MRI Safety Certification",

                    Provider:
                        "Cabin MRI at the University of Rochester",

                    Year:
                        2021,

                    Status:
                        "Completed"
                },

                {
                    Certificates:
                        "Social & Behavioral Researchers Certificate",

                    Provider:
                        "CITI Program",

                    Year:
                        2024,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/CITI_SocBeh.pdf"
                },

                {
                    Certificates:
                        "Responsible Conduct of Research Certificate",

                    Provider:
                        "CITI Program",

                    Year:
                        2024,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/CITI_SocBehRR.pdf"
                },

                {
                    Certificates:
                        "Canva Essentials",

                    Provider:
                        "Canva",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Canva_Essentials.pdf"
                },

                {
                    Certificates:
                        "Graphic Design Essentials",

                    Provider:
                        "Canva",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Canva_GraphicDesign.pdf"
                },

                {
                    Certificates:
                        "Data Cleaning in Excel: Techniques to Clean Messy Data",

                    Provider:
                        "Coursera",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Coursera_DataCleaning.pdf"
                },

                {
                    Certificates:
                        "How to create a Jira SCRUM project",

                    Provider:
                        "Coursera",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Coursera_JiraSCRUM.pdf"
                },

                {
                    Certificates:
                        "Managing Teams Documents and Files",

                    Provider:
                        "Coursera",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Coursera_Teams.pdf"
                },

                {
                    Certificates:
                        "Overview of Data Visualization",

                    Provider:
                        "Coursera",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Coursera_DataViz.pdf"
                },

                {
                    Certificates:
                        "Create Charts and Dashboards Using Microsoft Excel",

                    Provider:
                        "Coursera",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Coursera_ChartsDashboards.pdf"
                },

                {
                    Certificates:
                        "Finding, Sorting, & Filtering Data in Microsoft Excel",

                    Provider:
                        "Coursera",

                    Year:
                        2026,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Coursera_FindingExcel.pdf"
                },

                {
                    Certificates:
                        "College of Charleston Life Coach Certification",

                    Provider:
                        "College of Charleston",

                    Year:
                        2026,

                    Status:
                        "Upcoming"
                }

            ]

        }

    }

};


// ==========================================
// DATA CLEANING
// ==========================================

Object.values(workbook.sheets).forEach(sheet => {
    if (!sheet.rows) {
        return;
    }
    sheet.rows.forEach(row => {

        Object.keys(row).forEach(key => {

            if (
                typeof row[key] ===
                "string"
            ) {

                row[key] =
                    row[key].trim();

            }

        });

    });

});


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

        return false;

    }

    workbook.activeSheet =
        sheetName;

    if (
        typeof window.renderSheet ==="function") {

        window.renderSheet();

    }

    else if (
        typeof window.Grid !==
        "undefined" &&
        typeof window.Grid.renderSheet ===
        "function"
    ) {

        window.Grid.renderSheet();

    }

    updateSheetTitle(sheetName);


    return true;

}

// ==========================================
// RENDER WORKBOOK
// ==========================================

function renderWorkbook() {

    /*
    grid.js exports Grid.renderSheet().
    */

    if (
        typeof window.Grid !==
        "undefined" &&

        typeof window.Grid.renderSheet ===
        "function"
    ) {

        window.Grid.renderSheet();

    }

}


// ==========================================
// DATES
// ==========================================

const MONTHS = [

    "",

    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

];


function formatPeriod(
    period,
    type
) {

    let start;
    let end;


    if (
        type ===
        "Education"
    ) {

        start =
            period.StartYear;

        end =
            period.EndYear;

    }

    else {

        start =
            period.StartMonth

                ? `${MONTHS[
                    period.StartMonth
                ]} ${period.StartYear}`

                : period.StartYear;


        end =
            period.EndYear == null

                ? "Present"

                : period.EndMonth

                    ? `${MONTHS[
                        period.EndMonth
                    ]} ${period.EndYear}`

                    : period.EndYear;

    }

    return `${start} - ${end}`;

}

function formatDates(row) {

    const periods =
        row.Periods ??
        [

            {

                StartYear:
                    row.StartYear,

                StartMonth:
                    row.StartMonth,

                EndYear:
                    row.EndYear,

                EndMonth:
                    row.EndMonth

            }

        ];


    return periods
        .map(
            period =>
                formatPeriod(
                    period,
                    row.Type
                )
        )
        .join(", ");

}


// ==========================================
// EXPERIENCE CALCULATIONS
// ==========================================

function getExperienceYears() {

    const jobs =
        workbook.sheets
            .Background
            .rows
            .filter(
                row =>
                    row.Type ===
                    "Job"
            );


    const now =
        new Date();


    const currentYear =
        now.getFullYear();


    const currentMonth =
        now.getMonth() + 1;


    const totals = {

        Library:
            0,

        Research:
            0,

        "Non-profit":
            0,

        Misc:
            0

    };


    jobs.forEach(
        job => {

            /*
            If a new Field appears,
            create it automatically.
            */

            if (
                !(job.Field in totals)
            ) {

                totals[job.Field] =
                    0;

            }


            const periods =
                job.Periods ??
                [

                    {

                        StartYear:
                            job.StartYear,

                        StartMonth:
                            job.StartMonth,

                        EndYear:
                            job.EndYear,

                        EndMonth:
                            job.EndMonth

                    }

                ];


            periods.forEach(
                period => {

                    if (
                        !period.StartYear
                    ) {

                        return;

                    }


                    const endYear =
                        period.EndYear ??
                        currentYear;


                    const startMonth =
                        period.StartMonth ??
                        1;


                    const endMonth =
                        period.EndMonth ??
                        currentMonth;


                    const months =
                        (
                            (
                                endYear -
                                period.StartYear
                            ) * 12
                        ) +

                        (
                            endMonth -
                            startMonth
                        );


                    totals[job.Field] +=
                        Math.max(
                            months,
                            0
                        ) / 12;

                }
            );

        }
    );


    Object.keys(totals).forEach(key => {
        totals[key] = Number(totals[key].toFixed(1));
    });

    return {

        yearsLibraryExperience:
            totals.Library ?? 0,

        yearsResearchExperience:
            totals.Research ?? 0,

        yearsNonProfitExperience:
            totals["Non-profit"] ?? 0,

        yearsMiscExperience:
            totals.Misc ?? 0
    };
}

// ==========================================
// SKILL METRICS
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
        totalSkills

            ? (skills.reduce(
                    (sum, skill) =>
                        sum +
                        (Number(skill.Level) || 0),
                    0
                )

                /

                totalSkills).toFixed(1)

            : "0.0";


    /*
    ------------------------------------------
    CATEGORY COUNTS
    ------------------------------------------
    */

    const categories =
        {};


    skills.forEach(
        skill => {

            const category =
                skill.Category ||
                "Other";


            if (
                !categories[
                    category
                ]
            ) {
        
        categories[skill.Category] = 0;
            }

            categories[skill.Category]++;

        });


    /*
    ------------------------------------------
    EXPERIENCE
    ------------------------------------------
    */

    const experience =
        skills.reduce(
            (obj, skill)=>{

                obj[
                    skill.Skill
                ] =
                    Number(
                        skill.Years
                    ) || 0;


                return obj;

            },
            {}
        );


    /*
    ------------------------------------------
    EXPERIENCE YEARS
    ------------------------------------------
    */

    const experienceYears = getExperienceYears();


    const totalYearsExperience =

        experienceYears.yearsLibraryExperience +

        experienceYears.yearsResearchExperience +

        experienceYears.yearsNonProfitExperience +

        experienceYears.yearsMiscExperience;


    /*
    ------------------------------------------
    PROFICIENCY
    ------------------------------------------
    */

    const proficiency =
        skills.reduce(
            (obj, skill)=>{

                obj[skill.Skill] =
                    Number(skill.Level) || 0;

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

        ...experienceYears,

        totalYearsExperience, projectsCompleted: dashboardData.projectsCompleted,
    publications: dashboardData.publications

    };

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
// PUBLIC API
// ==========================================

window.Workbook = {

    state:
        workbook,


    // Sheet management

    getActiveSheet,

    getSheets,

    switchSheet,


    // Data

    getSheetRows,

    getSheetColumns,

    // Dates

    formatDates,


    // Dashboard

    getSkillMetrics
};