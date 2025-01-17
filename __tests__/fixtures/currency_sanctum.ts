import { Item } from "../../src/types";

const itemText = `
Item Class: Trial Coins
Rarity: Currency
Djinn Barya
--------
Area Level: 80
Number of Trials: 4
--------
Item Level: 81
--------
"Take me to the Trial of the Sekhemas.
I will serve."
--------
Take this item to the Relic Altar at the Trial of the Sekhemas.
`;

const expectedResult: Item =
{
  itemClass: 'Trial Coins',
  itemRarity: 'Currency',
  itemLevel: 81,
  areaLevel: 80,
  affixes: [],
  corrupted: false,
  flavorText: {
    flavorText: '"Take me to the Trial of the Sekhemas. I will serve."',
    lines: [ '"Take me to the Trial of the Sekhemas.', 'I will serve."']
  },
  itemName: { name: 'Djinn Barya', lines: [ 'Djinn Barya' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
  stackSize: undefined,
  numberOfTrials: 4,
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
