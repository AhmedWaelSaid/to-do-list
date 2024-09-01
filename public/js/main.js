const upload = document.querySelector(".icon-upload");
const Theinput = document.querySelector("#Theinput");
const container = document.querySelector(".container");



upload.addEventListener("click", (eo) => {

    eo.preventDefault();
    const task = `<div class="task">
            <span class="icon-star icon"></span>
            <p class="text-line" >  ${Theinput.value} </p>
            <!-- <span class="icon-heart"></span> -->
            <div class="twoicons">
                <span class="icon-trash-o icon"></span>
                <span class="icon-frown-o icon"></span>
            </div>
    
        </div>
        ` ;
    container.innerHTML += task;

Theinput.value = ""
})

container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash-o icon") {
        eo.target.parentElement.parentElement.remove();

    } else if (eo.target.className == "icon-frown-o icon") {

        eo.target.parentElement.parentElement.getElementsByClassName("text-line")[0].classList.add("finish");

        eo.target.classList.add("dn");
        const heart = `<span class="icon-heart"></span>`;

        eo.target.parentElement.innerHTML += heart;
    }
    else if (eo.target.className == "icon-heart") {

        eo.target.parentElement.parentElement.getElementsByClassName("text-line")[0].classList.remove("finish");

        eo.target.classList.add("dn")
        const sad = `<span class="icon-frown-o icon"></span>`
        eo.target.parentElement.innerHTML += sad;
    }
    else if (eo.target.className == "icon-star icon") {

        eo.target.classList.add("yellow")
        container.prepend(eo.target.parentElement) ;
    }
    else if (eo.target.className == "icon-star icon yellow") {

        eo.target.classList.remove("yellow")
        
    }
})


