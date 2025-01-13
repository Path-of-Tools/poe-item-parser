import fs from "fs";

import { PoE2ItemParser } from "../src/parser";

const openFile = (fileName: string) => {
  return fs.readFileSync(`__tests__/data/${fileName}`, "utf-8");
};

describe("Parsing items", () => {
  it("Should parse test case one", () => {
    const file = openFile("1.txt");

    const parsedItem = new PoE2ItemParser(file).getItem();

    expect(parsedItem).toEqual({
      itemClass: "Body Armours",
      itemLevel: 66,
      itemRarity: "Rare",
      itemName: {
        lines: ["Empyrean Mantle", "Expert Hexer's Robe"],
        name: "Empyrean Mantle Expert Hexer's Robe",
      },
      affixes: [
        "+77 to maximum Energy Shield",
        "55% increased Energy Shield",
        "+40 to maximum Life",
        "+25% to Fire Resistance",
        "+29% to Lightning Resistance",
        "+220 to Stun Threshold",
      ],
      requirements: {
        level: 65,
        intelligence: 157,
        dexterity: undefined,
        strength: undefined,
      },
      sockets: 2,
      runes: ["+24% to Cold Resistance"],
      implicits: [],
      quality: 20,
      qualityType: undefined,
      blockChance: undefined,
      stats: {
        energyShield: 485,
        evasionRating: undefined,
        armour: undefined,
      },
      charmSlots: undefined,
      attacksPerSecond: undefined,
      criticalHitChance: undefined,
      elementalDamage: undefined,
      physicalDamage: undefined,
      corrupted: false,
      flavorText: undefined,
      duration: undefined,
      enchants: [],
      charges: undefined,
    });
  });
});
