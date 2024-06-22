

    let scrollContainer = document.getElementsByClassName("gallery")[0];
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    // For mouse wheel

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    //     scrollContainer.style.scrollBehavior = "auto";
    // });

    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
    });


