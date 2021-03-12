

window.addEventListener("load", function(){
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
    let astroChat = document.getElementById('astroChat')
    let up = document.getElementById('up');
    let up = document.getElementById('down');
    let up = document.getElementById('left');
    let up = document.getElementById('right');

    takeOff.addEventListener("click", function(){
        let result = window.confirm("WARNING: ARE YOU READY FOR TAKE OFF?");
        if (result){
            status.innerText = "Shuttle is in Flight";
            astroChat.innerText = "Have a good trip!"
            backgroundColor.style.backgroundColor = "Blue";
            shuttleHeight.innerText = '10000';
         }
    })

    landing.addEventListener("click", function(){
        let result = window.confirm("ROCKET IS LANDING! Engage Landing Gear!");
        if (result){
            status.innerText = "Shuttle has landed";
            astroChat.innerText = "Welcome Back!"
            backgroundColor.style.backgroundColor = "Green";
            shuttleHeight.innerText = '0';
        }
    })

    missionAbort.addEventListener("click", function(){
        let result = window.confirm("WARNING: Are your sure you want to abort this mission?");
        if (result){
            status.innerText = "Mission aborted";
            astroChat.innerText = "Mission was aborted. Please refresh page to start again."
            backgroundColor.style.backgroundColor = "Red";
            shuttleHeight.innerText = '0';
        }
    })
})