/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

let num = 0;
function addsection() {
    num = num + 1;
    //creating the section HTML body 
    newSection = document.createElement('section');
    text = `
    <section id="section ${num}"  data-nav="section ${num}">
    <div class="landing__container">
    <h2>Section ${num}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>
`
    newSection.innerHTML = text;
    main = document.querySelector("main");
    //inserting the new section before the last node in main
    main.insertBefore(newSection, main.lastChild);
}


function sectionNav() {
    const navBar = document.querySelector('nav');
    //empting the navBar to avoid duplication 
    navBar.innerHTML = "";
    let sections = document.querySelectorAll('section');
    //looping over sections to add their links on the nav bar 
    for (const section of sections) {
        let list = `
        <li> <a href="#${section.id}" data-nav=' ${section.id}' class="menu__link">${section.id}</a></li>
        `
        navBar.insertAdjacentHTML("beforeend", list);

        section.scrollIntoView({ behavior: "smooth" })

    }
}
//adding the first four sections 
for (i = 1; i < 5; i++) {
    addsection();
    sectionNav();
}
//I called the functions by using the onclick attribute in the HTML file

function activeSection() {
    let sections = document.querySelectorAll('section');
    for (const section of sections) {
        const pos = section.getBoundingClientRect();
        const links = document.querySelectorAll('a');
        const sectionDataNav = section.getAttribute('data-nav');
        if (pos.top >= 0 && pos.top <= 300) {
            section.classList.add("your-active-class");
            links.forEach(link => {

                if (link.textContent === sectionDataNav) {

                    link.classList.add("link-active-class");

                } else {

                    link.classList.remove("link-active-class");

                }
            })
        } else {
            section.classList.remove("your-active-class");
        }
    }
}
window.addEventListener('scroll', activeSection)


//creating the scroll up button
const topButton = document.getElementById('topbutton');
window.onscroll = function () {
    if (window.pageYOffset >= 700) {
        topButton.style.display = 'block'
    }
    else {
        topButton.style.display = 'none'
    }
}
topButton.addEventListener('click', function () {
    window.scrollTo(0, 0);
})

















