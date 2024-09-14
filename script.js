const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    if (height === "" || isNaN(height) || height < 0) {
        document.querySelector("#result").innerHTML =
            "<span>Write the proper height</span>";
    } else if (weight === "" || isNaN(weight) || weight < 0) {
        document.querySelector("#result").innerHTML =
            "<span>Write the proper weight</span>";
    } else {
        let result = (weight / ((height * height) / 10000)).toFixed(1);
        if (result <= 18.6) {
            document.querySelector("#result").innerHTML = `<span>${result} (Under Weight)</span>`;
        } else if (result >= 18.6 && result <= 24.9) {
            document.querySelector("#result").innerHTML = `<span>${result} (Normal Weight)</span>`;
        } else {
            document.querySelector("#result").innerHTML = `<span>${result} (Over Weight)</span>`;
        }
    }
});
