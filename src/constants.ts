export const REGEX = {
    ITEM_CLASS: /Item Class: (.*)/,
    ITEM_RARITY: /Rarity: (.*)/,
    ITEM_LEVEL: /Item Level: (.*)/,
    REQUIREMENT_LEVEL: /^Level: (.*)/m,
    REQUIREMENT_STR: /(?:Str|Strength): (\d+)/,
    REQUIREMENT_DEX: /(?:Dex|Dexterity): (\d+)/,
    REQUIREMENT_INT: /(?:Int|Intelligence): (\d+)/,
    SOCKETS: /Sockets: (.*)/,
    QUALITY: /Quality(?: \(([^)]+)\))?: \+(\d+)%(?: \(augmented\))?/,
    BLOCK_CHANCE: /Block chance: (\d+)%/,
    ENERGY_SHIELD: /Energy Shield: (\d+)/,
    SPIRIT: /Spirit: (\d+)/,
    EVASION_RATING: /Evasion Rating: (\d+)/,
    ARMOUR: /Armour: (\d+)/,
    RUNES: /(.*) \(rune\)/g,
    IMPLICIT: /(.*) \(implicit\)/g,
    ENCHANT: /(.*) \(enchant\)/g,
    CHARM_SLOTS: /Charm Slots: (\d+)/,
    ATTACKS_PER_SECOND: /Attacks per Second: (\d+(\.\d+)?)(?: \(augmented\))?/,
    CRITICAL_HIT_CHANCE: /Critical Hit Chance: (\d+)%?/,
    RELOAD_TIME: /Reload Time: (\d+(\.\d+)?)(?: \(augmented\))?/,
    LIMITED_TO: /Limited to: (\d+)/,
    RADIUS: /Radius: (.*)/,
    FIRE_DAMAGE_PRESENT: /Fire Damage: (.*)/,
    COLD_DAMAGE_PRESENT: /Cold Damage: (.*)/,
    LIGHTNING_DAMAGE_PRESENT: /Lightning Damage: (.*)/,
    ELEMENTAL_DAMAGE_PRESENT: /Elemental Damage: (.*)/,
    ELEMENTAL_DAMAGE: /(\d+)-?(\d+)?/g,
    PHYSICAL_DAMAGE_PRESENT: /Physical Damage: (.*)/,
    PHYSICAL_DAMAGE: /(\d+)-(\d+)/g,
    CORRUPTED: /^Corrupted$/m,
    UNMODIFIABLE: /^Unmodifiable$/m,
    MIRRORED: /^Mirrored$/m,
    UNIDENTIFIED: /^Unidentified$/m,
    LASTS_X_SECONDS: /Lasts (\d+) Seconds/,
    CHARGE_CONSUMPTION: /Consumes (\d+) of (\d+) Charges on use/,
    NOTE_PRESENT: /Note: (.*)/,
    STACK_SIZE: /Stack Size: (\d+)(?:\/(\d+))?/,
    TRIAL_COUNT: /Number of Trials: (\d+)/,
    AREA_LEVEL: /Area Level: (\d+)/,
    SACRED_WATER: /Sacred Water: (\d+)/,
    MINOR_BOONS: /Minor Boons: (.*)/,
    MAJOR_BOONS: /Major Boons: (.*)/,
    MINOR_AFFLICTIONS: /Minor Afflictions: (.*)/,
    MAJOR_AFFLICTIONS: /Major Afflictions: (.*)/,
    WAYSTONE_TIER: /Waystone Tier: (\d+)/,
    WAYSTONE_DROP_CHANCE: /Waystone Drop Chance: \+(\d+)\%(?: \(augmented\))?/,
    RECOVERS_CHARGES: /(?<first>\d+)(?: \(augmented\))? (?<identifier>\w+) over (?<second>\d+(?:,\d+)?)(?: \(augmented\))?/
  };