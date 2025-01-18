import { Item } from "../../src/types";

const itemText = `
Item Class: Skill Gems
Rarity: Gem
Spark
--------
Spell, Projectile, Lightning, Duration
Level: 27 (augmented)
20 Levels from Gem (Max)
+7 Levels from Global Modifiers (augmented)
Quality: +20% (augmented)
--------
Requirements:
Level: 90
Int: 205
--------
Sockets: G G G G G
--------
Launches a spray of sparking Projectiles that travel erratically along the ground until they hit an enemy or expire.
--------
Skills can be managed in the Skills Panel.
`;

const expectedResult: Item =
{
  itemClass: 'Skill Gems',
  itemRarity: 'Gem',
  itemLevel: undefined,
  areaLevel: undefined,
  affixes: [ 'Launches a spray of sparking Projectiles that travel erratically along the ground until they hit an enemy or expire.' ],
  corrupted: false,
  unmodifiable: false,
  flavorText: undefined,
  itemName: { name: 'Spark', lines: [ 'Spark' ] },
  requirements: {
    intelligence: 205,
    strength: undefined,
    dexterity: undefined,
    level: NaN
  },
  stackSize: undefined,
  numberOfTrials: undefined,
  sockets: 5,
  runes: [],
  implicits: [],
  quality: 20,
  qualityType: undefined,
  stats: {
    energyShield: undefined,
    evasionRating: undefined,
    armour: undefined,
    spirit: undefined
  },
  sanctum: {
    sacredWater: undefined,
    minorBoons: undefined,
    majorBoons: undefined,
    minorAfflictions: undefined,
    majorAfflictions: undefined
  },
  charmSlots: undefined,
  attacksPerSecond: undefined,
  criticalHitChance: undefined,
  reloadTime: undefined,
  limitedTo: undefined,
  radius: undefined,
  elementalDamage: undefined,
  fireDamage: undefined,
  coldDamage: undefined,
  lightningDamage: undefined,
  physicalDamage: undefined,
  duration: undefined,
  charges: undefined,
  enchants: [],
  blockChance: undefined,
  identified: true,
  flaskRecovery: undefined,
  mirrored: false
}

export { itemText, expectedResult };
