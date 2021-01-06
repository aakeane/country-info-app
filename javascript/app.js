const newFetch = new FetchRequest();
const ui = new Ui();

const newSearch = document.querySelector("#country");
const submitForm = document.querySelector("#form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const chosenCountry = newSearch.value;

  newFetch
    .getCity(chosenCountry)
    .then((data) => {
      ui.updateUi(data);
      ui.saveToLS(data);
    })
    .catch((err) => {
      ui.updateUiError(err);
    });
});

window.addEventListener("DOMContentLoaded", () => {
  const lastCountry = ui.checkLS();
  newFetch
    .getCity(lastCountry)
    .then((data) => {
      ui.updateUi(data);
    })
    .catch((err) => {
      ui.updateUiError(err);
    });
});
