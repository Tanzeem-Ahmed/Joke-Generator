const jokeContainer = document.getElementById("showJoke");
const jokeGenerator = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const generateJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

jokeGenerator.addEventListener("click", generateJoke);
