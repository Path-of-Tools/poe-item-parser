import { Item } from "../../src/types";

const itemText = `
Item Class: Waystones
Rarity: Magic
Waystone (Tier 15)
--------
Waystone Tier: 15
--------
Item Level: 79
--------
Players in Area are 68% Delirious (enchant)
30% increased Precursor Tablets found in Area (enchant)
--------
Unidentified
--------
Can be used in a Map Device, allowing you to enter a Map. Waystones can only be used once.
`;

const expectedResult: Item =
{
  itemClass: 'Waystones',
  itemRarity: 'Magic',
  itemLevel: 79,
  affixes: [],
  corrupted: false,
  flavorText: undefined,
  itemName: { name: 'Waystone (Tier 15)', lines: [ 'Waystone (Tier 15)' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
  waystoneTier: 15,
  waystoneDropChance: undefined,
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
  enchants: [
    'Players in Area are 68% Delirious',
    '30% increased Precursor Tablets found in Area'
  ],
  blockChance: undefined,
  identified: false,
  flaskRecovery: undefined,
  mirrored: false,
  unmodifiable: false,
}

export { itemText, expectedResult };
