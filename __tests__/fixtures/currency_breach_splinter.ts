import { Item } from "../../src/types";

const itemText = `
Item Class: Stackable Currency
Rarity: Currency
Breach Splinter
--------
Stack Size: 25/300
--------
Combine 300 Splinters to create a Breachstone.
Shift click to unstack.
`;

const expectedResult: Item =
{
  itemClass: 'Stackable Currency',
  itemRarity: 'Currency',
  itemLevel: undefined,
  affixes: [],
  corrupted: false,
  flavorText: undefined,
  itemName: { name: 'Breach Splinter', lines: [ 'Breach Splinter' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
  stackSize: { current: 25, max: 300 },
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
  mirrored: false,
  unmodifiable: false,
}

export { itemText, expectedResult };
