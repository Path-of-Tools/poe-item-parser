[![npm version](https://badge.fury.io/js/poe-item-parser.svg)](https://badge.fury.io/js/poe-item-parser)

# Path of Exile 2 Item Parser

This is a library to help parse items copied (CTRL + C) from in-game.

## Installation

`npm install --save poe-item-parser`

## Usage

```ts
import { PoE2ItemParser } from 'poe-item-parser';

const item = new PoE2Itemparser(`itemtexthere`);
```

## API

| Method       | Description                       | Parameters       | Returns          |
|--------------|-----------------------------------|------------------|------------------|
| `parseItem`  | Parses an item from a string      | `itemString: string` | `Item` object    |

## Types

### Item

```typescript
interface Item {
  itemClass?: string;
  itemLevel?: number;
  itemRarity?: string;
  itemName: ItemName;
  affixes: string[];
  requirements?: ItemRequirement;
  sockets: number;
  runes: string[];
  implicits: string[];
  quality?: number;
  qualityType?: string;
  blockChance?: number;
  stats: ItemStats;
  charmSlots?: number;
  attacksPerSecond?: number;
  criticalHitChance?: number;
  elementalDamage?: ItemDamageRange[];
  physicalDamage?: ItemDamageRange[];
  corrupted?: boolean;
  flavorText?: string;
  duration?: number;
  enchants: string[];
  charges?: ItemCharge;
  identified: boolean;
}

interface ItemCharge {
  consumes: number;
  max: number;
}

interface ItemName {
  lines: string[];
  name: string;
}

interface ItemStats {
  energyShield?: number;
  evasionRating?: number;
  armour?: number;
  spirit?: number;
}

interface ItemRequirement {
  level?: number;
  strength?: number;
  dexterity?: number;
  intelligence?: number;
}

```

### Examples

#### Parsing corrupted unique item

```ts
const itemText = `Item Class: Helmets
Rarity: Unique
Wings of Caelyn
Rusted Greathelm
--------
Quality: +17% (augmented)
Armour: 34 (augmented)
--------
Item Level: 65
--------
11% increased Rarity of Items found
+21 to Dexterity
Gain 1 Rage on Melee Hit
Every Rage also grants 1% increased Stun Threshold
--------
The older brother retained calm in the midst of fury.
--------
Corrupted`

const parsedItem = new PoE2ItemParser(itemText);

console.log(parsedItem)

/*  
{
  itemClass: "Helmets",
  itemLevel: 65,
  itemRarity: "Unique",
  itemName: {
    lines: ["Wings of Caelyn", "Rusted Greathelm"],
    name: "Wings of Caelyn Rusted Greathelm",
  },
  affixes: [
    "11% increased Rarity of Items found",
    "+21 to Dexterity",
    "Gain 1 Rage on Melee Hit",
    "Every Rage also grants 1% increased Stun Threshold",
  ],
  requirements: {
    level: undefined,
    strength: undefined,
    intelligence: undefined,
    dexterity: undefined,
  },
  quality: 17,
  sockets: 0,
  runes: [],
  implicits: [],
  corrupted: true,
  stats: {
    spirit: undefined,
    armour: 34,
    evasionRating: undefined,
    energyShield: undefined,
  },
  enchants: [],
  identified: true,
  flavorText: "The older brother retained calm in the midst of fury."
}
*/

```