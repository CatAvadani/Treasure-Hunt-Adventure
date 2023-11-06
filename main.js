window.addEventListener("DOMContentLoaded", main);

function main() {
  displayScene();
}

function displayScene() {
  // select the elements
  const sceneTitle = document.getElementById("title");
  const sceneDescription = document.getElementById("description");
  const buttons = document.querySelector(".buttons");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const instruction = document.getElementById("instruction");
  const backgroundScene = document.getElementById("background-img");
  const hiddenMap = document.getElementById("hidden-map");
  const invertoryCollection = document.querySelector(".inventory-collection");
  const backgroundVideo = document.getElementById("background-video");

  // select the current scene
  const currentScene = scenes[currentSceneIndex];
  sceneTitle.textContent = currentScene.title;
  sceneDescription.textContent = currentScene.text;
  instruction.textContent = currentScene.instruction;
  backgroundScene.setAttribute("src", currentScene.background);
  btn1.textContent = currentScene.button1.title;
  btn2.textContent = currentScene.button2.title;

  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
  backgroundScene.classList.add("hidden");

  hiddenMap.addEventListener("click", () => {
    displayNextScene(currentScene.button1.nextScene);
    // backgroundScene.setAttribute("src", "images/hidden-map.png");
    btn1.classList.remove("hidden");
    btn2.classList.remove("hidden");
    hiddenMap.classList.add("hidden");
    backgroundVideo.classList.add("hidden");
    backgroundScene.classList.remove("hidden");
  });

  btn1.addEventListener("click", () => {
    displayNextScene(currentScene.button1.nextScene);
    btn1.classList.remove("hidden");
    btn2.classList.remove("hidden");
    backgroundScene.classList.remove("hidden");
  });
  btn2.addEventListener("click", () => {
    displayNextScene(currentScene.button2.nextScene);
    btn1.classList.remove("hidden");
    btn2.classList.remove("hidden");
    backgroundScene.classList.remove("hidden");
  });
}

function hideButtons() {}

function displayNextScene(index) {
  currentSceneIndex = index;
  displayScene();
}
