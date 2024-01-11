const answers = document.querySelectorAll('p');
const collapsible = document.getElementById("collapsible")
const answer = document.getElementById("answer");

collapsible.addEventListener("click", () => {
    if(answer.style.display === "block") {
        collapsible.src = "./images/ph_plus-circle-fill.png"
        answer.style.display = "none"
    } else {
        collapsible.src = "./images/ph_minus-circle-fill.png"
        answer.style.display = "block";
    }
})

