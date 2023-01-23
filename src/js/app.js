import "../scss/app.scss";
import * as R from 'ramda'
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");

  var getClasses = R.pluck('class');

  let gClass = getClasses(arrayToPluck);

  gClass.forEach(function callback(value, index) {
    articles[index].classList.add(value);
  });
});
