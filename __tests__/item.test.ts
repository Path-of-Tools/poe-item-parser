import fs from "fs";

import { PoE2ItemParser } from "../src/parser";

describe("Parsing items", () => {
    it("Should parse all test cases", () => {
      const filesInDir = fs
        .readdirSync("__tests__/fixtures")
        .filter((f) => f.endsWith(".ts"));

        for(const file of filesInDir) {
            const { itemText, expectedResult } = require(`./fixtures/${file}`);

            const parser = new PoE2ItemParser(itemText).getItem();

            expect(parser).toEqual(expectedResult);
        }   
    })
});
