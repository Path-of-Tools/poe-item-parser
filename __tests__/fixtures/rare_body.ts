import { Item } from "../../src/types";

const itemText = `Item Class: Body Armours
Rarity: Rare
Empyrean Mantle
Expert Hexer's Robe
--------
Quality: +20% (augmented)
Energy Shield: 485 (augmented)
--------
Requirements:
Level: 65
Int: 157
--------
Sockets: S S 
--------
Item Level: 66
--------
+24% to Cold Resistance (rune)
--------
+77 to maximum Energy Shield
55% increased Energy Shield
+40 to maximum Life
+25% to Fire Resistance
+29% to Lightning Resistance
+220 to Stun Threshold`;

const expectedResult: Item = {
  itemClass: "Body Armours",
  itemLevel: 66,
  itemRarity: "Rare",
  itemName: {
    lines: ["Empyrean Mantle", "Expert Hexer's Robe"],
    name: "Empyrean Mantle Expert Hexer's Robe",
  },
  affixes: [
    "+77 to maximum Energy Shield",
    "55% increased Energy Shield",
    "+40 to maximum Life",
    "+25% to Fire Resistance",
    "+29% to Lightning Resistance",
    "+220 to Stun Threshold",
  ],
  requirements: {
    level: 65,
    intelligence: 157,
  },
  sockets: 2,
  runes: ["+24% to Cold Resistance"],
  implicits: [],
  quality: 20,
  stats: {
    energyShield: 485,
  },
  sanctum: {},
  corrupted: false,
  enchants: [],
  identified: true,
  mirrored: false,
  unmodifiable: false,
};

export { itemText, expectedResult };
