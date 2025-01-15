import { Item } from "../../src/types";

const itemText = `Item Class: Relics
Rarity: Magic
Punishing Incense Relic of Bestowing
--------
Item Level: 79
--------
Monsters take 19% increased Damage
Restore 57 Honour on picking up a Key
--------
Place this item on the Relic Altar at the start of the Trial of the Sekhemas`;

const expectedResult: Item = {
  itemClass: 'Relics',
  itemRarity: 'Magic',
  itemLevel: 79,
  affixes: [
    "Monsters take 19% increased Damage",
    "Restore 57 Honour on picking up a Key",
  ],
  corrupted: false,
  flavorText: undefined,
  itemName: {
    name: 'Punishing Incense Relic of Bestowing',
    lines: [ 'Punishing Incense Relic of Bestowing' ]
  },
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
  charmSlots: undefined,
  attacksPerSecond: undefined,
  criticalHitChance: undefined,
  reloadTime: undefined,
  limitedTo: undefined,
  radius: undefined,
  elementalDamage: undefined,
  physicalDamage: undefined,
  duration: undefined,
  charges: undefined,
  enchants: [],
  blockChance: undefined,
  identified: true,
  flaskRecovery: undefined
}

export { itemText, expectedResult };
