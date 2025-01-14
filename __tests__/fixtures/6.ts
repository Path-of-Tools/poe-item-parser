import { Item } from "../../src/types";

const itemText = `Item Class: Helmets
Rarity: Unique
Wings of Caelyn
Rusted Greathelm
--------
Quality: +17% (augmented)
Armour: 34 (augmented)
--------
Item Level: 65
--------
11% increased Rarity of Items found
+21 to Dexterity
Gain 1 Rage on Melee Hit
Every Rage also grants 1% increased Stun Threshold
--------
The older brother retained calm in the midst of fury.
--------
Corrupted`;

const expectedResult: Item = {
  itemClass: "Helmets",
  itemLevel: 65,
  itemRarity: "Unique",
  itemName: {
    lines: ["Wings of Caelyn", "Rusted Greathelm"],
    name: "Wings of Caelyn Rusted Greathelm",
  },
  affixes: [
    "11% increased Rarity of Items found",
    "+21 to Dexterity",
    "Gain 1 Rage on Melee Hit",
    "Every Rage also grants 1% increased Stun Threshold",
  ],
  requirements: {
    level: undefined,
    strength: undefined,
    intelligence: undefined,
    dexterity: undefined,
  },
  quality: 17,
  sockets: 0,
  runes: [],
  implicits: [],
  corrupted: true,
  stats: {
    spirit: undefined,
    armour: 34,
    evasionRating: undefined,
    energyShield: undefined,
  },
  enchants: [],
  identified: true,
  flavorText: {
    flavorText: "The older brother retained calm in the midst of fury.",
    lines: ["The older brother retained calm in the midst of fury."]
  }
};

export { itemText, expectedResult };
