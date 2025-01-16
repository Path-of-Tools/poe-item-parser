import { Item } from "../../src/types";

const itemText = `Item Class: Crossbows
Rarity: Rare
Hate Core
Expert Bombard Crossbow
--------
Physical Damage: 36-146 (augmented)
Critical Hit Chance: 5.00%
Attacks per Second: 1.65
Reload Time: 0.75
--------
Requirements:
Level: 79
Str: 116 (unmet)
Dex: 116 (unmet)
--------
Item Level: 82
--------
Grenade Skills Fire an additional Projectile (implicit)
--------
51% increased Physical Damage
+108 to Accuracy Rating
Grants 5 Life per Enemy Hit
Gain 81 Life per Enemy Killed
Gain 15 Mana per Enemy Killed`;

const expectedResult: Item = {
  itemClass: 'Crossbows',
  itemRarity: 'Rare',
  itemLevel: 82,
  affixes: [
    '51% increased Physical Damage',
    '+108 to Accuracy Rating',
    'Grants 5 Life per Enemy Hit',
    'Gain 81 Life per Enemy Killed',
    'Gain 15 Mana per Enemy Killed'
  ],
  corrupted: false,
  flavorText: undefined,
  itemName: {
    name: 'Hate Core Expert Bombard Crossbow',
    lines: [ 'Hate Core', 'Expert Bombard Crossbow' ]
  },
  requirements: { intelligence: undefined, strength: 116, dexterity: 116, level: 79 },
  sockets: 0,
  runes: [],
  implicits: [ 'Grenade Skills Fire an additional Projectile' ],
  quality: undefined,
  qualityType: undefined,
  stats: {
    energyShield: undefined,
    evasionRating: undefined,
    armour: undefined,
    spirit: undefined
  },
  charmSlots: undefined,
  attacksPerSecond: 1.65,
  criticalHitChance: 5,
  reloadTime: 0.75,
  elementalDamage: undefined,
  physicalDamage: [ { min: 36, max: 146 } ],
  duration: undefined,
  charges: undefined,
  enchants: [],
  blockChance: undefined,
  identified: true,
  mirrored: false,
}

export { itemText, expectedResult };
