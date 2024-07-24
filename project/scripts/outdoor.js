const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav')
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})

const activities = [
    {
        activityName:"DIY Kinetic Sand",
        activityImg:"images/sand.webp",
        Steps:"https://eatingrichly.com/kinetic-sand-recipe/",
    },
    {
        activityName:"DIY Chalk Paint",
        activityImg:"images/chalk.png",
        Steps:"https://livingwellmom.com/diy-sidewalk-chalk-paint-kids/",
    },
    {
        activityName:"DIY Strong Bubbles",
        activityImg:"images/bubbles.jpg",
        Steps:"https://livingwellmom.com/homemade-bubble-solution/",
    },
    {
        activityName:"DIY Water Bombs",
        activitImg:"images/sponge.jpg",
        Steps:"https://livingwellmom.com/splish-splashing-fun-with-sponge-bombs-tutorial/",
    },
    {
        activityName:"Oobleck",
        activitImg:"images/oob.jpg",
        Steps:"https://livingwellmom.com/how-to-make-oobleck-science-fun-kids/",
    },
    {
        activityName:"Backyard Olympics",
        activitImg:"images/olympics.jpg",
        Steps:"https://toddlerapproved.com/2-simple-and-silly-backyard-olympics/",
    },
    {
        activityName:"Family Jogging Club",
        activitImg:"images/jog.jpg",
        Steps:"https://toddlerapproved.com/family-jogging-club/",
    },
    {
        activityName:"Giant Foam Sensory Bin",
        activitImg:"images/foam.jpg",
        Steps:"https://toddlerapproved.com/giant-foam-sensory-bin-for-kids/",
    },
    {
        activityName:"Nature Walk",
        activitImg:"images/nature.jpg",
        Steps:"https://themodernmindfulmom.com/nature-walk-ideas-for-toddlers-preschoolers/",
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
        <a href="${activity.Steps}" target="_blank"><button class="cooking-steps">Full Recipe</button><a/>
    </div>`
    })
} 
MakeActivityCard(activities)