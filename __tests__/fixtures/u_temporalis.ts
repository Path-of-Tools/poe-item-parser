import { Item } from "../../src/types";

const itemText = `Item Class: Body Armours
Rarity: Unique
Temporalis
Silk Robe
--------
Quality: +20% (augmented)
Energy Shield: 244 (augmented)
--------
Requirements:
Level: 64
Int: 47
--------
Sockets: S S 
--------
Item Level: 82
--------
+142 to maximum Energy Shield
+14% to all Elemental Resistances
15% of Damage taken Recouped as Life
27% of Damage taken Recouped as Mana
Skills have -2.96 seconds to Cooldown
--------
The final element the tale-women
mastered was Time itself.`;

const expectedResult: Item = {
  itemClass: "Body Armours",
  itemLevel: 82,
  itemRarity: "Unique",
  itemName: {
    lines: ["Temporalis", "Silk Robe"],
    name: "Temporalis Silk Robe",
  },
  affixes: [
    "+142 to maximum Energy Shield",
    "+14% to all Elemental Resistances",
    "15% of Damage taken Recouped as Life",
    "27% of Damage taken Recouped as Mana",
    "Skills have -2.96 seconds to Cooldown",
  ],
  requirements: {
    level: 64,
    strength: undefined,
    intelligence: 47,
    dexterity: undefined,
  },
  stats: {
    armour: undefined,
    evasionRating: undefined,
    energyShield: 244,
    spirit: undefined,
  },
  sanctum: {},
  sockets: 2,
  quality: 20,
  runes: [],
  implicits: [],
  corrupted: false,
  enchants: [],
  identified: true,
  flavorText: {
    flavorText: "The final element the tale-women mastered was Time itself.",
    lines: ["The final element the tale-women", "mastered was Time itself."]
  },
  mirrored: false,
  unmodifiable: false,
};

export { itemText, expectedResult };
