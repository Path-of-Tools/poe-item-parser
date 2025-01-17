import { Item } from "../../src/types";

const itemText = `
Item Class: Waystones
Rarity: Rare
Warped Expedition
Waystone (Tier 16)
--------
Waystone Tier: 16
Waystone Drop Chance: +260% (augmented)
--------
Item Level: 79
--------
Area contains 8 additional packs of Bramble Monsters
29% increased Pack size
Players are Cursed with Temporal Chains
Monsters have 40% chance to Poison on Hit
Monsters have 25% chance to steal Power, Frenzy and Endurance charges on Hit
--------
Can be used in a Map Device, allowing you to enter a Map. Waystones can only be used once.
--------
Corrupted
`;

const expectedResult: Item =
{
  itemClass: 'Waystones',
  itemRarity: 'Rare',
  itemLevel: 79,
  affixes: [
    'Area contains 8 additional packs of Bramble Monsters',
    '29% increased Pack size',
    'Players are Cursed with Temporal Chains',
    'Monsters have 40% chance to Poison on Hit',
    'Monsters have 25% chance to steal Power, Frenzy and Endurance charges on Hit',
  ],
  corrupted: true,
  flavorText: undefined,
  itemName: { name: 'Warped Expedition Waystone (Tier 16)', lines: [ 'Warped Expedition', 'Waystone (Tier 16)' ] },
  requirements: {
    intelligence: undefined,
    strength: undefined,
    dexterity: undefined,
    level: undefined
  },
  waystoneTier: 16,
  waystoneDropChance: 260,
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
