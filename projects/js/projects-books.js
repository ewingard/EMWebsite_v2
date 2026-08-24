/* =====================================================
   PROJECT BOOK ENGINE
   projects-books.js

   BOOK STRUCTURE

   COVER
       One complete 5 × 8.5-style book cover.

   OPEN BOOK
       Two equal-sized pages.

       001 → left
       002 → right

       003 → left
       004 → right

       etc.

   PAGE NAVIGATION
       Every navigation action produces a page-turn
       animation before the new spread is displayed.

   IMPORTANT
       This version is deliberately defensive about how
       projects-content.js exposes the project data.

       It supports:

           projects
           window.projects
           PROJECTS
           window.PROJECTS
           projectData
           window.projectData
           projectsData
           window.projectsData
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           DOM
        ================================================= */

        const shelfOne =
            document.getElementById(
                "shelf-one"
            );


        // const shelfTwo =
        //     document.getElementById(
        //         "shelf-two"
        //     );


        const viewer =
            document.getElementById(
                "book-viewer"
            );


        const backdrop =
            document.getElementById(
                "viewer-backdrop"
            );


        const bookCover =
            document.getElementById(
                "book-cover"
            );


        const openBook =
            document.getElementById(
                "open-book-spread"
            );


        const closeButton =
            document.getElementById(
                "close-book"
            );


        const coverTitle =
            document.getElementById(
                "cover-title"
            );


        const leftPage =
            document.getElementById(
                "left-page"
            );


        const rightPage =
            document.getElementById(
                "right-page"
            );


        const pageFlipLayer =
            document.getElementById(
                "page-flip-layer"
            );


        const previousButton =
            document.getElementById(
                "previous-page"
            );


        const nextButton =
            document.getElementById(
                "next-page"
            );


        /* =================================================
           VALIDATION
        ================================================= */

        const requiredElements = [

            [
                "shelf-one",
                shelfOne
            ],

            // [
            //     "shelf-two",
            //     shelfTwo
            // ],

            [
                "book-viewer",
                viewer
            ],

            [
                "viewer-backdrop",
                backdrop
            ],

            [
                "book-cover",
                bookCover
            ],

            [
                "open-book-spread",
                openBook
            ],

            [
                "close-book",
                closeButton
            ],

            [
                "cover-title",
                coverTitle
            ],

            [
                "left-page",
                leftPage
            ],

            [
                "right-page",
                rightPage
            ],

            [
                "page-flip-layer",
                pageFlipLayer
            ],

            [
                "previous-page",
                previousButton
            ],

            [
                "next-page",
                nextButton
            ]

        ];


        const missingElements =
            requiredElements.filter(
                ([name, element]) =>
                    !element
            );


        if (
            missingElements.length
        ) {

            console.error(
                "Projects book engine: missing DOM elements:",
                missingElements.map(
                    ([name]) => name
                )
            );

            return;

        }


        /* =================================================
           PROJECT DATA
        ================================================= */

        let projectList = null;

        if (
            typeof projects !== "undefined" &&
            Array.isArray(projects)
        ) {

            projectList =
                projects;

        }


        /*
         * Window-based alternatives.
         */

        if (
            !projectList &&
            Array.isArray(
                window.projects
            )
        ) {

            projectList =
                window.projects;

        }


        if (
            !projectList &&
            typeof PROJECTS !== "undefined" &&
            Array.isArray(PROJECTS)
        ) {

            projectList =
                PROJECTS;

        }


        if (
            !projectList &&
            Array.isArray(
                window.PROJECTS
            )
        ) {

            projectList =
                window.PROJECTS;

        }


        if (
            !projectList &&
            typeof projectData !== "undefined" &&
            Array.isArray(projectData)
        ) {

            projectList =
                projectData;

        }


        if (
            !projectList &&
            Array.isArray(
                window.projectData
            )
        ) {

            projectList =
                window.projectData;

        }


        if (
            !projectList &&
            typeof projectsData !== "undefined" &&
            Array.isArray(projectsData)
        ) {

            projectList =
                projectsData;

        }


        if (
            !projectList &&
            Array.isArray(
                window.projectsData
            )
        ) {

            projectList =
                window.projectsData;

        }


        /*
         * If no project data was found, stop cleanly
         * and provide a useful diagnostic.
         */

        if (
            !projectList
        ) {

            console.error(
                "Projects book engine: no project array was found."
            );


            console.error(
                "Make sure /js/projects-content.js loads before /js/projects-books.js."
            );


            console.error(
                "Expected one of: projects, window.projects, PROJECTS, window.PROJECTS, projectData, projectsData."
            );


            return;

        }


        /*
         * Make a local copy.
         *
         * This prevents accidental modification of the
         * source data while the viewer is running.
         */

        const projectLibrary =
            Array.isArray(projectList)
                ? projectList.slice()
                : [];


        console.log(
            "Project book library data found:",
            projectLibrary.length,
            "projects"
        );


        /* =================================================
           STATE
        ================================================= */

        let activeProject =
            null;


        let activeShelfBook =
            null;


        /*
         * spreadIndex represents the first page
         * displayed in the current spread.
         * -1 = Cover
         * 0 = 1 / 2
         * 2 = 3 / 4
         * 4 = 5 / 6
         * ...
         */

        let spreadIndex =
            -1;


        let isAnimating =
            false;


        /* =================================================
           TIMING
        ================================================= */

        const TIMING = {

            coverOpen: 650,

            pageTurn: 620,

            close: 450

        };


        /* =================================================
           SAFE PROJECT VALUE
        ================================================= */

        function getProjectValue(
            project,
            key,
            fallback = ""
        ) {

            if (
                !project ||
                typeof project !== "object"
            ) {

                return fallback;

            }


            const value =
                project[key];


            return value !== undefined &&
                value !== null
                ? value
                : fallback;

        }


        /* =================================================
           CREATE SHELF BOOK
        ================================================= */

        function createBook(
            project
        ) {

            const wrapper =
                document.createElement(
                    "button"
                );


            wrapper.type =
                "button";


            wrapper.className =
                "book-wrapper";


            const title =
                getProjectValue(
                    project,
                    "title",
                    "Untitled Project"
                );


            wrapper.setAttribute(
                "aria-label",
                `Open ${title}`
            );


            wrapper.style.setProperty(
                "--rotation",
                getProjectValue(
                    project,
                    "rotation",
                    "0deg"
                )
            );


            const shadow =
                document.createElement(
                    "div"
                );


            shadow.className =
                "book-shadow";


            const book =
                document.createElement(
                    "div"
                );


            book.className =
                "book";


            const width =
                Number(
                    getProjectValue(
                        project,
                        "width",
                        55
                    )
                );


            const height =
                Number(
                    getProjectValue(
                        project,
                        "height",
                        250
                    )
                );


            const color =
                getProjectValue(
                    project,
                    "color",
                    "#5b2925"
                );


            const accent =
                getProjectValue(
                    project,
                    "accent",
                    "#d6ad57"
                );


            const decoration =
                getProjectValue(
                    project,
                    "decoration",
                    "classic"
                );


            book.style.setProperty(
                "--width",
                `${width}px`
            );


            book.style.setProperty(
                "--height",
                `${height}px`
            );


            book.style.setProperty(
                "--color",
                color
            );


            book.style.setProperty(
                "--accent",
                accent
            );


            book.style.setProperty(
                "--title-size",
                width < 70
                    ? "10px"
                    : "12px"
            );


            const spine =
                document.createElement(
                    "div"
                );


            spine.className =
                "book-spine decoration-" +
                decoration;


            const titleElement =
                document.createElement(
                    "span"
                );


            titleElement.className =
                "book-title";


            titleElement.textContent =
                title;


            spine.appendChild(
                titleElement
            );


            book.appendChild(
                spine
            );


            wrapper.appendChild(
                shadow
            );


            wrapper.appendChild(
                book
            );


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

        function buildShelves() {

            /*
             * Clear the shelves first.
             *
             * This prevents duplicate books if this
             * function is ever called again.
             */

            shelfOne.innerHTML =
                "";

            /* Remove 2nd shelf for now */
            // shelfTwo.innerHTML =
            //     "";


            projectLibrary.forEach(
                (
                    project,
                    index
                ) => {

                    if (
                        !project ||
                        typeof project !== "object"
                    ) {

                        console.warn(
                            "Projects book engine: skipping invalid project at index",
                            index,
                            project
                        );

                        return;

                    }


                    const book =
                        createBook(
                            project
                        );


                    const shelf =
                        Number(
                            getProjectValue(
                                project,
                                "shelf",
                                1
                            )
                        );


                    if (
                        shelf === 1
                    ) {

                        shelfOne.appendChild(
                            book
                        );

                    } 
                    
                    // else {

                    //     shelfOne.appendChild(
                    //         book
                    //     );

                    // }

                }
            );


            console.log(
                "Project book shelves built:",
                shelfOne.children.length,
                "books on shelf one;"
            //     shelfTwo.children.length,
            //     "books on shelf two."
            );

        }


        /* =================================================
           THEME
        ================================================= */

        function applyBookTheme(
            project
        ) {

            viewer.style.setProperty(
                "--book-color",
                getProjectValue(
                    project,
                    "color",
                    "#5b2925"
                )
            );


            viewer.style.setProperty(
                "--book-accent",
                getProjectValue(
                    project,
                    "accent",
                    "#d6ad57"
                )
            );

        }


        /* =================================================
           COVER
        ================================================= */

        function populateCover(
            project
        ) {

            coverTitle.textContent =
                getProjectValue(
                    project,
                    "title",
                    "Untitled Project"
                );

        }


        /* =================================================
           CREATE PAGE
        ================================================= */

        function createPageSurface(
            page
        ) {

            const surface =
                document.createElement(
                    "div"
                );


            surface.className =
                "page-inner";


            const label =
                document.createElement(
                    "span"
                );


            label.className =
                "page-label";


            label.textContent =
                getProjectValue(
                    page,
                    "label",
                    ""
                );


            const title =
                document.createElement(
                    "h2"
                );


            title.textContent =
                getProjectValue(
                    page,
                    "title",
                    ""
                );


            const content =
                document.createElement(
                    "div"
                );


            content.className =
                "page-content";


            /*
             * Content is intentionally treated as HTML,
             * matching the existing project data format.
             */

            content.innerHTML =
                getProjectValue(
                    page,
                    "content",
                    ""
                );


            const number =
                document.createElement(
                    "span"
                );


            number.className =
                "page-number";


            number.textContent =
                getProjectValue(
                    page,
                    "number",
                    ""
                );


            surface.appendChild(
                label
            );


            surface.appendChild(
                title
            );


            surface.appendChild(
                content
            );


            surface.appendChild(
                number
            );


            return surface;

        }


        /* =================================================
           GET PROJECT PAGES
        ================================================= */

        function getProjectPages() {

            if (
                !activeProject
            ) {

                return [];

            }


            const pages =
                getProjectValue(
                    activeProject,
                    "pages",
                    []
                );


            return Array.isArray(
                pages
            )
                ? pages
                : [];

        }


        /* =================================================
           GET CURRENT SPREAD
        ================================================= */

        function getCurrentSpread() {

            const pages =
                getProjectPages();


            return {

                left:
                    pages[
                        spreadIndex
                    ] || null,

                right:
                    pages[
                        spreadIndex + 1
                    ] || null

            };

        }


        /* =================================================
           RENDER SPREAD
        ================================================= */

        function renderSpread(
            animateContent = false
        ) {

            if (
                !activeProject
            ) {

                return;

            }


            const spread =
                getCurrentSpread();


            leftPage.innerHTML =
                "";


            rightPage.innerHTML =
                "";


            /*
             * LEFT PAGE
             */

            if (
                spread.left
            ) {

                const content =
                    createPageSurface(
                        spread.left
                    );


                leftPage.appendChild(
                    content
                );

            }


            /*
             * RIGHT PAGE
             */

            if (
                spread.right
            ) {

                const content =
                    createPageSurface(
                        spread.right
                    );


                rightPage.appendChild(
                    content
                );

            }


            /*
             * Optional content entrance animation.
             */

            if (
                animateContent
            ) {

                requestAnimationFrame(
                    () => {

                        leftPage.classList.add(
                            "page-entering"
                        );


                        rightPage.classList.add(
                            "page-entering"
                        );


                        setTimeout(
                            () => {

                                leftPage.classList.remove(
                                    "page-entering"
                                );


                                rightPage.classList.remove(
                                    "page-entering"
                                );

                            },
                            450
                        );

                    }
                );

            }


            updateNavigation();

        }


        /* =================================================
           NAVIGATION STATE
        ================================================= */

        function updateNavigation() {

        const pages =
            getProjectPages();

            previousButton.disabled =
                spreadIndex <= -1;

            nextButton.disabled =
                spreadIndex >= 0 &&
                spreadIndex + 2 >= pages.length;

        }


        /* =================================================
           RESET VIEWER
        ================================================= */

        function resetViewer() {

            viewer.className =
                "book-viewer";


            viewer.setAttribute(
                "aria-hidden",
                "true"
            );


            bookCover.classList.remove(
                "is-visible",
                "cover-turning",
                "cover-turning-back"
            );


            openBook.classList.remove(
                "visible"
            );


            pageFlipLayer.innerHTML =
                "";


            leftPage.innerHTML =
                "";


            rightPage.innerHTML =
                "";


            document.body.style.overflow =
                "";

        }


        /* =================================================
           OPEN PROJECT
        ================================================= */

        function openProject(
            project,
            bookElement
        ) {

            if (
                isAnimating ||
                viewer.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                !project ||
                !bookElement
            ) {

                return;

            }


            isAnimating =
                true;


            activeProject =
                project;


            activeShelfBook =
                bookElement;


            spreadIndex =
                -1;


            applyBookTheme(
                project
            );


            populateCover(
                project
            );


            /*
             * Start with ONLY the cover visible.
             */

            bookCover.classList.remove(
                "is-visible"
            );


            openBook.classList.remove(
                "visible"
            );


            viewer.classList.remove(
                "cover-visible"
            );


            viewer.classList.remove(
                "opening-book"
            );


            viewer.classList.remove(
                "book-open"
            );


            pageFlipLayer.innerHTML =
                "";


            /*
             * Render the first spread while it is hidden.
             *
             * This is important: the pages are fully
             * populated before the book is opened.
             */

            renderSpread(
                false
            );


            /*
             * Hide the shelf copy.
             */

            bookElement.classList.add(
                "being-opened"
            );


            document.body.style.overflow =
                "hidden";


            /*
             * Activate viewer.
             */

            viewer.className =
                "book-viewer active";


            viewer.setAttribute(
                "aria-hidden",
                "false"
            );


            /*
             * Show the cover on the next paint.
             */

            requestAnimationFrame(
                () => {

                    bookCover.classList.add(
                        "is-visible"
                    );


                    viewer.classList.add(
                        "cover-visible"
                    );

                }
            );


            // /*
            //  * COVER → OPEN BOOK
            //  */

            // setTimeout(
            //     () => {

            //         if (
            //             !activeProject
            //         ) {

            //             return;

            //         }


            //         viewer.classList.remove(
            //             "cover-visible"
            //         );


            //         viewer.classList.add(
            //             "opening-book"
            //         );


            //         /*
            //          * Let the cover finish disappearing
            //          * before making the open spread visible.
            //          */

            //         setTimeout(
            //             () => {

            //                 if (
            //                     !activeProject
            //                 ) {

            //                     return;

            //                 }


            //                 bookCover.classList.remove(
            //                     "is-visible"
            //                 );


            //                 /*
            //                  * The spread is already populated.
            //                  * It is now safe to reveal it.
            //                  */

            //                 openBook.classList.add(
            //                     "visible"
            //                 );


            //                 requestAnimationFrame(
            //                     () => {

            //                         viewer.classList.remove(
            //                             "opening-book"
            //                         );


            //                         viewer.classList.add(
            //                             "book-open"
            //                         );

            //                     }
            //                 );

            //             },
            //             300
            //         );

            //     },
            //     TIMING.coverOpen
            // );


            /*
             * Unlock navigation after the entire opening
             * sequence has settled.
             */

            // setTimeout(
            //     () => {

            //         isAnimating =
            //             false;

            //     },
            //     TIMING.coverOpen +
            //     700
            // );

            updateNavigation();

            isAnimating = false;

        }

        /* =================================================
        COVER TURN
        ================================================= */

        function turnCover() {

            if (
                !activeProject ||
                isAnimating ||
                spreadIndex !== -1
            ) {

                return;

            }


            isAnimating = true;


            /*
            * The cover itself performs the navigation.
            * Keep it visible while it rotates so there is
            * never a moment where the book simply disappears.
            */

            viewer.classList.add(
                "opening-book"
            );


            bookCover.classList.add(
                "cover-turning"
            );


            setTimeout(
                () => {

                    if (!activeProject) {
                        return;
                    }


                    spreadIndex = 0;


                    /*
                    * The first spread was already rendered while
                    * the cover was closed.
                    */

                    openBook.classList.add(
                        "visible"
                    );


                    renderSpread(
                        false
                    );


                    requestAnimationFrame(
                        () => {

                            viewer.classList.remove(
                                "opening-book"
                            );


                            viewer.classList.add(
                                "book-open"
                            );


                            bookCover.classList.remove(
                                "is-visible"
                            );


                            bookCover.classList.remove(
                                "cover-turning"
                            );

                        }
                    );

                },
                TIMING.coverOpen
            );


            setTimeout(
                () => {

                    isAnimating = false;

                    updateNavigation();

                },
                TIMING.coverOpen + 40
            );

        }


        /* =================================================
        PAGE TURN
        ================================================= */

        function turnPage(
            direction
        ) {

            if (
                !activeProject ||
                isAnimating
            ) {

                return;

            }


            /*
            * COVER
            *
            * The cover is part of the navigation sequence.
            */

            if (
                spreadIndex === -1
            ) {

                if (
                    direction === "next"
                ) {

                    turnCover();

                }

                return;

            }


            /*
            * Once we're on the first spread, the previous
            * arrow physically turns the first page back into
            * the cover.
            */

            if (
                direction === "previous" &&
                spreadIndex === 0
            ) {

                turnBackToCover();

                return;

            }


            const pages =
                getProjectPages();


            if (
                direction === "next" &&
                spreadIndex + 2 >= pages.length
            ) {

                return;

            }


            if (
                direction === "previous" &&
                spreadIndex <= 0
            ) {

                return;

            }


            isAnimating = true;


            /*
            * Remember the current spread before changing it.
            */

            const currentSpread =
                getCurrentSpread();


            /*
            * Calculate the destination spread.
            */

            const destinationIndex =
                direction === "next"
                    ? spreadIndex + 2
                    : spreadIndex - 2;


            const destinationSpread = {

                left:
                    pages[destinationIndex] ||
                    null,

                right:
                    pages[destinationIndex + 1] ||
                    null

            };


            /*
            * The sheet being physically turned:
            *
            * NEXT:
            *   current right page -> destination left page
            *
            * PREVIOUS:
            *   current left page -> destination right page
            */

            const frontPage =
                direction === "next"
                    ? currentSpread.right
                    : currentSpread.left;


            const backPage =
                direction === "next"
                    ? destinationSpread.left
                    : destinationSpread.right;


            const turningPage =
                document.createElement(
                    "div"
                );


            turningPage.className =
                `page-flip ${direction}`;


            const turningFront =
                document.createElement(
                    "div"
                );


            turningFront.className =
                "page-flip-front";


            const turningBack =
                document.createElement(
                    "div"
                );


            turningBack.className =
                "page-flip-back";


            /*
            * Build the two real sides of the sheet.
            */

            if (frontPage) {

                turningFront.appendChild(
                    createPageSurface(
                        frontPage
                    )
                );

            }


            if (backPage) {

                turningBack.appendChild(
                    createPageSurface(
                        backPage
                    )
                );

            }


            turningPage.appendChild(
                turningFront
            );


            turningPage.appendChild(
                turningBack
            );


            pageFlipLayer.innerHTML =
                "";


            pageFlipLayer.appendChild(
                turningPage
            );


            /*
            * Keep the old spread underneath until the sheet
            * has passed the point where the new spread can
            * safely take over.
            */

            const midpoint =
                Math.round(
                    TIMING.pageTurn * 0.68
                );


            setTimeout(
                () => {

                    spreadIndex =
                        destinationIndex;


                    renderSpread(
                        false
                    );

                },
                midpoint
            );


            setTimeout(
                () => {

                    if (
                        turningPage.parentNode
                    ) {

                        turningPage.remove();

                    }


                    isAnimating =
                        false;


                    updateNavigation();

                },
                TIMING.pageTurn + 30
            );

        }

        /* =================================================
        FIRST SPREAD -> COVER
        ================================================= */

        function turnBackToCover() {

            if (
                !activeProject ||
                isAnimating ||
                spreadIndex !== 0
            ) {

                return;

            }


            isAnimating = true;


            /*
            * Hide the normal spread only after the cover has
            * been placed underneath it.
            */

            bookCover.classList.add(
                "is-visible"
            );


            viewer.classList.add(
                "returning-cover"
            );


            /*
            * Give the cover a real page-turn rather than
            * simply fading it into existence.
            */

            bookCover.classList.add(
                "cover-turning-back"
            );


            setTimeout(
                () => {

                    spreadIndex =
                        -1;


                    openBook.classList.remove(
                        "visible"
                    );


                    viewer.classList.remove(
                        "book-open"
                    );


                    viewer.classList.remove(
                        "returning-cover"
                    );


                    bookCover.classList.remove(
                        "cover-turning-back"
                    );


                    viewer.classList.add(
                        "cover-visible"
                    );


                    updateNavigation();

                },
                TIMING.coverOpen
            );


            setTimeout(
                () => {

                    isAnimating =
                        false;

                },
                TIMING.coverOpen + 40
            );

        }


        /* =================================================
           CLOSE PROJECT
        ================================================= */

        function closeProject() {

            if (
                !viewer.classList.contains(
                    "active"
                ) ||
                isAnimating
            ) {

                return;

            }


            isAnimating =
                true;


            /*
             * Hide the open pages first.
             */

            viewer.classList.remove(
                "book-open"
            );


            viewer.classList.add(
                "closing-book"
            );


            setTimeout(
                () => {

                    openBook.classList.remove(
                        "visible"
                    );


                    bookCover.classList.add(
                        "is-visible"
                    );


                    viewer.classList.remove(
                        "closing-book"
                    );


                    viewer.classList.add(
                        "returning-cover"
                    );

                },
                260
            );


            /*
             * Finish closing.
             */

            setTimeout(
                () => {

                    if (
                        activeShelfBook
                    ) {

                        activeShelfBook.classList.remove(
                            "being-opened"
                        );

                    }


                    resetViewer();


                    activeProject =
                        null;


                    activeShelfBook =
                        null;


                    spreadIndex =
                        -1;


                    isAnimating =
                        false;

                },
                TIMING.close +
                350
            );

        }


        /* =================================================
           EVENTS
        ================================================= */

        closeButton.addEventListener(
            "click",
            closeProject
        );


        backdrop.addEventListener(
            "click",
            closeProject
        );


        nextButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                turnPage(
                    "next"
                );

            }
        );


        previousButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                turnPage(
                    "previous"
                );

            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    !viewer.classList.contains(
                        "active"
                    )
                ) {

                    return;

                }


                if (
                    event.key === "Escape"
                ) {

                    closeProject();

                    return;

                }


                if (
                    event.key === "ArrowRight"
                ) {

                    event.preventDefault();


                    turnPage(
                        "next"
                    );

                }


                if (
                    event.key === "ArrowLeft"
                ) {

                    event.preventDefault();


                    turnPage(
                        "previous"
                    );

                }

            }
        );


        /* =================================================
           INITIALIZATION
        ================================================= */

        buildShelves();


        console.log(
            "Project book library initialized:",
            projectLibrary.length,
            "projects"
        );

    }
);