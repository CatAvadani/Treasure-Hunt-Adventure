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
    instruction: "Make a choise!",
    inventoryMessage: "You found a shiny seashell on the beach.",
    background: "images/hidden-map.png",
    button1: {
      title: "Explore",
      nextScene: 2,
    },
    button2: {
      title: "Leave the Island",
      nextScene: 3,
    },
  },
  {
    title: "You find a Cave",
    text: "You helped the local tribe and gained their trust.",
    instruction: "Avoid interaction and explore",
    background: "images/cave-img.jpeg",
    button1: {
      title: "Go into the dark cave",
      text: "Continue your journey",
      nextScene: 1,
    },
    button2: {
      title: "You are on the beach",
      text: "You avoided interaction and explored the area.",
      nextScene: 0,
    },
  },
  {
    title: "You Leave the island",
    text: "",
    instruction: "",
    background: "images/beach-img.jpg",
    button1: {
      title: "Find your ship",
      text: "Continue your journey",
      nextScene: 1,
    },
    button2: {
      title: "You are on the beach",
      text: "You avoided interaction and explored the area.",
      nextScene: 0,
    },
  },
];
