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

// create an inventory array of the collected items
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
    instruction.textContent = "";
    createShell();
    createBottle(currentScene.instruction);
    createKey();
  }

  if (currentScene.title === scenes[3].title) {
    backgroundVideo.classList.remove("hidden");
    imageContainer.lastChild.classList.add("hidden");
    buttons.classList.add("hidden");
  }

  if (currentScene.title === scenes[4].title) {
    backgroundVideo.classList.add("hidden");
    buttons.classList.remove("hidden");
  }
}
// create key
function createKey() {
  const key = document.createElement("img");
  key.setAttribute("src", "images/key1.png");
  key.className = "key";
  imageContainer.append(key);

  key.addEventListener("click", () => {
    inventory.push("Key");
    key.classList.add("hidden");
    const item = document.createElement("img");
    item.classList.add("inventory-item");
    item.setAttribute("src", "images/key1.png");
    invertoryCollection.appendChild(item);
  });
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
    const item = document.createElement("img");
    item.classList.add("inventory-item");
    item.setAttribute("src", "images/shell1.png");
    invertoryCollection.appendChild(item);
  });
}
// create bottle
function createBottle(message) {
  const messageBottle = document.createElement("img");
  messageBottle.setAttribute("src", "images/bottle-img1.png");
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
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
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
