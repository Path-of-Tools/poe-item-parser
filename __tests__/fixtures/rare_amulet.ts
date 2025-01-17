import { Item } from "../../src/types";

const itemText = `Item Class: Amulets
Rarity: Rare
Gloom Medallion
Gold Amulet
--------
Requirements:
Level: 35
--------
Item Level: 59
--------
13% increased Rarity of Items found (implicit)
--------
13% increased maximum Energy Shield
27% increased Critical Hit Chance
32% increased Mana Regeneration Rate`;

const expectedResult: Item = {
  itemClass: "Amulets",
  itemLevel: 59,
  itemRarity: "Rare",
  itemName: {
    lines: ["Gloom Medallion", "Gold Amulet"],
    name: "Gloom Medallion Gold Amulet",
  },
  affixes: [
    "13% increased maximum Energy Shield",
    "27% increased Critical Hit Chance",
    "32% increased Mana Regeneration Rate",
  ],
  requirements: {
    level: 35,
  },
  sockets: 0,
  runes: [],
  implicits: ["13% increased Rarity of Items found"],
  corrupted: false,
  stats: {
    spirit: undefined,
    armour: undefined,
    evasionRating: undefined,
    energyShield: undefined,
  },
  sanctum: {},
  enchants: [],
  identified: true,
  mirrored: false,
  unmodifiable: false,
};

export { itemText, expectedResult };
