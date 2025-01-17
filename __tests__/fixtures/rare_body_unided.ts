import { Item } from "../../src/types";

const itemText = `Item Class: Body Armours
Rarity: Rare
Advanced Silk Robe
--------
Energy Shield: 106
--------
Requirements:
Intelligence: 105
--------
Item Level: 80
--------
Unidentified`;

const expectedResult: Item = {
  itemClass: "Body Armours",
  itemLevel: 80,
  itemRarity: "Rare",
  itemName: {
    lines: ["Advanced Silk Robe"],
    name: "Advanced Silk Robe",
  },
  affixes: [],
  requirements: {
    intelligence: 105,
  },
  sockets: 0,
  runes: [],
  implicits: [],
  stats: {
    energyShield: 106,
  },
  sanctum: {},
  corrupted: false,
  enchants: [],
  identified: false,
  mirrored: false,
  unmodifiable: false,
};

export { itemText, expectedResult };