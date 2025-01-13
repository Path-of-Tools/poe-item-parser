import { PoE2ItemParser } from './src/parser.ts'

const example = `Item Class: Helmets
Rarity: Rare
Behemoth Glance
Expert Wicker Tiara
--------
Quality: +20% (augmented)
Energy Shield: 296 (augmented)
--------
Requirements:
Level: 65
Int: 118
--------
Sockets: S 
--------
Item Level: 80
--------
+40 to maximum Energy Shield
99% increased Energy Shield
+169 to maximum Mana
21% increased Rarity of Items found
+39% to Cold Resistance
+22% to Lightning Resistance
--------
Note: ~price 5 divine`

const example2 = `Item Class: Jewels
Rarity: Rare
Loath Splinter
Sapphire
--------
Item Level: 78
--------
17% increased maximum Energy Shield
4% increased Cast Speed
19% increased Energy Shield Recharge Rate
Gain 6% of maximum Energy Shield as additional Stun Threshold
--------
Place into an allocated Jewel Socket on the Passive Skill Tree. Right click to remove from the Socket.
`

const example3 = `Item Class: Body Armours
Rarity: Unique
Temporalis
Silk Robe
--------
Quality: +20% (augmented)
Energy Shield: 244 (augmented)
--------
Requirements:
Level: 64
Int: 47
--------
Sockets: S S 
--------
Item Level: 82
--------
+142 to maximum Energy Shield
+14% to all Elemental Resistances
15% of Damage taken Recouped as Life
27% of Damage taken Recouped as Mana
Skills have -2.96 seconds to Cooldown
--------
The final element the tale-women
mastered was Time itself.
`

const example4 = `Item Class: Shields
Rarity: Unique
Mahuxotl's Machination
Omen Crest Shield
--------
Quality: +20% (augmented)
Block chance: 25%
Armour: 400 (augmented)
Energy Shield: 152 (augmented)
--------
Requirements:
Level: 48
Str: 37
Int: 37
--------
Sockets: S S S 
--------
Item Level: 82
--------
30% increased Rarity of Items found (rune)
--------
566% increased Armour and Energy Shield
627% increased effect of Socketed Soul Cores
--------
The Banished Architect sought to employ the darkest secrets of the Vaal.
--------
Corrupted`

const example5 = `Item Class: Rings
Rarity: Rare
Empyrean Circle
Amethyst Ring
--------
Quality (Mana Modifiers): +20% (augmented)
--------
Requirements:
Level: 55
--------
Item Level: 77
--------
+11% to Chaos Resistance (implicit)
--------
+54 to Accuracy Rating
+103 to maximum Life
+189 to maximum Mana
20% increased Cast Speed
+15% to all Elemental Resistances
+28% to Fire Resistance
`

const example6 = `Item Class: Quivers
Rarity: Rare
Gloom Bite
Primed Quiver
--------
Requirements:
Level: 51
--------
Item Level: 80
--------
8% increased Attack Speed (implicit)
--------
Adds 6 to 17 Physical Damage to Attacks
Adds 19 to 25 Fire damage to Attacks
Adds 7 to 12 Cold damage to Attacks
10% increased Critical Hit Chance for Attacks
11% increased Critical Damage Bonus for Attack Damage
19% chance to Pierce an Enemy
--------
Can only be equipped if you are wielding a Bow.
`

const x = new PoE2ItemParser(example).getItem();
const y = new PoE2ItemParser(example2).getItem();
const z = new PoE2ItemParser(example3).getItem();
const aa = new PoE2ItemParser(example4).getItem();
const ab = new PoE2ItemParser(example5).getItem();
const ac = new PoE2ItemParser(example6).getItem();

console.log(x)
console.log(y)
console.log(z)
console.log(aa)
console.log(ab)
/* console.log(ac) */