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
    ELEMENTAL_DAMAGE_PRESENT: /Elemental Damage: (.*)/,
    ELEMENTAL_DAMAGE: /(\d+)-?(\d+)?/g,
    PHYSICAL_DAMAGE_PRESENT: /Physical Damage: (.*)/,
    PHYSICAL_DAMAGE: /(\d+)-(\d+)/g,
    CORRUPTED: /^Corrupted$/m,
    UNIDENTIFIED: /^Unidentified$/m,
    LASTS_X_SECONDS: /Lasts (\d+) Seconds/,
    CHARGE_CONSUMPTION: /Consumes (\d+) of (\d+) Charges on use/,
    NOTE_PRESENT: /Note: (.*)/,
  };