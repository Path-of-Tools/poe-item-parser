import { Item } from "../../src/types";

const itemText = `Item Class: Quarterstaves
Rarity: Rare
Gale Call
Expert Crackling Quarterstaff
--------
Physical Damage: 43-51 (augmented)
Lightning Damage: 46-224 (augmented)
Critical Hit Chance: 10.00%
Attacks per Second: 1.40
--------
Requirements:
Level: 78
Dex: 165 (unmet)
Int: 64
--------
Item Level: 78
--------
Adds 43 to 51 Physical Damage
Adds 3 to 52 Lightning Damage
+153 to Accuracy Rating
Causes 55% increased Stun Buildup`;

const expectedResult: Item = {
  itemClass: 'Quarterstaves',
  itemRarity: 'Rare',
  itemLevel: 78,
  affixes: [
    'Adds 43 to 51 Physical Damage',
    'Adds 3 to 52 Lightning Damage',
    '+153 to Accuracy Rating',
    'Causes 55% increased Stun Buildup'
  ],
  corrupted: false,
  flavorText: undefined,
  itemName: {
    name: 'Gale Call Expert Crackling Quarterstaff',
    lines: [ 'Gale Call', 'Expert Crackling Quarterstaff' ]
  },
  requirements: { intelligence: 64, strength: undefined, dexterity: 165, level: 78 },
  sockets: 0,
  runes: [],
  implicits: [],
  quality: undefined,
  qualityType: undefined,
  stats: {
    energyShield: undefined,
    evasionRating: undefined,
    armour: undefined,
    spirit: undefined
  },
  sanctum: {},
  charmSlots: undefined,
  attacksPerSecond: 1.4,
  criticalHitChance: 10,
  reloadTime: undefined,
  limitedTo: undefined,
  radius: undefined,
  elementalDamage: undefined,
  fireDamage: undefined,
  coldDamage: undefined,
  lightningDamage: [ { min: 46, max: 224 } ],
  physicalDamage: [ { min: 43, max: 51 } ],
  duration: undefined,
  charges: undefined,
  enchants: [],
  blockChance: undefined,
  identified: true,
  flaskRecovery: undefined,
  mirrored: false,
  unmodifiable: false,
};

export { itemText, expectedResult };
