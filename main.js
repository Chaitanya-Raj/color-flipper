const colors = [
  "457b9d",
  "d62828",
  "00b4d8",
  "e85d04",
  "faa307",
  "3a86ff",
  "6d597a",
  "606c38",
  "e2afff",
  "e56b6f",
  "f72585",
  "80b918",
  "555555",
  "777777",
  "bbbbbb",
  "eeeeee",
];

document.querySelector("button").addEventListener("click", () => {
  document.body.style.backgroundColor = `#${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
});
