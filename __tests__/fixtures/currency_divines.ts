import { Item } from "../../src/types";

const itemText = `
Item Class: Stackable Currency
Rarity: Currency
Divine Orb
--------
Stack Size: 272/10
--------
Randomises the numeric values of modifiers on an item
--------
Right click this item then left click an item to apply it.
Shift click to unstack.

`;

const expectedResult: Item =
{
  itemClass: 'Stackable Currency',
  itemRarity: 'Currency',
  itemLevel: undefined,
  affixes: [
    'Randomises the numeric values of modifiers on an item',
  ],
  corrupted: false,
  flavorText: undefined,
  itemName: { name: 'Divine Orb', lines: [ 'Divine Orb' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
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
  stackSize: { current: 272, max: 10 }
}

export { itemText, expectedResult };
