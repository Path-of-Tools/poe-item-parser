export interface ItemRequirement {
  level?: number;
  strength?: number;
  dexterity?: number;
  intelligence?: number;
}

export interface ItemStats {
  energyShield?: number;
  evasionRating?: number;
  armour?: number;
}

export interface ItemDamageRange {
  min: number;
  max?: number;
}

export interface ItemName {
  lines: string[];
  name: string;
}

export interface ItemCharge {
  consumes: number;
  max: number;
}

export interface Item {
  itemClass?: string | undefined;
  itemLevel?: number | undefined;
  itemRarity?: string | undefined;
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
}
