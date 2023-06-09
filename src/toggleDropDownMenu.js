const toggleDropDownMenu = () => {
  const button = document.querySelectorAll("nav button");
  const ulContainer = document.querySelector("body > div > div");
  button.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.currentTarget.nextElementSibling.classList.toggle("visible");
    })
  );
};


export { toggleDropDownMenu };
