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


        projectsCompleted: 1,
        //need to actually calculate this given projects page.

        publications: 1,

        favoriteTools: [

            "Excel"

        ]

    };

const workbook = {


    activeSheet: "Education",

    sheets: {


        // ==================================
        // SHEET 1
        // SKILLS DATABASE
        // ==================================
        Education: {
            name: "Education",

            type: "table",

            color: "red",

            columns: [
                "Institution",
                "Degree",
                "Domain",
                "Thesis",
                // "Link",
                "Awards",
                "Honors",
                "GPA",
                // "Projects",
                // "Courses",
                "Graduated"
            ],

            rows: [
            {
                Institution: "College of Charleston",
                Degree: "Master of Arts",
                Domain: "History, Concentration in Public History",
                Thesis: "",
                Awards: "None (yet!)",
                Honors: "None (yet!)",
                GPA: "",
                Graduated: "Expected 2029"
            },
            {
                Institution: "State University of New York at Oswego",
                Degree: "Bachelor of Arts",
                Domain: "Cognitive Science, Psychology",
                Thesis: "The Impact of Biases in Facial Recognition Artificial Neural Networks  ",
                Link: "/projects/projects.html#HT",
                Awards: "Excellence in French, Distinguished Cognitive Science Senior",
                Honors: "Summa Cum Laude, Honors College",
                GPA: 3.66,
                Graduated: 2023
             },
            ] 
        },
        Experience: {
            name: "Experience",

            type: "table",

            color: "orange",

            columns: [
                "Position",
                "Type",
                "Organization",
                "Location",
                "Category",
                "Skills",
                "Achievement",
                // "Dates",
            ],

            rows: [
                { 
                    Position: "Digital Library Analyst",
                    Type: "Job",
                    Organization: "College of Charleston, Lowcountry Digital Library",
                    Location: "Charleston, SC",
                    Category: "Library",
                    Skills: "Metadata, Digitization, IT",
                    Achievement: "Uploaded over 16,000 files in the first year across 43 collections.",
                    yearStart: 2025,
                    yearEnd: null,
                    monthStart: 8,
                    monthEnd: null
                },

                {
                    Position: "Digital Library Analyst",
                    Type: "Job",
                    Organization: "College of Charleston, Lowcountry Digital Library",
                    Location: "Charleston, SC",
                    Category: "Library",
                    Skills: "Metadata, Digitization, IT",
                    Achievement: "Uploaded 16,000+ files in the first year across 43 collections.",
                    yearStart: "August 2025 - Present",
                    yearEnd: null,
                    monthStart: 8,
                    monthEnd: null
                },
            ]
        },

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


                // {
                //     Skill: "Affinity Studio",
                //     Category: "Creative",
                //     Type: "Software",
                //     Years: 0,
                //     Level: 2
                // },

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



        // ==================================
        // SHEET 2
        // DASHBOARD
        // ==================================

Dashboard: {

    name: "Dashboard",

    type: "dashboard",

    color: "green",


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
        },

        {
            title: "Years of Experience (Overall)",
            value: "totalYearsExperience"
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
        title: "Years of Experience",
        source: "experience"
    },


    {
        type: "radar",
        title: "Skill Proficiencies",
        source: "proficiency"
    }


    ]

},



        // ==================================
        // SHEET 3
        // CertificatesS
        // ==================================

        Certificates: {

            name: "Certificates",

            type: "table",

            color: "blue",


            columns: [

                "Certificates",
                "Provider",
                "Year",
                "Status",
                "Link"
            ],


            rows: [
                {   Certificates:
                        "Responsible Conduct of Research for Undergrad Students",

                    Provider:
                        "CITI Program",

                    Year:
                        2020,

                    Status:
                        "Completed",

                    Link:
                        "/assets/media/certificates/Citi-ResponsibleUndergrad.pdf",

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
// CLEAN WORKBOOK DATA
// ==========================================

Object.values(workbook.sheets).forEach(sheet => {

    sheet.rows?.forEach(row => {

        Object.keys(row).forEach(key => {

            if (typeof row[key] === "string") {

                row[key] = row[key].trim();

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

function getExperienceYears() {

    const jobs = workbook.sheets.Experience.rows;
    const currentYear = new Date().getFullYear();

    const totals = {
        Library: 0,
        Research: 0,
        "Non-profit": 0,
        Misc: 0
    };

    jobs.forEach(job => {

        if (!(job.Category in totals)) return;

        const end =
            job.EndYear === null
                ? currentYear
                : job.EndYear;

        totals[job.Category] += end - job.StartYear;
    });

    return {
        yearsLibraryExperience: totals.Library,
        yearsResearchExperience: totals.Research,
        yearsNonProfitExperience: totals["Non-profit"],
        yearsMiscExperience: totals.Misc
    };
}

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


// const totalYearsExperience = (dashboardData.yearsResearchExperience + dashboardData.yearsLibraryExperience + dashboardData.yearsNonProfitExperience);
// instead of using dashboardData(), variables are hardcoded and calculations are completed to get a better years of experience estimate in getExperienceYears()
const experienceYears = getExperienceYears();

const totalYearsExperience =
    experienceYears.yearsLibraryExperience +
    experienceYears.yearsResearchExperience +
    experienceYears.yearsNonProfitExperience +
    experienceYears.yearsMiscExperience;

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

    experienceYears,

    totalYearsExperience,

    projectsCompleted: dashboardData.projectsCompleted,
    publications: dashboardData.publications

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