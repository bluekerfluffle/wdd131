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