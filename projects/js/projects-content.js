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
                number: 1,

                type: "intro",

                label: "Selected Work",

                title: "Publications",

                content: `
                    <p>
                        A collection of academic and
                        professional publications & presentations.
                    </p>
                    <div class="chart-row">
                        <div class="chart-block">
                            <h3 class="chart-title">
                                Publications by Type
                            </h3>

                            <div class="publication-chart-container">
                                <canvas
                                    id="publicationTypeChart"
                                    class="project-chart"
                                    data-chart="publications"
                                    aria-label="Chart of publications by type and year">
                                </canvas>
                            </div>
                        </div>

                        <div class="chart-block">
                            <h3 class="chart-title">
                                Publications by Year
                            </h3>

                            <div class="publication-chart-container">
                                <canvas
                                    id="publicationYearChart"
                                    class="project-chart"
                                    data-chart="publications-year"
                                    aria-label="Chart showing publication amounts by year">
                                </canvas>
                            </div>
                        </div>
                    </div>

                    <div class="publication-chart-container" id="publication-role-container">
                        <h3 class="chart-title">
                            Publication Roles by Year
                        </h3>
                            <canvas
                                id="publicationRoleChart"
                                class="project-chart"
                                data-chart="publication-role"
                                aria-label="Chart showing publication roles by year">
                            </canvas>
                    </div>
                `
            },


            {
                number: 2,

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

                title: "2025",

                content: `<p> 
                <strong>Wingard, E.M.,</strong> Nelson, C.M., Xia, M., & Hudac, C.M. (2025, April). Is Friendship in the Cards? How Adolescent Brains Make Quantity Decisions Involving Friendship. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/wingard_sans.pdf" target="_blank">Presented at the Social & Affective Neuroscience Society annual meeting, Chicago, IL.</a>
                | <a href="/assets/media/experience/Wingard_SANS_Final.pdf" target="_blank"> PDF <i class="fa-solid fa-file-image" alt="image file icon"></i></a>
                </p></br>
                <p>
                Arcement, J., Patel, M., <strong>Wingard, E.M.,</strong> Cheever, A., McFadden, J., Nelson, C.M., & Hudac, C.M. (2025, April). The Influence of Anxiety on Social Preferences in Adolescents: Exploring Group Size and Duration Choices. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/discoverusc_fortuneteller-anxiety.pdf" target="_blank">Presented at DiscoverUSC, Columbia, SC.</a> 
                | <a href="/assets/media/experience/SocialAnxiety_ArcementPatel.pdf" target="_blank"> PDF <i class="fa-solid fa-file-image" alt="image file icon"></i></a>
                </p>`
            },

            {
                number: 4,

                type: "text",

                label: "Research",

                title: "2025",

                content: `<p>
                Johnson, M., <strong>Wingard, E.M.,</strong> Nelson, C.M., & Hudac, C.M. (2025, April). Do I know you? Influence of adolescent social interactions on brain responses to familiar and AI-generated faces. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/johnson_sans25.pdf" target="_blank">Presented at the Social & Affective Neuroscience Society annual meeting, Chicago, IL.</a> 
                | <a href="/assets/media/experience/FacePerception_Johnson.pdf" target="_blank"> PDF <i class="fa-solid fa-file-image" alt="image file icon"></i></a>
                </p></br>
                <p>
                Hersey, J., Du Plessis, V., <strong>Wingard, E.M.,</strong> McFadden, J., Nelson, C.M., & Hudac, C.M. (2025, April). Social Quantity Preferences in Adolescence: Investigating the Correlation between the Need to Belong and Decisions in Social Quantity. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/discoverusc_fortuneteller-ntbs.pdf" target="_blank">Poster at  DiscoverUSC, Columbia, SC.</a>
                | <a href="/assets/media/experience/NTBS_HerseyPlessis.pdf" target="_blank"> PDF <i class="fa-solid fa-file-image" alt="image file icon"></i></a>
                </p>`
            },

            {
                number: 5,

                type: "text",

                label: "Research",

                title: "2024",
                
                content: `
                <p> Nelson, C. M., Johnson, M., <strong>Wingard, E.M.,</strong> & Hudac, C. M. (2024, May). Characterizing friendships and other relationships in autistic adolescents. Talk at The Love Consortium, Chapel Hill, NC. 
                    <a href="https://ewingard.xyz/projects/media/B-RAD/CharacterizingFriendships.pdf" target="_blank">PDF <i class="fa-solid fa-file-powerpoint" alt="powerpoint icon"></i></a>
                </p></br>
                <p>
                    McCune, M., Turner, B., Vidal, L., Nelson, C.M., <strong>Wingard, E.M.,</strong> & Hudac, C.M. (2024, April). The Adolescent Brain: Quantifying the Relationship Between Social Awareness and Perception of Upright and Inverted Faces. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/r15faces_discoversc_poster_finalversion.pdf" target="_blank">Presented at DiscoverUSC, Columbia, SC.</a> <a href="/assets/media/experience/SocialAwareness_McCune.pdf" target="_blank"> PDF <i class="fa-solid fa-file-powerpoint" alt="powerpoint icon"></i></a>
                </p></br>
                <p>
                    Khan, M., Patel, M., Tuppale, B., <strong>Wingard, E.M.,</strong> Nelson, C.M., & Hudac, C.M. (2024, April). The Effect of Sleep Quality as Measured by Couple’s Sleep Performance in Charades. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/lovebrain_charades_discoversc_poster_finalversion.pdf" target="_blank">Presented at DiscoverUSC.</a> <a href="/assets/media/experience/SleepQuality_Kha.pdf" target="_blank"> PDF <i class="fa-solid fa-file-powerpoint" alt="powerpoint icon"></i></a>
                </p>
                `
            },

            {
                number: 6,

                type: "text",

                label: "Research",

                title: "2024",

                content: `
                <p>
                <strong>Wingard, E.M.,</strong> Cheever, A. (2024). Importance of Inclusion in Science. <a href="https://www.b-radlab.com/happenings/importance-of-inclusion-in-science" target="_blank">B-RAD lab article. <i class="fa-regular fa-file"></i></a> 
                </p></br>
                <p>
                Hersey, J., Morgan, A., Cheever, A., Nelson, C.M., <strong>Wingard, E.M.</strong>, & Hudac, C.M. (2024, April).
                Exploring Nonverbal Communication Differences Among Individuals in Romantic Partnerships: A Neuroscientific Perspective.
                <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/lovebrain_nv_discoverscposter_finalversion.pdf">Award winning poster presented at DiscoverUSC, Columbia, SC.</a> 
                | <a href="/assets/media/experience/LoveBrain_HerseyMorgan.pdf" target="_blank"> PDF <i class="fa-solid fa-file-image" alt="image file icon"></i></a>
                </p></br>
                <p>
                    Johnson, M., <strong>Wingard, E.M.,</strong> Nelson, C.M., & Hudac, C.M. (2024, April). Do I Know You? Brain Responses to Familiar and AI-Generated Faces. <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/sans_size_ch.pdf" target="_blank">Presented at DiscoverUSC, Columbia, SC; Social & Affective Neuroscience Society annual meeting, Toronto, Canada.</a>
                    <a href="/assets/media/experience/FamiliarAIFaces_Johnson.pdf" target="_blank"> PDF <i class="fa-solid fa-file-image" alt="image file icon"></i></a>
                </p>
                `

            },

            {
                number: 7,

                type: "text",

                label: "Research",

                title: "2023",

                content: `
                <p>Wingard, E.M. (2023, April). The Impact of Biases in Facial Recognition Artificial Neural Networks: Towards a More Ethical AI Past, Present, and Future. <a href="media/Thesis/QUEST-WebsiteCopy.pdf" target="_blank">Presentation <i class="fa-solid fa-file-powerpoint"></i></a>
                </p></br>
                <p>
                Wingard, E.M. (2023, May). The Impact of Biases in Facial Recognition Artificial Neural Networks. <a href="https://www.illuminatenrhc.com/post/the-impact-of-biases-in-facial-recognition-artificial-neural-networks-by-ezra-wingard\" target="_blank">Illuminate NRHC, 5, 25-32.</a>
                | <a href="/assets/media/experience/HonorsThesis_Publication_Website.pdf" target="_blank"> PDF <i class="fa-solid fa-file-lines" alt="document icon"></i></a> | <a href="media/Thesis/HonorsThesis-Poster-Graph.pdf" target="_blank">Poster <i class="fa-solid fa-file-image"></i></a> | <a href="https://github.com/ewingard/HonorsThesis" target="_blank">Code <i class="fa-solid fa-laptop-code"></i></a>
                </p></br>
                <p>Wingard, E.M. (2023, April). French Polynesia: Flora and Fauna. Presented at Quest Week, Oswego, NY. <a href="https://ewingard.xyz/projects/media/French/French-Polynesia.pdf" target="_blank">Presentation <i class="fa-solid fa-file-powerpoint"></i></a>
                </p>
                `
            },

            {
                number: 8,

                type: "text",

                label: "Research",

                title: "2021",

                content:`
                <p>
                    Dykas, M.,<strong>Wingard, E.M.</strong> (2021, April). Does Making Narcissists ‘Feel Bad’ Make Them Want to Be Better People? Presented at Quest Week, Oswego, NY.
                    <a href="https://ewingard.xyz/projects/media/Narcissism/Narcissism-DykasEMW.png" target="_blank">Poster <i class="fa-solid fa-file-image"></i></a>
                </p>`

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
                number: 1,

                label: "Background",

                title: "Aphantasia",

                content: `<p>
                Aphantasia, or the inability to visualize experiences in the mind. Ranging from Aphantasia to Hyperphantasia, 'visual' imagery affected includes the major senses:
                visual, tactile, olfactory, gustatory, and auditory.
                </p>`
            },

            {
                number: 2,

                label: "Background",

                title: "Aphantasia",

                content: `<p>
                Aphantasia is a relatively <a href="https://pubmed.ncbi.nlm.nih.gov/26115582/" target="_blank">newly named</a> condition which describes the lack of mental imagery in the mind.
                It exists on a scale from no mental imagery (aphantasia) to extremely vivid mental imagery (hyperphantasia), which for visual imagery can be quantified through a test called the <a href="VVIQ">VVIQ</a>, or Vividness of Visual Imagery Questionnaire.
                There is also the <a href="https://pubmed.ncbi.nlm.nih.gov/6082130/" target="_blank">QMI</a>, or Questionnaire of Visual Imagery, which encompasses all mental imagery, not just visual imagery.
                </p></br>
                <p> Within aphantasic individuals (people with aphantasia), there are levels of inability to evoke mental imagery. This spectrum is typically demonstrated as a scale of 1-5, with 1-2 being varying degrees of aphantasia, 3 being "normal", and 4-5 including degrees of hyperphantasia.
                </p>`
            },

            {
                number: 3,

                label: "Background",

                title: "Embodied Cognition",

                content: `<p>
                Embodied Cognition is broadly defined as how the body and capacities of an organism (ex. human) shapes cognition. Embodiment can encompass the motor system, perceptual/sensory systems, how the body
                interacts with the environment, and assumptions about the world shaping the organism's function.
                </p></br>
                <p>
                    One example of embodied cognition is cell-phone use: If you have ever considered your phone an extension of yourself 
                    (like how we use our calendar, tasks/notes app, and other apps to offload cognition), this demonstrates a core principle of your phone being a
                    mechanism for <i>embodied cognition</i>.
                </p>`
            },

            {
                number: 4,

                label: "Capstone",

                title: "The Relationship Between Embodied Cognition and Aphantasia",

                content: `<p>
                Embodied Cognition is broadly defined as how the body and capacities of an organism (ex. human) shapes cognition. Embodiment can encompass the motor system, perceptual/sensory systems, how the body
                interacts with the environment, and assumptions about the world shaping the organism's function.
                </p></br>
                <p>
                    One example of embodied cognition is cell-phone use: If you have ever considered your phone an extension of yourself 
                    (like how we use our calendar, tasks/notes app, and other apps to offload cognition), this demonstrates a core principle of your phone being a
                    mechanism for <i>embodied cognition</i>.
                    <a href="media/Aphantasia/Aphantasia-EC-CapstoneSlides.pdf" target="_blank">Presentation <i class="fa-solid fa-file-powerpoint"></i></a> | <a href="media/Aphantasia/RelationshipBtwnAphantasia+EC-CapstonePaper.pdf" target="_blank">Paper 
                        <i class="fa-solid fa-file-lines"></i></a>
                </p>`
            },

            {
                number: 5,

                label: "Volunteer Research",

                title: "Mental Rotation",

                content: `<p>
                    The study that I worked on with Dr. Theo Rhodes and Dr. Sien Hu at SUNY Oswego sought to answer the questions:
                    <ol>
                        <li>Is there a difference on a mental rotation task in those with aphantasia versus those without aphantasia?</li>
                        <li>How can we use the differences on a mental rotation task in the aphantasic versus non aphantasic population in order to learn more about the mental processes and behaviors associated with the condition?</li>
                    </p>`
            },

            {
                number: 6,

                label: "Volunteer Research",

                title: "Mental Rotation",

                content: `<p>In order to test this, we conducted a preliminary study during 2021 using the <a href="https://www.urmc.rochester.edu/del-monte-neuroscience/ur-cabin/mri.aspx" target="_blank">CABIN 3-T fMRI</a> at the University of Rochester.
                        We sought to understand the neuroanatomical differences between aphantasic and non-aphantasic individuals, as well as cognitive processing for the brains during the mental rotation task.
                        A manuscript for publication is currently in preparation containing the results. Four adults with self-reported aphantasia and six adults without aphantasia participated in this study.
                </p>`
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

                title: "AI Bias & Facial Recognition",

                content: `
                    <p> In the field of artificial intelligence, the topic of neural network prejudice and bias is becoming more well-known by the day.
                    More instances of unethical AI practices have been documented by the <a href="https://www.aiaaic.org/aiaaic-repository" target="_blank">AIAAIC database</a>, with instances branching outside of the scope of this project.</a>
                    </p>
                    <p> Facial recognition software (commercial use or not) can be deeply flawed in accuracy and equity depending on gender and racial features.
                    Some studies show that facial recognition and automatic gender recognition (AGR) technology’s accuracy rates are significantly worse on <a href="https://www.media.mit.edu/projects/gender-shades/overview/" target="_blank">Black women</a> and <a href="https://www.morgan-klaus.com/pdfs/pubs/Scheuerman-CSCW2019-HowComputersSeeGender.pdf" target="_blank"> transgender people.
                    </p>
                `
            },

            {
                number: "4",

                label: "Introduction",

                title: "Terminology",

                content: `
                <p><ul>
                <li><i>Gender Modality</i>: Adherence (or not) between gender identity and sex assigned at birth. <strong>Terms used:</strong></li>
                    <ul>
                        <li>Transgender</li>
                        <li>Cisgender</li>
                    </ul>
                <li><i>Gender Identity</i>: One's personal sense of gender. May or may not correspond with <i>gender modality</i>. <strong>Terms used:</strong>
                    <ul>
                        <li>Man</li>
                        <li>Woman</li>
                    </ul>
                <li><i>Convolutional Neural Network</i>: a neural network using the mathematical process of <i>convolution</i> to process and predict data. Good for
                <i>computer vision</i> data.</li>
                <li><i>Computer Vision</i>: processing and extraction of digital images.</li>
                </ul>
                </p>`
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

                title: "Overall Accuracy per Model",

                content: `
                    <div class="project-chart-container">
                        <canvas
                            id="honors-thesis"
                            class="project-chart"
                            data-chart="honors-thesis"
                            aria-label="Honors thesis accuracy results chart">
                        </canvas>
                    </div>
                `
            },

                        {
                number: "9",

                label: "Results",

                title: "FairFace Results",

                content: `
                    <p>
                        FairFace, the model trained on balanced data, did substantially better on accuracy
                        rates overall than the unbalanced model (IRNv1). Using a balanced dataset may help
                        alleviate model bias.
                    </p>

                    <div class="project-chart-container" id="ff-chart">
                        <canvas
                            class="project-chart"
                            data-chart="fairface-results"
                            aria-label="FairFace accuracy results chart">
                        </canvas>
                    </div>
                `
            },

            {
                number: "10",

                label: "Results",

                title: "IRNv1 Results",

                content: `
                    <p>
                        The IRNv1 model performed worse overall, across all conditions.
                        This model also had the only accuracy rates that were worse than chance,
                        on transgender men's faces (gender modality x gender identity).
                    </p>

                    <div class="project-chart-container" id="irnv1-chart">
                        <canvas
                            class="project-chart"
                            data-chart="irnv1-results"
                            aria-label="IRNv1 accuracy results chart">
                        </canvas>
                    </div>
                `
            },

            {
                number: "11",

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
                number: "12",

                label: "Further Information",

                title: "Data Privacy Notice",

                content: `
                <p> The datasets scraped during this project will not be shared due to privacy reasons. Transgender people are an at-risk group due to political persecution. There are ethical concerns about
                datasets on transgender individuals being made public. The full methodology is available in my <a href="/assets/media/experience/HonorsThesis_Publication_Website.pdf">thesis</a> for dataset replication.
                </p>
                <p>Results from my thesis (<i>overall accuracy, model-specific results</i>) and R code are available on <a href="https://github.com/ewingard/HonorsThesis/tree/f4507b5205a19ccb8a717372d3aefb9ccb4a8f7f/RFiles">GitHub <i class="fa-solid fa-laptop-code"></i></a>
                </p>
                `
            },

            {
                number: "13",

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

        decoration: "ornament",

        pages: [
            {
                number: 1,

                label: "Background",

                title: "General Overview",

                content: `<p>As of July 2023, I have been volunteering with Dr. <a href="https://sc.edu/study/colleges_schools/artsandsciences/psychology/our_people/directory/brown_michelle.php" target="_blank">Michelle Brown</a>, the (PI of <a href="https://starr-lab.com/" target="_blank">STARR Lab</a>) at the University of South Carolina.
                I am assisting with the publication process from manuscript preparation, results refining, and miscellaneous processes to speed along the publication process.
                These two papers (in prep., 2024) focus on childhood maltreatment using two prospective longitudinal studies, known as the Female Adolescent Developmental Survey (FADS) and the Longitudinal Studies of Childhood Adolescent Neglect (LONGSCAN).
                </p>
                <p> Friendships and social connections are a major part of adolescence. In this project, Dr. Michelle Brown and co-authors sought to look at potential effects of how friendships may moderate the impact of childhood maltreatment in adolescent populations. 
                </p>`
            },

            {
                number: 2,

                label: "Updates",

                title: "Publications",

                content: `<p>As of November, 2024 there are two papers in preparation to look at two major datasets from prospective longitudinal studies (<a href="https://publications.aap.org/pediatrics/article-abstract/131/2/e510/31865/Association-of-Maltreatment-With-High-Risk?redirectedFrom=fulltext" target="_blank">FADS</a> and <a href="https://www.sciencedirect.com/science/article/abs/pii/S0145213420304518" target="_blank">LONGSCAN</a>).
                </p>
                <p> In February 2026, the first manuscript on the FADS dataset was submitted for publication at the <i>Journal of Research on Adolescence</i>. The submission was rejected in June 2026.
                </p>`
            }
        ]

    },

    {
        id: "eeg",

        title: "EEG",

        shelf: 1,

        color: "#195762",

        accent: "#d4b86a",

        width: 50,

        height: 290,

        pages: [
            {
                number: 1,

                label: "Background",

                title: "What is EEG?",

                content: `<p>Electroencephalography (EEG) is a neuroimaging method to record the electrical activity (signals) coming from the brain.<br>
                    The B-RAD Lab uses a special type of <a href="https://www.b-radlab.com/what-is-eeg.html" target="_blank">EEG</a> Net that is more flexible than a Gel net. This specific EEG Net is used to better accomodate our participants.
                    This includes participants such as:
                        <ul>
                            <li>People with various hair types and textures, including <a href="https://www.sciencenews.org/article/electrodes-brain-waves-eeg-black-african-american-natural-hair" target="_blank">Afro-Textured hair</a>, <a href="https://www.youtube.com/watch?v=vG3y0mwA3_g" target="_blank">Protective Styles</a>, and <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1111/psyp.14499" target="_blank">Curly/Coily Hair Types</a></li>
                            <li>People who are historically <a href="https://www.nature.com/articles/s41593-022-01046-0" target="_blank">underrepresented</a> in <a href="https://www.nature.com/articles/s41539-024-00240-y" target="_blank">STEM</a> and <a href="https://link.springer.com/article/10.1007/s42761-021-00050-0" target="_blank">research</a></li>
                            <li>Autistic participants and individuals with sensory sensitivities</li>    
                </ul></p>`
            },

            {
                number: 2,

                label: "Research Project",

                title: "Social Connection and Well-Being Study (SCWB)",

                content: `<p>
                This study is an NIH R01-funded research project (PI: Caitlin Hudac, <a href="https://www.b-radlab.com/" target="_blank">B-RAD Lab</a>) focusing on adolescents.
                The main research questions:
                <ol>
                    <li>How does the reciprocity social connection and well-being change in the short-term (daily)?</li>
                    <li>How does the reciprocity of social connection and well-being change in the longer-term (months - 1 year)</li>
                    <li>How do behaviors and neurobiological markers link the associations between social connection and well-being?</li>
                </ol>
                </p>`
            },

            {
                number: 3,

                label: "SCWB",

                title: "Presentations",

                content: `
                <p>In April 2025, I was able to attend the international <a href="https://socialaffectiveneuro.org/" target="_blank">Social Affective Neuroscience Society</a> conference and present on preliminary results from the <a href="/projects/media/B-RAD/SCWB/Wingard_SANS_Final.pdf" target="_blank"> FortuneTeller Task</a> for the Social Connection and Well-Being Study. You can find a quiz that I created modeled after said task <a href="/projects/fortuneteller-quiz/" target="_blank">here</a> to see what your fortune may be!
                </p>
                <p>Our undergraduate interns also completed two posters in April using preliminary data from this task, relating to <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/discoverusc_fortuneteller-ntbs.pdf" target="_blank">Social Motivation</a> and <a href="https://www.b-radlab.com/uploads/1/4/2/0/142020983/discoverusc_fortuneteller-anxiety.pdf" target="_blank">Anxiety</a>.
                </p>`
            },

            {
                number: 5,

                label: "B-RAD Lab",

                title: "Lab Role",

                content: `<p>I joined the Brain Research Across Development (<a href="https://www.b-radlab.com/">B-RAD</a>) Lab in February of 2024. Since then, I have taken on the lead role as Research Assistant for the SCWB Study, as well as minor roles including (but not limited to):
                <ul>
                    <li>Lending assistance with the <a href="https://www.b-radlab.com/bbad-study.html" target="_blank">BBAD</a>, <a href="https://www.b-radlab.com/autfriends.html" target="_blank">Autistic Friendships</a>, <a href="https://www.b-radlab.com/tbd-study.html" target="_blank">Teen Brain Decision</a> and <a href="https://www.b-radlab.com/mind-matters.html" target="_blank">Mind Matters</a> Studies</li>
                    <li>Collaborations with the <a href="https://starr-lab.com/summer-camp" target="_blank">STARR Lab</a> to host a psychology research summer camp</li>
                    <li>Standing in as co-lab manager and mentoring 6-12 interns per semester</li>
                    <li>Co-Author on <a href="https://www.b-radlab.com/posters.html" target="_blank">9</a> posters across 2 years</li>
                    <li>Co-Authored an article on inclusive neuroscience practices for gender diversity.</li>
                    <!--<li>Co-Author and first author in XX <a href="https://www.b-radlab.com/publications.html">publications</a></li>-->
                </ul></p>`
            }
        ]
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

                label: "Background",

                title: "Lesson Planning",

                content: ` <p>
                    The Creative Writing and Art Camp hosted by the <a href="http://www.newbethelfoundation.org/board-members/">New Bethel Foundation</a> was held from July 22 to July 25th, 2024
                    and focused on providing an enriching art education and outlet for local youth during the summer.
                </p></br>
                <p>
                    Educational topics covered included:</br>
                     <ol>
                            <li><a href="/projects/media/ArtCamp/Shading-Values.pdf" target="_blank">Shading and Values</a></li>
                            <li><a href="/projects/media/ArtCamp/Textures-Patterns.pdf" target="_blank">Textures and Patterns</a></li>
                            <li><a href="/projects/media/ArtCamp/ColorTheory.pdf" target="_blank">Color Theory</a></li>
                            <li>Composition and Project Drafting</li>
                    </ol>
                </p>
                <p>
                The art camp lasted for one week and students completed worksheets on shading and values, textures and patterns,
                color theory, and composition.</p>`
            },

            {
                number: 2,

                label: "Output",

                title: "Art Gallery",

                content: `
                <p>Students created multiple paintings on their worksheets and
                also completed 2 structured assignments with paints on color theory and composition. Throughout the camp,
                they were also allowed to complete various mini art projects as they wanted, to provide a creative outlet with
                the ability to ask questions to me and my co-instructor.</p>
                </br>
                <p>I have around 50 works of art on display in an art gallery, where you can scroll through and view samples of artwork
                created either through assignments or personal creativity.</p></br>
                <p><a href="/projects/art-camp/">View the Art Gallery <i class="fa-solid fa-file-lines"></i></a></p>`

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

        title: "Researcher Mentorship",

        shelf: 1,

        color: "#853953",

        accent: "#d0b56d",

        decoration: "ornament",

        rotation: "1deg",

        width: 35,

        height: 273,

    },

    {
        id: "",

        title: "HiTOP",

        color: "#8a475c",

        accent: "#d0b56d",

        decoration: "panel",

        rotation: "-.5deg",

        width: 30,

        height: 200,

        pages: [
            {
                number: 1,

                label: "Background",

                title: "What is HiTOP?",

                content: `<p>
                The Hierarchical Taxonomy of Psychopathology, or, <a href="https://renaissance.stonybrookmedicine.edu/HITOP" target="_blank">HiTOP</a> is an alternative classification system for psychopathology and mental health conditions.
                Thought of as somewhat of an alternative to the DSM (due to organizational differences), HiTOP has restructured some of the ways that psychopathology is organized in Western medicine.
                HiTOP uses and builds upon pre-existing data and literature about psychopatology and mental health, and seeks to bring greater clarity and organization to the classification systems already in place.
                </p>`
            }
        ]
    }

];

/*
=====================================================
CHARTS
=====================================================
*/

/*
    Prevents the same canvas from being initialized
    more than once.
*/
function isChartInitialized(canvas) {

    return canvas.dataset.chartInitialized === "true";

}


/*
    Mark a canvas as initialized.
*/
function markChartInitialized(canvas) {

    canvas.dataset.chartInitialized = "true";

}


/*
=====================================================
LOAD HONORS THESIS CSV
=====================================================

All three charts use the same CSV.

Expected format:

model,testSet,genderID,accuracy

FF,cis,man,87.5
FF,trans,man,65.2
FF,cis,woman,91.4
FF,trans,woman,82.1
IRNv1,cis,man,72.3
...
=====================================================
*/

async function loadHonorsThesisData() {

    let response;

    try {

        response = await fetch(
            "/assets/media/accuracy.csv",
            {
                cache: "no-cache"
            }
        );

    } catch (error) {

        console.error(
            "Honors Thesis chart: failed to fetch accuracy.csv.",
            error
        );

        return null;
    }


    if (!response.ok) {

        console.error(
            `Honors Thesis chart: accuracy.csv returned HTTP ${response.status}.`
        );

        return null;
    }


    const csv = await response.text();


    const rows = csv
        .trim()
        .split(/\r?\n/)
        .slice(1)
        .map(row => {

            const values =
                row.split(",").map(
                    value => value.trim()
                );

            const [
                model,
                testSet,
                genderID,
                accuracy
            ] = values;

            return {

                model,

                testSet,

                genderID,

                accuracy:
                    Number(accuracy)

            };

        })
        .filter(row =>
            row.model &&
            row.testSet &&
            row.genderID &&
            Number.isFinite(row.accuracy)
        );


    if (!rows.length) {

        console.error(
            "Honors Thesis chart: no valid rows were found in accuracy.csv."
        );

        return null;
    }


    return rows;

}


/*
=====================================================
DATA LOOKUP
=====================================================
*/

function getAccuracy(
    rows,
    model,
    testSet,
    genderID
) {

    const row = rows.find(
        row =>
            row.model === model &&
            row.testSet === testSet &&
            row.genderID === genderID
    );


    return row
        ? row.accuracy
        : null;

}


/*
=====================================================
CHART PLUGINS
=====================================================

Shared plugins used by all three charts.
=====================================================
*/


/*
-----------------------------------------------------
Chance line
-----------------------------------------------------
*/

const honorsThesisChanceLine = {

    id: "chanceLine",

    afterDraw(chart) {

        const {
            ctx,
            chartArea,
            scales
        } = chart;


        if (
            !chartArea ||
            !scales.y
        ) {
            return;
        }


        const y =
            scales.y.getPixelForValue(50);


        ctx.save();


        ctx.beginPath();


        ctx.setLineDash(
            [2, 3]
        );


        ctx.moveTo(
            chartArea.left,
            y
        );


        ctx.lineTo(
            chartArea.right,
            y
        );


        ctx.strokeStyle =
            "#333";


        ctx.lineWidth = 1;


        ctx.stroke();


        ctx.restore();

    }

};


/*
-----------------------------------------------------
Bar value labels
-----------------------------------------------------
*/

const honorsThesisBarLabels = {

    id: "barLabels",

    afterDatasetsDraw(chart) {

        const {
            ctx
        } = chart;


        chart.data.datasets.forEach(
            (dataset, datasetIndex) => {

                const meta =
                    chart.getDatasetMeta(
                        datasetIndex
                    );


                meta.data.forEach(
                    (bar, index) => {

                        const value =
                            dataset.data[index];


                        if (
                            value == null ||
                            !bar
                        ) {
                            return;
                        }


                        ctx.save();


                        ctx.fillStyle =
                            "black";


                        ctx.font =
                            "bold 9px Noto Sans";


                        ctx.textAlign =
                            "center";


                        ctx.textBaseline =
                            "middle";


                        ctx.fillText(

                            Number(value)
                                .toFixed(1),

                            bar.x,

                            bar.y + 10

                        );


                        ctx.restore();

                    }
                );

            }
        );

    }

};

// ============================================================
// PUBLICATION CHARTS
// ============================================================

/*
=====================================================
LOAD PUBLICATIONS CSV
=====================================================

Expected CSV format:

Year,Month,Type,AuthorLvl,Title,Journal,Conference,Location,Note

Example:

2026,4,Presentation,1,Beyond the Black Box,...,...
2025,4,Presentation,2,Is Friendship in the Cards?,...
2023,5,Publication,1,The Impact of Biases...,...
=====================================================
*/

async function loadPublicationsData() {

    let response;


    try {

        response = await fetch(
            "/assets/media/publications.csv",
            {
                cache: "no-cache"
            }
        );

    } catch (error) {

        console.error(
            "Publications chart: failed to fetch publications.csv.",
            error
        );

        return null;

    }


    if (!response.ok) {

        console.error(
            `Publications chart: publications.csv returned HTTP ${response.status}.`
        );

        return null;

    }


    const csv =
        await response.text();


    const rows =
        csv
            .trim()
            .split(/\r?\n/)
            .slice(1)
            .map(row => {

                const values =
                    row.split(",").map(
                        value => value.trim()
                    );


                const [
                    year,
                    month,
                    type,
                    authorLvl,
                    role,
                    title,
                    journal,
                    conference,
                    location
                ] = values;


                return {

                    year:
                        Number(year),

                    month:
                        Number(month),

                    type:
                        type,

                    authorLvl:
                        Number(authorLvl),

                    role:
                        role,

                    title:
                        title,

                    journal:
                        journal,

                    conference:
                        conference,

                    location:
                        location

                };

            })
            .filter(row =>

                Number.isFinite(row.year) &&

                Number.isFinite(row.month) &&

                row.type &&

                Number.isFinite(row.authorLvl) &&

                row.role &&

                row.title

            );


    if (!rows.length) {

        console.error(
            "Publications chart: no valid rows were found in publications.csv."
        );

        return null;

    }


    return rows;

}


/*
=====================================================
PUBLICATION TYPE CHART
=====================================================

Creates a stacked bar chart showing the number of
research outputs by year and output type.

HTML:

data-chart="publications"
id="publicationTypeChart"
=====================================================
*/

async function createPublicationTypeChart(canvas) {

    if (!canvas) {
        console.warn(
            "Publications chart: type chart canvas was not found."
        );
        return;
    }

    if (isChartInitialized(canvas)) {
        return;
    }

    if (typeof Chart === "undefined") {
        console.error(
            "Publications chart: Chart.js is not loaded."
        );
        return;
    }

    markChartInitialized(canvas);

    const publications =
        await loadPublicationsData();

    if (!publications) {
        canvas.dataset.chartInitialized = "false";
        return;
    }

    const existingChart =
        Chart.getChart(canvas);

    if (existingChart) {
        existingChart.destroy();
    }


    /*
    -------------------------------------------------
    Count publications by type
    -------------------------------------------------
    */

    const typeCounts = {};

    publications.forEach(publication => {

        const type = publication.type;

        typeCounts[type] =
            (typeCounts[type] || 0) + 1;

    });


    const types =
        Object.keys(typeCounts);


    /*
    -------------------------------------------------
    Colors
    -------------------------------------------------
    */

    const colors = {

        Publication:
            "#cd5f66",

        Presentation:
            "#e2738c",

        Poster:
            "#ffa67c",

        Blog:
            "#f5e1a2"

    };


    const backgroundColors =
        types.map(type =>
            colors[type] || "#888888"
        );


    /*
    -------------------------------------------------
    Create donut chart
    -------------------------------------------------
    */

    new Chart(canvas, {

        type: "doughnut",

        data: {

            labels:
                types,

            datasets: [

                {

                    data:
                        types.map(
                            type =>
                                typeCounts[type]
                        ),

                    backgroundColor:
                        backgroundColors,

                    borderColor:
                        "#af474e",

                    borderWidth:
                        1

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            cutout: "60%",


            layout: {

                padding: 5

            },


            plugins: {

                /*
                -------------------------------------
                Remove legend
                -------------------------------------
                */


                legend: {

                    display: false

                },


                /*
                -------------------------------------
                Tooltip
                -------------------------------------
                */

                tooltip: {

                    callbacks: {

                        label(context) {

                            return (
                                `${context.label}: ` +
                                `${context.raw}`
                            );

                        }

                    }

                }

            }

        },


        plugins: [

        //     /*
        //     -----------------------------------------
        //     Donut labels
        //     -----------------------------------------
        //     */

        //     {

        //         id: "publicationTypeLabels",

        //         afterDraw(chart) {

        //             const {
        //                 ctx
        //             } = chart;

        //             const dataset =
        //                 chart.data.datasets[0];

        //             const meta =
        //                 chart.getDatasetMeta(0);


        //             ctx.save();


        //             ctx.font =
        //                 "bold 8px Noto Sans";

        //             ctx.fillStyle =
        //                 "#222";

        //             ctx.textAlign =
        //                 "center";

        //             ctx.textBaseline =
        //                 "middle";


        //             meta.data.forEach(
        //                 (arc, index) => {

        //                     const value =
        //                         dataset.data[index];

        //                     if (
        //                         value == null ||
        //                         value === 0
        //                     ) {
        //                         return;
        //                     }


        //                     const position =
        //                         arc.tooltipPosition();


        //                     ctx.fillText(

        //                         `${chart.data.labels[index]}: ${value}`,

        //                         position.x,

        //                         position.y

        //                     );

        //                 }
        //             );


        //             ctx.restore();

        //         }

        //     }

            ]

    });

}

/*
=====================================================
PUBLICATIONS BY YEAR CHART
=====================================================

Creates a line chart showing research outputs
by year.

=====================================================
*/


async function createPublicationsByYearChart(canvas) {

    if (!canvas) {

        console.warn(
            "Publications chart: author/year chart canvas was not found."
        );

        return;
    }


    if (isChartInitialized(canvas)) {
        return;
    }


    if (typeof Chart === "undefined") {

        console.error(
            "Publications chart: Chart.js is not loaded."
        );

        return;
    }


    markChartInitialized(canvas);


    /*
    -------------------------------------------------
    Load publication data
    -------------------------------------------------
    */

    const publications =
        await loadPublicationsData();


    if (!publications) {

        canvas.dataset.chartInitialized =
            "false";

        return;
    }


    /*
    -------------------------------------------------
    Destroy existing chart
    -------------------------------------------------
    */

    const existingChart =
        Chart.getChart(canvas);


    if (existingChart) {
        existingChart.destroy();
    }


    /*
    -------------------------------------------------
    Count publications by year
    -------------------------------------------------
    */

    const yearCounts = {};

    publications.forEach(publication => {

        const year =
            publication.year;

        yearCounts[year] =
            (yearCounts[year] || 0) + 1;

    });


    /*
    -------------------------------------------------
    Get sorted years
    -------------------------------------------------
    */

    const years =
        Object.keys(yearCounts)
            .map(Number)
            .sort(
                (a, b) => a - b
            );


    /*
    -------------------------------------------------
    Create line chart
    -------------------------------------------------
    */

    new Chart(canvas, {

        type: "line",


        data: {

            labels:
                years,

            datasets: [

                {

                    label:
                        "Publications",

                    data:
                        years.map(
                            year =>
                                yearCounts[year]
                        ),

                    borderColor:
                        "#a38b1f",

                    backgroundColor:
                        "#e2d69f",

                    borderWidth:
                        1,

                    pointBackgroundColor:
                        "#a38b1f",

                    pointBorderColor:
                        "#a38b1f",

                    pointRadius:
                        2,

                    pointHoverRadius:
                        4,

                    tension:
                        0.25,

                    fill:
                        true

                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            layout: {

                padding: {

                    top: 8,

                    right: 5,

                    left: 5,

                    bottom: 2

                }

            },


            scales: {

                x: {

                    title: {

                        display: false

                    },

                    grid: {

                        display: false

                    },

                    ticks: {

                        color:
                            "#666",

                        font: {

                            size: 8

                        }

                    }

                },


                y: {

                    beginAtZero:
                        true,

                    ticks: {

                        stepSize:
                            1,

                        precision:
                            0,

                        color:
                            "#666",

                        font: {

                            size: 8

                        }

                    },

                    title: {

                        display: false

                    },

                    grid: {

                        color:
                            "#dddddd"

                    }

                }

            },


            plugins: {

                /*
                -------------------------------------
                No legend
                -------------------------------------
                */

                legend: {

                    display: false

                },


                tooltip: {

                    callbacks: {

                        label(context) {

                            return (
                                `Publications: ${context.raw}`
                            );

                        }

                    }

                }

            }

        }

    });

}

/*
=====================================================
PUBLICATION ROLE CHART
=====================================================

Instead of author level, uses "role"

Roles:

    First Author
    Co-Author
    Mentor
    Research Assistant

The chart uses stacked bars so that:

    - Total bar height = total outputs that year
    - Bar segments = role in those outputs

HTML:

data-chart="publication-role"
id="publicationRoleChart"
=====================================================
*/

async function createPublicationRoleChart(canvas) {

    if (!canvas) {

        console.warn(
            "Publications chart: role chart canvas was not found."
        );

        return;
    }


    if (isChartInitialized(canvas)) {
        return;
    }


    if (typeof Chart === "undefined") {

        console.error(
            "Publications chart: Chart.js is not loaded."
        );

        return;
    }


    markChartInitialized(canvas);


    /*
    -------------------------------------------------
    Load publication data
    -------------------------------------------------
    */

    const publications =
        await loadPublicationsData();


    if (!publications) {

        canvas.dataset.chartInitialized =
            "false";

        return;

    }


    /*
    -------------------------------------------------
    Destroy existing Chart.js instance
    -------------------------------------------------
    */

    const existingChart =
        Chart.getChart(canvas);

    if (existingChart) {
        existingChart.destroy();
    }


    /*
    -------------------------------------------------
    Get years
    -------------------------------------------------
    */

    const years = [
        ...new Set(
            publications.map(
                publication =>
                    publication.year
            )
        )
    ].sort(
        (a, b) => a - b
    );


    /*
    -------------------------------------------------
    Roles
    -------------------------------------------------

    Explicit order keeps the chart meaningful:
    most independent role first.
    -------------------------------------------------
    */

    const roles = [

        "First Author",

        "Co-Author",

        "Mentor",

        "Research Assistant"

    ];


    /*
    -------------------------------------------------
    Role colors
    -------------------------------------------------
    */

    const colors = {

        "First Author":
            "#2f8a58",

        "Co-Author":
            "#2d7388",

        "Mentor":
            "#323f8b",

        "Research Assistant":
            "#7a2e91"

    };

    /*
    -------------------------------------------------
    Build datasets
    -------------------------------------------------
    */

    const datasets =
        roles
            .map(role => {

                return {

                    label:
                        role,

                    data:
                        years.map(year =>

                            publications.filter(
                                publication =>

                                    publication.year ===
                                        year &&

                                    publication.role ===
                                        role

                            ).length

                        ),

                    backgroundColor:
                        colors[role],

                    borderColor:
                        "#0f0958",

                    borderWidth:
                        1,

                    stack:
                        "roles"

                };

            })
            /*
            Remove roles that never occur in the
            dataset so the chart stays clean.
            */
            .filter(dataset =>

                dataset.data.some(
                    value => value > 0
                )

            );


    /*
    -------------------------------------------------
    Create chart
    -------------------------------------------------
    */

    new Chart(canvas, {

        type:
            "bar",


        data: {

            labels:
                years,

            datasets:
                datasets

        },


        options: {

            responsive:
                true,

            maintainAspectRatio:
                false,


            layout: {

                padding: {

                    top: 10,

                    right: 5,

                    left: 5,

                    bottom: 5

                }

            },


            scales: {

                x: {

                    stacked:
                        true,

                    grid: {

                        display:
                            false

                    },

                    ticks: {

                        color:
                            "#666",

                        font: {

                            size:
                                9

                        }

                    },

                    title: {

                        display:
                            false

                    }

                },


                y: {

                    stacked:
                        true,

                    beginAtZero:
                        true,

                    suggestedMax:
                        5,

                    ticks: {

                        stepSize:
                            1,

                        precision:
                            0,

                        font: {

                            size:
                                9

                        },

                        color:
                            "#666"

                    },

                    title: {

                        display:
                            false

                    },

                    grid: {

                        color:
                            "#dddddd"

                    }

                }

            },


            plugins: {

                /*
                No legend — labels are provided directly
                inside the chart.
                */

                legend: {

                    display:
                        false

                },


                tooltip: {

                    callbacks: {

                        label(context) {

                            return (
                                `${context.dataset.label}: ` +
                                `${context.raw}`
                            );

                        }

                    }

                }

            }

        },


        plugins: [

            /*
            -------------------------------------------------
            Direct role labels
            -------------------------------------------------
            */

            {

                id:
                    "publicationRoleLabels",

                afterDatasetsDraw(chart) {

                    const {
                        ctx
                    } = chart;


                    chart.data.datasets.forEach(
                        (dataset, datasetIndex) => {

                            const meta =
                                chart.getDatasetMeta(
                                    datasetIndex
                                );


                            meta.data.forEach(
                                (bar, index) => {

                                    const value =
                                        dataset.data[index];


                                    /*
                                    Don't label zero
                                    values or very small
                                    segments.
                                    */

                                    if (
                                        !value ||
                                        value < 1
                                    ) {
                                        return;
                                    }


                                    const height =
                                        Math.abs(
                                            bar.base -
                                            bar.y
                                        );


                                    /*
                                    Only put text inside
                                    segments large enough
                                    to remain readable.
                                    */

                                    if (
                                        height < 14
                                    ) {
                                        return;
                                    }


                                    ctx.save();


                                    ctx.fillStyle =
                                        "#ffffff";


                                    ctx.font =
                                        "bold 7px Noto Sans";


                                    ctx.textAlign =
                                        "center";


                                    ctx.textBaseline =
                                        "middle";


                                    /*
                                    Use short labels to
                                    preserve space.
                                    */

                                    const shortRole = {

                                        "First Author":
                                            "First",

                                        "Co-Author":
                                            "Co",

                                        "Mentor":
                                            "Mentor",

                                        "Research Assistant":
                                            "RA"

                                    }[
                                        dataset.label
                                    ];


                                    ctx.fillText(

                                        shortRole,

                                        bar.x,

                                        (
                                            bar.y +
                                            bar.base
                                        ) / 2

                                    );


                                    ctx.restore();

                                }

                            );

                        }

                    );

                }

            },


            /*
            -------------------------------------------------
            Total labels
            -------------------------------------------------

            Shows total number of outputs above each
            year's bar.
            -------------------------------------------------
            */

            {

                id:
                    "publicationRoleTotals",

                afterDatasetsDraw(chart) {

                    const {
                        ctx,
                        chartArea
                    } = chart;


                    if (!chartArea) {
                        return;
                    }


                    chart.data.labels.forEach(
                        (year, index) => {

                            let total = 0;


                            chart.data.datasets.forEach(
                                dataset => {

                                    total +=
                                        Number(
                                            dataset.data[index] ||
                                            0
                                        );

                                }
                            );


                            if (!total) {
                                return;
                            }


                            /*
                            Find the highest bar
                            segment.
                            */

                            const meta =
                                chart.getDatasetMeta(
                                    chart.data.datasets.length - 1
                                );


                            const bar =
                                meta.data[index];


                            if (!bar) {
                                return;
                            }


                            ctx.save();


                            ctx.fillStyle =
                                "#222";


                            ctx.font =
                                "bold 8px Noto Sans";


                            ctx.textAlign =
                                "center";


                            ctx.textBaseline =
                                "bottom";


                            ctx.fillText(

                                total,

                                bar.x,

                                chart.getDatasetMeta(
                                    chart.data.datasets.length - 1
                                ).data[index].y - 3

                            );


                            ctx.restore();

                        }

                    );

                }

            }

        ]

    });

}

/*
=====================================================
PUBLICATION AUTHOR LEVEL CHART
=====================================================

Creates a stacked bar chart showing research outputs
by year and author level.

=====================================================
*/

// async function createPublicationAuthorLevelChart(canvas) {

//     if (!canvas) {

//         console.warn(
//             "Publications chart: author level canvas was not found."
//         );

//         return;
//     }


//     if (isChartInitialized(canvas)) {
//         return;
//     }


//     if (typeof Chart === "undefined") {

//         console.error(
//             "Publications chart: Chart.js is not loaded."
//         );

//         return;
//     }


//     markChartInitialized(canvas);


//     const publications =
//         await loadPublicationsData();


//     if (!publications) {

//         canvas.dataset.chartInitialized =
//             "false";

//         return;
//     }


//     const existingChart =
//         Chart.getChart(canvas);


//     if (existingChart) {
//         existingChart.destroy();
//     }


//     /*
//     -------------------------------------------------
//     Get years
//     -------------------------------------------------
//     */

//     const years = [
//         ...new Set(
//             publications.map(
//                 publication =>
//                     publication.year
//             )
//         )
//     ].sort(
//         (a, b) => a - b
//     );


//     /*
//     -------------------------------------------------
//     Get author levels
//     -------------------------------------------------
//     */

//     const authorLevels = [
//         ...new Set(
//             publications.map(
//                 publication =>
//                     publication.authorLvl
//             )
//         )
//     ]
//         .filter(
//             level =>
//                 Number.isFinite(level)
//         )
//         .sort(
//             (a, b) => a - b
//         );


//     /*
//     -------------------------------------------------
//     Colors
//     -------------------------------------------------
//     */

//     const colors = [

//         "#4e79a7",

//         "#f28e2b",

//         "#59a14f",

//         "#e15759",

//         "#b07aa1",

//         "#76b7b2",

//         "#edc949"

//     ];


//     /*
//     -------------------------------------------------
//     Build datasets
//     -------------------------------------------------
//     */

//     const datasets =
//         authorLevels.map(
//             (level, index) => {

//                 const color =
//                     colors[
//                         index %
//                         colors.length
//                     ];


//                 return {

//                     label:
//                         `Level ${level}`,

//                     data:
//                         years.map(year =>

//                             publications.filter(
//                                 publication =>

//                                     publication.year ===
//                                         year &&

//                                     publication.authorLvl ===
//                                         level

//                             ).length

//                         ),

//                     backgroundColor:
//                         color,

//                     borderColor:
//                         color,

//                     borderWidth:
//                         1

//                 };

//             }
//         );


//     /*
//     -------------------------------------------------
//     Create compact chart
//     -------------------------------------------------
//     */

//     new Chart(canvas, {

//         type: "bar",


//         data: {

//             labels:
//                 years,

//             datasets:
//                 datasets

//         },


//         options: {

//             responsive: true,

//             maintainAspectRatio: false,


//             layout: {

//                 padding: {

//                     top: 8,

//                     right: 5,

//                     left: 5,

//                     bottom: 2

//                 }

//             },


//             scales: {

//                 x: {

//                     stacked: true,

//                     grid: {

//                         display: false

//                     },

//                     ticks: {

//                         color: "#666",

//                         font: {

//                             size: 8

//                         }

//                     },

//                     title: {

//                         display: false

//                     }

//                 },


//                 y: {

//                     stacked: true,

//                     beginAtZero: true,

//                     grid: {

//                         color: "#dddddd"

//                     },

//                     ticks: {

//                         /*
//                         No decimal points.
//                         */

//                         stepSize: 1,

//                         precision: 0,

//                         font: {

//                             size: 8

//                         },

//                         color: "#666"

//                     },

//                     title: {

//                         display: false

//                     }

//                 }

//             },


//             plugins: {

//                 /*
//                 -------------------------------------
//                 Remove legend
//                 -------------------------------------
//                 */

//                 legend: {

//                     display: false

//                 },


//                 tooltip: {

//                     callbacks: {

//                         label(context) {

//                             return (
//                                 `${context.dataset.label}: ` +
//                                 `${Math.round(context.raw)}`
//                             );

//                         }

//                     }

//                 }

//             }

//         }

//     });

// }

/*
=====================================================
HONORS THESIS CHART
=====================================================

This is your ORIGINAL overall chart.

It has intentionally been kept separate from the
model-specific charts below.
=====================================================
*/

async function createHonorsThesisChart(canvas) {

    if (!canvas) {

        console.warn(
            "Honors Thesis chart: canvas was not found."
        );

        return;
    }


    if (isChartInitialized(canvas)) {
        return;
    }


    if (typeof Chart === "undefined") {

        console.error(
            "Honors Thesis chart: Chart.js is not loaded."
        );

        return;
    }


    markChartInitialized(canvas);


    const rows =
        await loadHonorsThesisData();


    if (!rows) {

        canvas.dataset.chartInitialized =
            "false";

        return;
    }


    /*
    -------------------------------------------------
    Destroy an existing Chart.js instance
    -------------------------------------------------
    */

    const existingChart =
        Chart.getChart(canvas);

    if (existingChart) {
        existingChart.destroy();
    }


    /*
    -------------------------------------------------
    Create original overall chart
    -------------------------------------------------
    */

    new Chart(canvas, {

        type: "bar",

        data: {

            labels: [
                "cis",
                "trans",
                "cis",
                "trans"
            ],

            datasets: [

                {
                    label: "man",

                    data: [

                        getAccuracy(
                            rows,
                            "FF",
                            "cis",
                            "man"
                        ),

                        getAccuracy(
                            rows,
                            "FF",
                            "trans",
                            "man"
                        ),

                        getAccuracy(
                            rows,
                            "IRNv1",
                            "cis",
                            "man"
                        ),

                        getAccuracy(
                            rows,
                            "IRNv1",
                            "trans",
                            "man"
                        )

                    ],

                    backgroundColor:
                        "#4682B4",

                    borderWidth: 0,

                    categoryPercentage:
                        0.85,

                    barPercentage:
                        0.9
                },


                {
                    label: "woman",

                    data: [

                        getAccuracy(
                            rows,
                            "FF",
                            "cis",
                            "woman"
                        ),

                        getAccuracy(
                            rows,
                            "FF",
                            "trans",
                            "woman"
                        ),

                        getAccuracy(
                            rows,
                            "IRNv1",
                            "cis",
                            "woman"
                        ),

                        getAccuracy(
                            rows,
                            "IRNv1",
                            "trans",
                            "woman"
                        )

                    ],

                    backgroundColor:
                        "#F06B4F",

                    borderWidth: 0,

                    categoryPercentage:
                        0.85,

                    barPercentage:
                        0.9
                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            layout: {

                padding: {

                    top: 30,

                    right: 10,

                    left: 5,

                    bottom: 5

                }

            },


            scales: {

                x: {

                    title: {

                        display: true,

                        text:
                            "Gender Modality"

                    },

                    grid: {

                        display: false

                    },

                    ticks: {

                        color: "#666"

                    }

                },


                y: {

                    min: 40,

                    max: 100,

                    title: {

                        display: true,

                        text:
                            "Accuracy"

                    },

                    ticks: {

                        stepSize: 40

                    },

                    grid: {

                        color:
                            "#dddddd"

                    }

                }

            },


            plugins: {

                legend: {

                    display: false

                }

            }

        },


        plugins: [

            honorsThesisChanceLine,

            honorsThesisBarLabels,


            /*
            -------------------------------------------------
            Model labels
            -------------------------------------------------
            */

            {

                id: "modelLabels",

                afterDraw(chart) {

                    const {
                        ctx,
                        chartArea,
                        scales
                    } = chart;


                    if (
                        !chartArea ||
                        !scales.x
                    ) {
                        return;
                    }


                    const x0 =
                        scales.x.getPixelForValue(0);

                    const x1 =
                        scales.x.getPixelForValue(1);

                    const x2 =
                        scales.x.getPixelForValue(2);

                    const x3 =
                        scales.x.getPixelForValue(3);


                    const ffCenter =
                        (x0 + x1) / 2;

                    const irnCenter =
                        (x2 + x3) / 2;


                    const boxWidth =
                        Math.abs(x1 - x0) * 1.8;


                    const top =
                        chartArea.top - 20;


                    ctx.save();


                    ctx.strokeStyle =
                        "#222";

                    ctx.lineWidth = 1;

                    ctx.fillStyle =
                        "#222";

                    ctx.font =
                        "9px Noto Sans";

                    ctx.textAlign =
                        "center";

                    ctx.textBaseline =
                        "middle";


                    /*
                    ---------------------------------
                    FF
                    ---------------------------------
                    */

                    ctx.strokeRect(

                        ffCenter -
                            boxWidth / 2,

                        top,

                        boxWidth,

                        20

                    );


                    ctx.fillText(

                        "FF",

                        ffCenter,

                        top + 10

                    );


                    /*
                    ---------------------------------
                    IRNv1
                    ---------------------------------
                    */

                    ctx.strokeRect(

                        irnCenter -
                            boxWidth / 2,

                        top,

                        boxWidth,

                        20

                    );


                    ctx.fillText(

                        "IRNv1",

                        irnCenter,

                        top + 10

                    );


                    /*
                    ---------------------------------
                    Divider
                    ---------------------------------
                    */

                    const divider =
                        (x1 + x2) / 2;


                    ctx.beginPath();


                    ctx.moveTo(

                        divider,

                        chartArea.bottom

                    );


                    ctx.lineTo(

                        divider,

                        chartArea.bottom + 5

                    );


                    ctx.stroke();


                    ctx.restore();

                }

            }

        ]

    });

}


/*
=====================================================
MODEL-SPECIFIC CHART
=====================================================

Creates a chart containing ONLY one model.

Examples:

    model = "FF"

or

    model = "IRNv1"

The original overall chart is not affected.
=====================================================
*/

async function createModelResultsChart(
    canvas,
    model
) {

    if (!canvas) {

        console.warn(
            `${model} chart: canvas was not found.`
        );

        return;
    }


    if (isChartInitialized(canvas)) {
        return;
    }


    if (typeof Chart === "undefined") {

        console.error(
            `${model} chart: Chart.js is not loaded.`
        );

        return;
    }


    markChartInitialized(canvas);


    /*
    -------------------------------------------------
    Load the same CSV used by the original chart
    -------------------------------------------------
    */

    const rows =
        await loadHonorsThesisData();


    if (!rows) {

        canvas.dataset.chartInitialized =
            "false";

        return;
    }


    /*
    -------------------------------------------------
    Make sure the requested model exists
    -------------------------------------------------
    */

    const modelRows =
        rows.filter(
            row => row.model === model
        );


    if (!modelRows.length) {

        console.error(
            `${model} chart: no rows found for model "${model}".`
        );

        canvas.dataset.chartInitialized =
            "false";

        return;
    }


    /*
    -------------------------------------------------
    Destroy existing chart
    -------------------------------------------------
    */

    const existingChart =
        Chart.getChart(canvas);

    if (existingChart) {
        existingChart.destroy();
    }


    /*
    -------------------------------------------------
    Create model-specific chart
    -------------------------------------------------

    Only two x-axis categories:

        cis
        trans

    Each category has:

        man
        woman
    -------------------------------------------------
    */

    new Chart(canvas, {

        type: "bar",


        data: {

            labels: [

                "cis",

                "trans"

            ],


            datasets: [

                {
                    label: "man",

                    data: [

                        getAccuracy(
                            rows,
                            model,
                            "cis",
                            "man"
                        ),

                        getAccuracy(
                            rows,
                            model,
                            "trans",
                            "man"
                        )

                    ],

                    backgroundColor:
                        "#4682B4",

                    borderWidth: 0,

                    categoryPercentage:
                        0.65,

                    barPercentage:
                        0.9
                },


                {
                    label: "woman",

                    data: [

                        getAccuracy(
                            rows,
                            model,
                            "cis",
                            "woman"
                        ),

                        getAccuracy(
                            rows,
                            model,
                            "trans",
                            "woman"
                        )

                    ],

                    backgroundColor:
                        "#F06B4F",

                    borderWidth: 0,

                    categoryPercentage:
                        0.65,

                    barPercentage:
                        0.9
                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            layout: {

                padding: {

                    top: 30,

                    right: 10,

                    left: 5,

                    bottom: 5

                }

            },


            scales: {

                x: {

                    title: {

                        display: true,

                        text:
                            "Gender Modality"

                    },

                    grid: {

                        display: false

                    },

                    ticks: {

                        color: "#666"

                    }

                },


                y: {

                    min: 40,

                    max: model === "IRNv1" ? 80 : 100,

                    title: {

                        display: true,

                        text:
                            "Accuracy"

                    },

                    ticks: {

                        stepSize: 20

                    },

                    grid: {

                        color:
                            "#dddddd"

                    }

                }

            },


            plugins: {

                legend: {

                    display: false,

                    // position: "top"

                }

            }

        },


        plugins: [

            honorsThesisChanceLine,

            honorsThesisBarLabels,


        //     /*
        //     -------------------------------------------------
        //     Model title
        //     -------------------------------------------------
        //     */

        //     {

        //         id: "singleModelLabel",

        //         afterDraw(chart) {

        //             const {
        //                 ctx,
        //                 chartArea
        //             } = chart;


        //             if (!chartArea) {
        //                 return;
        //             }


        //             const center =
        //                 (
        //                     chartArea.left +
        //                     chartArea.right
        //                 ) / 2;


        //             const boxWidth =
        //                 chartArea.right -
        //                 chartArea.left;


        //             const top =
        //                 chartArea.top - 25;


        //             ctx.save();


        //             ctx.strokeStyle =
        //                 "#222";

        //             ctx.lineWidth = 1;


        //             ctx.fillStyle =
        //                 "#222";


        //             ctx.font =
        //                 "9px Noto Sans";


        //             ctx.textAlign =
        //                 "center";


        //             ctx.textBaseline =
        //                 "middle";


        //             ctx.strokeRect(

        //                 center -
        //                     boxWidth / 2,

        //                 top,

        //                 boxWidth,

        //                 20

        //             );


        //             ctx.fillText(

        //                 model,

        //                 center,

        //                 top + 10

        //             );


        //             ctx.restore();

        //         }

        //     }

        ]

    });

}


/*
=====================================================
FAIRFACE CHART
=====================================================
*/

async function createFairFaceResultsChart(canvas) {

    return createModelResultsChart(
        canvas,
        "FF"
    );

}


/*
=====================================================
IRNV1 CHART
=====================================================
*/

async function createIRNv1ResultsChart(canvas) {

    return createModelResultsChart(
        canvas,
        "IRNv1"
    );

}


/*
=====================================================
INITIALIZE PROJECT CHARTS
=====================================================

This function searches the supplied container rather
than assuming that the canvas exists when this JS file
loads.

That is important because your book engine creates
the page content dynamically.
=====================================================
*/

async function initializeProjectCharts(
    container = document
) {

    if (!container) {
        return;
    }

    const canvases =
        container.querySelectorAll(
            "canvas[data-chart]"
        );

    if (!canvases.length) {
        return;
    }

    for (const canvas of canvases) {

        const chartType =
            canvas.dataset.chart;

        switch (chartType) {

            /*
            -----------------------------------------
            Original overall Honors Thesis chart
            -----------------------------------------
            */

            case "honors-thesis":

                await createHonorsThesisChart(
                    canvas
                );

                break;


            /*
            -----------------------------------------
            FairFace-only chart
            -----------------------------------------
            */

            case "fairface-results":

                await createFairFaceResultsChart(
                    canvas
                );

                break;


            /*
            -----------------------------------------
            IRNv1-only chart
            -----------------------------------------
            */

            case "irnv1-results":

                await createIRNv1ResultsChart(
                    canvas
                );

                break;


            /*
            -----------------------------------------
            Publication type chart
            -----------------------------------------
            */

            case "publications":

                if (
                    canvas.id ===
                    "publicationTypeChart"
                ) {

                    await createPublicationTypeChart(
                        canvas
                    );

                } else {

                    console.warn(
                        "Publications chart: unknown publication canvas.",
                        canvas
                    );

                }

                break;


            /*
            -----------------------------------------
            Publication role chart
            -----------------------------------------
            */

            case "publication-role":

                await createPublicationRoleChart(
                    canvas
                );

                break;


            /*
            -----------------------------------------
            Publications by year chart
            -----------------------------------------
            */

            case "publications-year":

                await createPublicationsByYearChart(
                    canvas
                );

                break;

         }
    }
}


/*
=====================================================
AUTOMATIC CHART DETECTION
=====================================================

The book engine appears to inject page.content
dynamically.

A MutationObserver allows this file to notice when
a chart canvas is added to the page.
=====================================================
*/

function observeProjectCharts() {

    /*
    ---------------------------------------------
    Initial scan
    ---------------------------------------------
    */

    initializeProjectCharts(document);


    /*
    ---------------------------------------------
    Wait for dynamically-created page content
    ---------------------------------------------
    */

    if (
        typeof MutationObserver ===
        "undefined"
    ) {
        return;
    }


    const observer =
        new MutationObserver(
            mutations => {

                mutations.forEach(
                    mutation => {

                        mutation.addedNodes.forEach(
                            node => {

                                /*
                                Ignore text nodes.
                                */

                                if (
                                    node.nodeType !==
                                    Node.ELEMENT_NODE
                                ) {
                                    return;
                                }


                                /*
                                The added node itself
                                might be a canvas.
                                */

                                if (
                                    node.matches &&
                                    node.matches(
                                        "canvas[data-chart]"
                                    )
                                ) {

                                    initializeProjectCharts(
                                        node.parentElement ||
                                        node
                                    );

                                }


                                /*
                                Or the canvas may be
                                somewhere inside the
                                newly-created page.
                                */

                                if (
                                    node.querySelector
                                ) {

                                    const canvases =
                                        node.querySelectorAll(
                                            "canvas[data-chart]"
                                        );


                                    if (
                                        canvases.length
                                    ) {

                                        initializeProjectCharts(
                                            node
                                        );

                                    }

                                }

                            }
                        );

                    }
                );

            }
        );


    /*
    ---------------------------------------------
    Observe the page for dynamically-added content
    ---------------------------------------------
    */

    observer.observe(

        document.body,

        {
            childList: true,

            subtree: true

        }

    );

}


/*
=====================================================
START CHART OBSERVER
=====================================================
*/

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        observeProjectCharts
    );

} else {

    observeProjectCharts();

}