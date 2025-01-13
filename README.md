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