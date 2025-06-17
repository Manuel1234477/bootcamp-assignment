document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bmiForm");
  const result = document.getElementById("result");
  const resetBtn = document.getElementById("resetBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Input validation
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      result.innerHTML =
        "<span style='color: yellow;'>Please enter valid positive numbers.</span>";
      return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let status = "";

    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }

    result.innerHTML = `Your BMI is <strong>${bmi}</strong> and you are <strong>${status}</strong>.`;
  });

  // Reset button logic
  resetBtn.addEventListener("click", function () {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    result.innerHTML = "";
  });
});
