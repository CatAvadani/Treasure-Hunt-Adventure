let currentSceneIndex = 0;

const scenes = [
  {
    title: "Treasure Hunt Adventure",
    text: " You find yourself shipwrecked on a remote island, surrounded by lush tropical forests and crystal-clear waters. As you explore the island you need to find a mysterious map with a hidden message that leads to the treasure. ",
    instruction: "Find the map and follow the clues!",
    background: "images/pirate-ship2.png",
    button1: {
      title: "Explore",
      nextScene: 1,
    },
    button2: {
      title: "Leave the Island",
      nextScene: 3,
    },
  },

  {
    title: "The Lost Treasure Map",
    text: "You found the mysterious map! Explore your surroundings, search for clues and collect all the hidden items. The map leads through the ancient island known for its hidden caves. ",
    instruction: "Exploare the cave or leave the island!",
    inventoryMessage: "You found a shiny seashell on the beach.",
    background: "images/hidden-map.png",
    button1: {
      title: "Explore the Cave",
      nextScene: 2,
    },
    button2: {
      title: "Leave the Island",
      nextScene: 3,
    },
  },
  {
    title: "Dark Cave",
    text: "You enter a dark cave. You need to collect all the hidden items.",
    instruction:
      "To move forward you will need to solve the puzzle or go back to the beach.",
    background: "images/cave3.png",
    button1: {
      title: "Solve puzzle",
      nextScene: 1,
    },
    button2: {
      title: "Go to the beach",
      nextScene: 4,
    },
  },
  {
    title: "Leave the Island",
    text: "",
    instruction: "Game Over",
    background: "images/pirate-ship1.png",
    button1: {
      title: "Go back to the ship",
      nextScene: 0,
    },
    button2: {
      title: "Exploare the beach",
      nextScene: 0,
    },
  },
  {
    title: "You are on the Beach",
    text: "",
    instruction: "",
    background: "images/beach-img.jpg",
    button1: {
      title: "Return to the map",
      nextScene: 1,
    },
    button2: {
      title: "Explore the beach",
      nextScene: 1, // create a new scene
    },
  },
];
