function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const listItem = document.querySelector(`.drum-list-item[data-key="${e.key}"]`);
    if (!audio) return; //stop function from running alltogether
    audio.currentTime = 0; //rewind to the start
    console.log(audio);
    console.log(listItem);
    audio.play()
    listItem.classList.add("playing");
    console.log(e);
}

function removeTransition(e) {
    console.log(e);
    if(e.propertyName !=="transform") return;
    console.log(e.propertyName);
    console.log(this);
    this.classList.remove("playing");
}

const listItems = document.querySelectorAll(".drum-list-item");

listItems.forEach(listItem => {
    listItem.addEventListener('transitionend', removeTransition);
    console.log (listItem);
})

window.addEventListener("keydown", playSound);