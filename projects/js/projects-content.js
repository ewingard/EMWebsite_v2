/* =====================================================
   PROJECT CONTENT
   projects-content.js

   This file contains ONLY project data.

   The book engine does not care what the project is.
   It simply receives project/page objects and renders them.
===================================================== */


const projects = [

    {
        id: "",

        title: "Trans Advisory Board",

        shelf: 1,

        color: "#575757",

        accent: "#d6ad57",

        width: 30,

        height: 250,

        decoration: "ornament",

        pages: [
            {
                number: 1,

                label: "Background",

                title: "Transgender Advisory Board",

                content: `<p>
                    In collaboration with a Ph.D. Candidate at the University of South Carolina and other advisory board members, I
                    attended meetings to review interview questions and promote a more ethical, descriptive methodology used for their research.
                </p>`
            },

            {
                number: 2,

                label: "Background",

                title: "Resource",

                content: `<p>
                Later, we collaborated with the Harriet Hancock Center to provide an online/social media-based resource that provided guidance and information
                on navigating legal, social, and transitioning support in South Carolina.</br>
                </br>
                <a href="https://github.com/ewingard/tadv_scmap">Code Mockup <i class="fa-solid fa-laptop-code"></i></a>
                </p>`
            }
        ]

    },

    {
        id: "masters",

        title: "Master's Thesis",
        
        shelf: 1,

        color: "black",

        accent: "#d6ad57",

        width: 53,

        height: 275,

        rotation: "1deg",

        decoration: "panel",

        pages: [
            {
                number: 1,

                label: "Background",

                title: "Topic",

                content: `<p>
                My thesis topic for the Master's in History program will be titled "Bad Brains: An Investigation of Phrenology 
                and Physiognomy within Enslaved Populations in the Antebellum South." I hope to investigate resilience in Black 
                populations and the medical and sociocultural history of phrenology and physiognomy.
                </p>`
            }
        ]
    },

    {
        id: "volunteer",

        title: "Transcription",

        shelf: 1,

        color: "#6b4423",

        width: 60,

        height: 300,

        pages: [
            {
                number: 1,

                label: "Organization",

                title: "By The People – Library of Congress",

                content: `<p>
                I have completed 8 campaigns, 93 pages, and 131 total actions (saves, submits, and reviews) for the By The People transcription campaigns.</br>
                </br>
                <a href="https://crowd.loc.gov/">By The People <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                <a href="/assets/media/experience/ServiceLetter_LOC_082226.pdf">Download my Service Letter <i class="fa-solid fa-file-lines"></i></a>
                </p>`
            },

            {
                number: 2,

                label: "Organization",

                title: "Citizen Archivist Missions - National Archives",

                content: `<p>
                I have transcribed 5 pages from the <a href="https://catalog.archives.gov/id/598">Records of the President's Commission on the Assassination of President Kennedy <i class="fa-solid fa-arrow-up-right-from-square"></i></a> campaign.</br>
                </br>
                <a href="https://www.archives.gov/citizen-archivist/missions">Citizen Archives Missions <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                </p>`
            },

            {
                number: 3,

                label: "Organization",

                title: "Colored Conventions Project - University of Delaware",

                content: `<p>
                I have transcribed 3 pages for the Colored Conventions Project (transcribing E.W. Harper's documents).</br>
                </br>
                <a href="https://coloredconventions.org/">Colored Conventions Project <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                </p>`
            },

            {
                number: 4,

                label: "Organization",

                title: "Volunpeer - Digital Volunteer for the Smithsonian",

                content: `<p>
                I have reviewed 1 page for the Smithsonian Volunpeer Program.</br>
                </br>
                <a href="https://transcription.si.edu/">Smithsonian Transcriptions <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                </p>`
            },

            {
                number: 5,

                label: "Organization",

                title: "WikiSource",

                content: `<p>
                I have reviewed 18 page for the 1933 North Dakota Session Laws project, 2 pages for the Tutira-Guthrie-Smith monthly project, and 1 page for the "A Dark Night's Work and Other Tales" monthly project.</br>
                </br>
                <a href="https://en.wikisource.org/wiki/Main_Page">WikiSource <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                <a href="https://en.wikisource.org/wiki/Special:Contributions/Ezardwizard">My Contributions <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                </p>`
            },

            {
                number: 6,

                label: "Organization",

                title: "Zooniverse",

                content: `<p>
                I have reviewed/classified 4 pages across 2 projects, including the E.W. Harper papers for the Colored Conventions Project at the University of Delaware.</br>
                </br>
                <a href="https://www.zooniverse.org/">Zooniverse <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </p>`
            },

            {
                number: 7,

                label: "Organization",

                title: "Distributed Proofreaders",

                content: `<p>
                I am planning to volunteer with Project Gutenberg in the future, with their Distributed Proofreaders program.</br>
                </br>
                <a href="https://www.pgdp.net/c/">Distributed Proofreaders <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="https://www.gutenberg.org/">Project Gutenberg <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </p>`
            },
            {
                number: 8,

                label: "Organization",

                title: "Lowcountry Digital Library and the South Carolina Historical Society",

                content:
                `<p>
                I have completed transcriptions and translations for materials in French for the Lowcountry Digital Library and the South Carolina Historical Society.</br>
                </br>
                <a href="https://lcdl.library.cofc.edu/">LCDL <i class="fa-solid fa-arrow-up-right-from-square"></i></a></br>
                <a href="https://schistory.org/archives/start-research/">South Carolina Historical Society (SCHS) <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </p>`
            }
        ],
    },


    {
        id: "publications",

        title: "Publications",

        shelf: 1,

        color: "#7f1313",

        accent: "#d6ad57",

        width: 38,

        height: 260,

        rotation: "-0.8deg",

        decoration: "lines",

        pages: [

            {
                number: "1",

                type: "intro",

                label: "Selected Work",

                title: "Publications",

                content: `
                    <p>
                        A collection of academic and
                        professional publications & presentations.
                    </p>
                `
            },


            {
                number: "2",

                type: "text",

                label: "2026",

                title: "Current Publications & Presentations",

                content: `
                    <p>Wingard, E.M. (2026, April). Beyond the Black Box: Digital Library Workflows Behind the Lowcountry Digital Library. Presented at the LibLearning Rretreat, Charleston, SC.</p>

                    <p>
                        <a href="LibLearning2026 _DigitalLib.pdf">
                            Presentation <i class="fa-solid fa-file-powerpoint" alt="powerpoint icon"></i>
                        </a>
                    </p>
                `
            },

            {
                number: 3,

                type: "text",

                label: "Research",

                title: "2024",

                content: `<p>
                Hersey, J., Morgan, A., Cheever, A., Nelson, C.M., Wingard, E.M., & Hudac, C.M. (2024, April).
                Exploring Nonverbal Communication Differences Among Individuals in Romantic Partnerships: A Neuroscientific Perspective.
                Award winning section poster presented at DiscoverUSC, Columbia, SC.</p>
                
                <p>
                    <a href="/assets/media/experience/LoveBrain_HerseyMorgan.pdf" target="_blank">
                            Presentation PDF <i class="fa-solid fa-file-powerpoint" alt="powerpoint icon"></i>
                    </a> | <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/lovebrain_nv_discoverscposter_finalversion.pdf" target="_blank">
                            B-RAD <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                </p>`

            },

            {
                number: 4,

                type: "text",

                label: "Research",

                title: "2023",

                content: `<p>
                        <strong>Wingard, E.M.</strong> (2023, May). The Impact of Biases in Facial Recognition Artificial Neural Networks. <a href="https://www.illuminatenrhc.com/post/the-impact-of-biases-in-facial-recognition-artificial-neural-networks-by-ezra-wingard\" target="_blank">Illuminate NRHC, 5, 25-32.</a>
                    </p>`
            },


            {
                number: "5",

                type: "chart",

                label: "Research",

                title: "Publication Overview",

                content: `
                    <p>
                        Publications by year.
                    </p>

                    <canvas
                        class="project-chart"
                        data-chart="publication-years"></canvas>
                `
            },


            {
                number: "6",

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
        id: "aphantasia",

        title: "Aphantasia",

        shelf: 1,

        color: "#B12C00",

        accent: "#d0b56d",

        width: 20,

        height: 320,

        rotation: "1.5deg",

        decoration: "bands",

        pages: [
            {

            }
        ]

    },


    {
        id: "AI",

        title: "Bachelor's Thesis",

        shelf: 1,

        color: "#ac812c",

        accent: "#493306",

        width: 62,

        height: 285,

        rotation: "0.5deg",

        decoration: "classic",


        pages: [

            {
                number: "1",

                label: "Background",

                title: "AI Bias",

                content: `
                    <p> Circa 2014, there were a lot of conversations sparked about the potential harms of
                    computer vision and AI uses, especially in government organizations and commercial contexts.
                    </p>
                `
            },


            {
                number: "2",

                label: "Background",

                title: "Thesis Study",

                content: `
                    <p>
                        My thesis work conducted at SUNY Oswego sought to probe how computer vision algorithms
                        may be impacted by diversity of gender modality in the datasets based on training.
                    </br>
                    </br>
                        <a href="/assets/media/experience/HonorsThesis_Publication_Website.pdf">Thesis PDF <i class="fa-solid fa-file-lines"></i></a> | 
                        <a href="assets/media/Thesis/HonorsThesis-Poster-Graph.pdf">Poster <i class="fa-solid fa-file-image"></i></a></br>
                        <a href="media/Thesis/QUEST-WebsiteCopy.pdf" target="_blank">Presentation <i class="fa-solid fa-file-powerpoint"></i></a> |
                        <a href="https://github.com/ewingard/HonorsThesis" target="_blank">Code <i class="fa-solid fa-laptop-code"></i></a>
                    </p>
                `
            },


            {
                number: "3",

                label: "Introduction",

                title: "AI Bias",

                content: `
                    <p> In the field of artificial intelligence, the topic of neural network prejudice and bias is becoming more well-known by the day.
                    More instances of unethical AI practices have been documented by the <a href="https://www.aiaaic.org/aiaaic-repository" target="_blank">AIAAIC database</a>, with instances branching outside of the scope of this project.</a>
                    </p>
                `
            },

            {
                number: "4",

                label: "Introduction",

                title: "Facial Recognition",

                content: `
                    <p> Facial recognition software (commercial use or not) can be deeply flawed in accuracy and equity depending on gender and racial features.
                    Some studies show that facial recognition and automatic gender recognition (AGR) technology’s accuracy rates are significantly worse on <a href="https://www.media.mit.edu/projects/gender-shades/overview/" target="_blank">Black women</a> and <a href="https://www.morgan-klaus.com/pdfs/pubs/Scheuerman-CSCW2019-HowComputersSeeGender.pdf" target="_blank"> transgender people.
                    </p>
                `
            },

            {
                number: "5",

                label: "Methodology",

                title: "Dataset Creation",

                content: `
                    <p> Using the <a href="https://github.com/instaloader/instaloader" target="_blank">Instaloader API  <i class="fa-solid fa-arrow-up-right-from-square"></i></a>, I created two novel datasets based on gender modality.
                    One dataset had transgender people's faces, and the other had cisgender people's faces. Due to limitations, only cisgender faces were balanced based on race. Datasets were balanced between men and women's faces.
                    </p>
                `
            },

            {
                number: "6",

                label: "Methodology",

                title: "Model Testing",

                content: `
                    <p> After the datasets were created, I tested them on two pretrained Convolutional Neural Network (CNN) models. One model (FairFace) was balanced on racial categories;
                    the other (IRNv1) made no claims on racial balancing. Both transgender and cisgender faces were tested and compared for accuracy.
                    </p>
                `
            },
            
            {
                number: "7",

                label: "Results",

                title: "Overall Results",

                content: `
                <p>Women (regardless of gender modality) were more likely to be classified correctly compared to men, with one exception in IRNv1 model predictions.
                Gender modality had the largest effect; the interaction between gender modality and identity had the smallest effect on accuracy.
                </p>
                `
            },

            {
                number: "8",

                label: "Results",

                title: "FairFace Results",

                content: `
                <p>FairFace, the model trained on balanced data, did substantially better on accuracy
                rates overall than the unbalanced model (IRNv1). Using a balanced dataset may help alleviate model bias.
                </p>
                `
            },

            {
                number: "9",

                label: "Results",

                title: "IRNv1 Results",

                content: `
                <p> The IRNv1 model performed worse overall, across all conditions. 
                This model was also had the only accuracy rates that were worse than chance, on transgender men's faces (gender modality x gender identity).
                </p>
                `
            },

            {
                number: "10",

                label: "Conclusion",

                title: "Final Takeaways",

                content: `
                <p>Using balanced datasets can help mitigate model bias and increase accuracy rates on diverse faces. 
                We should include a masculine/feminine gender spectrum to include non-binary people in future gender evaluations.
                We should consider the impacts of AGR or facial recognition on transgender populations, given poor accuracy rates.
                </p>
                `
            },

            {
                number: "11",

                label: "Further Information",

                title: "Data Privacy Notice",

                content: `
                <p> The datasets scraped during this project will not be shared due to privacy reasons. Transgender people are an at-risk group due to political persecution. There are ethical concerns about
                datasets on transgender individuals being made public. The full methodology is available in my <a href="/assets/media/experience/HonorsThesis_Publication_Website.pdf">thesis</a> for dataset replication.
                </p>
                `
            },

            {
                number: "12",

                label: "Further Information",

                title: "Further Readings and Resources",

                content: `
                <p><ul>
                <li><a href="https://www.aiaaic.org/aiaaic-repository/ai-algorithmic-and-automation-incidents/hrt-transgender-dataset">HRT Transgender Dataset <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                <li><a href="https://cmci.colorado.edu/idlab/assets/bibliography/pdf/Scheuerman2021-bigdata-autoessentalization.pdf">Auto-essentialization: Gender in automated facial analysis as extended colonial project <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                </ul></p>
                `
            }
        ]
    },

    {
        id: "clinpsych",

        title: "Childhood Maltreatment",

        shelf: 1,

        color: "#134225",
        
        accent: "#d4b86a",

        width: 30,

        height: 230,

        rotation: "-0.3deg",

        decoration: "ornament"

    },

    {
        id: "eeg",

        title: "EEG",

        shelf: 1,

        color: "#195762",

        accent: "#d4b86a",

        width: 50,

        height: 290,
    },


    {
        id: "research",

        title: "Research",

        shelf: 1,

        color: "#133458",

        accent: "#d4b86a",

        width: 85,

        height: 330,

        rotation: "-0.5deg",

        decoration: "panel",


        pages: [

            {
                number: "1",

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
                number: "2",

                label: "Current Work",

                title: "Research Projects",

                content: `
                    <p>
                        Research project description.
                    </p>
                `
            }

        ]
    },

    {
        id: "art camp",
        
        title: "Art Camp",

        shelf: 1,

        color: "#2a1244",

        accent: "#d0b56d",

        width: 62,

        height: 285,

        rotation: "-1.55deg",

        decoration: "classic",

        pages: [
            { 
                number: 1,

                label: "Creative Writing and Art Camp",

                title: "",

                content: ` <p>
                    The Creative Writing and Art Camp hosted by the <a href="http://www.newbethelfoundation.org/board-members/">New Bethel Foundation</a> was held from July 22 to July 25th, 2024
                    and focused on providing an enriching art education and outlet for local youth during the summer.
                </p> `
            },

            {
                number: 2,

                label: "Lesson Planning",

                title: "",

                content: ` <p>
                    Educational topics covered included:</br>
                        1. Shading and Values</br>
                        2. Textures and Patterns</br>
                        3. Color Theory</br>
                        4. Composition and Project Drafting</br>
                    </p> `
            },
            {
                number: 3,

                label: "",

                content: `<p>
                    
                </p>`

            }
        ]

    },

    {
        id: "fr",

        title: "French",

        shelf: 1,

        color: "#612D53",

        accent: "#d0b56d",

        width: 25,

        height: 200,

        rotation: "-3.3deg",

        decoration: "bands",

        pages: [
            {

            }
        ]
    },

    {
        id: "",

        title: "Researcher \u00A0 Mentorship",

        shelf: 1,

        color: "#853953",

        accent: "#d0b56d",

        decoration: "ornament",

        rotation: "1deg",

        width: 35,

        height: 273,

    },

    {
        id: " ",

        title: "HiTOP",

        color: "#8a475c",

        accent: "#d0b56d",

        decoration: "panel",

        rotation: "-.5deg",

        width: 30,

        height: 200
    }

];