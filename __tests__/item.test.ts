import fs from "fs";

import { PoE2ItemParser } from "../src/parser";

const openFile = (fileName: string) => {
  return fs.readFileSync(`__tests__/data/${fileName}`, "utf-8");
};

describe("Parsing items", () => {
    it("Should parse all test cases", () => {
        const filesInDir = fs.readdirSync("__tests__/data").filter(f => f.endsWith(".txt"));

        filesInDir.forEach((file, i) => {
            const fileContent = openFile(file);
            const item = new PoE2ItemParser(fileContent).getItem();
            const result = JSON.parse(openFile(file.replace(".txt", ".json")));

            expect(item).toEqual(result);
        });
    })
});
