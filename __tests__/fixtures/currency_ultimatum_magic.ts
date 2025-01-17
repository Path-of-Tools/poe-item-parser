import { Item } from "../../src/types";

const itemText = `
Item Class: Inscribed Ultimatum
Rarity: Magic
Vaal Inscribed Ultimatum of Suffocation
--------
Area Level: 80
Number of Trials: 10
--------
Item Level: 82
--------
Sacrifice up to 10 Vaal Orbs to receive double on Trial completion
Players have 60% less Recovery Rate of Life, Mana and Energy Shield
--------
Mortals spend their lives wondering which
fate shall be theirs. Chaos takes amusement
in knowing the answer: all of them.
--------
Take this item to The Temple of Chaos to participate in a Trial of Chaos.
--------
Corrupted
`;

const expectedResult: Item =
{
  itemClass: 'Inscribed Ultimatum',
  itemRarity: 'Magic',
  itemLevel: 82,
  areaLevel: 80,
  affixes: [
    "Sacrifice up to 10 Vaal Orbs to receive double on Trial completion",
    "Players have 60% less Recovery Rate of Life, Mana and Energy Shield",
  ],
  corrupted: true,
  flavorText: {
    flavorText: 'Mortals spend their lives wondering which fate shall be theirs. Chaos takes amusement in knowing the answer: all of them.',
    lines: [
      "Mortals spend their lives wondering which",
      "fate shall be theirs. Chaos takes amusement",
      "in knowing the answer: all of them.",
    ]
  },
  itemName: {
    name: 'Vaal Inscribed Ultimatum of Suffocation',
    lines: [ 'Vaal Inscribed Ultimatum of Suffocation' ]
  },
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
