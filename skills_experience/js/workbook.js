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
                        "History",

                    Description:
                        "Concentration in Public History",

                    Achievements:
                        "Received Principal's Fellowship Award AY 2026-2027",

                    StartYear:
                        2026,

                    EndYear:
                        2029

                },

                {

                    Type: "Education",

                    Title:
                        "Bachelor of Arts",

                    Organization:
                        "State University of New York at Oswego (SUNY Oswego)",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Cognitive Science/Psychology",

                    Description:
                        "Honors College",

                    Achievements:
                        "Summa Cum Laude; Distinguished Cognitive Science Senior; Excellence in French",

                    StartYear:
                        2019,

                    EndYear:
                        2023,

                    cellComments: {
                        Description: {
                            title: "Honors Thesis",

                            text:
                                "View my Honors Thesis Project.",

                            links: [
                                {
                                    label: "Honors Thesis",
                                    url: "/projects/projects.html#HT"
                                }
                            ]
                        }
                    }
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
                        "Metadata, Digitization, IT",

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
                        "Volunteer",

                    Title:
                        "Volunteer Editor",

                    Organization:
                        "Internet Archive (Open Library)",

                    Location:
                        "Remote",

                    Field:
                        "Library",

                    Description:
                        "Copyediting, Metadata",

                    Achievements:
                        "Edit metadata for 4 books.",

                    StartYear:
                        2026,

                    StartMonth:
                        7,

                    EndYear:
                        null,

                    EndMonth:
                        null

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Peer Reviewer",

                    Organization:
                        "DigitalArc",

                    Location:
                        "Remote",

                    Field:
                        "Library",

                    Description:
                        "Peer Review, Communication, Quality Assessment",

                    Achievements:
                        "Reviewed a 156 page toolkit, giving technical and community-based feedback.",

                    StartYear:
                        2026,

                    StartMonth:
                        5,

                    EndYear:
                        2026,

                    EndMonth:
                        5

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Digital Research Mentor",

                    Organization:
                        "Buist Academy, College of Charleston",

                    Location:
                        "Charleston, SC",

                    Field:
                        "Education",

                    Description:
                        "Mentorship, Research Education, Group Facilitation",

                    Achievements:
                        "Created a research 'quick-start' guide; Supervised 11 students' group projects.",

                    StartYear:
                        2026,

                    StartMonth:
                        4,

                    EndYear:
                        2026,

                    EndMonth:
                        5

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Volunteer Copyeditor and Author",

                    Organization:
                        "Wikipedia",

                    Location:
                        "Remote",

                    Field:
                        "Education",

                    Description:
                        "Copyediting, Metadata, Publication",

                    Achievements:
                        "Edit over 300 articles, averaging 1,299,990 total views; author 8 articles.",

                    StartYear:
                        2026,

                    StartMonth:
                        4,

                    EndYear:
                        null,

                    EndMonth:
                        null

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Volunteer Transcriber",

                    Organization:
                        "6+ Organizations*",

                    Location:
                        "Remote",

                    Field:
                        "Research",

                    Description:
                        "Copyediting, Paleography, Transcription",

                    Achievements:
                        "Transcribed 100, reviewed 28, and translated 5 historical documents across 142 pages.",

                    StartYear:
                        2026,

                    StartMonth:
                        4,

                    EndYear:
                        null,

                    EndMonth:
                        null,

                    cellComments: {
                        Organization: {
                            title: "Organizations I Transcribe For",

                            text:
                                "The list is growing, but I currently transcribe for: South Carolina Historical Society, Library of Congress, National Archives, Smithsonian, Zooniverse, and the Wikimedia Foundation.",

                            links: [
                                {
                                    label: "By The People - Library of Congress",
                                    url: "https://www.crowd.loc.gov/"
                                },
                                {
                                    label: "Citizen Archivist Missions - National Archives",
                                    url: "https://www.archives.gov/citizen-archivist/missions"
                                },
                                {
                                    label: "Volunpeer - Smithsonian",
                                    url: "https://transcription.si.edu/"
                                },
                                {
                                    label: "Zooniverse",
                                    url: "https://www.zooniverse.org/"
                                },
                                {
                                    label: "Wikisource - Wikimedia Foundation",
                                    url: "https://en.wikisource.org/wiki/User:Ezardwizard"
                                }
                            ]
                        }
                    }

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Psychology Summer Camp Coordinator",

                    Organization:
                        "University of South Carolina (UofSC), B-RAD Lab & STARR Lab",

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
                        7,

                    cellComments: {
                        Organization: {
                            title: "Lab Names",

                            text:
                                "The Brain Research Across Development Laboratory (B-RAD Lab) is led by Primary Investigator (PI) Caitlin Hudac. The Study of Trauma, Adolescents, Relationships, & Resilience Laboratory (STARR Lab) is led by PI Michelle Brown. Both Labs were located in the Psychology Dept. at the University of South Carolina.",

                            links: [
                                {
                                    label: "Brain Research Across Development Lab",
                                    url: "https://www.b-radlab.com/sc-wb-study.html"
                                },
                                {
                                    label: "Study of Trauma, Adolescents, Relationships, & Resilience Lab",
                                    url: "https://starr-lab.com/"
                                }
                            ]
                        }
                    }

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Rooster Tales Summer Camp Assistant",

                    Organization:
                        "University of South Carolina, B-RAD Lab",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Survey Administration, Data Collection, Data Management",

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

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Volunteer Software Developer",

                    Organization:
                        "FreeMoCap Foundation",

                    Location:
                        "Remote",

                    Field:
                        "Computer Science",

                    Description:
                        "Manual Creation, Programming, Machine Learning",

                    Achievements:
                        "Drafted 4 user manuals/documentation; Provide ideation and user feedback.",

                    StartYear:
                        2025,

                    StartMonth:
                        3,

                    EndYear:
                        null,

                    EndMonth:
                        null

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Peer Support & Social Group Facilitator",

                    Organization:
                        "Harriet Hancock Center",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Non-Profit",

                    Description:
                        "Recruitment, Group Facilitation, Peer Support",

                    Achievements:
                        "Coordinated emotional and social support groups, reaching up to 30 attendees/month.",

                    StartYear:
                        2024,

                    StartMonth:
                        11,

                    EndYear:
                        2025,

                    EndMonth:
                        7

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Summer Camp Arts Instructor",

                    Organization:
                        "New Bethel Foundation",

                    Location:
                        "Lexington, SC",

                    Field:
                        "Education",

                    Description:
                        "Classroom Management, Lesson Planning, Behavior Management",

                    Achievements:
                        "Designed and implemented interactive art lessons for 50+ children, aged 5-17.",
                    StartYear:
                        2024,

                    StartMonth:
                        7,

                    EndYear:
                        2024,

                    EndMonth:
                        7
                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Room Moderator",

                    Organization:
                        "AutismConnect Conference",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Group Facilitation, Room Moderation, Training",

                    Achievements:
                        "Moderated 2 rooms for 5h30mins; Trained 2 people on room moderation.",

                    StartYear:
                        2024,

                    StartMonth:
                        4,

                    EndYear:
                        2024,

                    EndMonth:
                        4,

                    cellComments: {
                        Organization: {
                            title: "AutismConnect Conference",

                            text: "The AutismConnect Conference is collaboratively led by the Department of Disabilities and Special Needs (DDSN) and the Carolina Autism and Neurodevelopment (CAN) Research Center. I served as a Room Moderator for the 2nd annual iteration of the conference.",
                        
                            links: [
                                {
                                    label: "AutismConnect 2025 Conference",
                                    url: "https://aging.sc.gov/events/2nd-annual-autismconnect-conference"
                                }
                            ]
                        }
                    }

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Advisory Board Member",

                    Organization:
                        "University of South Carolina, Rhys Dreeszen-Bowman, Ph.D. Candidate",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Consulting, Community Advising, Recruitment",

                    Achievements:
                        "Review methodologies; Recruit particicpants; Develop community resource.",

                    StartYear:
                        2024,

                    StartMonth:
                        5,

                    EndYear:
                        2025,

                    EndMonth:
                        2

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Thesis Advisee",

                    Organization:
                        "University of South Carolina, Miranda Foster, Ph.D. Candidate",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Consulting, Research Education, Peer Review",

                    Achievements:
                        "Refine survey instruments; Consult on inclusive methodologies",

                    StartYear:
                        2024,

                    StartMonth:
                        8,

                    EndYear:
                        2024,

                    EndMonth:
                        8

                },
                
                {

                    Type:
                        "Volunteer",

                    Title:
                        "CAN Trainee Committee Member",

                    Organization:
                        "Carolina Autism and Neurodevelopment (CAN) Research Center, UofSC",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Group Facilitation, Event Planning, Research Education",

                    Achievements:
                        "Plan and facilitate 2 events per semester, reaching 200+ CAN Trainee members.",

                    StartYear:
                        2024,

                    StartMonth:
                        6,

                    EndYear:
                        2025,

                    EndMonth:
                        7

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Volunteer Judge",

                    Organization:
                        "3 Organizations*",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Mentorship, Research Education, Research Review",

                    Achievements:
                        "Evaluate and give feedback on 25 posters across 3 events.",

                    StartYear:
                        2024,

                    StartMonth:
                        4,

                    EndYear:
                        2025,

                    EndMonth:
                        6,

                    cellComments: {
                        Organization: {
                            title: "Volunteer Judge Organizations",

                            text: "I served as a judge for the SC Junior Science and Humanities Symposium (JSHS), University of South Carolina Region II Science and Engineering Fair, and DiscoverUSC (2024) conferences.",
                        
                            links: [
                                {
                                    label: "DOD Junior Science and Humanities Symposium",
                                    url: "https://scacademysci.org/junior-science-and-humanities-symposia-jshs/"
                                },

                                {
                                    label: "University of South Carolina Region II Science and Engineering Fair",
                                    url: "https://sc.edu/study/colleges_schools/artsandsciences/centers_and_institutes/science_education/science_fair/index.php"
                                },

                                {
                                    label: "DiscoverUSC",
                                    url: "https://sc.edu/about/signature_events/discover_uofsc/"
                                }
                            ]
                        }
                    }

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Research Coordinator",

                    Organization:
                        "University of South Carolina, B-RAD Lab",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Recruitment, Stimulus Creation, Presentation",

                    Achievements:
                        "Collected data in 150+ research sessions using EEG, ECG, interviews, and surveys.",

                    StartYear:
                        2024,

                    StartMonth:
                        2,

                    EndYear:
                        2025,

                    EndMonth:
                        7

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Volunteer Researcher",

                    Organization:
                        "Study of Trauma, Adolescents, Relationships, & Resilience (STARR) Lab",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Research",

                    Description:
                        "Publication, Data Analysis, Data Management",

                    Achievements:
                        "Revised statistical analyses and created 5 tables.",

                    StartYear:
                        2023,

                    StartMonth:
                        7,

                    // EndYear:
                    //     2026,

                    // EndMonth:
                    //     7

                },

                {

                    Type:
                        "Job",

                    Title:
                        "Animal Care Technician",

                    Organization:
                        "Carolina Wildlife Center",

                    Location:
                        "Columbia, SC",

                    Field:
                        "Non-Profit",

                    Description:
                        "Animal Husbandry, Veterinary Medicine, Data Management",

                    Achievements:
                        "Cared for 70+ native species daily, documenting medication, diet, and behavior.",
                    StartYear:
                        2023,

                    StartMonth:
                        9,

                    EndYear:
                        2024,

                    EndMonth:
                        1
                },

                {
                    Type:
                        "Job",

                    Title:
                        "Students Helping Oz Peers (SHOP) Coordinator",

                    Organization:
                        "State University of New York",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Non-Profit",

                    Description:
                        "Team Management, Fundraising, Data Management",

                    Achievements:
                        "Supervised 4 interns, 80 student volunteers/year; hosted 5 fundraising events.",

                    StartYear:
                        2022,

                    StartMonth:
                        8,

                    EndYear:
                        2023,

                    EndMonth:
                         5

                },

                {
                    Type:
                        "Job",

                    Title:
                        "Clubhouse Specialist Substitute",

                    Organization:
                        "Oswego County Opportunities",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Non-Profit",

                    Description:
                        "Peer Support, Group Facilitation, Behavior Management",

                    Achievements:
                        "Facilitated groups of 10+ per day of youth ages 12-21.",

                    StartYear:
                        2022,

                    StartMonth:
                        8,

                    EndYear:
                        2023,

                    EndMonth:
                         5

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Data Collector",

                    Organization:
                        "State University of New York at Oswego, JKLab",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Research",

                    Description:
                        "Stimulus Creation, Data Collection, Team Collaboration",

                    Achievements:
                        "Created and refined 10+ audio stimulus files using Audacity.",

                    StartYear:
                        2022,

                    StartMonth:
                        5,

                    EndYear:
                        2022,

                    EndMonth:
                         12

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Board Member",

                    Organization:
                        "Student Health Advisory Council, SUNY Oswego",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Research",

                    Description:
                        "Consulting, Community Advising",

                    Achievements:
                        "Provided recommendations for student health resources on campus.",

                    StartYear:
                        2022,

                    StartMonth:
                        1,

                    EndYear:
                        2022,

                    EndMonth:
                         5

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "President, Vice President",

                    Organization:
                        "Queer Trans Outreach Center, SUNY Oswego",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Education",

                    Description:
                        "Presentation, Group Facilitation, Event Planning",

                    Achievements:
                        "Changed LGBTQ+ campus resources via President's Cabinet.",

                    StartYear:
                        2021,

                    StartMonth:
                        8,

                    EndYear:
                        2023,

                    EndMonth:
                         5

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "President, Vice President",

                    Organization:
                        "Cognitive Science Club, SUNY Oswego",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Education",

                    Description:
                        "Group Facilitation, Event Planning",

                    Achievements:
                        "Directed and planned 5 educational and social events.",

                    StartYear:
                        2020,

                    StartMonth:
                        8,

                    EndYear:
                        2023,

                    EndMonth:
                         5

                },

                {

                    Type:
                        "Volunteer",

                    Title:
                        "Undergraduate Research Assistant",

                    Organization:
                        "State University of New York at Oswego, RAD Lab",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Research",

                    Description:
                        "Presentation, Data Collection, Data Analysis",

                    Achievements:
                        "Collected data from 10 participants, presented poster at a local conference.",

                    StartMonth:
                        1,
                    
                    StartYear:
                        2020,

                    EndYear:
                        2021,

                    EndMonth:
                         4

                },

                {
                    Type:
                        "Job",

                    Title:
                        "Peer Specialist",

                    Organization:
                        "Oswego County Opportunities",

                    Location:
                        "Oswego, NY",

                    Field:
                        "Non-Profit",

                    Description:
                        "Presentation, Group Facilitation, Lesson Planning",

                    Achievements:
                        "Developed comprehensive training on sex ed and LGBTQ+ topics for youth ages 12-21.",

                    StartYear:
                        2019,

                    StartMonth:
                        9,

                    EndYear:
                        2022,

                    EndMonth:
                         6

                },

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
                        "Complete",

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
                        "Complete"
                },

                {
                    Certificates:
                        "Social & Behavioral Researchers Certificate",

                    Provider:
                        "CITI Program",

                    Year:
                        2024,

                    Status:
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                        "Complete",

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
                },

                {
                    Certificates:
                        "Certified Interpretive Guide Certificate",

                    Provider:
                        "National Association for Interpreters",

                    Year:
                        2026,

                    Status:
                        "Tentative"
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

        "Non-Profit":
            0,

        Education:
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
            totals["Non-Profit"] ?? 0,

        yearsEduExperience:
            totals.Education ?? 0
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


            if (!categories[category]) {

                categories[category] =
                    0;

            }


            categories[category]++;

        }
    );



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

        experienceYears.yearsEduExperience;


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

        totalYearsExperience

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