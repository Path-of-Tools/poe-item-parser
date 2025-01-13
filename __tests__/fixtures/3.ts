import { Item } from "../../src/types";

const itemText = `Item Class: Sceptres
Rarity: Magic
Rattling Sceptre of Progression
--------
Spirit: 100
--------
Requirements:
Level: 78
Str: 54 (unmet)
Int: 138
--------
Item Level: 80
--------
Allies in your Presence have +15% to all Elemental Resistances`;

const expectedResult: Item = {
  itemClass: "Sceptres",
  itemLevel: 80,
  itemRarity: "Magic",
  itemName: {
    lines: ["Rattling Sceptre of Progression"],
    name: "Rattling Sceptre of Progression",
  },
  affixes: ["Allies in your Presence have +15% to all Elemental Resistances"],
  requirements: {
    level: 78,
    intelligence: 138,
    strength: 54,
  },
  sockets: 0,
  runes: [],
  implicits: [],
  stats: {
    spirit: 100,
  },
  corrupted: false,
  enchants: [],
  identified: true,
};

export { itemText, expectedResult };
