(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const formes = new Array(722);
formes[0] = null;
for (let i = 1; i < formes.length; i++) {
  formes[i] = null;
}

formes[25] = [null, 'Rockstar', 'Belle', 'Pop', 'PhD', 'Libre', 'Cosplay'];

formes[202] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '!',
  '?'
];

formes[351] = [null, 'Sunny', 'Rainy', 'Snowy'];

[382, 383].forEach(i => {
  formes[i] = [null, 'Primal'];
});

formes[386] = [null, 'Attack', 'Defense', 'Speed'];

[412, 413].forEach(i => {
  formes[i] = ['Plant', 'Sandy', 'Trash'];
});

formes[421] = ['Overcast', 'Sunshine'];

[422, 423].forEach(i => {
  formes[i] = ['West', 'East'];
});

formes[479] = [null, 'Heat', 'Wash', 'Frost', 'Fan', 'Mow'];

formes[487] = ['Altered', 'Origin'];

formes[492] = ['Land', 'Sky'];

formes[493] = [
  null,
  'Fighting',
  'Flying',
  'Poison',
  'Ground',
  'Rock',
  'Bug',
  'Ghost',
  'Steel',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Psychic',
  'Ice',
  'Dragon',
  'Dark',
  'Fairy'
];

formes[550] = ['Red', 'Blue'];

formes[555] = [null, 'Zen'];

[585, 586].forEach(i => {
  formes[i] = ['Spring', 'Summer', 'Autumn', 'Winter'];
});

[641, 642, 645].forEach(i => {
  formes[i] = ['Incarnate', 'Therian'];
});

[669, 671].forEach(i => {
  formes[i] = ['Red', 'Yellow', 'Orange', 'Blue', 'White'];
});

formes[670] = ['Red', 'Yellow', 'Orange', 'Blue', 'White', 'Eternal'];

formes[646] = [null, 'White', 'Black'];

formes[647] = [null, 'Resolute'];

formes[648] = ['Aria', 'Pirouette'];

formes[649] = [null, 'Douse', 'Shock', 'Burn', 'Chill'];

[664, 665, 666].forEach(i => {
  formes[i] = [
    'Icy Snow',
    'Polar',
    'Tundra',
    'Continental',
    'Garden',
    'Elegant',
    'Meadow',
    'Modern',
    'Marine',
    'Archipelago',
    'High-Plains',
    'Sandstorm',
    'River',
    'Monsoon',
    'Savannah',
    'Sun',
    'Ocean',
    'Jungle',
    'Fancy',
    'Poké Ball'
  ];
});

formes[676] = [null, 'Heart', 'Star', 'Diamond', 'Deputante', 'Matron', 'Dandy', 'La Reine', 'Kabuki', 'Pharaoh'];

formes[681] = ['Shield', 'Blade'];

[710, 711].forEach(i => {
  formes[i] = ['Small', 'Average', 'Large', 'Super'];
});

formes[720] = ['Confined', 'Unbound'];

[
  3,
  9,
  15,
  18,
  65,
  80,
  94,
  115,
  127,
  130,
  142,
  181,
  208,
  212,
  214,
  229,
  248,
  254,
  257,
  260,
  282,
  302,
  303,
  306,
  308,
  310,
  319,
  323,
  334,
  354,
  359,
  362,
  373,
  376,
  380,
  381,
  384,
  428,
  445,
  448,
  460,
  475,
  531,
  719
].forEach(i => {
  formes[i] = [null, 'Mega'];
});

[6, 150].forEach(i => {
  formes[i] = [null, 'Mega X', 'Mega Y'];
});

module.exports = formes;

},{}],2:[function(require,module,exports){
module.exports=[
  null,
  "Sapphire",
  "Ruby",
  "Emerald",
  "FireRed",
  "LeafGreen",
  null,
  "HeartGold",
  "SoulSilver",
  null,
  "Diamond",
  "Pearl",
  "Platinum",
  null,
  null,
  "Colosseum/XD",
  null,
  null,
  null,
  null,
  "White",
  "Black",
  "White 2",
  "Black 2",
  "X",
  "Y",
  "Alpha Sapphire",
  "Omega Ruby"
]

},{}],3:[function(require,module,exports){
module.exports={
  "0": null,
  "1": "Mystery Zone",
  "2": "Faraway place",
  "3": "'s",
  "4": "Nuvema Town",
  "5": "Accumula Town",
  "6": "Striaton City",
  "7": "Nacrene City",
  "8": "Castelia City",
  "9": "Nimbasa City",
  "10": "Driftveil City",
  "11": "Mistralton City",
  "12": "Icirrus City",
  "13": "Opelucid City",
  "14": "Route 1",
  "15": "Route 2",
  "16": "Route 3",
  "17": "Route 4",
  "18": "Route 5",
  "19": "Route 6",
  "20": "Route 7",
  "21": "Route 8",
  "22": "Route 9",
  "23": "Route 10",
  "24": "Route 11",
  "25": "Route 12",
  "26": "Route 13",
  "27": "Route 14",
  "28": "Route 15",
  "29": "Route 16",
  "30": "Route 17",
  "31": "Route 18",
  "32": "Dreamyard",
  "33": "Pinwheel Forest",
  "34": "Desert Resort",
  "35": "Relic Castle",
  "36": "Cold Storage",
  "37": "Chargestone Cave",
  "38": "Twist Mountain",
  "39": "Dragonspiral Tower",
  "40": "Victory Road",
  "41": "Lacunosa Town",
  "42": "Undella Town",
  "43": "Anville Town",
  "44": "Pokémon League",
  "45": "N's Castle",
  "46": "Royal Unova",
  "47": "Gear Station",
  "48": "Battle Subway",
  "49": "Musical Theater",
  "50": "Black City",
  "51": "White Forest",
  "52": "Unity Tower",
  "53": "Wellspring Cave",
  "54": "Mistralton Cave",
  "55": "Rumination Field",
  "56": "Celestial Tower",
  "57": "Moor of Icirrus",
  "58": "Shopping Mall",
  "59": "Challenger's Cave",
  "60": "Poké Transfer Lab",
  "61": "Giant Chasm",
  "62": "Liberty Garden",
  "63": "P2 Laboratory",
  "64": "Skyarrow Bridge",
  "65": "Driftveil Drawbridge",
  "66": "Tubeline Bridge",
  "67": "Village Bridge",
  "68": "Marvelous Bridge",
  "69": "Entralink",
  "70": "Abundant Shrine",
  "71": "Undella Bay",
  "72": "Lostlorn Forest",
  "73": "Trial Chamber",
  "74": "Guidance Chamber",
  "75": "Entree Forest",
  "76": "Nimbasa City (Entralink)",
  "77": "Driftveil City (Entralink)",
  "78": "Mistralton City (Entralink)",
  "79": "Icirrus City (Entralink)",
  "80": "Opelucid City (Entralink)",
  "81": "Nuvema Town (Entralink)",
  "82": "White Forest (Entralink)",
  "83": "Black City (Entralink)",
  "84": "Cold Storage (Entralink)",
  "85": "Chargestone Cave (Entralink)",
  "86": "Twist Mountain (Entralink)",
  "87": "Dragonspiral Tower (Entralink)",
  "88": "Giant Chasm (Entralink)",
  "89": "Driftveil Drawbridge (Entralink)",
  "90": "Tubeline Bridge (Entralink)",
  "91": "Village Bridge (Entralink)",
  "92": "Marvelous Bridge (Entralink)",
  "93": "Route 5 (Entralink)",
  "94": "Route 6 (Entralink)",
  "95": "Route 7 (Entralink)",
  "96": "Route 8 (Entralink)",
  "97": "Route 9 (Entralink)",
  "98": "Route 11 (Entralink)",
  "99": "Route 12 (Entralink)",
  "100": "Route 13 (Entralink)",
  "101": "Route 14 (Entralink)",
  "102": "Route 15 (Entralink)",
  "103": "Route 16 (Entralink)",
  "104": "Lacunosa Town (Entralink)",
  "105": "Undella Town (Entralink)",
  "106": "Accumula Gate",
  "107": "Undella Gate",
  "108": "Nacrene Gate",
  "109": "Castelia Gate",
  "110": "Nimbasa Gate",
  "111": "Opelucid Gate",
  "112": "Black Gate",
  "113": "White Gate",
  "114": "Bridge Gate",
  "115": "Route Gate",
  "116": "Abyssal Ruins",
  "117": "Aspertia City",
  "118": "Virbank City",
  "119": "Humilau City",
  "120": "Pokéstar Studios",
  "121": "Join Avenue",
  "122": "Floccesy Town",
  "123": "Lentimas Town",
  "124": "Route 19",
  "125": "Route 20",
  "126": "Route 21",
  "127": "Route 22",
  "128": "Route 23",
  "129": "Castelia Sewers",
  "130": "Floccesy Ranch",
  "131": "Virbank Complex",
  "132": "Reversal Mountain",
  "133": "Strange House",
  "134": "Victory Road",
  "135": "Plasma Frigate",
  "136": "Relic Passage",
  "137": "Clay Tunnel",
  "138": "----------",
  "139": "White Treehollow",
  "140": "Black Tower",
  "141": "Seaside Cave",
  "142": "Cave of Being",
  "143": "Hidden Grotto",
  "144": "Marine Tube",
  "145": "Virbank Gate",
  "146": "Aspertia Gate",
  "147": "Nature Preserve",
  "148": "Medal Office",
  "149": "Underground Ruins",
  "150": "Rock Peak Chamber",
  "151": "Iceberg Chamber",
  "152": "Iron Chamber",
  "153": "Pledge Grove",
  "30001": "Hoenn/Kanto/Sinnoh/Johto/Distant Land",
  "30002": "Link Trade*",
  "30003": "Link Trade*",
  "30004": "Kanto",
  "30005": "Johto",
  "30006": "Hoenn",
  "30007": "Sinnoh",
  "30008": "Distant Land",
  "30010": "a special place*",
  "30011": "N/A",
  "30012": "a special place*",
  "30013": "N/A",
  "30014": "Entralink",
  "30015": "Pokémon Dream Radar",
  "40001": "Lovely place",
  "40002": "Faraway place",
  "40003": "Pokémon Movie",
  "40004": "Pokémon Movie 10",
  "40005": "Pokémon Movie 11",
  "40006": "Pokémon Movie 12",
  "40007": "Pokémon Movie 13",
  "40008": "Pokémon Movie 14",
  "40009": "Pokémon Movie 15",
  "40010": "Pokémon Movie 16",
  "40011": "Pokémon Movie 17",
  "40012": "Pokémon Movie 18",
  "40013": "Pokémon Movie 19",
  "40014": "Pokémon Movie 20",
  "40015": "Pokémon Center",
  "40016": "Pokémon Cartoon",
  "40017": "PC Tokyo",
  "40018": "PC Osaka",
  "40019": "PC Fukuoka",
  "40020": "PC Nagoya",
  "40021": "PC Sapporo",
  "40022": "PC Yokohama",
  "40023": "WCS",
  "40024": "WCS 2010",
  "40025": "WCS 2011",
  "40026": "WCS 2012",
  "40027": "WCS 2013",
  "40028": "WCS 2014",
  "40029": "WCS 2015",
  "40030": "WCS 2016",
  "40031": "WCS 2017",
  "40032": "WCS 2018",
  "40033": "WCS 2019",
  "40034": "WCS 2020",
  "40035": "Worlds",
  "40036": "Worlds 2010",
  "40037": "Worlds 2011",
  "40038": "Worlds 2012",
  "40039": "Worlds 2013",
  "40040": "Worlds 2014",
  "40041": "Worlds 2015",
  "40042": "Worlds 2016",
  "40043": "Worlds 2017",
  "40044": "Worlds 2018",
  "40045": "Worlds 2019",
  "40046": "Worlds 2020",
  "40047": "VGE",
  "40048": "VGE 2010",
  "40049": "VGE 2011",
  "40050": "VGE 2012",
  "40051": "VGE 2013",
  "40052": "VGE 2014",
  "40053": "VGE 2015",
  "40054": "VGE 2016",
  "40055": "VGE 2017",
  "40056": "VGE 2018",
  "40057": "VGE 2019",
  "40058": "VGE 2020",
  "40059": "Pokémon Event",
  "40060": "Battle Competition",
  "40061": "Game Event",
  "40062": "Pokémon Fan Club",
  "40063": "Pokémon Sunday",
  "40064": "Challenge Plaza",
  "40065": "Battle Challenge",
  "40066": "Trainers' Court",
  "40067": "Battle Tour",
  "40068": "Concert",
  "40069": "Wi-Fi Gift",
  "40070": "Pokémon Ranger",
  "40071": "Ranger Union",
  "40072": "PBR",
  "40073": "Pokémon DW",
  "40074": "Pokémon Event 10",
  "40075": "Pokémon Event 11",
  "40076": "Pokémon Event 12",
  "40077": "Pokémon Event 13",
  "40078": "Pokémon Event 14",
  "40079": "Pokémon Event 15",
  "40080": "Pokémon Event 16",
  "40081": "Pokémon Event 17",
  "40082": "Pokémon Event 18",
  "40083": "Pokémon Event 19",
  "40084": "Pokémon Event 20",
  "40085": "Pokémon Festa",
  "40086": "Pokémon Festa 10",
  "40087": "Pokémon Festa 11",
  "40088": "Pokémon Festa 12",
  "40089": "Pokémon Festa 13",
  "40090": "Pokémon Festa 14",
  "40091": "Pokémon Festa 15",
  "40092": "Pokémon Festa 16",
  "40093": "Pokémon Festa 17",
  "40094": "Pokémon Festa 18",
  "40095": "Pokémon Festa 19",
  "40096": "Pokémon Festa 20",
  "40097": "POKÉPARK",
  "40098": "POKÉPARK 10",
  "40099": "POKÉPARK 11",
  "40100": "POKÉPARK 12",
  "40101": "POKÉPARK 13",
  "40102": "POKÉPARK 14",
  "40103": "POKÉPARK 15",
  "40104": "POKÉPARK 16",
  "40105": "POKÉPARK 17",
  "40106": "POKÉPARK 18",
  "40107": "POKÉPARK 19",
  "40108": "POKÉPARK 20",
  "40109": "Event Site",
  "60001": "Stranger",
  "60002": "Day-Care Couple",
  "60003": "Treasure Hunter"
}

},{}],4:[function(require,module,exports){
module.exports={
  "0": null,
  "2": "Mystery Zone",
  "4": "Faraway place",
  "6": "Vaniville Town",
  "8": "Route 1",
  "9": "Vaniville Pathway",
  "10": "Aquacorde Town",
  "12": "Route 2",
  "13": "Avance Trail",
  "14": "Santalune Forest",
  "16": "Route 3",
  "17": "Ouvert Way",
  "18": "Santalune City",
  "20": "Route 4",
  "21": "Parterre Way",
  "22": "Lumiose City",
  "24": "Lumiose Gym",
  "26": "Lysandre Labs",
  "28": "Route 5",
  "29": "Versant Road",
  "30": "Camphrier Town",
  "32": "Shabboneau Castle",
  "34": "Route 6",
  "35": "Palais Lane",
  "36": "Parfum Palace",
  "38": "Route 7",
  "39": "Rivière Walk",
  "40": "Cyllage City",
  "42": "Route 8",
  "43": "Muraille Coast",
  "44": "Ambrette Town",
  "46": "Route 9",
  "47": "Spikes Passage",
  "48": "Battle Chateau",
  "50": "Route 10",
  "51": "Menhir Trail",
  "52": "Geosenge Town",
  "54": "Route 11",
  "55": "Miroir Way",
  "56": "Reflection Cave",
  "58": "Shalour City",
  "60": "Tower of Mastery",
  "62": "Route 12",
  "63": "Fourrage Road",
  "64": "Coumarine City",
  "66": "Route 13",
  "67": "Lumiose Badlands",
  "68": "Route 14",
  "69": "Laverre Nature Trail",
  "70": "Laverre City",
  "72": "Poké Ball Factory",
  "74": "Route 15",
  "75": "Brun Way",
  "76": "Dendemille Town",
  "78": "Route 16",
  "79": "Mélancolie Path",
  "82": "Frost Cavern",
  "84": "Route 17",
  "85": "Mamoswine Road",
  "86": "Anistar City",
  "88": "Route 18",
  "89": "Vallée Étroite Way",
  "90": "Couriway Town",
  "92": "Route 19",
  "93": "Grande Vallée Way",
  "94": "Snowbelle City",
  "96": "Route 20",
  "97": "Winding Woods",
  "98": "Pokémon Village",
  "100": "Route 21",
  "101": "Dernière Way",
  "102": "Route 22",
  "103": "Détourner Way",
  "104": "Victory Road",
  "106": "Pokémon League",
  "108": "Kiloude City",
  "110": "Battle Maison",
  "112": "Azure Bay",
  "114": "Gate",
  "116": "Gate",
  "118": "Gate",
  "120": "Gate",
  "122": "Gate",
  "124": "Gate",
  "126": "Gate",
  "128": "Gate",
  "130": "Gate",
  "132": "Glittering Cave",
  "134": "Connecting Cave",
  "135": "Connecting Cave",
  "136": "Kalos Power Plant",
  "138": "Team Flare Secret HQ",
  "140": "Terminus Cave",
  "142": "Lost Hotel",
  "144": "Chamber of Emptiness",
  "146": "Sea Spirit's Den",
  "148": "Friend Safari",
  "150": "Blazing Chamber",
  "152": "Flood Chamber",
  "154": "Ironworks Chamber",
  "156": "Dragonmark Chamber",
  "158": "Radiant Chamber",
  "160": "Pokémon League Gate",
  "162": "Lumiose Station",
  "164": "Kiloude Station",
  "166": "Ambrette Aquarium",
  "168": "Unknown Dungeon",
  "170": "Littleroot Town",
  "172": "Oldale Town",
  "174": "Dewford Town",
  "176": "Lavaridge Town",
  "178": "Fallarbor Town",
  "180": "Verdanturf Town",
  "182": "Pacifidlog Town",
  "184": "Petalburg City",
  "186": "Slateport City",
  "188": "Mauville City",
  "190": "Rustboro City",
  "192": "Fortree City",
  "194": "Lilycove City",
  "196": "Mossdeep City",
  "198": "Sootopolis City",
  "200": "Ever Grande City",
  "202": "Pokémon League",
  "204": "Route 101",
  "206": "Route 102",
  "208": "Route 103",
  "210": "Route 104",
  "212": "Route 105",
  "214": "Route 106",
  "216": "Route 107",
  "218": "Route 108",
  "220": "Route 109",
  "222": "Route 110",
  "224": "Route 111",
  "226": "Route 112",
  "228": "Route 113",
  "230": "Route 114",
  "232": "Route 115",
  "234": "Route 116",
  "236": "Route 117",
  "238": "Route 118",
  "240": "Route 119",
  "242": "Route 120",
  "244": "Route 121",
  "246": "Route 122",
  "248": "Route 123",
  "250": "Route 124",
  "252": "Route 125",
  "254": "Route 126",
  "256": "Route 127",
  "258": "Route 128",
  "260": "Route 129",
  "262": "Route 130",
  "264": "Route 131",
  "266": "Route 132",
  "268": "Route 133",
  "270": "Route 134",
  "272": "Meteor Falls",
  "274": "Rusturf Tunnel",
  "276": "???",
  "278": "Desert Ruins",
  "280": "Granite Cave",
  "282": "Petalburg Woods",
  "284": "Mt. Chimney",
  "286": "Jagged Pass",
  "288": "Fiery Path",
  "290": "Mt. Pyre",
  "292": "Team Aqua Hideout",
  "294": "Seafloor Cavern",
  "296": "Cave of Origin",
  "298": "Victory Road",
  "300": "Shoal Cave",
  "302": "New Mauville",
  "304": "Sea Mauville",
  "306": "Island Cave",
  "308": "Ancient Tomb",
  "310": "Sealed Chamber",
  "312": "Scorched Slab",
  "314": "Team Magma Hideout",
  "316": "Sky Pillar",
  "318": "Battle Resort",
  "320": "Southern Island",
  "322": "S.S. Tidal",
  "324": "Safari Zone",
  "326": "Mirage Forests",
  "328": "Mirage Caves",
  "330": "Mirage Islands",
  "332": "Mirage Mountains",
  "334": "Trackless Forest",
  "336": "Pathless Plain",
  "338": "Nameless Cavern",
  "340": "Fabled Cave",
  "342": "Gnarled Den",
  "344": "Crescent Isle",
  "346": "Secret Islet",
  "348": "Soaring in the sky",
  "350": "Secret Shore",
  "352": "Secret Meadow",
  "354": "Secret Base",
  "30001": "a Link Trade",
  "30002": "a Link Trade",
  "30003": "the Kanto region",
  "30004": "the Johto region",
  "30005": "the Hoenn region",
  "30006": "the Sinnoh region",
  "30007": "a distant land",
  "30008": "----------",
  "30009": "the Unova region",
  "30010": "the Kalos region",
  "30011": "Pokémon Link",
  "40001": "a lovely place",
  "40002": "a faraway place",
  "40003": "a Pokémon movie",
  "40004": "Pokémon Movie 13",
  "40005": "Pokémon Movie 14",
  "40006": "Pokémon Movie 15",
  "40007": "Pokémon Movie 16",
  "40008": "Pokémon Movie 17",
  "40009": "Pokémon Movie 18",
  "40010": "a Pokémon Center",
  "40011": "the Pokémon cartoon",
  "40012": "PC Tokyo",
  "40013": "PC Osaka",
  "40014": "PC Fukuoka",
  "40015": "PC Nagoya",
  "40016": "PC Sapporo",
  "40017": "PC Yokohama",
  "40018": "PC Tohoku",
  "40019": "PC Tokyo Bay",
  "40020": "a Pokémon Store",
  "40021": "a WCS",
  "40022": "WCS 2013",
  "40023": "WCS 2014",
  "40024": "WCS 2015",
  "40025": "WCS 2016",
  "40026": "WCS 2017",
  "40027": "WCS 2018",
  "40028": "Worlds",
  "40029": "Worlds 2013",
  "40030": "Worlds 2014",
  "40031": "Worlds 2015",
  "40032": "Worlds 2016",
  "40033": "Worlds 2017",
  "40034": "Worlds 2018",
  "40035": "a VGE",
  "40036": "VGE 2013",
  "40037": "VGE 2014",
  "40038": "VGE 2015",
  "40039": "VGE 2016",
  "40040": "VGE 2017",
  "40041": "VGE 2018",
  "40042": "a Pokémon event",
  "40043": "a Battle Competition",
  "40044": "a game event",
  "40045": "the Pokémon Fan Club",
  "40046": "a Pokémon TV program",
  "40047": "a concert",
  "40048": "an online Present",
  "40049": "the PGL",
  "40050": "Pokémon Event 13",
  "40051": "Pokémon Event 14",
  "40052": "Pokémon Event 15",
  "40053": "Pokémon Event 16",
  "40054": "Pokémon Event 17",
  "40055": "Pokémon Event 18",
  "40056": "Pokémon Festa",
  "40057": "Pokémon Festa 13",
  "40058": "Pokémon Festa 14",
  "40059": "Pokémon Festa 15",
  "40060": "Pokémon Festa 16",
  "40061": "Pokémon Festa 17",
  "40062": "Pokémon Festa 18",
  "40063": "POKÉPARK",
  "40064": "POKÉPARK",
  "40065": "POKÉPARK",
  "40066": "POKÉPARK",
  "40067": "POKÉPARK",
  "40068": "POKÉPARK",
  "40069": "POKÉPARK",
  "40070": "an event site",
  "40071": "GAME FREAK",
  "40072": "a stadium",
  "40073": "a VGC",
  "40074": "the VGC 2013",
  "40075": "the VGC 2014",
  "40076": "the VGC 2015",
  "40077": "the VGC 2016",
  "40078": "the VGC 2017",
  "40079": "the VGC 2018",
  "60001": "a stranger",
  "60002": "Day Care helpers",
  "60003": "a treasure hunter",
  "60004": "an old hot-springs visitor"
}

},{}],5:[function(require,module,exports){
module.exports=[
  null,
  null,
  "Sp. Atk Level 1",
  "HP Level 1","Atk Level 1",
  "Sp. Def Level 1",
  "Speed Level 1",
  "Def Level 1",
  "Sp. Atk Level 2",
  "HP Level 2",
  "Atk Level 2",
  "Sp. Def Level 2",
  "Speed Level 2",
  "Def Level 2",
  "Sp. Atk Level 3",
  "HP Level 3",
  "Atk Level 3",
  "Sp. Def Level 3",
  "Speed Level 3",
  "Def Level 3",
  "The Troubles Keep on Coming?!",
  "The Leaf Stone Cup Begins!",
  "The Fire Stone Cup Begins!",
  "The Water Stone Cup Begins!",
  "Follow Those Fleeing Goals!",
  "Watch Out! That's One Tricky Second Half!",
  "An Opening of Lighting-Quick Attacks!",
  "Those Long Shots Are No Long Shot!",
  "Scatterbug Lugs Back!",
  "A Barrage of Bitbots!",
  "Drag Down Hydreigon!",
  "The Battle for the Best: Version X/Y!"
]

},{}],6:[function(require,module,exports){
module.exports=[
  "Kalos Champ Ribbon",
  "Champion Ribbon",
  "Sinnoh Champ Ribbon",
  "Best Friends Ribbon",
  "Training Ribbon",
  "Skillful Battler Ribbon",
  "Expert Battler Ribbon",
  "Effort Ribbon",
  "Alert Ribbon",
  "Shock Ribbon",
  "Downcast Ribbon",
  "Careless Ribbon",
  "Relax Ribbon",
  "Snooze Ribbon",
  "Smile Ribbon",
  "Gorgeous Ribbon",
  "Royal Ribbon",
  "Gorgeous Royal Ribbon",
  "Artist Ribbon",
  "Footprint Ribbon",
  "Record Ribbon",
  "Legend Ribbon",
  "Country Ribbon",
  "National Ribbon",
  "Earth Ribbon",
  "World Ribbon",
  "Classic Ribbon",
  "Premier Ribbon",
  "Event Ribbon",
  "Birthday Ribbon",
  "Special Ribbon",
  "Souvenir Ribbon",
  "Wishing Ribbon",
  "Battle Champion Ribbon",
  "Regional Champion Ribbon",
  "National Champion Ribbon",
  "World Champion Ribbon",
  null,
  null,
  "Hoenn Champion Ribbon",
  "Contest Star Ribbon",
  "Coolness Master Ribbon",
  "Beauty Master Ribbon",
  "Cuteness Master Ribbon",
  "Cleverness Master Ribbon",
  "Toughness Master Ribbon"
]

},{}],7:[function(require,module,exports){
'use strict';
// Reference: https://projectpokemon.org/wiki/Pokemon_X/Y_3DS_Structure
function stripNullChars (str) {
  return str.replace(/\0.*/, '');
}

function parseMap (data, map) {
  const parsedData = [];
  for (let i = 0; i < map.length; i++, data = Math.floor(data / 2)) {
    if (map[i] && data % 2) {
      parsedData.push(map[i]);
    }
  }
  return parsedData;
}

function checksumIsValid (buf) {
  let sum = 0;
  for (let i = 8; i < 232; i += 2) {
    sum += buf.readUInt16LE(i);
  }
  return (sum & 0xffff) === buf.readUInt16LE(0x06);
}

function getDateFromInt (dateStorage) {
  return dateStorage ? Date.UTC((dateStorage & 0xff) + 2000, (dateStorage >>> 8 & 0xff) - 1, dateStorage >>> 16 & 0xff) : null;
}

exports.parseBuffer = (buf, options) => {
  if (buf.readUInt16LE(0x04) || !checksumIsValid(buf) || [232, 260].indexOf(buf.length) === -1 || buf.readUInt8(0x58) ||
      buf.readUInt8(0x90) || buf.readUInt8(0xc8)) {
    throw new TypeError('The provided buffer is not valid pk6 data');
  }
  options = options || {};
  options.parseNames = !!options.parseNames;

  const data = {};
  data.encryptionConstant = buf.readUInt32LE(0x00);
  data.dexNo = buf.readUInt16LE(0x08);
  data.heldItemId = buf.readUInt16LE(0x0a);
  data.tid = buf.readUInt16LE(0x0c);
  data.sid = buf.readUInt16LE(0x0e);
  data.exp = buf.readUInt32LE(0x10);
  data.abilityId = buf.readUInt8(0x14);
  data.abilityNum = buf.readUInt8(0x15);
  data.superTrainingHitsRemaining = buf.readUInt8(0x16);
  data.superTrainingBag = buf.readUInt8(0x17);
  data.pid = buf.readUInt32LE(0x18);
  data.natureId = buf.readUInt8(0x1c);

  const genderByte = buf.readUInt8(0x1d);
  data.isFatefulEncounter = !!(genderByte & 0x01);
  const isFemale = genderByte & 0x02;
  const isGenderless = genderByte & 0x04;
  data.gender = isFemale ? 'F' : isGenderless ? '' : 'M';
  data.formId = genderByte >>> 3;

  data.evHp = buf.readUInt8(0x1e);
  data.evAtk = buf.readUInt8(0x1f);
  data.evDef = buf.readUInt8(0x20);
  data.evSpe = buf.readUInt8(0x21);
  data.evSpAtk = buf.readUInt8(0x22);
  data.evSpDef = buf.readUInt8(0x23);

  data.contestStatCool = buf.readUInt8(0x24);
  data.contestStatBeauty = buf.readUInt8(0x25);
  data.contestStatCute = buf.readUInt8(0x26);
  data.contestStatSmart = buf.readUInt8(0x27);
  data.contestStatTough = buf.readUInt8(0x28);
  data.contestStatSheen = buf.readUInt8(0x29);

  const markingByte = buf.readUInt8(0x2a);
  data.hasCircleMarking = !!(markingByte & 0x01);
  data.hasTriangleMarking = !!(markingByte & 0x02);
  data.hasSquareMarking = !!(markingByte & 0x04);
  data.hasHeartMarking = !!(markingByte & 0x08);
  data.hasStarMarking = !!(markingByte & 0x10);
  data.hasDiamondMarking = !!(markingByte & 0x20);

  const pokerusByte = buf.readUInt8(0x2b);
  data.pokerusDuration = pokerusByte & 16;
  data.pokerusStrain = pokerusByte >>> 4;

  data.medalData = buf.readUInt32LE(0x2c);
  data.ribbonData = buf.readUIntLE(0x30, 6);
  data.distributionSuperTrainingFlags = buf.readUInt8(0x3a); // TODO: Figure out what these are
  data.nickname = stripNullChars(buf.toString('utf16le', 0x40, 0x58));

  data.move1Id = buf.readUInt16LE(0x5a);
  data.move2Id = buf.readUInt16LE(0x5c);
  data.move3Id = buf.readUInt16LE(0x5e);
  data.move4Id = buf.readUInt16LE(0x60);
  data.move1Pp = buf.readUInt8(0x62);
  data.move2Pp = buf.readUInt8(0x63);
  data.move3Pp = buf.readUInt8(0x64);
  data.move4Pp = buf.readUInt8(0x65);
  data.move1Ppu = buf.readUInt8(0x66);
  data.move2Ppu = buf.readUInt8(0x67);
  data.move3Ppu = buf.readUInt8(0x68);
  data.move4Ppu = buf.readUInt8(0x69);
  data.eggMove1Id = buf.readUInt16LE(0x6a);
  data.eggMove2Id = buf.readUInt16LE(0x6c);
  data.eggMove3Id = buf.readUInt16LE(0x6e);
  data.eggMove4Id = buf.readUInt16LE(0x70);

  data.canDoSecretSuperTraining = !!buf.readUInt8(0x72);

  const ivBytes = buf.readUInt32LE(0x74);
  data.ivHp = ivBytes & 0x1f;
  data.ivAtk = ivBytes >>> 5 & 0x1f;
  data.ivDef = ivBytes >>> 10 & 0x1f;
  data.ivSpe = ivBytes >>> 15 & 0x1f;
  data.ivSpAtk = ivBytes >>> 20 & 0x1f;
  data.ivSpDef = ivBytes >>> 25 & 0x1f;
  data.isEgg = (ivBytes >>> 30) % 2 !== 0;
  data.isNicknamed = (ivBytes >>> 31) % 2 !== 0;

  data.notOt = stripNullChars(buf.toString('utf16le', 0x78, 0x90));
  data.notOtGender = buf.readUInt8(0x92) ? 'F' : 'M';

  data.currentHandlerIsOt = !buf.readUInt8(0x93);

  data.geoLocation1RegionId = buf.readUInt8(0x94);
  data.geoLocation1CountryId = buf.readUInt8(0x95);
  data.geoLocation2RegionId = buf.readUInt8(0x96);
  data.geoLocation2CountryId = buf.readUInt8(0x97);
  data.geoLocation3RegionId = buf.readUInt8(0x98);
  data.geoLocation3CountryId = buf.readUInt8(0x99);
  data.geoLocation4RegionId = buf.readUInt8(0x9a);
  data.geoLocation4CountryId = buf.readUInt8(0x9b);
  data.geoLocation5RegionId = buf.readUInt8(0x9c);
  data.geoLocation5CountryId = buf.readUInt8(0x9d);

  data.notOtFriendship = buf.readUInt8(0xa2);
  data.notOtAffection = buf.readUInt8(0xa3);
  data.notOtMemoryIntensity = buf.readUInt8(0xa4); // TODO: Parse
  data.notOtMemoryLine = buf.readUInt8(0xa5);
  data.notOtMemoryFeeling = buf.readUInt8(0xa6);
  data.notOtMemoryTextVar = buf.readUInt16LE(0xa8);

  data.fullness = buf.readUInt8(0xae);
  data.enjoyment = buf.readUInt8(0xaf);

  data.ot = stripNullChars(buf.toString('utf16le', 0xb0, 0xc8));
  data.otFriendship = buf.readUInt8(0xca);
  data.otAffection = buf.readUInt8(0xcb);
  data.otMemoryIntensity = buf.readUInt8(0xcc); // TODO: Parse
  data.otMemoryLine = buf.readUInt8(0xcd);
  data.otMemoryTextVar = buf.readUInt16LE(0xce);
  data.otMemoryFeeling = buf.readUInt8(0xd0);

  data.eggDate = getDateFromInt(buf.readUIntLE(0xd1, 3));
  data.metDate = getDateFromInt(buf.readUIntLE(0xd4, 3));

  data.eggLocationId = buf.readUInt16LE(0xd8);
  data.metLocationId = buf.readUInt16LE(0xda);
  data.ballId = buf.readUInt8(0xdc);

  const encounterLevelByte = buf.readUInt8(0xdd);
  data.levelMet = encounterLevelByte & 0x7f;
  data.otGender = encounterLevelByte >>> 7 ? 'F' : 'M';

  data.encounterTypeId = buf.readUInt8(0xde);
  data.otGameId = buf.readUInt8(0xdf);
  data.countryId = buf.readUInt8(0xe0); // TODO: Parse
  data.regionId = buf.readUInt8(0xe1); // TODO: Parse
  data.consoleRegion = ['J', 'U', 'E', '?', 'C', 'K', 'T'][buf.readUInt8(0xe2)];
  data.language = [null, 'JPN', 'ENG', 'FRE', 'ITA', 'GER', '???', 'SPA', 'KOR'][buf.readUInt8(0xe3)];
  data._rawPk6 = buf.toString('base64');

  if (options.parseNames) {
    exports.assignReadableNames(data, options.language);
  }

  return data;
};

const levelToExperienceCache = {
  'slow-then-very-fast': {},
  fast: {},
  medium: {},
  'medium-slow': {},
  slow: {},
  'fast-then-very-slow': {}
};

function _baseLevelToExperience (level, growthRate) {
  // Reference: http://bulbapedia.bulbagarden.net/wiki/Experience
  if (growthRate === 'slow-then-very-fast') {
    if (level < 50) {
      return Math.pow(level, 3) * (100 - level) / 50;
    }
    if (level < 68) {
      return Math.pow(level, 3) * (150 - level) / 100;
    }
    if (level < 98) {
      return Math.pow(level, 3) * Math.floor((1911 - 10 * level) / 3) / 500;
    }
    return Math.pow(level, 3) * (160 - level) / 100;
  }
  if (growthRate === 'fast') {
    return 4 / 5 * Math.pow(level, 3);
  }
  if (growthRate === 'medium') {
    return Math.pow(level, 3);
  }
  if (growthRate === 'medium-slow') {
    return 6 / 5 * Math.pow(level, 3) - 15 * Math.pow(level, 2) + 100 * level - 140;
  }
  if (growthRate === 'slow') {
    return 5 / 4 * Math.pow(level, 3);
  }
  if (growthRate === 'fast-then-very-slow') {
    if (level < 15) {
      return Math.pow(level, 3) * (Math.floor((level + 1) / 3) + 24) / 50;
    }
    if (level < 36) {
      return Math.pow(level, 3) * (level + 14) / 50;
    }
    return Math.pow(level, 3) * (Math.floor(level / 2) + 32) / 50;
  }
  return NaN;
}
function convertLevelToExperience (level, growthRate) {
  // Reference: http://bulbapedia.bulbagarden.net/wiki/Experience
  if (!levelToExperienceCache[growthRate]) {
    throw new TypeError(`Unrecognized growth rate '${growthRate}'`);
  }
  if (levelToExperienceCache[growthRate][level] === undefined) {
    levelToExperienceCache[growthRate][level] = Math.floor(_baseLevelToExperience(level, growthRate));
  }
  return levelToExperienceCache[growthRate][level];
}

const experienceToLevelCache = {
  'slow-then-very-fast': {},
  fast: {},
  medium: {},
  'medium-slow': {},
  slow: {},
  'fast-then-very-slow': {}
};

function _baseConvertExperienceToLevelData (exp, growthRate) {
  let i = 1;
  let currentLevelExperience = 0;
  let previousLevelExperience = 0;
  /* Checks all of the levels from 1-100 to find the correct one.
  In theory this could also be done by (a) solving cubic equations to find the level analytically, or (b) using binary search.
  However, given that there are always exactly 100 possible options, any performance improvement from using those would
  be minimal anyway. */
  while (currentLevelExperience <= exp && i <= 100) {
    previousLevelExperience = currentLevelExperience;
    currentLevelExperience = convertLevelToExperience(++i, growthRate);
  }
  return {level: i - 1, expFromPreviousLevel: exp - previousLevelExperience, expToNextLevel: currentLevelExperience - exp};
}

function convertExperienceToLevelData (exp, growthRate) {
  if (!experienceToLevelCache[growthRate]) {
    throw new TypeError(`Unrecognized growth rate '${growthRate}'`);
  }
  if (experienceToLevelCache[growthRate][exp] === undefined) {
    experienceToLevelCache[growthRate][exp] = _baseConvertExperienceToLevelData(exp, growthRate);
  }
  return experienceToLevelCache[growthRate][exp];
}

function abbreviateStat (name) {
  return {
    hp: 'Hp',
    attack: 'Atk',
    defense: 'Def',
    'special-attack': 'SpAtk',
    'special-defense': 'SpDef',
    speed: 'Spe',
    null: null
  }[name];
}

exports.assignReadableNames = (data, language) => {
  const langMap = {ENG: 'en', SPA: 'es', FRE: 'fr', GER: 'de', ITA: 'it', JPN: 'ja', KOR: 'ko'};
  language = language || 'ENG';
  const shortLang = langMap[language];
  if (!shortLang) {
    throw new TypeError(`Invalid language '${language}'`);
  }
  const findName = specificData => specificData && specificData.names.find(d => d.language === shortLang).name;
  const pkmnData = exports.getPokemonData(data.dexNo);
  data.speciesName = findName(pkmnData);
  data.growthRate = pkmnData.growth_rate.name;
  Object.assign(data, convertExperienceToLevelData(data.exp, data.growthRate));
  data.heldItemName = findName(exports.getItemData(data.heldItemId));
  /* For all the pokeballs obtainable in gen 6 (ball IDs 1-16), the ball ID is the same as the item ID for that ball.
  For johto balls (apricorn/sport), the ball IDs are 17-24 and the corresponding item IDs are 492-499, in the same order.
  For dream balls, the ball ID is 25 and the corresponding item ID is 576. */
  const correctedBallId = data.ballId < 17 ? data.ballId : data.ballId === 25 ? 576 : data.ballId + 475;
  data.ballName = findName(exports.getItemData(correctedBallId));
  data.abilityName = findName(exports.getAbilityData(data.abilityId));
  const natureData = exports.getNatureData(data.natureId);
  data.natureName = findName(natureData);
  const alternateForms = require('./data/alternate_forms');
  data.formName = alternateForms[data.dexNo] && alternateForms[data.dexNo][data.formId];
  data.increasedStat = abbreviateStat(natureData.increased_stat && natureData.increased_stat.name);
  data.decreasedStat = abbreviateStat(natureData.decreased_stat && natureData.decreased_stat.name);
  data.move1Name = findName(exports.getMoveData(data.move1Id));
  data.move2Name = findName(exports.getMoveData(data.move2Id));
  data.move3Name = findName(exports.getMoveData(data.move3Id));
  data.move4Name = findName(exports.getMoveData(data.move4Id));
  data.eggMove1Name = findName(exports.getMoveData(data.eggMove1Id));
  data.eggMove2Name = findName(exports.getMoveData(data.eggMove2Id));
  data.eggMove3Name = findName(exports.getMoveData(data.eggMove3Id));
  data.eggMove4Name = findName(exports.getMoveData(data.eggMove4Id));
  data.medals = exports.getMedalData(data.medalData);
  data.ribbons = exports.getRibbonData(data.ribbonData);
  data.eggLocationName = exports.getLocationData(data.eggLocationId, data.otGameId);
  data.metLocationName = exports.getLocationData(data.metLocationId, data.otGameId);
  data.encounterTypeName = exports.getEncounterTypeData(data.encounterTypeId);
  data.otGameName = exports.getGameData(data.otGameId);
  data.tsv = (data.tid ^ data.sid) >>> 4;
  data.esv = (data.pid & 0xffff ^ data.pid >>> 16) >>> 4;
  data.isShiny = data.tsv === data.esv;
  return data;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

exports.getPokemonData = dexNo => {
  try {
    return require(`./data/pokemon/${dexNo}.json`);
  } catch (e) {
    throw new TypeError(`Invalid dex number: ${dexNo}`);
  }
};

exports.getItemData = itemId => {
  if (itemId === 0) {
    return null;
  }
  try {
    return require(`./data/item_gen6/${itemId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid item ID: ${itemId}`);
  }
};

exports.getMoveData = moveId => {
  if (moveId === 0) {
    return null;
  }
  try {
    return require(`./data/move/${moveId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid move ID: ${moveId}`);
  }
};

exports.getAbilityData = abilityId => {
  if (abilityId === 0) {
    return null;
  }
  try {
    return require(`./data/ability/${abilityId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid ability ID: ${abilityId}`);
  }
};

exports.getNatureData = natureId => {
  if (natureId === 0) {
    return null;
  }
  try {
    return require(`./data/nature/${natureId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid nature ID: ${natureId}`);
  }
};

exports.getLocationData = (locationId, otGameId) => {
  if (otGameId >= 24 && otGameId <= 29 || otGameId === undefined) {
    return require('./data/location_gen6.json')[locationId] || null;
  }
  if (otGameId >= 20 && otGameId <= 23) {
    return require('./data/location_gen5.json')[locationId] || null;
  }
  return 'Poké Transfer';
};

exports.getRibbonData = ribbonData => {
  return parseMap(ribbonData, require('./data/ribbons.json'));
};

exports.getMedalData = medalData => {
  return parseMap(medalData, require('./data/medals.json'));
};

exports.getEncounterTypeData = encounterTypeId => {
  return [
    'Pal Park/Egg/Event',
    null,
    'Tall Grass',
    null,
    'Sinjoh Ruins Event',
    'Cave/Hall of Origin',
    null,
    'Surfing/Fishing',
    null,
    'Building',
    'Great Marsh/Safari Zone',
    null,
    'Starter/Gift/Fossil'
  ][encounterTypeId];
};

exports.getGameData = gameId => require('./data/games.json')[gameId];

},{"./data/alternate_forms":1,"./data/games.json":2,"./data/location_gen5.json":3,"./data/location_gen6.json":4,"./data/medals.json":5,"./data/ribbons.json":6,"fs":10}],8:[function(require,module,exports){
;(function (exports) {
  'use strict'

  var i
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  var lookup = []
  for (i = 0; i < code.length; i++) {
    lookup[i] = code[i]
  }
  var revLookup = []

  for (i = 0; i < code.length; ++i) {
    revLookup[code.charCodeAt(i)] = i
  }
  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

  function decode (elt) {
    var v = revLookup[elt.charCodeAt(0)]
    return v !== undefined ? v : -1
  }

  function b64ToByteArray (b64) {
    var i, j, l, tmp, placeHolders, arr

    if (b64.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    var len = b64.length
    placeHolders = b64.charAt(len - 2) === '=' ? 2 : b64.charAt(len - 1) === '=' ? 1 : 0

    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr(b64.length * 3 / 4 - placeHolders)

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? b64.length - 4 : b64.length

    var L = 0

    function push (v) {
      arr[L++] = v
    }

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
      push((tmp & 0xFF0000) >> 16)
      push((tmp & 0xFF00) >> 8)
      push(tmp & 0xFF)
    }

    if (placeHolders === 2) {
      tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
      push(tmp & 0xFF)
    } else if (placeHolders === 1) {
      tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
      push((tmp >> 8) & 0xFF)
      push(tmp & 0xFF)
    }

    return arr
  }

  function encode (num) {
    return lookup[num]
  }

  function tripletToBase64 (num) {
    return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
  }

  function encodeChunk (uint8, start, end) {
    var temp
    var output = []
    for (var i = start; i < end; i += 3) {
      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
      output.push(tripletToBase64(temp))
    }
    return output.join('')
  }

  function uint8ToBase64 (uint8) {
    var i
    var extraBytes = uint8.length % 3 // if we have 1 byte left, pad 2 bytes
    var output = ''
    var parts = []
    var temp, length
    var maxChunkLength = 16383 // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later

    for (i = 0, length = uint8.length - extraBytes; i < length; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > length ? length : (i + maxChunkLength)))
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    switch (extraBytes) {
      case 1:
        temp = uint8[uint8.length - 1]
        output += encode(temp >> 2)
        output += encode((temp << 4) & 0x3F)
        output += '=='
        break
      case 2:
        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
        output += encode(temp >> 10)
        output += encode((temp >> 4) & 0x3F)
        output += encode((temp << 2) & 0x3F)
        output += '='
        break
      default:
        break
    }

    parts.push(output)

    return parts.join('')
  }

  exports.toByteArray = b64ToByteArray
  exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],9:[function(require,module,exports){
(function (Buffer){
/* global Blob, FileReader */

module.exports = function blobToBuffer (blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
    throw new Error('first argument must be a Blob')
  }
  if (typeof cb !== 'function') {
    throw new Error('second argument must be a function')
  }

  var reader = new FileReader()

  function onLoadEnd (e) {
    reader.removeEventListener('loadend', onLoadEnd, false)
    if (e.error) cb(e.error)
    else cb(null, new Buffer(reader.result))
  }

  reader.addEventListener('loadend', onLoadEnd, false)
  reader.readAsArrayBuffer(blob)
}

}).call(this,require("buffer").Buffer)
},{"buffer":11}],10:[function(require,module,exports){

},{}],11:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(array)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":8,"ieee754":13,"isarray":12}],12:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],13:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],14:[function(require,module,exports){
/* eslint-env browser */
'use strict';
function setOutput (obj) {
  document.getElementById('output').innerHTML = obj instanceof Error ? obj : JSON.stringify(obj, null, 4);
}
window.parseFile = fileList => {
  require('blob-to-buffer')(fileList[0].slice(0), (blobErr, result) => {
    try {
      setOutput(blobErr || require('.').parseBuffer(result), null, 4);
    } catch (parseErr) {
      setOutput(parseErr);
    }
  });
};

},{".":7,"blob-to-buffer":9}]},{},[14]);
