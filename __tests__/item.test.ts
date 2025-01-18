import fs from "fs";

import { PoE2ItemParser } from "../src/parser";

const filesInDir = fs
    .readdirSync("__tests__/fixtures")
    .filter((f) => f.endsWith(".ts"));

describe("Parsing items", () => {
    for (const file of filesInDir) {
        it(`Should parse ${file}`, () => {
            const { itemText, expectedResult } = require(`./fixtures/${file}`);

            const parser = new PoE2ItemParser(itemText).getItem();

            expect(parser).toEqual(expectedResult);
        })
    }
});