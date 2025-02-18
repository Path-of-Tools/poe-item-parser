import { REGEX } from "./constants";

import {
  type ItemName,
  type Item,
  type ItemRequirement,
  type FlaskRecovery,
} from "./types";

export class PoE2ItemParser {
  private iLevelIndex: number = -1;
  private iRarityIndex: number = -1;
  private itemClass?: string;
  private corrupted?: boolean;
  private mirrored?: boolean;
  private identified?: boolean;
  private rarity?: Item["itemRarity"];
  private indexesOfDashes: number[] = [];
  private hasNote: boolean = false;

  constructor(private input: string) {
    this.fixIfUnfulfilledRequirements();

    this.indexesOfDashes = this.getIndexesOf("--------");
    this.hasNote = this.parseItemNote();
  }

  // Some types have some extra text below them
  private hasTutorialText(): boolean | undefined {
    if (!this.itemClass) {
      this.parseItemClass();
    }

    return (
      (this.itemClass &&
        ["Jewels", "Quivers", "Relics"].includes(this.itemClass)) ||
      this.itemClass?.endsWith("Flasks")
    );
  }

  private fixIfUnfulfilledRequirements() {
    if (
      this.input.includes("You cannot use this item. Its stats will be ignored")
    ) {
      this.input = this.input
        .replace("You cannot use this item. Its stats will be ignored", "")
        .replace("--------", "");
    }
  }

  private parseItemNote(): boolean {
    const match = this.input.match(REGEX.NOTE_PRESENT);

    return !!match;
  }

  public parseItemClass(): Item["itemClass"] {
    const match = this.input.match(REGEX.ITEM_CLASS);

    const result = match ? match[1] : undefined;

    this.itemClass = result;

    return result;
  }

  public parseItemLevel(): Item["itemLevel"] {
    const match = this.input.match(REGEX.ITEM_LEVEL);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    this.iLevelIndex = this.input.indexOf(match[0]) + match[0].length;

    return Number(content);
  }

  public parseRarity(): Item["itemRarity"] {
    const match = this.input.match(REGEX.ITEM_RARITY);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    this.iRarityIndex = this.input.indexOf(match[0]) + match[0].length;

    this.rarity = content;

    return content;
  }

  public parseCorrupted(): Item["corrupted"] {
    const match = this.input.match(REGEX.CORRUPTED);

    this.corrupted = !!match;

    return !!match;
  }

  public parseMirrored(): Item["mirrored"] {
    const match = this.input.match(REGEX.MIRRORED);

    this.mirrored = !!match;

    return !!match;
  }

  public parseItemName(): ItemName {
    let startSearchIndex = this.iRarityIndex || this.iLevelIndex;

    if (!startSearchIndex) {
      // Rarity should always be present, but... I should maybe catch any errors here afterwards?
      this.parseRarity();
    }

    const nextDashIndex = this.input.indexOf("--", startSearchIndex);

    const content = this.input.slice(startSearchIndex, nextDashIndex);

    return {
      name: content.replaceAll("\n", " ").trim(),
      lines: content.split("\n").filter((line) => line !== ""),
    };
  }

  private getIndexesOf(search: string): number[] {
    const indexes: number[] = [];
    let startIndex = 0;

    while (startIndex < this.input.length) {
      const index = this.input.indexOf(search, startIndex);
      if (index === -1) break;
      indexes.push(index);
      startIndex = index + 1;
    }

    return indexes;
  }

  public parseAffixes(): Item["affixes"] {
    if (this.identified === undefined) {
      this.identified = this.parseIdentified();

      if (!this.identified) {
        return [];
      }
    }

    if (this.corrupted === undefined) {
      this.corrupted = this.parseCorrupted();
    }

    if (this.mirrored === undefined) {
      this.mirrored = this.parseMirrored();
    }

    if (!this.rarity) {
      this.parseRarity();
    }

    if (!this.itemClass) {
      this.parseItemClass();
    }

    if (this.rarity === "Normal") {
      return [];
    }

    let indexFrom = -1;
    let extraOffset = 0;

    if (this.hasNote) {
      extraOffset += 1;
    }

    if (this.hasTutorialText()) {
      extraOffset += 1;
    }

    if (this.rarity === "Unique") {
      // If rarity is unique, we also have to deal with the flavor text...
      if (this.corrupted) {
        indexFrom =
          this.indexesOfDashes[this.indexesOfDashes.length - 3 - extraOffset];
      } else {
        indexFrom =
          this.indexesOfDashes[this.indexesOfDashes.length - 2 - extraOffset];
      }
    } else if (!this.corrupted && !this.mirrored) {
      indexFrom =
        this.indexesOfDashes[this.indexesOfDashes.length - 1 - extraOffset];
    } else {
      let localOffset = 0;

      if (this.corrupted) {
        localOffset += 1;
      }

      if (this.mirrored) {
        localOffset += 1;
      }

      indexFrom =
        this.indexesOfDashes[this.indexesOfDashes.length - 1 - extraOffset - localOffset];
    }

    const nextLineBreak = this.input.indexOf("\n", indexFrom);
    let nextDash = this.input.indexOf("--", nextLineBreak);

    if (nextDash === -1) {
      nextDash = this.input.length;
    }

    const input = this.input.slice(nextLineBreak, nextDash).split("\n");

    return input
      .filter((line) => line !== "")
      .map((affix) => this.parseAffix(affix));
  }

  protected parseAffix(affix: string): string {
    let indexLBrace = affix.indexOf("[");

    while (indexLBrace !== -1) {
      const indexRBrace = affix.indexOf("]", indexLBrace + 1);

      if (indexRBrace === -1) {
        return affix;
      }

      const property = affix.slice(indexLBrace + 1, indexRBrace);

      const splitProperty = property.split("|");

      affix = affix.replace(`[${property}]`, splitProperty[0]);

      indexLBrace = affix.indexOf("[", indexLBrace + 1);
    }

    return affix;
  }

  protected parseIntelligenceRequirement(): ItemRequirement["intelligence"] {
    const match = this.input.match(REGEX.REQUIREMENT_INT);

    return match ? Number(match[1]) : undefined;
  }

  protected parseStrengthRequirement(): ItemRequirement["strength"] {
    const match = this.input.match(REGEX.REQUIREMENT_STR);

    return match ? Number(match[1]) : undefined;
  }

  protected parseDexterityRequirement(): ItemRequirement["dexterity"] {
    const match = this.input.match(REGEX.REQUIREMENT_DEX);

    return match ? Number(match[1]) : undefined;
  }

  public parseLevelRequirement(): ItemRequirement["level"] {
    const match = this.input.match(REGEX.REQUIREMENT_LEVEL);

    return match ? Number(match[1]) : undefined;
  }

  public parseSockets(): Item["sockets"] {
    const match = this.input.match(REGEX.SOCKETS);

    const sockets = match ? match[1] : undefined;

    if (!sockets) {
      return 0;
    }

    return sockets.trim().split(" ").length;
  }

  public parseRunes(): Item["runes"] {
    const runes = this.input.matchAll(REGEX.RUNES);

    return Array.from(runes).map((rune) => rune[1]);
  }

  public parseImplicits(): Item["implicits"] {
    const implicits = this.input.matchAll(REGEX.IMPLICIT);

    return Array.from(implicits).map((implicit) => implicit[1]);
  }

  public parseQuality(): Item["quality"] {
    const match = REGEX.QUALITY.exec(this.input);

    if (!match) {
      return undefined;
    }

    return Number(match[2]);
  }

  public parseQualityType(): Item["qualityType"] {
    const match = REGEX.QUALITY.exec(this.input);

    return match ? match[1] : undefined;
  }

  public parseEnergyShield(): Item["stats"]["energyShield"] {
    const match = this.input.match(REGEX.ENERGY_SHIELD);

    return match ? Number(match[1]) : undefined;
  }

  public parseEvasionRating(): Item["stats"]["evasionRating"] {
    const match = this.input.match(REGEX.EVASION_RATING);

    return match ? Number(match[1]) : undefined;
  }

  public parseArmour(): Item["stats"]["armour"] {
    const match = this.input.match(REGEX.ARMOUR);

    return match ? Number(match[1]) : undefined;
  }

  public parseCharmSlots(): Item["charmSlots"] {
    const match = this.input.match(REGEX.CHARM_SLOTS);

    return match ? Number(match[1]) : undefined;
  }

  public parseAttacksPerSecond(): Item["attacksPerSecond"] {
    const match = this.input.match(REGEX.ATTACKS_PER_SECOND);

    return match ? Number(match[1]) : undefined;
  }

  public parseCriticalHitChance(): Item["criticalHitChance"] {
    const match = this.input.match(REGEX.CRITICAL_HIT_CHANCE);

    return match ? Number(match[1]) : undefined;
  }

  public parseReloadTime(): Item["reloadTime"] {
    const match = this.input.match(REGEX.RELOAD_TIME);

    return match ? Number(match[1]) : undefined;
  }

  public parseLimitedTo(): Item["limitedTo"] {
    const match = this.input.match(REGEX.LIMITED_TO);

    return match ? Number(match[1]) : undefined;
  }

  public parseRadius(): Item["radius"] {
    const match = this.input.match(REGEX.RADIUS);

    return match ? match[1] : undefined;
  }

  public parseElementalDamage(): Item["elementalDamage"] {
    const match = this.input.match(REGEX.ELEMENTAL_DAMAGE_PRESENT);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    const elementalDamage = content.matchAll(REGEX.ELEMENTAL_DAMAGE);

    return Array.from(elementalDamage).map((damage) => {
      return {
        min: Number(damage[1]),
        max: damage[2] ? Number(damage[2]) : undefined,
      };
    });
  }

  public parseFireDamage(): Item["fireDamage"] {
    const match = this.input.match(REGEX.FIRE_DAMAGE_PRESENT);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    const elementalDamage = content.matchAll(REGEX.ELEMENTAL_DAMAGE);

    return Array.from(elementalDamage).map((damage) => {
      return {
        min: Number(damage[1]),
        max: Number(damage[2]),
      };
    });
  }

  public parseColdDamage(): Item["coldDamage"] {
    const match = this.input.match(REGEX.COLD_DAMAGE_PRESENT);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    const elementalDamage = content.matchAll(REGEX.ELEMENTAL_DAMAGE);

    return Array.from(elementalDamage).map((damage) => {
      return {
        min: Number(damage[1]),
        max: Number(damage[2]),
      };
    });
  }

  public parseLightningDamage(): Item["lightningDamage"] {
    const match = this.input.match(REGEX.LIGHTNING_DAMAGE_PRESENT);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    const elementalDamage = content.matchAll(REGEX.ELEMENTAL_DAMAGE);

    return Array.from(elementalDamage).map((damage) => {
      return {
        min: Number(damage[1]),
        max: Number(damage[2]),
      };
    });
  }

  public parsePhysicalDamage(): Item["physicalDamage"] {
    const match = this.input.match(REGEX.PHYSICAL_DAMAGE_PRESENT);

    if (!match) {
      return undefined;
    }

    const content = match[1];

    const physicalDamage = content.matchAll(REGEX.PHYSICAL_DAMAGE);

    return Array.from(physicalDamage).map((damage) => {
      return {
        min: Number(damage[1]),
        max: Number(damage[2]),
      };
    });
  }

  public parseFlavorText(): Item["flavorText"] {
    if (!this.corrupted) {
      this.corrupted = this.parseCorrupted();
    }

    const rarity = this.parseRarity();

    if (rarity !== "Unique") {
      // Not sure if any non-unique items has any flavor text, so for now this will do...
      return undefined;
    }

    if (!this.itemClass) {
      this.parseItemClass();
    }

    const indexesOfDashes = this.getIndexesOf("--------");

    let indexFrom = -1;
    let extraOffset = 0;

    if (this.hasNote) {
      extraOffset += 1;
    }

    if (this.hasTutorialText()) {
      extraOffset += 1;
    }

    if (this.corrupted) {
      indexFrom = indexesOfDashes[indexesOfDashes.length - 2 - extraOffset];
    } else {
      indexFrom = indexesOfDashes[indexesOfDashes.length - 1 - extraOffset];
    }

    const nextLineBreak = this.input.indexOf("\n", indexFrom);
    let nextDash = this.input.indexOf("--", nextLineBreak);

    if (nextDash === -1) {
      nextDash = this.input.length;
    }

    const value = this.input.slice(nextLineBreak, nextDash).trim();

    return {
      flavorText: value.replace("\n", " ").trim(),
      lines: value.split("\n").filter((line) => line !== ""),
    };
  }

  public parseDuration(): Item["duration"] {
    const match = this.input.match(REGEX.LASTS_X_SECONDS);

    return match ? Number(match[1]) : undefined;
  }

  public parseChargeConsumption(): Item["charges"] {
    const match = this.input.match(REGEX.CHARGE_CONSUMPTION);

    return match
      ? { consumes: Number(match[1]), max: Number(match[2]) }
      : undefined;
  }

  public parseEnchants(): Item["enchants"] {
    const enchants = this.input.matchAll(REGEX.ENCHANT);

    return Array.from(enchants).map((enchant) => enchant[1]);
  }

  public parseBlockChance(): Item["blockChance"] {
    const match = this.input.match(REGEX.BLOCK_CHANCE);

    return match ? Number(match[1]) : undefined;
  }

  public parseIdentified(): boolean {
    const match = this.input.match(REGEX.UNIDENTIFIED);

    return !match;
  }

  public parseSpirit(): Item["stats"]["spirit"] {
    const match = this.input.match(REGEX.SPIRIT);

    return match ? Number(match[1]) : undefined;
  }

  // Dirty, but does the job!
  public parseFlaskRecovery(): Item["flaskRecovery"] {
    const match = this.input.match(REGEX.RECOVERS_CHARGES);

    if (!match) {
      return undefined;
    }

    const output: FlaskRecovery = {
      over: Number(match.groups?.second.replace(",", ".")),
    };

    switch (match.groups?.identifier) {
      case "Mana":
        output.mana = Number(match.groups?.first);
        break;
      case "Life":
        output.life = Number(match.groups?.first);
        break;
      case "Energy Shield":
        output.energyShield = Number(match.groups?.first);
        break;
      default:
        return undefined;
    }

    return output;
  }

  getItem(): Item {
    return {
      itemClass: this.parseItemClass(),
      itemRarity: this.parseRarity(),
      itemLevel: this.parseItemLevel(),
      affixes: this.parseAffixes(),
      corrupted: this.parseCorrupted(),
      flavorText: this.parseFlavorText(),
      itemName: this.parseItemName(),
      requirements: {
        intelligence: this.parseIntelligenceRequirement(),
        strength: this.parseStrengthRequirement(),
        dexterity: this.parseDexterityRequirement(),
        level: this.parseLevelRequirement(),
      },
      sockets: this.parseSockets(),
      runes: this.parseRunes(),
      implicits: this.parseImplicits(),
      quality: this.parseQuality(),
      qualityType: this.parseQualityType(),
      stats: {
        energyShield: this.parseEnergyShield(),
        evasionRating: this.parseEvasionRating(),
        armour: this.parseArmour(),
        spirit: this.parseSpirit(),
      },
      charmSlots: this.parseCharmSlots(),
      attacksPerSecond: this.parseAttacksPerSecond(),
      criticalHitChance: this.parseCriticalHitChance(),
      reloadTime: this.parseReloadTime(),
      limitedTo: this.parseLimitedTo(),
      radius: this.parseRadius(),
      elementalDamage: this.parseElementalDamage(),
      fireDamage: this.parseFireDamage(),
      coldDamage: this.parseColdDamage(),
      lightningDamage: this.parseLightningDamage(),
      physicalDamage: this.parsePhysicalDamage(),
      duration: this.parseDuration(),
      charges: this.parseChargeConsumption(),
      enchants: this.parseEnchants(),
      blockChance: this.parseBlockChance(),
      identified: this.parseIdentified(),
      flaskRecovery: this.parseFlaskRecovery(),
      mirrored: this.parseMirrored(),
    };
  }
}
