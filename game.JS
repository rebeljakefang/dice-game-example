const dieImages = document.querySelectorAll("#gameboard img");

//when button is pressed change die images to gif animation
document.getElementById("rollButton").addEventListener("click", (event) => {
    dieImages.forEach((image) => {
        image.src = "assets/die_rolling.gif";
    });
    setTimeout(() => {
        // set all die images to a random number
        dieImages.forEach((image)=> {
            image.src = "assets/white_dice_" + (Math.floor(math.random() * 6) + 1) +".gif";
        })
    },500);
console.log(event);
});
function isDieUnlocked(dieImages){
    const checkboxes = document,querySelectorAll("#gameboard input");
    const unchecked = Array.from(checlboxes)
                                .filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImages.className)
}