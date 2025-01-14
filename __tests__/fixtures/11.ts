import { Item } from "../../src/types";

const itemText = `Item Class: Jewels
Rarity: Unique
Against the Darkness
Time-Lost Diamond
--------
Limited to: 1
Radius: Large
--------
Item Level: 82
--------
Small Passive Skills in Radius also grant 1% increased maximum Life
Small Passive Skills in Radius also grant 1% increased maximum Mana
--------
After the fires, in the depths of the Winter of the World, all life in the Vastiri banded together. Whether serpent, hyena, human, or golem, hated enemies clasped hand to claw, built refuge, and fought side by side against the Abyssals. Thus, the Third Pact was born.
--------
Place into an allocated Jewel Socket on the Passive Skill Tree. Right click to remove from the Socket.
--------
Corrupted`;

const expectedResult: Item = {
  itemClass: 'Jewels',
  itemRarity: 'Unique',
  itemLevel: 82,
  affixes: [
    'Small Passive Skills in Radius also grant 1% increased maximum Life',
    'Small Passive Skills in Radius also grant 1% increased maximum Mana'
  ],
  corrupted: true,
  flavorText: {
    flavorText: 'Place into an allocated Jewel Socket on the Passive Skill Tree. Right click to remove from the Socket.',
    lines: [
      'Place into an allocated Jewel Socket on the Passive Skill Tree. Right click to remove from the Socket.'
    ]
  },
  itemName: {
    name: 'Against the Darkness Time-Lost Diamond',
    lines: [ 'Against the Darkness', 'Time-Lost Diamond' ]
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
  limitedTo: 1,
  radius: 'Large',
  elementalDamage: undefined,
  physicalDamage: undefined,
  duration: undefined,
  charges: undefined,
  enchants: [],
  blockChance: undefined,
  identified: true
}

export { itemText, expectedResult };
