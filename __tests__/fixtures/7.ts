import { Item } from "../../src/types";

const itemText = `Item Class: Mana Flasks
Rarity: Unique
Melting Maelstrom
Ultimate Mana Flask
--------
Quality: +20% (augmented)
Recovers 372 (augmented) Mana over 9,70 (augmented) Seconds
Consumes 10 of 75 Charges on use
Currently has 75 Charges
--------
Requirements:
Level: 60
--------
Item Level: 80
--------
Effect is not removed when Unreserved Mana is Filled
222% increased Duration
Every 3 seconds during Effect, deal 50% of Mana spent in those seconds as Chaos Damage to Enemies within 3 metres
Recover all Mana when Used
Deals 25% of current Mana as Chaos Damage to you when Effect ends
--------
What is life, but a dreamlike spiral of panic?
--------
Right click to drink. Can only hold charges while in belt. Refill at Wells or by killing monsters.`;

const expectedResult: Item = {
  itemClass: "Mana Flasks",
  itemLevel: 80,
  itemRarity: "Unique",
  itemName: {
    lines: ["Melting Maelstrom", "Ultimate Mana Flask"],
    name: "Melting Maelstrom Ultimate Mana Flask",
  },
  affixes: [
    "Effect is not removed when Unreserved Mana is Filled",
    "222% increased Duration",
    "Every 3 seconds during Effect, deal 50% of Mana spent in those seconds as Chaos Damage to Enemies within 3 metres",
    "Recover all Mana when Used",
    "Deals 25% of current Mana as Chaos Damage to you when Effect ends",
  ],
  requirements: {
    level: 60,
    strength: undefined,
    intelligence: undefined,
    dexterity: undefined,
  },
  stats: {
    armour: undefined,
    evasionRating: undefined,
    energyShield: undefined,
    spirit: undefined,
  },
  quality: 20,
  sockets: 0,
  runes: [],
  implicits: [],
  corrupted: false,
  enchants: [],
  identified: true,
  flavorText: {
    lines: ["What is life, but a dreamlike spiral of panic?"],
    flavorText: "What is life, but a dreamlike spiral of panic?",
  },
  charges: {
    consumes: 10,
    max: 75,
  },
  flaskRecovery: {
    over: 9.7,
    mana: 372,
  }
};

export { itemText, expectedResult };
