document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       PROJECT DATA
       Keep your existing projects array above this point.
    ================================================= */

    const projects = [

        /* -------------------------------------------------
           KEEP YOUR EXISTING PROJECT OBJECTS HERE
        ------------------------------------------------- */

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
       DOM
    ================================================= */

    const shelfOne =
        document.getElementById("shelf-one");

    const shelfTwo =
        document.getElementById("shelf-two");

    const viewer =
        document.getElementById("book-viewer");

    const backdrop =
        document.getElementById("viewer-backdrop");

    const openBook =
        document.getElementById("open-book");

    const closeButton =
        document.getElementById("close-book");

    const coverTitle =
        document.getElementById("cover-title");

    const backCoverTitle =
        document.getElementById("back-cover-title");

    const leftTitle =
        document.getElementById("left-title");

    const leftContent =
        document.getElementById("left-content");

    const rightTitle =
        document.getElementById("right-title");

    const rightContent =
        document.getElementById("right-content");

    const pageFlipLayer =
        document.getElementById("page-flip-layer");

    const previousButton =
        document.getElementById("previous-page");

    const nextButton =
        document.getElementById("next-page");


    if (
        !shelfOne ||
        !shelfTwo ||
        !viewer ||
        !openBook
    ) {
        console.error(
            "Book viewer could not initialize."
        );

        return;
    }


    /* =================================================
       STATE
    ================================================= */

    let activeProject = null;

    let activeShelfBook = null;

    let pageIndex = 0;

    let isAnimating = false;

    let closeTimer = null;


    /*
     * This is deliberately a separate timing system.
     *
     * It makes the physical sequence obvious and gives
     * you places to add sound, texture loading, or
     * higher-quality 3D assets later.
     */

    const TIMING = {

        pull: 850,

        face: 600,

        open: 800,

        page: 720,

        close: 800
    };


    /* =================================================
       CREATE SHELF BOOK
    ================================================= */

    function createBook(project) {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "book-wrapper";

        wrapper.style.setProperty(
            "--rotation",
            project.rotation
        );


        const shadow =
            document.createElement("div");

        shadow.className =
            "book-shadow";


        const book =
            document.createElement("div");

        book.className =
            "book";

        book.style.setProperty(
            "--width",
            `${project.width}px`
        );

        book.style.setProperty(
            "--height",
            `${project.height}px`
        );

        book.style.setProperty(
            "--color",
            project.color
        );

        book.style.setProperty(
            "--accent",
            project.accent
        );

        book.style.setProperty(
            "--title-size",
            project.width < 60
                ? "11px"
                : "13px"
        );


        const spine =
            document.createElement("div");

        spine.className =
            "book-spine decoration-" +
            project.decoration;


        const title =
            document.createElement("span");

        title.className =
            "book-title";

        title.textContent =
            project.title;


        spine.appendChild(title);

        book.appendChild(spine);

        wrapper.appendChild(shadow);

        wrapper.appendChild(book);


        wrapper.addEventListener(
            "click",
            () => {

                openProject(
                    project,
                    wrapper
                );

            }
        );


        return wrapper;
    }


    /* =================================================
       BUILD SHELVES
    ================================================= */

    projects.forEach(project => {

        const book =
            createBook(project);

        if (project.shelf === 1) {

            shelfOne.appendChild(book);

        } else {

            shelfTwo.appendChild(book);

        }

    });


    console.log(
        "Bookshelf loaded:",
        projects.length,
        "books"
    );


    /* =================================================
       POPULATE BOOK
    ================================================= */

    function populateBook(project) {

        activeProject = project;

        coverTitle.textContent =
            project.title;

        backCoverTitle.textContent =
            project.title;

        leftTitle.textContent =
            project.leftTitle;

        leftContent.innerHTML =
            project.leftContent;

        rightTitle.textContent =
            project.rightTitle;

        rightContent.innerHTML =
            project.rightContent;
    }


    /* =================================================
       CALCULATE SHELF POSITION
    ================================================= */

    function calculateStartPosition(bookElement) {

        const rect =
            bookElement.getBoundingClientRect();

        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;

        const viewportCenterX =
            window.innerWidth / 2;

        const viewportCenterY =
            window.innerHeight / 2;


        /*
         * The viewer book is centered on screen.
         *
         * These values tell the 3D book where its
         * journey begins.
         */

        const x =
            centerX -
            viewportCenterX;

        const y =
            centerY -
            viewportCenterY;


        /*
         * Closed shelf book is dramatically smaller
         * than the open viewer.
         */

        const viewerHeight =
            Math.min(
                620,
                window.innerHeight * .78
            );

        const scale =
            Math.max(
                rect.height /
                viewerHeight,
                .12
            );


        return {
            x,
            y,
            scale
        };
    }


    /* =================================================
       OPEN PROJECT
    ================================================= */

    function openProject(project, bookElement) {

        if (
            isAnimating ||
            viewer.classList.contains("active")
        ) {
            return;
        }


        isAnimating = true;

        activeShelfBook =
            bookElement;


        populateBook(project);


        /*
         * Determine where the book is on the shelf.
         */

        const start =
            calculateStartPosition(
                bookElement
            );


        openBook.style.setProperty(
            "--start-x",
            `${start.x}px`
        );

        openBook.style.setProperty(
            "--start-y",
            `${start.y}px`
        );

        openBook.style.setProperty(
            "--start-scale",
            start.scale
        );


        /*
         * Pull target.
         *
         * Slightly toward the viewer and outward
         * before it turns.
         */

        const pullX =
            start.x * .72;

        const pullY =
            start.y * .72;


        openBook.style.setProperty(
            "--pull-x",
            `${pullX}px`
        );

        openBook.style.setProperty(
            "--pull-y",
            `${pullY}px`
        );


        /*
         * Reset state.
         */

        viewer.classList.remove(
            "is-pulling",
            "is-facing",
            "is-opening",
            "is-open",
            "is-closing"
        );


        /*
         * Reset page layer.
         */

        pageFlipLayer.innerHTML = "";


        /*
         * Show viewer.
         */

        viewer.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";


        /*
         * Make the shelf book temporarily
         * non-interactive but leave it visible.
         */

        bookElement.classList.add(
            "being-opened"
        );


        /*
         * Force browser to commit initial
         * transform before beginning animation.
         */

        void openBook.offsetWidth;


        /*
         * -----------------------------------------
         * PHASE 1
         * Pull book out of shelf.
         * -----------------------------------------
         */

        requestAnimationFrame(() => {

            viewer.classList.add(
                "is-pulling"
            );

        });


        setTimeout(() => {

            /*
             * -------------------------------------
             * PHASE 2
             * Rotate book toward viewer.
             * -------------------------------------
             */

            viewer.classList.remove(
                "is-pulling"
            );

            viewer.classList.add(
                "is-facing"
            );

        }, TIMING.pull);


        setTimeout(() => {

            /*
             * Now the shelf book disappears.
             *
             * The viewer copy has physically
             * reached the center.
             */

            bookElement.classList.add(
                "book-has-left"
            );


            /*
             * -------------------------------------
             * PHASE 3
             * Open the physical covers.
             * -------------------------------------
             */

            viewer.classList.remove(
                "is-facing"
            );

            viewer.classList.add(
                "is-opening"
            );

        }, TIMING.pull + TIMING.face);


        setTimeout(() => {

            /*
             * -------------------------------------
             * PHASE 4
             * Fully open.
             * -------------------------------------
             */

            viewer.classList.remove(
                "is-opening"
            );

            viewer.classList.add(
                "is-open"
            );

            isAnimating = false;

        }, TIMING.pull + TIMING.face + TIMING.open);
    }


    /* =================================================
       PAGE TURN
    ================================================= */

    function turnPage(direction) {

        if (
            !viewer.classList.contains("is-open") ||
            isAnimating
        ) {
            return;
        }


        /*
         * For the current two-page implementation,
         * we only demonstrate the physical page
         * mechanism.
         *
         * Later this becomes:
         *
         * pageIndex → page object → page renderer.
         */

        isAnimating = true;


        const page =
            document.createElement("div");

        page.className =
            "page-flip";


        /*
         * Give the page the same visual surface
         * as the real pages.
         *
         * Later this can become:
         *
         * background-image: url(...)
         *
         * or an actual generated page DOM node.
         */

        if (direction === "next") {

            page.style.background =
                "linear-gradient(" +
                "to left," +
                "#e4d8c0," +
                "#f8efdf 14%," +
                "#f8efdf 86%," +
                "#d8c9af" +
                ")";

        } else {

            page.style.left = "9px";
            page.style.right = "auto";

            page.style.transformOrigin =
                "right center";

            page.style.animationName =
                "page-turn-back";

        }


        pageFlipLayer.appendChild(page);


        page.addEventListener(
            "animationend",
            () => {

                page.remove();

                isAnimating = false;

            },
            {
                once: true
            }
        );
    }


    /* =================================================
       CLOSE PROJECT
    ================================================= */

    function closeProject() {

        if (
            !viewer.classList.contains("active") ||
            isAnimating
        ) {
            return;
        }


        isAnimating = true;


        /*
         * Remove the open state.
         */

        viewer.classList.remove(
            "is-open",
            "is-opening"
        );


        /*
         * Reverse the cover animation first.
         */

        viewer.classList.add(
            "is-facing"
        );


        /*
         * Then rotate the entire book back toward
         * its shelf orientation.
         */

        setTimeout(() => {

            viewer.classList.remove(
                "is-facing"
            );

            viewer.classList.add(
                "is-pulling"
            );

        }, TIMING.open);


        /*
         * Finally return the book to the exact
         * shelf location.
         */

        setTimeout(() => {

            viewer.classList.remove(
                "is-pulling"
            );


            if (activeShelfBook) {

                activeShelfBook.classList.remove(
                    "book-has-left",
                    "being-opened"
                );
            }


            viewer.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";


            pageFlipLayer.innerHTML =
                "";


            isAnimating = false;

            activeProject = null;

            activeShelfBook = null;

        }, TIMING.open + TIMING.close);
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
        event => {

            if (
                event.key === "Escape" &&
                viewer.classList.contains("active")
            ) {

                closeProject();

            }

        }
    );


    /* =================================================
       PAGE CONTROLS
    ================================================= */

    nextButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            turnPage("next");

        }
    );


    previousButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            turnPage("previous");

        }
    );


    /* =================================================
       PREVENT LINKS FROM CLOSING BOOK
    ================================================= */

    openBook.addEventListener(
        "click",
        event => {

            event.stopPropagation();

        }
    );

});