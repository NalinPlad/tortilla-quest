

image = document.getElementById("image");

let acc = 10;
let drag = 0.3;
let vel = 20;
let pos = 0;

let bgAcc = 3;
let bgVel = 10;
let bgPos = 1;
let bgDamp = 0.2;

function spin(){
    bgVel += bgAcc;
    vel += acc + Math.floor((Math.random() - 0.5) * 10)
}

function animate() {
    requestAnimationFrame(animate);
    image.style.transform = `rotate(${pos}deg)`
    document.body.style.backgroundColor = `hsl(${bgPos}, 99%, 75%)`

    if(bgPos + bgVel > 360){
        bgPos = bgVel - ((bgPos + bgVel) - 360)
    } else {
        bgPos += bgVel;
    }

    if(bgVel > 0.5){

        bgVel -= bgDamp;
    } else {
        bgVel = 0.5
    }

    // Tortilla Physics :)

    if(pos + vel > 3600000){
        pos = vel - ((pos + vel) - 360000)
    } else {
        pos += vel;
    }

    pos += vel;

    if(vel > 0){

        vel -= drag;
    } else {
        vel = 0
    }


    drag = vel / 200
    bgDamp = bgVel / 25

    console.log(vel + " Drag: " + drag)
    
}

animate();