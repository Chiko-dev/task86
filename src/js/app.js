import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const isEven = (n) => n % 2 === 0;
  const numbersArray = [1, 3, 4, 5, 6, 7].filter(isEven);

  numbersArray.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = element;
    ul.appendChild(li);
  })
});
