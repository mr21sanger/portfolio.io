const profileBtn = document.querySelector("#myProfile")
const backBtn = document.querySelector("#back")
const main = document.querySelector(".screen");
const optionBtn = document.querySelector("#option")
const header = document.querySelector(".head")

profileBtn.addEventListener("click", () => {
    main.classList.add("current")
    header.classList.remove("active")
})
backBtn.addEventListener("click", () => {
    main.classList.remove("current")
})

optionBtn.addEventListener("click", () => {
    header.classList.toggle("active")
})


let change = (e, clickItem) => {
    let clicks = document.querySelectorAll(".navbarItems")
    clicks.forEach(click => {
        click.classList.remove("clicked")
    })
    e.classList.add("clicked")
    header.classList.remove("active")

    update(clickItem);
}

function update(clickItem) {
    let itemContent = document.getElementById(`${clickItem}`)
    let allContent = document.querySelectorAll(".content")
    allContent.forEach(content => {
        content.classList.add("hide")
    })
    itemContent.classList.remove("hide")
}

