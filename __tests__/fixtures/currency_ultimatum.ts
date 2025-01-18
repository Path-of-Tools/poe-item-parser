import { Item } from "../../src/types";

const itemText = `
Item Class: Inscribed Ultimatum
Rarity: Currency
Inscribed Ultimatum
--------
Area Level: 80
Number of Trials: 10
--------
Item Level: 82
--------
Mortals spend their lives wondering which
fate shall be theirs. Chaos takes amusement
in knowing the answer: all of them.
--------
Take this item to The Temple of Chaos to participate in a Trial of Chaos.
`;

const expectedResult: Item =
{
  itemClass: 'Inscribed Ultimatum',
  itemRarity: 'Currency',
  itemLevel: 82,
  areaLevel: 80,
  affixes: [],
  corrupted: false,
  flavorText: {
    flavorText: 'Mortals spend their lives wondering which fate shall be theirs. Chaos takes amusement in knowing the answer: all of them.',
    lines: [
      'Mortals spend their lives wondering which',
      'fate shall be theirs. Chaos takes amusement',
      'in knowing the answer: all of them.',
    ]
  },
  itemName: { name: 'Inscribed Ultimatum', lines: [ 'Inscribed Ultimatum' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
  stackSize: undefined,
  numberOfTrials: 10,
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
