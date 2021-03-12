

window.addEventListener("load", function{
    let rocketImg = document.getElementById('rocket');
    rocketImg.style.position = "absolute";
    rocketImg.style.left = "0px";
    rocketImg.style.bottom = "0px";
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let backgroundColor = document.getElementById('shuttleBackground');
    let takeOff = document.getElementById('takeoff');
    let landing = document.getElementById('landing');
    let missionAbort = document.getElementById('missionAbort')

    takeOff.addEventListener("click", function{
        let result = window.confirm("Are you sure your ready for Take Off?");
        if (result){
            status.innerText = "Shuttle is in Flight";
            backgroundColor.style.backgroundColor = "Blue";
            shuttleHeight.innerText = '10000';
        }
    })
    

    