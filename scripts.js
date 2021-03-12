

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
    let down = document.getElementById('down');
    let  left = document.getElementById('left');
    let  right = document.getElementById('right');

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
            rocketImg.style.left = "0px";
            rocketImg.style.bottom = "0px";
        }
    })

    missionAbort.addEventListener("click", function(){
        let result = window.confirm("WARNING: Are your sure you want to abort this mission?");
        if (result){
            status.innerText = "Mission aborted";
            astroChat.innerText = "Mission was aborted. Please refresh page to start again."
            backgroundColor.style.backgroundColor = "Red";
            shuttleHeight.innerText = '0';
            rocketImg.style.left = "0px";
            rocketImg.style.bottom = "0px";
        }
    })

    up.addEventListener("click", function(){
        let moveUp = parseInt(rocketImg.style.bottom) + "10px";
        rocketImg.style.bottom = moveUp;
        shuttleHeight.innerText = parseInt(shuttleHeight.innerText) + 10000
    });

    down.addEventListener("click", function(){
        let moveDown = parseInt(rocketImg.style.top) - "10px";
        rocketImg.style.top = moveDown;
        shuttleHeight.innerText = parseInt(shuttleHeight.innerText) - 10000
    })

    left.addEventListener("click", function(){
        let moveLeft = parseInt(rocketImg.style.left) - "10px";
        rocketImg.style.left = moveLeft;
    })

    right.addEventListener("click", function(){
        let moveRight = parseInt(rocketImg.style.right) + "10px";
        rocketImg.style.right = moveRight;
    })

   
})