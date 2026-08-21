document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       PROJECT DATA
    ================================================= */

    const projects = [

        {
            title: "Publications",
            shelf: 1,
            color: "#762f30",
            accent: "#d6ad57",
            width: 68,
            height: 260,
            rotation: "-1deg",
            decoration: "lines",

            leftTitle: "Selected Work",

            leftContent: `
                <p>
                    A collection of academic and
                    professional publications.
                </p>

                <p>
                    Publications can eventually be
                    organized across multiple pages.
                </p>
            `,

            rightTitle: "2026",

            rightContent: `
                <p>
                    <strong>Paper Title</strong>
                </p>

                <p>
                    Journal Name
                </p>

                <p>
                    <a href="#">
                        Read PDF →
                    </a>
                </p>

                <p>
                    <strong>2025</strong>
                </p>

                <p>
                    Another publication.
                </p>
            `
        },


        {
            title: "Thesis",
            shelf: 1,
            color: "#344b62",
            accent: "#d0b56d",
            width: 62,
            height: 285,
            rotation: "0.5deg",
            decoration: "panel",

            leftTitle: "My Thesis",

            leftContent: `
                <p>
                    A description of the research,
                    methodology, and results.
                </p>
            `,

            rightTitle: "Resources",

            rightContent: `
                <p>
                    <a href="#">
                        Thesis PDF →
                    </a>
                </p>

                <p>
                    <a href="#">
                        Presentation Slides →
                    </a>
                </p>
            `
        },


        {
            title: "Research",
            shelf: 1,
            color: "#405c46",
            accent: "#d4b86a",
            width: 73,
            height: 250,
            rotation: "-0.5deg",
            decoration: "bands",

            leftTitle: "Research",

            leftContent: `
                <p>
                    An overview of my research
                    interests and current projects.
                </p>
            `,

            rightTitle: "Current Work",

            rightContent: `
                <p>
                    Research project description.
                </p>
            `
        },


        {
            title: "Teaching",
            shelf: 1,
            color: "#916632",
            accent: "#f0d28a",
            width: 60,
            height: 275,
            rotation: "1deg",
            decoration: "ornament",

            leftTitle: "Teaching",

            leftContent: `
                <p>
                    Courses, lectures, workshops,
                    and teaching materials.
                </p>
            `,

            rightTitle: "Materials",

            rightContent: `
                <p>
                    <a href="#">
                        Course Materials →
                    </a>
                </p>
            `
        },


        {
            title: "Projects",
            shelf: 1,
            color: "#594064",
            accent: "#d7b66b",
            width: 78,
            height: 290,
            rotation: "-1.5deg",
            decoration: "classic",

            leftTitle: "Projects",

            leftContent: `
                <p>
                    A selection of independent
                    and collaborative projects.
                </p>
            `,

            rightTitle: "Featured",

            rightContent: `
                <p>
                    <a href="#">
                        Explore project →
                    </a>
                </p>
            `
        },


        {
            title: "Code",
            shelf: 1,
            color: "#315d66",
            accent: "#c6b477",
            width: 55,
            height: 245,
            rotation: "0.5deg",
            decoration: "lines",

            leftTitle: "Code",

            leftContent: `
                <p>
                    Software projects,
                    experiments, and tools.
                </p>
            `,

            rightTitle: "Repositories",

            rightContent: `
                <p>
                    <a href="#">
                        GitHub →
                    </a>
                </p>
            `
        },


        {
            title: "Design",
            shelf: 2,
            color: "#854d3d",
            accent: "#d8b86b",
            width: 70,
            height: 268,
            rotation: "-0.5deg",
            decoration: "panel",

            leftTitle: "Design",

            leftContent: `
                <p>
                    Visual design and interaction
                    projects.
                </p>
            `,

            rightTitle: "Portfolio",

            rightContent: `
                <p>
                    <a href="#">
                        View project →
                    </a>
                </p>
            `
        },


        {
            title: "Archive",
            shelf: 2,
            color: "#565a43",
            accent: "#cbb16b",
            width: 65,
            height: 255,
            rotation: "1deg",
            decoration: "bands",

            leftTitle: "Archive",

            leftContent: `
                <p>
                    Older projects and materials.
                </p>
            `,

            rightTitle: "Collection",

            rightContent: `
                <p>
                    Archived work.
                </p>
            `
        },


        {
            title: "Fieldwork",
            shelf: 2,
            color: "#573b2c",
            accent: "#d3ad61",
            width: 65,
            height: 270,
            rotation: "-1deg",
            decoration: "ornament",

            leftTitle: "Fieldwork",

            leftContent: `
                <p>
                    Field research and documentation.
                </p>
            `,

            rightTitle: "Materials",

            rightContent: `
                <p>
                    Field notes and materials.
                </p>
            `
        },


        {
            title: "Data",
            shelf: 2,
            color: "#3c5260",
            accent: "#d8bc73",
            width: 57,
            height: 250,
            rotation: "0.5deg",
            decoration: "lines",

            leftTitle: "Data",

            leftContent: `
                <p>
                    Datasets and analysis projects.
                </p>
            `,

            rightTitle: "Resources",

            rightContent: `
                <p>
                    <a href="#">
                        Dataset →
                    </a>
                </p>
            `
        },


        {
            title: "Writing",
            shelf: 2,
            color: "#70404a",
            accent: "#d5b16b",
            width: 70,
            height: 285,
            rotation: "-1deg",
            decoration: "classic",

            leftTitle: "Writing",

            leftContent: `
                <p>
                    Essays, articles, and other writing.
                </p>
            `,

            rightTitle: "Selected Work",

            rightContent: `
                <p>
                    <a href="#">
                        Read →
                    </a>
                </p>
            `
        },


        {
            title: "Media",
            shelf: 2,
            color: "#4b596b",
            accent: "#c8aa62",
            width: 60,
            height: 260,
            rotation: "1deg",
            decoration: "panel",

            leftTitle: "Media",

            leftContent: `
                <p>
                    Video, audio, photography,
                    and other media.
                </p>
            `,

            rightTitle: "Media",

            rightContent: `
                <p>
                    <a href="#">
                        View media →
                    </a>
                </p>
            `
        }

    ];


    /* =================================================
       GET HTML ELEMENTS
    ================================================= */

    const shelfOne =
        document.getElementById("shelf-one");

    const shelfTwo =
        document.getElementById("shelf-two");

    const viewer =
        document.getElementById("book-viewer");

    const openBook =
        document.getElementById("open-book");

    const cover =
        document.getElementById("book-front-cover");

    const backdrop =
        document.getElementById("viewer-backdrop");

    const closeButton =
        document.getElementById("close-book");

    const coverTitle =
        document.getElementById("cover-title");

    const leftTitle =
        document.getElementById("left-title");

    const leftContent =
        document.getElementById("left-content");

    const rightTitle =
        document.getElementById("right-title");

    const rightContent =
        document.getElementById("right-content");


    /* =================================================
       SAFETY CHECK
    ================================================= */

    /*
     * If one of the important elements is missing,
     * this will make the problem obvious in the
     * browser console.
     */

    if (!shelfOne || !shelfTwo) {

        console.error(
            "ERROR: Could not find shelf-one or shelf-two."
        );

        return;
    }


    /* =================================================
       CREATE BOOK
    ================================================= */

    function createBook(project) {

        /*
         * Wrapper
         */

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "book-wrapper";

        wrapper.style.setProperty(
            "--rotation",
            project.rotation
        );


        /*
         * Shadow
         */

        const shadow =
            document.createElement("div");

        shadow.className =
            "book-shadow";


        /*
         * Book
         */

        const book =
            document.createElement("div");

        book.className =
            "book";

        book.style.setProperty(
            "--width",
            project.width + "px"
        );

        book.style.setProperty(
            "--height",
            project.height + "px"
        );

        book.style.setProperty(
            "--color",
            project.color
        );

        book.style.setProperty(
            "--accent",
            project.accent
        );


        /*
         * Title size
         */

        book.style.setProperty(
            "--title-size",
            project.width < 60
                ? "11px"
                : "13px"
        );


        /*
         * Spine
         */

        const spine =
            document.createElement("div");

        spine.className =
            "book-spine decoration-" +
            project.decoration;


        /*
         * Title
         */

        const title =
            document.createElement("span");

        title.className =
            "book-title";

        title.textContent =
            project.title;


        /*
         * Assemble
         */

        spine.appendChild(title);

        book.appendChild(spine);

        wrapper.appendChild(shadow);

        wrapper.appendChild(book);


        /*
         * Clicking the book opens it.
         */

        wrapper.addEventListener(
        "click",
        function () {

            openProject(
                project,
                wrapper
            );

            }
        );


        return wrapper;
    }


    /* =================================================
       CREATE ALL BOOKS
    ================================================= */

    projects.forEach(
        function (project) {

            const book =
                createBook(project);


            if (project.shelf === 1) {

                shelfOne.appendChild(book);

            } else {

                shelfTwo.appendChild(book);

            }

        }
    );


    /*
     * This should appear in your browser console.
     * It's useful for confirming that JS ran.
     */

    console.log(
        "Bookshelf loaded:",
        projects.length,
        "books"
    );

/* =================================================
   OPEN PROJECT
================================================= */

function openProject(project, bookElement) {

    if (
        viewer.classList.contains("active")
    ) {
        return;
    }


    /* ================================================
       POPULATE
    ================================================ */

    coverTitle.textContent =
        project.title;

    leftTitle.textContent =
        project.leftTitle;

    leftContent.innerHTML =
        project.leftContent;

    rightTitle.textContent =
        project.rightTitle;

    rightContent.innerHTML =
        project.rightContent;


    /* ================================================
       FIND ORIGINAL BOOK
    ================================================ */

    const bookRect =
        bookElement.getBoundingClientRect();


    const bookCenterX =
        bookRect.left +
        bookRect.width / 2;

    const bookCenterY =
        bookRect.top +
        bookRect.height / 2;


    const viewportCenterX =
        window.innerWidth / 2;

    const viewportCenterY =
        window.innerHeight / 2;


    const startX =
        bookCenterX -
        viewportCenterX;

    const startY =
        bookCenterY -
        viewportCenterY;


    /* ================================================
       START SCALE
    ================================================ */

    const targetWidth =
        Math.min(
            900,
            window.innerWidth * 0.86
        );

    const startScale =
        Math.max(
            bookRect.width / targetWidth,
            0.12
        );


    /* ================================================
       POSITION VIEWER BOOK
    ================================================ */

    openBook.style.setProperty(
        "--book-start-x",
        `${startX}px`
    );

    openBook.style.setProperty(
        "--book-start-y",
        `${startY}px`
    );

    openBook.style.setProperty(
        "--book-start-scale",
        startScale
    );


    /* ================================================
       MARK ORIGINAL
    ================================================ */

    bookElement.classList.add(
        "being-opened"
    );


    /* ================================================
       SHOW VIEWER
    ================================================ */

    viewer.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";


    /*
     * Force initial transform to render.
     */
    void openBook.offsetWidth;


    /* ================================================
       START PHYSICAL ANIMATION
    ================================================ */

    requestAnimationFrame(() => {

        openBook.classList.add(
            "expanding"
        );

    });


    /*
     * Hide the shelf book slightly after the
     * duplicate has started moving.
     */
    setTimeout(() => {

        bookElement.classList.add(
            "book-has-left"
        );

    }, 180);
}


/* =================================================
   CLOSE PROJECT
================================================= */

function closeProject() {

    if (
        !viewer.classList.contains("active")
    ) {
        return;
    }


    /*
     * Find the physical book that originally
     * opened the viewer.
     */

    const openedBook =
        document.querySelector(
            ".book-wrapper.being-opened"
        );


    /*
     * If we know where the original book is,
     * calculate its current position.
     */

    if (openedBook) {

        const rect =
            openedBook.getBoundingClientRect();

        const bookCenterX =
            rect.left +
            rect.width / 2;

        const bookCenterY =
            rect.top +
            rect.height / 2;

        const targetX =
            bookCenterX -
            window.innerWidth / 2;

        const targetY =
            bookCenterY -
            window.innerHeight / 2;

        const targetScale =
            Math.max(
                rect.width /
                Math.min(
                    900,
                    window.innerWidth * 0.86
                ),
                0.08
            );


        openBook.style.setProperty(
            "--book-start-x",
            `${targetX}px`
        );

        openBook.style.setProperty(
            "--book-start-y",
            `${targetY}px`
        );

        openBook.style.setProperty(
            "--book-start-scale",
            targetScale
        );

        openBook.style.setProperty(
            "--book-start-rotation",
            "70deg"
        );
    }


    /*
     * Reverse the opening.
     */

    openBook.classList.remove(
        "expanding"
    );


    /*
     * Wait for the physical book to travel
     * back toward the shelf.
     */

    setTimeout(
        function () {

            if (openedBook) {

                openedBook.classList.remove(
                    "being-opened"
                );
            }


            viewer.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";


            /*
             * Reset transforms for the next book.
             */

            openBook.style.removeProperty(
                "--book-start-x"
            );

            openBook.style.removeProperty(
                "--book-start-y"
            );

            openBook.style.removeProperty(
                "--book-start-scale"
            );

            openBook.style.removeProperty(
                "--book-start-rotation"
            );

        },
        850
    );
}

    /* =================================================
       CLOSE BUTTON
    ================================================= */

    closeButton.addEventListener(
        "click",
        closeProject
    );


    /* =================================================
       BACKDROP
    ================================================= */

    backdrop.addEventListener(
        "click",
        closeProject
    );


    /* =================================================
       ESCAPE
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                viewer.classList.contains("active")
            ) {

                closeProject();

            }

        }
    );


    /* =================================================
       PAGE BUTTONS
    ================================================= */

    document
        .getElementById("previous-page")
        .addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                console.log(
                    "Previous page clicked"
                );

            }
        );


    document
        .getElementById("next-page")
        .addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                console.log(
                    "Next page clicked"
                );

            }
        );

});