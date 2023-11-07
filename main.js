window.addEventListener("DOMContentLoaded", main);

function main() {
  displayScene();
}

// select the elements
const sceneTitle = document.getElementById("title");
const sceneDescription = document.getElementById("description");
const buttons = document.querySelector(".buttons");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const imageContainer = document.querySelector(".img-container");
const instruction = document.getElementById("instruction");
const backgroundScene = document.getElementById("background-img");
const hiddenMap = document.getElementById("hidden-map");
const invertoryCollection = document.querySelector(".inventory-collection");
const backgroundVideo = document.getElementById("background-video");

let inventory = [];

function displayScene() {
  // select the current scene
  const currentScene = scenes[currentSceneIndex];
  sceneTitle.textContent = currentScene.title;
  sceneDescription.textContent = currentScene.text;
  instruction.textContent = currentScene.instruction;
  backgroundScene.setAttribute("src", currentScene.background);
  btn1.textContent = currentScene.button1.title;
  btn2.textContent = currentScene.button2.title;

  hideButtons();
  backgroundScene.classList.add("hidden");

  hiddenMap.addEventListener("click", () => {
    displayNextScene(currentScene.button1.nextScene);
    hiddenMap.classList.add("hidden");
    backgroundVideo.classList.add("hidden");
    backgroundScene.classList.remove("hidden");
    showButtons();
  });

  btn1.addEventListener("click", () => {
    displayNextScene(currentScene.button1.nextScene);
    backgroundScene.classList.remove("hidden");
    showButtons();
  });
  btn2.addEventListener("click", () => {
    displayNextScene(currentScene.button2.nextScene);
    backgroundScene.classList.remove("hidden");
    showButtons();
  });

  if (currentScene.title === scenes[2].title) {
    createShell();
    createBottle(currentScene.instruction);
  }
}
// create a seashell
function createShell() {
  const seaShell = document.createElement("img");
  seaShell.setAttribute("src", "images/shell1.png");
  seaShell.className = "shell";
  imageContainer.append(seaShell);

  seaShell.addEventListener("click", () => {
    inventory.push("SeaShell");
    seaShell.classList.add("hidden");
    const item1 = document.createElement("img");
    item1.classList.add("inventory-item");
    item1.setAttribute("src", "images/shell1.png");
    invertoryCollection.appendChild(item1);
  });
}
// create bottle
function createBottle(message) {
  const messageBottle = document.createElement("img");
  messageBottle.setAttribute("src", "images/message-bottle.png");
  messageBottle.className = "message-bottle";
  imageContainer.append(messageBottle);

  messageBottle.addEventListener("click", () => {
    showMessage(message);
  });
}
function showMessage(message) {
  const messageContainer = document.createElement("div");
  const text = document.createElement("p");
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "X";
  messageContainer.className = "message-container";
  text.textContent = message;
  imageContainer.append(messageContainer);
  messageContainer.append(text);
  messageContainer.append(closeBtn);

  closeBtn.addEventListener("click", () => {
    messageContainer.classList.add("hidden");
  });
}

function hideButtons() {
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
}
function showButtons() {
  btn1.classList.remove("hidden");
  btn2.classList.remove("hidden");
}

function displayNextScene(index) {
  currentSceneIndex = index;
  displayScene();
}
