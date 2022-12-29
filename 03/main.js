const input = document.getElementById("input");

input.addEventListener("input", function (e) {
  const value = e.currentTarget.value;
  console.log(value);

  const explodedValue = value.split("");
  const regex = new RegExp(/[.-]$/g);
  if (regex.test(explodedValue[explodedValue.length - 1])) {
    explodedValue.splice(explodedValue.length - 1, 1, "_");
    input.value = explodedValue.join("");
  }
});
