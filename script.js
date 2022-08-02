let checkBox = document.getElementById("checkbox");

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