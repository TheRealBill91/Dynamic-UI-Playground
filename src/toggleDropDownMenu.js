const toggleDropDownMenu = () => {
    const button = document.querySelectorAll("button");
    const ulContainer = document.querySelector("body > div > div");
    button.forEach((btn) =>
        btn.addEventListener("click", (event) => {
            event.currentTarget.nextElementSibling.classList.toggle("visible");
            /* ulContainer.classList.toggle("visible"); */
        })
    );
    /*  button.addEventListener("click", (event) => {
           ulContainer.classList.toggle("visible");
       }); */
};

export { toggleDropDownMenu };
