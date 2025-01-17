import { Item } from "../../src/types";

const itemText = `Item Class: Gloves
Rarity: Unique
You cannot use this item. Its stats will be ignored
--------
Hateforge
Moulded Mitts
--------
Armour: 109 (augmented)
--------
Requirements:
Level: 60
Str: 53 (unmet)
--------
Item Level: 82
--------
61% increased Armour
Gain 3 random Charges on reaching Maximum Rage
Lose all Rage on reaching Maximum Rage
+7 to Maximum Rage
--------
The first Karui born on the fringes of the Vaal empire developed a blood fever born of corruption.`;

const expectedResult: Item = {
  itemClass: "Gloves",
  itemLevel: 82,
  itemRarity: "Unique",
  itemName: {
    lines: ["Hateforge", "Moulded Mitts"],
    name: "Hateforge Moulded Mitts",
  },
  affixes: [
    "61% increased Armour",
    "Gain 3 random Charges on reaching Maximum Rage",
    "Lose all Rage on reaching Maximum Rage",
    "+7 to Maximum Rage",
  ],
  requirements: {
    level: 60,
    strength: 53,
    intelligence: undefined,
    dexterity: undefined,
  },
  stats: {
    armour: 109,
    evasionRating: undefined,
    energyShield: undefined,
    spirit: undefined,
  },
  sockets: 0,
  runes: [],
  implicits: [],
  corrupted: false,
  enchants: [],
  identified: true,
  flavorText: {
    flavorText: "The first Karui born on the fringes of the Vaal empire developed a blood fever born of corruption.",
    lines: ["The first Karui born on the fringes of the Vaal empire developed a blood fever born of corruption."]
  },
  mirrored: false,
};

export { itemText, expectedResult };
