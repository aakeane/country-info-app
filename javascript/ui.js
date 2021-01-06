class Ui {
  constructor() {
    this.outputDiv = document.querySelector("#output");
    this.country;
    this.defaultCountry = "aruba";
  }

  updateUi(data) {
    const langs = data[0].languages.map((lang) => {
      return ` ${lang.name}`;
    });
    const population = data[0].population.toLocaleString();

    this.outputDiv.innerHTML = `
    <h3>${data[0].name}</h3>
    <p class="para-fs"><span class="para">Capital:</span> ${data[0].capital}</p>
    <p class="para-fs"><span class="para">Population:</span> ${population}</p>
    <p class="para-fs"><span class="para">Timezone:</span> ${data[0].timezones[0]}</p>
    <p class="para-fs"><span class="para">Native Name:</span> ${data[0].nativeName}</p>
    <p class="para-fs"><span class="para">Currency:</span> ${data[0].currencies[0].name} - ${data[0].currencies[0].symbol}</p>
    <p class="para-fs"><span class="para">Language(s) - ${langs.length}:</span> ${langs}</p>
    <img class="flag-img" src="${data[0].flag}" alt="flag">`;
  }

  checkLS() {
    if (localStorage.getItem("country") === null) {
      return this.defaultCountry;
    } else {
      this.country = JSON.parse(localStorage.getItem("country"));
      return this.country[0].name;
    }
  }

  saveToLS(data) {
    localStorage.setItem("country", JSON.stringify(data));
  }

  updateUiError(err) {
    this.outputDiv.innerHTML = `<p class="para">Something went wrong... ${err}</p>`;
  }
}
