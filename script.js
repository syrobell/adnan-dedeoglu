let checkBox = document.getElementById("checkbox");
const clip = document.querySelectorAll(".clip");


checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        darkmode();
    } else {
        nodark();
    }
})

function darkmode() {
    document.body.classList.add("darkmode")
    document.querySelector(".navLogo").classList.add("darkLogo")
    document.querySelector(".footLogo").classList.add("darkLogo")
}

function nodark() {
    document.body.classList.remove("darkmode")
    document.querySelector(".navLogo").classList.remove("darkLogo")
    document.querySelector(".footLogo").classList.remove("darkLogo")
}

for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener("mouseenter", function(e) {
        clip[i].play();
    });
    clip[i].addEventListener("mouseout", function(e) {
        clip[i].pause();
    })
}