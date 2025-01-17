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
  spirit?: number;
}

export interface ItemDamageRange {
  min: number;
  max?: number;
}

export interface ItemName {
  name: string;
  lines: string[];
}

export interface ItemFlavorText {
  flavorText: string;
  lines: string[];
}

export interface ItemCharge {
  consumes: number;
  max: number;
}

export interface FlaskRecovery {
  life?: number;
  mana?: number;
  energyShield?: number;
  over: number;
}

export interface StackSize {
  current: number;
  max?: number;
}

export interface Sanctum {
  sacredWater?: number,
  minorBoons?: string[] | undefined ;
  majorBoons?: string[] | undefined ;
  minorAfflictions?: string[] | undefined ;
  majorAfflictions?: string[] | undefined ;
}

export interface Item {
  itemClass?: string | undefined;
  itemLevel?: number | undefined;
  itemRarity?: string | undefined;
  itemName: ItemName;
  affixes: string[];
  requirements?: ItemRequirement;
  stackSize?: StackSize;
  numberOfTrials?: number;
  areaLevel?: number;
  sockets: number;
  runes: string[];
  implicits: string[];
  quality?: number;
  qualityType?: string;
  blockChance?: number;
  stats: ItemStats;
  sanctum: Sanctum;
  charmSlots?: number;
  attacksPerSecond?: number;
  criticalHitChance?: number;
  reloadTime?: number;
  limitedTo?: number;
  radius?: string | undefined;
  elementalDamage?: ItemDamageRange[];
  fireDamage?: ItemDamageRange[];
  coldDamage?: ItemDamageRange[];
  lightningDamage?: ItemDamageRange[];
  physicalDamage?: ItemDamageRange[];
  corrupted?: boolean;
  flavorText?: ItemFlavorText;
  duration?: number;
  enchants: string[];
  charges?: ItemCharge;
  flaskRecovery?: FlaskRecovery;
  identified: boolean;
  mirrored: boolean;
  unmodifiable: boolean;
}
