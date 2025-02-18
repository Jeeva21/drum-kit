// Detecting Button Press
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var letter = this.innerHTML; //this => Again print "this" value from querrySlector
        console.log("The key detects from click: " + letter);
        makeSound(letter);
        buttonAnimation(letter);
    });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(e){
    console.log(e);
    console.log(e.key);
    makeSound(e.key);
    buttonAnimation(e.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentButton){
    var activeButton = document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
    console.log(activeButton);
}