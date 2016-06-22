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

[669, 671].forEach(i => {
  formes[i] = ['Red', 'Yellow', 'Orange', 'Blue', 'White'];
});

formes[670] = ['Red', 'Yellow', 'Orange', 'Blue', 'White', 'Eternal'];

formes[676] = [null, 'Heart', 'Star', 'Diamond', 'Debutante', 'Matron', 'Dandy', 'La Reine', 'Kabuki', 'Pharaoh'];

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
