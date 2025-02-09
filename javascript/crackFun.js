async function fetchJok() {
  try {
    let response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=10");
    let data = await response.json();
    displayData(data.jokes);
  } catch (error) {
    console.error(error.message);
  }
}

function displayData(data) {
  console.log(data);
  let jokeContainer = document.querySelector(".cards");
  jokeContainer.innerHTML = ``;

  data.forEach((joke) => {
    let jokeCard = document.createElement("div");
    jokeCard.classList.add(
      "card",
      "p-5",
      "border",
      "border-gray-300",
      "mb-6",
      "rounded"
    );

    jokeCard.innerHTML = `
    <h2 class="text-3xl font-bold text-center">${joke.category}</h2>
    <h3 class="text-xl font-semibold text-center">${joke.type}</h3>
    <p class="text-lg text-center mt-4">${
      joke.type === "single" ? joke.joke : joke.setup
    }</p>
    <p class="text-lg text-center mt-4 font-bold">${
      joke.type === "twopart" ? joke.delivery : ""
    }</p>
  `;

    jokeContainer.appendChild(jokeCard);
  });
}

async function fetchJoke3() {
  const jokeElement = document.getElementById("random-joke");
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const joke = await response.json();
  jokeElement.innerHTML = ` <p class="text-lg text-center mt-4">${
    joke.type === "single" ? joke.joke : joke.setup
  }</p>
  <p class="text-lg text-center mt-4 font-bold">${
    joke.type === "twopart" ? joke.delivery : ""
  }</p>`;

  let button = document.querySelector(".button-joke");
  button.addEventListener("click", () => {
    jokeElement.innerHTML = ` <p class="text-lg text-center mt-4">${
      joke.type === "single" ? joke.joke : joke.setup
    }</p>
    <p class="text-lg text-center mt-4 font-bold">${
      joke.type === "twopart" ? joke.delivery : ""
    }</p>`;
    fetchJoke3();
  });

  jokeElement.style.display = "block";
}

fetchJok();
fetchJoke3();
