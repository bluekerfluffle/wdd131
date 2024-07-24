const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})
const visitCount = document.querySelector("#visit-num")
let visitNum = GetVisitNum()

if (document.title === "Actvities For Littles || Home Page") {
    visitNum++
    DisplayVisitNum(visitNum)
    SetVisitNum()
}
function GetVisitNum() {
    return JSON.parse(this.localStorage.getItem("numVisits"))
  }

  function DisplayVisitNum(visits) {
    visitCount.innerHTML = visits;
  }

function SetVisitNum() {
    this.localStorage.setItem("numVisits", JSON.stringify(visitNum))
}

const activities = [
    {
        activityName: "Baggy Fingerpainting",
        activityImg: "images/fingerpaint.jpg",
        Steps: "https://www.parents.com/baby/development/growth/11-fun-activities-for-babies-6-to-12-months/"
    },
    {
        activityName: "Pasta Sorting",
        activityImg: "images/pasta.jpg",
        Steps: "https://busybloomingjoy.com/preschooler-toddler-activities-at-home/s"
    },
    {
        activityName: "Matching Tupperware with their lids",
        activityImg: "images/tupperware.jpg",
        Steps: "https://busybloomingjoy.com/preschooler-toddler-activities-at-home/"
    },
    {
        activityName: "Rice Bag Sensory",
        activityImg: "images/rice.jpg",
        Steps: "https://nymag.com/strategist/article/how-to-keep-kids-busy.html"
    },
    {
        activityName: "Squash Hammering",
        activityImg: "images/hammer.jpg",
        Steps: "https://nymag.com/strategist/article/how-to-keep-kids-busy.html"
    },
    {
        activityName: "Busy Books",
        activityImg: "images/book.webp",
        Steps: "https://www.upliftingmayhem.com/free-printable-diy-sunday-quiet-book/"
    },
    {
        activityName: " Color Matching",
        activityImg:"images/colors.webp",
        Steps:"https://www.upliftingmayhem.com/%ef%bb%bfdisney-inspired-pascal-color-matching-free-busy-bag-printable/"
    },
    {
        activityName:"Edible Paint",
        activityImg:"images/paint.png",
        Steps:"https://www.therealisticmama.com/edible-paint-for-kids/",
    },
    {
        activityName:"DIY Sensory Bottles",
        activitImg:"images/bottle.jpg",
        Steps:"https://livingwellmom.com/time-out-glitter-bottles/",
    },
    {
        activityName:"Jello Fossil Dig",
        activityImg:"images/dig.jpg",
        Steps:"https://livingwellmom.com/jello-fossil-dig/"

    },
    
    
];

function DisplayRandomActivity(activityList) {
    for (var i = 0; i < 4; i++) {
        let randomActivity = activityList[Math.floor(Math.random() * activityList.length)]
        let box = document.querySelector(".activity-box")
        box.innerHTML +=`<div class="random-card">
            <figure>
                <img src=${randomActivity.activityImg} alt="${randomActivity.activityName}" loading=lazy width = 150 height=180>
            </figure>
            <h3>${randomActivity.activityName}</h3>
            <a href="${randomActivity.Steps}" target="_blank"><button class="instructions">Activity Instructions</button><a/>
        </div>`
    }
}
DisplayRandomActivity(activities)

function MakeActivityCard(activityList) {
    activityList.forEach(function(activity) 
    {
        let container = document.querySelector("#activities")
        container.innerHTML += `<div class="activity-card">
        <figure>
            <img src=${activity.activityImg} alt="${activity.activityName}" loading=lazy width=220 height=250>
        </figure>
        <h3>${activity.activityName}<h3>
        <a href="${activity.Steps}" target="_blank"><button class="instructions">Activity Instructions</button><a/>
    </div>`
    })
} 
MakeActivityCard(activities)