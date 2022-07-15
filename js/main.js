

// strings of class and attribute names stored as JS variables so as to make any re-naming that may happen in the future, more convenient 

//  variable strings
const theme = 'theme';
const dataTheme = 'data-theme';

// grabbing the theme tab button with its class
const themeTab = '.theme-tab';
// theme tab buttons
const switcherBtn = '.switcher-btn';

// data-theme attribute values
const dark = 'dark';
const light = 'light';

// css class applies to theme panel
const open = 'open';

// theme button active class
const active = 'active';





// PORTFOLIO DYNAMIC HTML EXERCISE

// portDataArray = [
// {id: 1, ', imgSrc: "./assets/images/portfolio-1.jpg", ,  dataOpen: 'web-1'} ,
// {id: 2, ', imgSrc: "./assets/images/portfolio-2.jpg", ,  dataOpen: 'web-2' } ,
// {id: 3, ', imgSrc: "./assets/images/portfolio-3.jpg", ,  dataOpen: 'web-3' } ,
// {id: 4, ,  imgSrc: "./assets/images/portfolio-4.jpg", ,  dataOpen: 'ui-1' } ,
// {id: 5, ', imgSrc: "./assets/images/portfolio-5.jpg", ,  dataOpen: 'app-1' } ,
// {id: 6, ', imgSrc: "./assets/images/portfolio-6.jpg", ,  dataOpen: 'app-2' } ,
// {id: 7, ', imgSrc: "./assets/images/portfolio-7.jpg", ,  dataOpen: 'app-3' } ,
// {id: 8, ,  imgSrc: "./assets/images/portfolio-8.jpg", ,  dataOpen: 'ui-2' }
// ];



// POP UP MODALS


portfolioDataArray = [

{id: 1, 
    dataItem:'web',
    imgSrc: "./assets/images/portfolio-1.jpg", 
    header: 'Web Project 1', 
    subHead:"Food Website",
    category: 'Web Development',
    description: 'Food Website' ,
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo: 'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.', 
    dataOpen: 'web-1'} ,

{id: 2, 
    dataItem:'web',
    imgSrc: "./assets/images/portfolio-2.jpg", 
    header: 'Web Project 2', 
    subHead:"Coaching Website",
    category: 'Web Development',
    description: 'Coaching Website',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo: 'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.', 
    dataOpen: 'web-2' } ,

{id: 3, 
    dataItem:'web',
    imgSrc: "./assets/images/portfolio-3.jpg", 
    header: 'Web Project 3', 
    subHead:"Tech Website",
    category: 'Web Development',
    description: 'Tech Website',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo:'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.' , 
    dataOpen: 'web-3' } ,

{id: 4, 
    dataItem:'ui',
    imgSrc: "./assets/images/portfolio-4.jpg", 
    header: 'UI Design 1', 
    subHead:"App Interface",
    category: 'UI Design',
    description: 'App Interface',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo:'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.' , 
    dataOpen: 'ui-1' } ,

{id: 5, 
    dataItem:'app',
    imgSrc: "./assets/images/portfolio-5.jpg", 
    header: 'App 1',
    subHead:"Delivery App", 
    category: 'App Development',
    description: 'Delivery App',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo:'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.' , 
    dataOpen: 'app-1' } ,

{id: 6, 
    dataItem:'app',
    imgSrc: "./assets/images/portfolio-6.jpg", 
    header: 'App 2', 
    subHead:"Finance App",
    category: 'App Development',
    description: 'Finance App',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo:'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.' , 
    dataOpen: 'app-2' } ,

{id: 7, 
    dataItem:'app',
    imgSrc: "./assets/images/portfolio-7.jpg", 
    header: 'App 3', 
    subHead:"Life Style App",
    category: 'App Development',
    description: 'Life Style App',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo:'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.' , 
    dataOpen: 'app-3' } ,

{id: 8, 
    dataItem:'ui',
    imgSrc: "./assets/images/portfolio-8.jpg", 
    header: 'UI Design 2', 
    subHead:"Company Branding",
    category: 'UI Design',
    description: 'Company Branding',
    descriptOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
    descriptTwo:'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Venenatis urna cursus eget nunc scelerisque.' , 
    dataOpen: 'ui-2' }
];
// Card Creator

const cardsList = document.querySelectorAll('[data-item]')

const portParent= document.querySelector('.portfolio-grid');

function createPortCards() {
    
portfolioDataArray
.map(({dataItem, imgSrc, category, description, dataOpen}) => { 
            const newContent = 

            `<div class="portfolio-card" data-item="${dataItem}" data-open='${dataOpen}'>
            <div class="card-body">
                <img src=${imgSrc}>
                <div class="card-popup-box">
                    <div>${category}</div>
                    <h3>${description}</h3>
                </div>
            </div>
            </div>`;
            
            portParent.insertAdjacentHTML("beforeend", newContent);})
};

createPortCards();

// POP up creater
const popUpParent= document.querySelector('.pop-up-modals-container');

function createPopUp(id) {
    
portfolioDataArray
.map(({ imgSrc, header, subHead, descriptOne, descriptTwo, dataOpen}) => { 
            const newContent = 

        `
        <div id='${dataOpen}' class="modal" data-animation="slideInOutTop">
            <div class="modal-dialog">
                <header class="modal-header">
                    <h3>${header}</h3>
                    <i class="fas fa-times" data-close onclick= "removeIsVisible('${dataOpen}')"></i>
                </header>
                <div class="modal-body">
                    <div class="img-wrapper">
                        <img src=${imgSrc} alt="portfolio image">
                    </div>
                    <div class="text-wrapper">
                        <p><strong>${subHead}</strong></p>
                        <p>${descriptOne}</p>
                        <p>${descriptTwo}</p>
                    </div>
                </div>
            </div>
        </div>`;
            if (dataOpen === id)
            popUpParent.insertAdjacentHTML("beforeend", newContent);})
};
const cardPortElm = '.portfolio-card'
const cardPorts = document.querySelectorAll(cardPortElm);
// const createdPopups = []

for (box of cardPorts){
box.addEventListener('click', function() {
    const dataOpen = this.dataset.open
    // if (!createdPopups.includes(dataOpen)){
    //     createdPopups.push(dataOpen);
        createPopUp(dataOpen);
        
    }) ;
}





// Portfolio variables
const dataLink = '[data-filter]';
const filterLink = document.querySelectorAll(dataLink);

const portfolioData = '[data-item]' 
const portfolioItems = document.querySelectorAll(portfolioData);

// Search box
const searchBox = document.querySelector('#search');

searchBox.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    
    portfolioItems.forEach((card) => {
        if (card.dataset.item.includes(searchInput)){card.style.display = 'block';
        } else {
        card.style.display = 'none';
        }
    })
})

for (const link of filterLink) {
    link.addEventListener('click', function() {
        setActive(link, '.filter-link');
        const filter = this.dataset.filter;
        portfolioItems.forEach((card) => {
           if (filter === 'all') {
            card.style.display = 'block';
           } else if (card.dataset.item === filter) {
            card.style.display = 'block';
           } else { card.style.display = 'none';}
        })
    })
}

// creating variable to access root of page. target the HTML doc element of the document page...ie :root
const root = document.documentElement;

// Theme

// grab the tab by its css class
const toggleTheme = document.querySelector(themeTab);

// buttons...(Iterable) Node List of all .switcher-btn elements
const switcher = document.querySelectorAll(switcherBtn);

// store the current theme. access local storage so that theme history is remembered for repeat users
const currentTheme = localStorage.getItem(theme);



// toggle open theme panel
// sets open class to panel when clicked

// take toggleTheme, and add on click event with call back function
// call back creates var of tab that is selected to theme-panel to check if it contains 'open' class
// if tab (theme-panel) doesnt include open class, add it
// else... it has the open class, and remove it.
// These two conditions should create a toggle effect

// click event it on the theme-tab-toggle, but the function add or removes class from parent theme panel

toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if (!tab.className.includes(open)) {
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }

})

// set theme
// add functionality to theme buttons

// function to take in class and look for 'active' class on that element, if it is not there, then adds it. If it is there, it is removed
const setActive = (elm, selector) => {
    if( document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    } 
        elm.classList.add(active);
};

// function to set theme
// need to check if its light or dark
// if value is dark, take root HTML element and adds [dataTheme] attribute with value of 'dark'
// then saves setting to localstorage, with setItem(var name, and value)

const setTheme = (val) => {
    if (val === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
};

// checking for currentTheme in local storage
// Sets root html to local storage theme if stored
// remove active class, and check currentTheme and set active to proper button
if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => {
        btn.classList.remove(active);
    });

    if (currentTheme === dark) {
        switcher[1].classList.add(active);
    } else {
        switcher[0].classList.add(active);
    }
}

// for all the elements with class switcherBTN
// add click event that creats var toggle for each element, and calls SetActive function to remove active if exists, and adds it if doesn't
for (const elm of switcher) {
    elm.addEventListener('click', function() {
        const toggle = this.dataset.toggle;
        setActive(elm, switcherBtn);
        setTheme(toggle);
    })
}






// MODALS

// storing element attributes into a JS variable
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

// searches through HTML document and selects all elements with [data-open/close] attributes, and stores them into a Node List,

// grabs all data attribute and stores them into a list to be iterated through and function performed on...
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Full site Modal Open Buttons

// iterate through the NOde List using for of loop
// elm becomes each element of the Iterable list
// addEvent Listener looks for a 'click' event, to then trigger the call back function for each element of openModal
// callback function creates variable modalId
// calls 'this' as parent element, equalling the clicked HTML element that the data-open attribute belonged to. ie ABOUT PAGE div
// store each iteration of data-open that has the value of open. using dataset.open
// dataset.name = data-name
// then it runs through the document, and gets all elements with ID of modalID, which we just parsed through all the data-open elements. and adding a class of .is-visible with .classList.add('.class-name');

// for short, creates a class when clicked on
for(const elm of openModal) {
    elm.addEventListener('click', function(){
            const modalId = elm.dataset.open;
            document.getElementById(modalId).classList.add(isVisible);
    })
}

// Full Site Modal Close Button
// function is same up until callbackfunction
// cannot use 'this' as it would grab the parent of the data-close, which is the icon inside the About div tag. We need to move up the DOM tree to select the div container...to do this, use .this to select the parent and then ass .parentElement to move up to the next parent until desire level is reached. IF THIS ICON gets nested a layer deeper or shallower, then we would need to add or remove a .parentElement to maintain the correct relationship
// data-close does not need a unique value for each attribute, because it will be performing same close function, and not some unique page module appearance
function removeIsVisible(id) {
    const thisHere = document.getElementById(id);
    thisHere.remove(isVisible);
};

for (const elm of closeModal) {
    elm.addEventListener('click', function() {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    })
}


// adds event listener to entire doc on click event, store is e.target
// if click target is on an element with class+.modal.isvisible, then remove that class.

document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal.is-visible')) {
        document.querySelector('.modal.is-visible').remove(isVisible);
    }

});


// Modal pop up ESC key exit
// console.log(e.key) to see what the value of ESC key if when pressed...Escape. Uses keyup event instead of click event.

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.modal.is-visible').remove(isVisible);
    }

});

// marquee
// get elements displayed
// nodelist.length
// assign --marquee-elms nodelist.length

// grabbing var value from root
const elmsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elms-displayed');
console.log(elmsDisplayed);

const marqueeContent = document.querySelector('ul.marquee-content');

// creating property (var) into root
// setProperty(item, value)
root.style.setProperty('--marquee-elms', marqueeContent.children.length );

for (let i=0; i < elmsDisplayed; i += 1) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}