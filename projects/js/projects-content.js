/* =====================================================
   PROJECT CONTENT
   projects-content.js

   This file contains ONLY project data.

   The book engine does not care what the project is.
   It simply receives project/page objects and renders them.
===================================================== */


const projects = [

    {
        id: "publications",

        title: "Publications",

        shelf: 1,

        color: "#762f30",

        accent: "#d6ad57",

        width: 68,

        height: 260,

        rotation: "-1deg",

        decoration: "lines",


        pages: [

            {
                number: "001",

                type: "intro",

                label: "Selected Work",

                title: "Publications",

                content: `
                    <p>
                        A collection of academic and
                        professional publications.
                    </p>

                    <p>
                        This project documents selected
                        research, writing, and scholarly work.
                    </p>
                `
            },


            {
                number: "002",

                type: "text",

                label: "2026",

                title: "Current Publications",

                content: `
                    <p>
                        <strong>
                            Paper Title
                        </strong>
                    </p>

                    <p>
                        Journal Name
                    </p>

                    <p>
                        Description of the publication
                        and its contribution.
                    </p>

                    <p>
                        <a href="/documents/paper.pdf">
                            Read PDF →
                        </a>
                    </p>
                `
            },


            {
                number: "003",

                type: "text",

                label: "2025",

                title: "Previous Work",

                content: `
                    <p>
                        Another publication from 2025.
                    </p>

                    <p>
                        <a href="/documents/publication.pdf">
                            Read publication →
                        </a>
                    </p>
                `
            },


            {
                number: "004",

                type: "chart",

                label: "Research",

                title: "Publication Overview",

                content: `
                    <p>
                        Publications by year.
                    </p>

                    <canvas
                        class="project-chart"
                        data-chart="publication-years"
                    ></canvas>
                `
            },


            {
                number: "005",

                type: "links",

                label: "Resources",

                title: "Materials",

                content: `
                    <p>
                        <a href="/documents/publications.pdf">
                            Publication PDF →
                        </a>
                    </p>

                    <p>
                        <a href="/documents/presentation.pdf">
                            Presentation →
                        </a>
                    </p>
                `
            }

        ]
    },


    {
        id: "thesis",

        title: "Thesis",

        shelf: 1,

        color: "#344b62",

        accent: "#d0b56d",

        width: 62,

        height: 285,

        rotation: "0.5deg",

        decoration: "panel",


        pages: [

            {
                number: "001",

                label: "Research",

                title: "My Thesis",

                content: `
                    <p>
                        A description of the research,
                        methodology, and results.
                    </p>
                `
            },


            {
                number: "002",

                label: "Methodology",

                title: "Research Design",

                content: `
                    <p>
                        Detailed explanation of the
                        research methodology.
                    </p>
                `
            },


            {
                number: "003",

                label: "Results",

                title: "Findings",

                content: `
                    <p>
                        Summary of the principal findings.
                    </p>
                `
            },


            {
                number: "004",

                label: "Resources",

                title: "Thesis Materials",

                content: `
                    <p>
                        <a href="/documents/thesis.pdf">
                            Thesis PDF →
                        </a>
                    </p>

                    <p>
                        <a href="/documents/thesis-slides.pdf">
                            Presentation Slides →
                        </a>
                    </p>
                `
            }

        ]
    },


    {
        id: "research",

        title: "Research",

        shelf: 1,

        color: "#405c46",

        accent: "#d4b86a",

        width: 73,

        height: 250,

        rotation: "-0.5deg",

        decoration: "bands",


        pages: [

            {
                number: "001",

                label: "Research",

                title: "Research",

                content: `
                    <p>
                        An overview of my research interests
                        and current projects.
                    </p>
                `
            },


            {
                number: "002",

                label: "Current Work",

                title: "Research Projects",

                content: `
                    <p>
                        Research project description.
                    </p>
                `
            }

        ]
    }

    /* Continue adding projects here. */

];