// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    }).then(function(json) {
        const container = document.getElementById("container");
        let astronauts = "";
        astronauts += `<p>Astronaut Count: ${json.length}</p>`;

        for (astronaut of json.sort(function(a,b) {
            return a.hoursInSpace - b.hoursInSpace;
        })) {
             astronauts += `
        <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li style="color:${astronaut.active ? "green" : "red"}">Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                </ul>
            </div>
            <img class="avatar" src=${astronaut.picture}>
        </div>
        `;
    }
        container.innerHTML = astronauts;
       
    });
});