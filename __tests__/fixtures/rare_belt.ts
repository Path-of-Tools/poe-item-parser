import { Item } from "../../src/types";

const itemText = `Item Class: Belts
Rarity: Rare
Mind Twine
Ornate Belt
--------
Charm Slots: 1
--------
Requirements:
Level: 31
--------
Item Level: 52
--------
13% reduced Charm Charges used (implicit)
--------
+77 to maximum Life
+12 to Strength
+25% to Fire Resistance
+15% to Lightning Resistance`;

const expectedResult: Item = {
  itemClass: "Belts",
  itemLevel: 52,
  itemRarity: "Rare",
  itemName: {
    lines: ["Mind Twine", "Ornate Belt"],
    name: "Mind Twine Ornate Belt",
  },
  affixes: [
    "+77 to maximum Life",
    "+12 to Strength",
    "+25% to Fire Resistance",
    "+15% to Lightning Resistance",
  ],
  requirements: {
    level: 31,
  },
  charmSlots: 1,
  sockets: 0,
  runes: [],
  implicits: ["13% reduced Charm Charges used"],
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
