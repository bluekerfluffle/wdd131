document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Get the copyright-year element
    const copyrightElement = document.getElementById('copyright-year');
    if (copyrightElement) {
        // Set the current year in the first paragraph of the footer
        copyrightElement.textContent = ` ${currentYear}`;
    } else {
        console.error('Element with ID "copyright-year" not found.');
    }

    // Get the document's last modified date
    const lastModified = document.lastModified;
    // Get the last-modified element
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        // Set the last modified date in the second paragraph of the footer
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    } else {
        console.error('Element with ID "last-modified" not found.');
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: 2005,
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: 1888,
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: 2015,
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: 2020,
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: 1974,
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: 1986,
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: 1983,
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico",
        dedicated: 2000,
        area: 34000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137885-wallpaper.jpg"
    },
    {
        templeName: "Boston Massachusetts",
        location: "Boston, Massachusetts",
        dedicated: 2000,
        area: 6470,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
    },
    {
        templeName: "London England",
        location: "Newchapel, England",
        dedicated: 1958,
        area: 6470,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-393730-wallpaper.jpg"
    },
];


const hambutton = document.querySelector('#hambutton');
hambutton.addEventListener('click',() =>{});

const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click',() => {});

const oldButton = document.querySelector('.old-button');
oldButton.addEventListener('click',() => {});

const newbutton = document.querySelector('.new-button');
newbutton.addEventListener('click',()=>{});

const largeButton = document.querySelector('.large-button');
largeButton.addEventListener('click',() => {});

const smallButton = document.querySelector('.small-button');
smallButton.addEventListener('click',() => {});


function createTempleCard(filteredTemples) {
  const templeGrid = document.querySelector(".temple-grid");
  templeGrid.innerHTML= "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"> Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label"> Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML =`<span class="label"> Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading","lazy");
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeGrid.appendChild(card);
});
}
function sortTemples(criteria){
  let sortedTemples;
  switch (criteria) {
    case 'Old':
      sortedTemples = temples.sort ((a,b) => a.dedicated-b.dedicated);
      break; 
    case 'New':
      sortedTemples = temples.sort ((a,b) => b.dedicated-a.dedicated);
      break;
    case 'Large':
      sortedTemples = temples.sort ((a,b) => b.area-a.area);
      break;
    case 'Small':
      sortedTemples = temples.sort ((a,b) => a.area-b.area);
      break;
    case 'Home':
      sortedTemples = temples;
      break;
  }
  createTempleCard(sortedTemples);
}








createTempleCard(temples);



    