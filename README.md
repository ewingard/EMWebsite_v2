# EMWebsite_v2

Version 2 (upgraded CSS/styling) of my personal portfolio website. I used [v1](https://github.com/ewingard/EMWebsite) to help me learn HTML, CSS, and JavaScript. In this version, I'm hoping to use React and more JavaScript to create a more dynamic website.

I'm moving away from computer science and neuroscience and more into the humanities sphere, and I want my personal website to reflect that through styling and theme, while maintaining (and upgrading) my skills in coding.

## Website Sections
Several website pages have changed theming and user interface since EMWebsite_v1. Methods outlined below.

### Homepage
Styling for the homepage includes a "typewriter"-style animation of my name being typed out. The front-page styling is in the form of a newspaper, with a blurb included for each page's contents to assist with navigation and finding the correct page. 

### Publications
**Under Construction** Publications has been moved from EMWebsite_v1 into the projects page. This design choice helps prevent fragmentation of the website to streamline user experience as well as consistency for the projects' page new theming.

### Skills
The Skills page now mimics the theme of Excel (heavy inspiration) and uses JavaScript to import and create the workbook view. There are three tabs, one for a table listing all skills and skill metadata (years of experience, proficiency, skill title, skill category, skill type); one for a dashboard view importing/reusing skill information from the skills tab using Chart.js; and one maintaining similar design to the skills tab to list and link all certificates and microcredentials received. Navigation tabs in the header are used as navigation for the remaining portfolio pages (i.e., homepage, publications, projects, experience, etc.)

Current ambition for this page is to work on a filter/sort system to filter the skills and certificates tab based on data (years of experience, year the certificate was obtained, sort by proficiency, etc.).

**Under Construction** Mobile-friendly Excel view.

### About Me
**Under Construction** This page is still being planned. Stay tuned for more updates.

### Projects
**Under Construction** This page will mimic a bookshelf with a book for each major project. "Misc." and archived projects will be in a single book. Publications will be included as a book on the bookshelf, and uses the publications ID to jump to that book. Goal is to have an animation upon clicking the book on the shelf to have it open, with page flip for multiple pages. See Publications code for the original iteration of text routed through the book element without page flipping.

Updates to be included using ID (similar to publications) and will be included as an interactive sticky note on the wall by the bookshelf. 

#### Art Camp Project
Instead of floating squares of artwork, I have taken public domain images of frames from The Met, the National Gallery, and the Art Institute of Chicago's Open Access programs. Those frames were processed in Photoshop to remove any whitespace (transformed into transparency). Frames were then arranged in a row, and any art will scroll into frame. For mobile friendly view, all art is routed into a single frame and can be swiped to view other pieces instead of using scroll. Number of art pieces included in the art gallery view to maintain even amounts across all three frames was reduced from 50 to 45. All 50 original art files are still included in assets.

**Under Construction** Need to add some text until swipe/scroll (maybe add animation too) as instructions for any new website users to understand how to use the gallery.

#### FortuneTeller Quiz
This quiz was imported from the old website version and has not been changed.

### GitHub
GitHub as an official "page link" in navigation is maintained, but on the homepage it is no longer included as a large link. Instead, GitHub can be accessed among the other social media icons.

### Experience
**Under Construction** This page is still being planned. Stay tuned for more updates.