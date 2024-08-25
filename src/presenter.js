import es_bisiesto from "./bisiesto";

const year = document.querySelector("#year");
const form = document.querySelector("#main-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const year_val = Number.parseInt(year.value);
  if(es_bisiesto(year_val)){
    div.innerHTML = "<p>Bisiesto</p>";
  }else{
    div.innerHTML = "<p>NO Bisiesto</p>";
  }
});
