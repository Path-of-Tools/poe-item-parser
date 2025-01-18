import { Item } from "../../src/types";

const itemText = `
Item Class: Trial Coins
Rarity: Normal
Test of Will Barya
--------
Area Level: 53
Sacred Water: 463
Minor Boons: Fountain of Youth
Major Boons: Earned Honour
Minor Afflictions: Low Rivers, Gate Toll, Trade Tariff, Golden Smoke
Major Afflictions: Death Toll
--------
Item Level: 52
--------
Hits against you have 15% reduced Critical Damage Bonus
14% increased quantity of Keys dropped by Monsters
+18% to Honour Resistance
43% increased maximum Honour
--------
The world will seek to crush you and yours.
A Sekhema must have relentless will.
--------
Right click this item to view details of the Trials in progress. Take this item to the Relic Altar in the Trial of the Sekhemas to enter.
--------
Unmodifiable
`;

const expectedResult: Item =
{
  itemClass: 'Trial Coins',
  itemRarity: 'Normal',
  itemLevel: 52,
  areaLevel: 53,
  affixes: [
    'Hits against you have 15% reduced Critical Damage Bonus',
    '14% increased quantity of Keys dropped by Monsters',
    '+18% to Honour Resistance',
    '43% increased maximum Honour',
  ],
  corrupted: false,
  flavorText: { flavorText: 'The world will seek to crush you and yours. A Sekhema must have relentless will.', lines: [ 'The world will seek to crush you and yours.', 'A Sekhema must have relentless will.' ] },
  itemName: { name: 'Test of Will Barya', lines: [ 'Test of Will Barya' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
  stackSize: undefined,
  numberOfTrials: undefined,
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
  sanctum: {
    sacredWater: 463,
    minorBoons: [ 'Fountain of Youth' ],
    majorBoons: [ 'Earned Honour' ],
    minorAfflictions: [ 'Low Rivers', 'Gate Toll', 'Trade Tariff', 'Golden Smoke' ],
    majorAfflictions: [ 'Death Toll' ],
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
  mirrored: false,
  unmodifiable: true,
}

export { itemText, expectedResult };
