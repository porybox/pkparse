(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const formes = new Array(722);
formes[0] = null;
for (let i = 1; i < formes.length; i++) {
  formes[i] = null;
}

formes[25] = [null, 'Rockstar', 'Belle', 'Pop', 'PhD', 'Libre', 'Cosplay'];

formes[201] = [
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
    'High Plains',
    'Sandstorm',
    'River',
    'Monsoon',
    'Savanna',
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

},{}],2:[function(require,module,exports){
module.exports=[
  null,
  {
    "JPN": "日本",
    "ENG": "Japan",
    "FRE": "Japon",
    "GER": "Japan",
    "ITA": "Giappone",
    "SPA": "Japón",
    "CHN": "日本",
    "KOR": "일본"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "アンギラ",
    "ENG": "Anguilla",
    "FRE": "Anguilla",
    "GER": "Anguilla",
    "ITA": "Anguilla",
    "SPA": "Anguila",
    "CHN": "安圭拉",
    "KOR": "앵귈라"
  },
  {
    "JPN": "アンティグア・バーブーダ",
    "ENG": "Antigua and Barbuda",
    "FRE": "Antigua-et-Barbuda",
    "GER": "Antigua und Barbuda",
    "ITA": "Antigua e Barbuda",
    "SPA": "Antigua y Barbuda",
    "CHN": "安提瓜和巴布达",
    "KOR": "앤티가 바부다"
  },
  {
    "JPN": "アルゼンチン",
    "ENG": "Argentina",
    "FRE": "Argentine",
    "GER": "Argentinien",
    "ITA": "Argentina",
    "SPA": "Argentina",
    "CHN": "阿根廷",
    "KOR": "아르헨티나"
  },
  {
    "JPN": "アルバ",
    "ENG": "Aruba",
    "FRE": "Aruba",
    "GER": "Aruba",
    "ITA": "Aruba",
    "SPA": "Aruba",
    "CHN": "阿鲁巴",
    "KOR": "아루바"
  },
  {
    "JPN": "バハマ",
    "ENG": "Bahamas",
    "FRE": "Bahamas",
    "GER": "Bahamas",
    "ITA": "Bahamas",
    "SPA": "Bahamas",
    "CHN": "巴哈马",
    "KOR": "바하마"
  },
  {
    "JPN": "バルバドス",
    "ENG": "Barbados",
    "FRE": "Barbade",
    "GER": "Barbados",
    "ITA": "Barbados",
    "SPA": "Barbados",
    "CHN": "巴巴多斯",
    "KOR": "바베이도스"
  },
  {
    "JPN": "ベリーズ",
    "ENG": "Belize",
    "FRE": "Belize",
    "GER": "Belize",
    "ITA": "Belize",
    "SPA": "Belice",
    "CHN": "伯利兹",
    "KOR": "벨리즈"
  },
  {
    "JPN": "ボリビア",
    "ENG": "Bolivia",
    "FRE": "Bolivie",
    "GER": "Bolivien",
    "ITA": "Bolivia",
    "SPA": "Bolivia",
    "CHN": "玻利维亚",
    "KOR": "볼리비아"
  },
  {
    "JPN": "ブラジル",
    "ENG": "Brazil",
    "FRE": "Brésil",
    "GER": "Brasilien",
    "ITA": "Brasile",
    "SPA": "Brasil",
    "CHN": "巴西",
    "KOR": "브라질"
  },
  {
    "JPN": "英領ヴァージン諸島",
    "ENG": "British Virgin Islands",
    "FRE": "Îles Vierges britanniques",
    "GER": "Britische Jungferninseln",
    "ITA": "Isole Vergini Britanniche",
    "SPA": "Islas Vírgenes Británicas",
    "CHN": "英属维尔京群岛",
    "KOR": "영국령 버진아일랜드"
  },
  {
    "JPN": "カナダ",
    "ENG": "Canada",
    "FRE": "Canada",
    "GER": "Kanada",
    "ITA": "Canada",
    "SPA": "Canadá",
    "CHN": "加拿大",
    "KOR": "캐나다"
  },
  {
    "JPN": "ケイマン諸島",
    "ENG": "Cayman Islands",
    "FRE": "Îles Caïmans",
    "GER": "Kaimaninseln",
    "ITA": "Isole Cayman",
    "SPA": "Islas Caimán",
    "CHN": "开曼群岛",
    "KOR": "케이맨 제도"
  },
  {
    "JPN": "チリ",
    "ENG": "Chile",
    "FRE": "Chili",
    "GER": "Chile",
    "ITA": "Cile",
    "SPA": "Chile",
    "CHN": "智利",
    "KOR": "칠레"
  },
  {
    "JPN": "コロンビア",
    "ENG": "Colombia",
    "FRE": "Colombie",
    "GER": "Kolumbien",
    "ITA": "Colombia",
    "SPA": "Colombia",
    "CHN": "哥伦比亚",
    "KOR": "콜롬비아"
  },
  {
    "JPN": "コスタリカ",
    "ENG": "Costa Rica",
    "FRE": "Costa Rica",
    "GER": "Costa Rica",
    "ITA": "Costa Rica",
    "SPA": "Costa Rica",
    "CHN": "哥斯达黎加",
    "KOR": "코스타리카"
  },
  {
    "JPN": "ドミニカ国",
    "ENG": "Dominica",
    "FRE": "Dominique",
    "GER": "Dominica",
    "ITA": "Dominica",
    "SPA": "Dominica",
    "CHN": "多米尼克",
    "KOR": "도미니카 연방"
  },
  {
    "JPN": "ドミニカ共和国",
    "ENG": "Dominican Republic",
    "FRE": "République dominicaine",
    "GER": "Dominikanische Republik",
    "ITA": "Repubblica Dominicana",
    "SPA": "República Dominicana",
    "CHN": "多米尼加共和国",
    "KOR": "도미니카 공화국"
  },
  {
    "JPN": "エクアドル",
    "ENG": "Ecuador",
    "FRE": "Équateur",
    "GER": "Ecuador",
    "ITA": "Ecuador",
    "SPA": "Ecuador",
    "CHN": "厄瓜多尔",
    "KOR": "에콰도르"
  },
  {
    "JPN": "エルサルバドル",
    "ENG": "El Salvador",
    "FRE": "Salvador",
    "GER": "El Salvador",
    "ITA": "El Salvador",
    "SPA": "El Salvador",
    "CHN": "萨尔瓦多",
    "KOR": "엘살바도르"
  },
  {
    "JPN": "フランス領ギアナ",
    "ENG": "French Guiana",
    "FRE": "Guyane",
    "GER": "Französisch-Guyana",
    "ITA": "Guyana Francese",
    "SPA": "Guayana Francesa",
    "CHN": "法属圭亚那",
    "KOR": "프랑스령 기아나"
  },
  {
    "JPN": "グレナダ",
    "ENG": "Grenada",
    "FRE": "Grenade",
    "GER": "Grenada",
    "ITA": "Grenada",
    "SPA": "Granada",
    "CHN": "格林纳达",
    "KOR": "그레나다"
  },
  {
    "JPN": "グアドループ",
    "ENG": "Guadeloupe",
    "FRE": "Guadeloupe",
    "GER": "Guadeloupe",
    "ITA": "Guadalupa",
    "SPA": "Guadalupe",
    "CHN": "瓜德罗普",
    "KOR": "과들루프"
  },
  {
    "JPN": "グアテマラ",
    "ENG": "Guatemala",
    "FRE": "Guatemala",
    "GER": "Guatemala",
    "ITA": "Guatemala",
    "SPA": "Guatemala",
    "CHN": "危地马拉",
    "KOR": "과테말라"
  },
  {
    "JPN": "ガイアナ",
    "ENG": "Guyana",
    "FRE": "République coopérative de Guyana",
    "GER": "Guyana",
    "ITA": "Guyana",
    "SPA": "Guyana",
    "CHN": "圭亚那",
    "KOR": "가이아나"
  },
  {
    "JPN": "ハイチ",
    "ENG": "Haiti",
    "FRE": "Haïti",
    "GER": "Haiti",
    "ITA": "Haiti",
    "SPA": "Haití",
    "CHN": "海地",
    "KOR": "아이티"
  },
  {
    "JPN": "ホンジュラス",
    "ENG": "Honduras",
    "FRE": "Honduras",
    "GER": "Honduras",
    "ITA": "Honduras",
    "SPA": "Honduras",
    "CHN": "洪都拉斯",
    "KOR": "온두라스"
  },
  {
    "JPN": "ジャマイカ",
    "ENG": "Jamaica",
    "FRE": "Jamaïque",
    "GER": "Jamaika",
    "ITA": "Giamaica",
    "SPA": "Jamaica",
    "CHN": "牙买加",
    "KOR": "자메이카"
  },
  {
    "JPN": "マルティニーク",
    "ENG": "Martinique",
    "FRE": "Martinique",
    "GER": "Martinique",
    "ITA": "Martinica",
    "SPA": "Martinica",
    "CHN": "马提尼克",
    "KOR": "마르티니크"
  },
  {
    "JPN": "メキシコ",
    "ENG": "Mexico",
    "FRE": "Mexique",
    "GER": "Mexiko",
    "ITA": "Messico",
    "SPA": "México",
    "CHN": "墨西哥",
    "KOR": "멕시코"
  },
  {
    "JPN": "モントセラト",
    "ENG": "Montserrat",
    "FRE": "Montserrat",
    "GER": "Montserrat",
    "ITA": "Montserrat",
    "SPA": "Montserrat",
    "CHN": "蒙特塞拉特",
    "KOR": "몬트세랫"
  },
  {
    "JPN": "オランダ領アンティル",
    "ENG": "Netherlands Antilles",
    "FRE": "Antilles néerlandaises",
    "GER": "Niederländische Antillen",
    "ITA": "Antille Olandesi",
    "SPA": "Antillas Neerlandesas",
    "CHN": "荷属安的列斯",
    "KOR": "네덜란드령 앤틸리스"
  },
  {
    "JPN": "ニカラグア",
    "ENG": "Nicaragua",
    "FRE": "Nicaragua",
    "GER": "Nicaragua",
    "ITA": "Nicaragua",
    "SPA": "Nicaragua",
    "CHN": "尼加拉瓜",
    "KOR": "니카라과"
  },
  {
    "JPN": "パナマ",
    "ENG": "Panama",
    "FRE": "Panama",
    "GER": "Panama",
    "ITA": "Panamá",
    "SPA": "Panamá",
    "CHN": "巴拿马",
    "KOR": "파나마"
  },
  {
    "JPN": "パラグアイ",
    "ENG": "Paraguay",
    "FRE": "Paraguay",
    "GER": "Paraguay",
    "ITA": "Paraguay",
    "SPA": "Paraguay",
    "CHN": "巴拉圭",
    "KOR": "파라과이"
  },
  {
    "JPN": "ペルー",
    "ENG": "Peru",
    "FRE": "Pérou",
    "GER": "Peru",
    "ITA": "Perù",
    "SPA": "Perú",
    "CHN": "秘鲁",
    "KOR": "페루"
  },
  {
    "JPN": "セントキッツ・ネイビス",
    "ENG": "St. Kitts and Nevis",
    "FRE": "Saint-Christophe-et-Niévès",
    "GER": "St. Kitts und Nevis",
    "ITA": "Saint Kitts e Nevis",
    "SPA": "San Cristóbal y Nieves",
    "CHN": "圣基茨和尼维斯",
    "KOR": "세인트키츠네비스"
  },
  {
    "JPN": "セントルシア",
    "ENG": "St. Lucia",
    "FRE": "Sainte-Lucie",
    "GER": "St. Lucia",
    "ITA": "Santa Lucia",
    "SPA": "Santa Lucía",
    "CHN": "圣卢西亚",
    "KOR": "세인트루시아"
  },
  {
    "JPN": "セントビンセント・グレナディーン",
    "ENG": "St. Vincent and the Grenadines",
    "FRE": "Saint-Vincent-et-les-Grenadines",
    "GER": "St. Vincent und die Grenadinen",
    "ITA": "Saint Vincent e Grenadine",
    "SPA": "San Vicente y las Granadinas",
    "CHN": "圣文森特和格林纳丁斯",
    "KOR": "세인트빈센트 그레나딘"
  },
  {
    "JPN": "スリナム",
    "ENG": "Suriname",
    "FRE": "Suriname",
    "GER": "Suriname",
    "ITA": "Suriname",
    "SPA": "Surinam",
    "CHN": "苏里南",
    "KOR": "수리남"
  },
  {
    "JPN": "トリニダード・トバゴ",
    "ENG": "Trinidad and Tobago",
    "FRE": "Trinité-et-Tobago",
    "GER": "Trinidad und Tobago",
    "ITA": "Trinidad e Tobago",
    "SPA": "Trinidad y Tobago",
    "CHN": "特立尼达和多巴哥",
    "KOR": "트리니다드토바고"
  },
  {
    "JPN": "タークス・カイコス諸島",
    "ENG": "Turks and Caicos Islands",
    "FRE": "Îles Turques-et-Caïques",
    "GER": "Turks- und Caicosinseln",
    "ITA": "Isole Turks e Caicos",
    "SPA": "Islas Turcas y Caicos",
    "CHN": "特克斯和凯科斯群岛",
    "KOR": "터크스 케이커스 제도"
  },
  {
    "JPN": "アメリカ",
    "ENG": "United States",
    "FRE": "États-Unis d’Amérique",
    "GER": "Vereinigte Staaten",
    "ITA": "Stati Uniti d'America",
    "SPA": "Estados Unidos de América",
    "CHN": "美国",
    "KOR": "미국"
  },
  {
    "JPN": "ウルグアイ",
    "ENG": "Uruguay",
    "FRE": "Uruguay",
    "GER": "Uruguay",
    "ITA": "Uruguay",
    "SPA": "Uruguay",
    "CHN": "乌拉圭",
    "KOR": "우루과이"
  },
  {
    "JPN": "米領バージン諸島",
    "ENG": "US Virgin Islands",
    "FRE": "Îles Vierges américaines",
    "GER": "Amerikanische Jungferninseln",
    "ITA": "Isole Vergini Statunitensi",
    "SPA": "Islas Vírgenes de los EE. UU.",
    "CHN": "美属维尔京群岛",
    "KOR": "미국령 버진아일랜드"
  },
  {
    "JPN": "ベネズエラ",
    "ENG": "Venezuela",
    "FRE": "Venezuela",
    "GER": "Venezuela",
    "ITA": "Venezuela",
    "SPA": "Venezuela",
    "CHN": "委内瑞拉",
    "KOR": "베네수엘라"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "アルバニア",
    "ENG": "Albania",
    "FRE": "Albanie",
    "GER": "Albanien",
    "ITA": "Albania",
    "SPA": "Albania",
    "CHN": "阿尔巴尼亚",
    "KOR": "알바니아"
  },
  {
    "JPN": "オーストラリア",
    "ENG": "Australia",
    "FRE": "Australie",
    "GER": "Australien",
    "ITA": "Australia",
    "SPA": "Australia",
    "CHN": "澳大利亚",
    "KOR": "오스트레일리아"
  },
  {
    "JPN": "オーストリア",
    "ENG": "Austria",
    "FRE": "Autriche",
    "GER": "Österreich",
    "ITA": "Austria",
    "SPA": "Austria",
    "CHN": "奥地利",
    "KOR": "오스트리아"
  },
  {
    "JPN": "ベルギー",
    "ENG": "Belgium",
    "FRE": "Belgique",
    "GER": "Belgien",
    "ITA": "Belgio",
    "SPA": "Bélgica",
    "CHN": "比利时",
    "KOR": "벨기에"
  },
  {
    "JPN": "ボスニア・ヘルツェゴビナ",
    "ENG": "Bosnia and Herzegovina",
    "FRE": "Bosnie-Herzégovine",
    "GER": "Bosnien-Herzegowina",
    "ITA": "Bosnia-Erzegovina",
    "SPA": "Bosnia-Herzegovina",
    "CHN": "波斯尼亚和黑塞哥维那",
    "KOR": "보스니아헤르체고비나"
  },
  {
    "JPN": "ボツワナ",
    "ENG": "Botswana",
    "FRE": "Botswana",
    "GER": "Botsuana",
    "ITA": "Botswana",
    "SPA": "Botsuana",
    "CHN": "博茨瓦纳",
    "KOR": "보츠와나"
  },
  {
    "JPN": "ブルガリア",
    "ENG": "Bulgaria",
    "FRE": "Bulgarie",
    "GER": "Bulgarien",
    "ITA": "Bulgaria",
    "SPA": "Bulgaria",
    "CHN": "保加利亚",
    "KOR": "불가리아"
  },
  {
    "JPN": "クロアチア",
    "ENG": "Croatia",
    "FRE": "Croatie",
    "GER": "Kroatien",
    "ITA": "Croazia",
    "SPA": "Croacia",
    "CHN": "克罗地亚",
    "KOR": "크로아티아"
  },
  {
    "JPN": "キプロス",
    "ENG": "Cyprus",
    "FRE": "Chypre",
    "GER": "Zypern",
    "ITA": "Cipro",
    "SPA": "Chipre",
    "CHN": "塞浦路斯",
    "KOR": "키프로스"
  },
  {
    "JPN": "チェコ",
    "ENG": "Czech Republic",
    "FRE": "République tchèque",
    "GER": "Tschechische Republik",
    "ITA": "Repubblica Ceca",
    "SPA": "República Checa",
    "CHN": "捷克共和国",
    "KOR": "체코"
  },
  {
    "JPN": "デンマーク",
    "ENG": "Denmark (Kingdom of)",
    "FRE": "Danemark (Royaume)",
    "GER": "Dänemark (Königreich)",
    "ITA": "Danimarca (Regno di)",
    "SPA": "Dinamarca (Reino)",
    "CHN": "丹麦",
    "KOR": "덴마크"
  },
  {
    "JPN": "エストニア",
    "ENG": "Estonia",
    "FRE": "Estonie",
    "GER": "Estland",
    "ITA": "Estonia",
    "SPA": "Estonia",
    "CHN": "爱沙尼亚",
    "KOR": "에스토니아"
  },
  {
    "JPN": "フィンランド",
    "ENG": "Finland",
    "FRE": "Finlande",
    "GER": "Finnland",
    "ITA": "Finlandia",
    "SPA": "Finlandia",
    "CHN": "芬兰",
    "KOR": "핀란드"
  },
  {
    "JPN": "フランス",
    "ENG": "France",
    "FRE": "France",
    "GER": "Frankreich",
    "ITA": "Francia",
    "SPA": "Francia",
    "CHN": "法国",
    "KOR": "프랑스"
  },
  {
    "JPN": "ドイツ",
    "ENG": "Germany",
    "FRE": "Allemagne",
    "GER": "Deutschland",
    "ITA": "Germania",
    "SPA": "Alemania",
    "CHN": "德国",
    "KOR": "독일"
  },
  {
    "JPN": "ギリシャ",
    "ENG": "Greece",
    "FRE": "Grèce",
    "GER": "Griechenland",
    "ITA": "Grecia",
    "SPA": "Grecia",
    "CHN": "希腊",
    "KOR": "그리스"
  },
  {
    "JPN": "ハンガリー",
    "ENG": "Hungary",
    "FRE": "Hongrie",
    "GER": "Ungarn",
    "ITA": "Ungheria",
    "SPA": "Hungría",
    "CHN": "匈牙利",
    "KOR": "헝가리"
  },
  {
    "JPN": "アイスランド",
    "ENG": "Iceland",
    "FRE": "Islande",
    "GER": "Island",
    "ITA": "Islanda",
    "SPA": "Islandia",
    "CHN": "冰岛",
    "KOR": "아이슬란드"
  },
  {
    "JPN": "アイルランド",
    "ENG": "Ireland",
    "FRE": "Irlande",
    "GER": "Irland",
    "ITA": "Irlanda",
    "SPA": "Irlanda",
    "CHN": "爱尔兰",
    "KOR": "아일랜드"
  },
  {
    "JPN": "イタリア",
    "ENG": "Italy",
    "FRE": "Italie",
    "GER": "Italien",
    "ITA": "Italia",
    "SPA": "Italia",
    "CHN": "意大利",
    "KOR": "이탈리아"
  },
  {
    "JPN": "ラトビア",
    "ENG": "Latvia",
    "FRE": "Lettonie",
    "GER": "Lettland",
    "ITA": "Lettonia",
    "SPA": "Letonia",
    "CHN": "拉脱维亚",
    "KOR": "라트비아"
  },
  {
    "JPN": "レソト",
    "ENG": "Lesotho",
    "FRE": "Lesotho",
    "GER": "Lesotho",
    "ITA": "Lesotho",
    "SPA": "Lesoto",
    "CHN": "莱索托",
    "KOR": "레소토"
  },
  {
    "JPN": "リヒテンシュタイン",
    "ENG": "Liechtenstein",
    "FRE": "Liechtenstein",
    "GER": "Liechtenstein",
    "ITA": "Liechtenstein",
    "SPA": "Liechtenstein",
    "CHN": "列支敦士登",
    "KOR": "리히텐슈타인"
  },
  {
    "JPN": "リトアニア",
    "ENG": "Lithuania",
    "FRE": "Lituanie",
    "GER": "Litauen",
    "ITA": "Lituania",
    "SPA": "Lituania",
    "CHN": "立陶宛",
    "KOR": "리투아니아"
  },
  {
    "JPN": "ルクセンブルク",
    "ENG": "Luxembourg",
    "FRE": "Luxembourg",
    "GER": "Luxemburg",
    "ITA": "Lussemburgo",
    "SPA": "Luxemburgo",
    "CHN": "卢森堡",
    "KOR": "룩셈부르크"
  },
  {
    "JPN": "マケドニア",
    "ENG": "Macedonia (Republic of)",
    "FRE": "Macédoine (République)",
    "GER": "Mazedonien (Republik)",
    "ITA": "Macedonia (Repubblica di)",
    "SPA": "Macedonia (República)",
    "CHN": "马其顿",
    "KOR": "마케도니아 공화국"
  },
  {
    "JPN": "マルタ",
    "ENG": "Malta",
    "FRE": "Malte",
    "GER": "Malta",
    "ITA": "Malta",
    "SPA": "Malta",
    "CHN": "马耳他",
    "KOR": "몰타"
  },
  {
    "JPN": "モンテネグロ",
    "ENG": "Montenegro",
    "FRE": "Monténégro",
    "GER": "Montenegro",
    "ITA": "Montenegro",
    "SPA": "Montenegro",
    "CHN": "黑山",
    "KOR": "몬테네그로"
  },
  {
    "JPN": "モザンビーク",
    "ENG": "Mozambique",
    "FRE": "Mozambique",
    "GER": "Mosambik",
    "ITA": "Mozambico",
    "SPA": "Mozambique",
    "CHN": "莫桑比克",
    "KOR": "모잠비크"
  },
  {
    "JPN": "ナミビア",
    "ENG": "Namibia",
    "FRE": "Namibie",
    "GER": "Namibia",
    "ITA": "Namibia",
    "SPA": "Namibia",
    "CHN": "纳米比亚",
    "KOR": "나미비아"
  },
  {
    "JPN": "オランダ",
    "ENG": "Netherlands",
    "FRE": "Pays-Bas",
    "GER": "Niederlande",
    "ITA": "Paesi Bassi",
    "SPA": "Países Bajos",
    "CHN": "荷兰",
    "KOR": "네덜란드"
  },
  {
    "JPN": "ニュージーランド",
    "ENG": "New Zealand",
    "FRE": "Nouvelle-Zélande",
    "GER": "Neuseeland",
    "ITA": "Nuova Zelanda",
    "SPA": "Nueva Zelanda",
    "CHN": "新西兰",
    "KOR": "뉴질랜드"
  },
  {
    "JPN": "ノルウェー",
    "ENG": "Norway",
    "FRE": "Norvège",
    "GER": "Norwegen",
    "ITA": "Norvegia",
    "SPA": "Noruega",
    "CHN": "挪威",
    "KOR": "노르웨이"
  },
  {
    "JPN": "ポーランド",
    "ENG": "Poland",
    "FRE": "Pologne",
    "GER": "Polen",
    "ITA": "Polonia",
    "SPA": "Polonia",
    "CHN": "波兰",
    "KOR": "폴란드"
  },
  {
    "JPN": "ポルトガル",
    "ENG": "Portugal",
    "FRE": "Portugal",
    "GER": "Portugal",
    "ITA": "Portogallo",
    "SPA": "Portugal",
    "CHN": "葡萄牙",
    "KOR": "포르투갈"
  },
  {
    "JPN": "ルーマニア",
    "ENG": "Romania",
    "FRE": "Roumanie",
    "GER": "Rumänien",
    "ITA": "Romania",
    "SPA": "Rumanía",
    "CHN": "罗马尼亚",
    "KOR": "루마니아"
  },
  {
    "JPN": "ロシア",
    "ENG": "Russia",
    "FRE": "Russie",
    "GER": "Russland",
    "ITA": "Russia",
    "SPA": "Rusia",
    "CHN": "俄罗斯",
    "KOR": "러시아"
  },
  {
    "JPN": "セルビア・コソヴォ",
    "ENG": "Serbia and Kosovo",
    "FRE": "Serbie et Kosovo",
    "GER": "Serbien und Kosovo",
    "ITA": "Serbia e Kosovo",
    "SPA": "Serbia y Kosovo",
    "CHN": "塞尔维亚及科索沃",
    "KOR": "세르비아 코소보"
  },
  {
    "JPN": "スロバキア",
    "ENG": "Slovakia",
    "FRE": "Slovaquie",
    "GER": "Slowakei",
    "ITA": "Slovacchia",
    "SPA": "Eslovaquia",
    "CHN": "斯洛伐克",
    "KOR": "슬로바키아"
  },
  {
    "JPN": "スロベニア",
    "ENG": "Slovenia",
    "FRE": "Slovénie",
    "GER": "Slowenien",
    "ITA": "Slovenia",
    "SPA": "Eslovenia",
    "CHN": "斯洛文尼亚",
    "KOR": "슬로베니아"
  },
  {
    "JPN": "南アフリカ",
    "ENG": "South Africa",
    "FRE": "Afrique du Sud",
    "GER": "Südafrika",
    "ITA": "Sudafrica",
    "SPA": "Sudáfrica",
    "CHN": "南非",
    "KOR": "남아프리카 공화국"
  },
  {
    "JPN": "スペイン",
    "ENG": "Spain",
    "FRE": "Espagne",
    "GER": "Spanien",
    "ITA": "Spagna",
    "SPA": "España",
    "CHN": "西班牙",
    "KOR": "스페인"
  },
  {
    "JPN": "スワジランド",
    "ENG": "Swaziland",
    "FRE": "Swaziland",
    "GER": "Swasiland",
    "ITA": "Swaziland",
    "SPA": "Suazilandia",
    "CHN": "斯威士兰",
    "KOR": "스와질란드"
  },
  {
    "JPN": "スウェーデン",
    "ENG": "Sweden",
    "FRE": "Suède",
    "GER": "Schweden",
    "ITA": "Svezia",
    "SPA": "Suecia",
    "CHN": "瑞典",
    "KOR": "스웨덴"
  },
  {
    "JPN": "スイス",
    "ENG": "Switzerland",
    "FRE": "Suisse",
    "GER": "Schweiz",
    "ITA": "Svizzera",
    "SPA": "Suiza",
    "CHN": "瑞士",
    "KOR": "스위스"
  },
  {
    "JPN": "トルコ",
    "ENG": "Turkey",
    "FRE": "Turquie",
    "GER": "Türkei",
    "ITA": "Turchia",
    "SPA": "Turquía",
    "CHN": "土耳其",
    "KOR": "터키"
  },
  {
    "JPN": "イギリス",
    "ENG": "United Kingdom",
    "FRE": "Royaume-Uni",
    "GER": "Vereinigtes Königreich",
    "ITA": "Regno Unito",
    "SPA": "Reino Unido",
    "CHN": "英国",
    "KOR": "영국"
  },
  {
    "JPN": "ザンビア",
    "ENG": "Zambia",
    "FRE": "Zambie",
    "GER": "Sambia",
    "ITA": "Zambia",
    "SPA": "Zambia",
    "CHN": "赞比亚",
    "KOR": "잠비아"
  },
  {
    "JPN": "ジンバブエ",
    "ENG": "Zimbabwe",
    "FRE": "Zimbabwe",
    "GER": "Simbabwe",
    "ITA": "Zimbabwe",
    "SPA": "Zimbabue",
    "CHN": "津巴布韦",
    "KOR": "짐바브웨"
  },
  {
    "JPN": "アゼルバイジャン",
    "ENG": "Azerbaijan",
    "FRE": "Azerbaïdjan",
    "GER": "Aserbaidschan",
    "ITA": "Azerbaigian",
    "SPA": "Azerbaiyán",
    "CHN": "阿塞拜疆",
    "KOR": "아제르바이잔"
  },
  {
    "JPN": "モーリタニア",
    "ENG": "Mauritania",
    "FRE": "Mauritanie",
    "GER": "Mauretanien",
    "ITA": "Mauritania",
    "SPA": "Mauritania",
    "CHN": "毛里塔尼亚",
    "KOR": "모리타니"
  },
  {
    "JPN": "マリ",
    "ENG": "Mali",
    "FRE": "Mali",
    "GER": "Mali",
    "ITA": "Mali",
    "SPA": "Malí",
    "CHN": "马里",
    "KOR": "말리"
  },
  {
    "JPN": "ニジェール",
    "ENG": "Niger",
    "FRE": "Niger",
    "GER": "Niger",
    "ITA": "Niger",
    "SPA": "Níger",
    "CHN": "尼日尔",
    "KOR": "니제르"
  },
  {
    "JPN": "チャド",
    "ENG": "Chad",
    "FRE": "Tchad",
    "GER": "Tschad",
    "ITA": "Ciad",
    "SPA": "Chad",
    "CHN": "乍得",
    "KOR": "차드"
  },
  {
    "JPN": "スーダン",
    "ENG": "Sudan",
    "FRE": "Soudan",
    "GER": "Sudan",
    "ITA": "Sudan",
    "SPA": "Sudán",
    "CHN": "苏丹",
    "KOR": "수단"
  },
  {
    "JPN": "エリトリア",
    "ENG": "Eritrea",
    "FRE": "Érythrée",
    "GER": "Eritrea",
    "ITA": "Eritrea",
    "SPA": "Eritrea",
    "CHN": "厄立特里亚",
    "KOR": "에리트레아"
  },
  {
    "JPN": "ジブチ",
    "ENG": "Djibouti",
    "FRE": "Djibouti",
    "GER": "Dschibuti",
    "ITA": "Gibuti",
    "SPA": "Yibuti",
    "CHN": "吉布提",
    "KOR": "지부티"
  },
  {
    "JPN": "ソマリア",
    "ENG": "Somalia",
    "FRE": "Somalie",
    "GER": "Somalia",
    "ITA": "Somalia",
    "SPA": "Somalia",
    "CHN": "索马里",
    "KOR": "소말리아"
  },
  {
    "JPN": "アンドラ",
    "ENG": "Andorra",
    "FRE": "Andorre",
    "GER": "Andorra",
    "ITA": "Andorra",
    "SPA": "Andorra",
    "CHN": "安道尔",
    "KOR": "안도라"
  },
  {
    "JPN": "ジブラルタル",
    "ENG": "Gibraltar",
    "FRE": "Gibraltar",
    "GER": "Gibraltar",
    "ITA": "Gibilterra",
    "SPA": "Gibraltar",
    "CHN": "直布罗陀",
    "KOR": "지브롤터"
  },
  {
    "JPN": "ガーンジー島",
    "ENG": "Guernsey",
    "FRE": "Guernesey",
    "GER": "Guernsey",
    "ITA": "Guernsey",
    "SPA": "Guernsey",
    "CHN": "根西",
    "KOR": "건지 섬"
  },
  {
    "JPN": "マン島",
    "ENG": "Isle of Man",
    "FRE": "Île de Man",
    "GER": "Isle of Man",
    "ITA": "Isola di Man",
    "SPA": "Isla de Man",
    "CHN": "马恩岛",
    "KOR": "맨 섬"
  },
  {
    "JPN": "ジャージー島",
    "ENG": "Jersey",
    "FRE": "Jersey",
    "GER": "Jersey",
    "ITA": "Jersey",
    "SPA": "Jersey",
    "CHN": "泽西",
    "KOR": "저지 섬"
  },
  {
    "JPN": "モナコ",
    "ENG": "Monaco",
    "FRE": "Monaco",
    "GER": "Monaco",
    "ITA": "Monaco (Principato di)",
    "SPA": "Mónaco",
    "CHN": "摩纳哥",
    "KOR": "모나코"
  },
  {
    "JPN": "台湾",
    "ENG": "Taiwan",
    "FRE": "Taïwan",
    "GER": "Taiwan",
    "ITA": "Taiwan",
    "SPA": "Taiwán",
    "CHN": "中国 台湾",
    "KOR": "타이완"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "韓国",
    "ENG": "South Korea",
    "FRE": "Corée du Sud",
    "GER": "Südkorea",
    "ITA": "Corea del Sud",
    "SPA": "Corea del Sur",
    "CHN": "韩国",
    "KOR": "대한민국"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "ホンコン",
    "ENG": "Hong Kong",
    "FRE": "Hong Kong",
    "GER": "Hongkong",
    "ITA": "Hong Kong",
    "SPA": "Hong Kong",
    "CHN": "中国 香港",
    "KOR": "홍콩"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "シンガポール",
    "ENG": "Singapore",
    "FRE": "Singapour",
    "GER": "Singapur",
    "ITA": "Singapore",
    "SPA": "Singapur",
    "CHN": "新加坡",
    "KOR": "싱가포르"
  },
  null,
  null,
  {
    "JPN": "マレーシア",
    "ENG": "Malaysia",
    "FRE": "Malaisie",
    "GER": "Malaysia",
    "ITA": "Malesia",
    "SPA": "Malasia",
    "CHN": "马来西亚",
    "KOR": "말레이시아"
  },
  null,
  null,
  null,
  {
    "JPN": "中国",
    "ENG": "China",
    "FRE": "Chine",
    "GER": "China",
    "ITA": "Cina",
    "SPA": "China",
    "CHN": "中国",
    "KOR": "중국"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "アラブ首長国連邦",
    "ENG": "U.A.E.",
    "FRE": "Émirats arabes unis",
    "GER": "Vereinigte Arabische Emirate",
    "ITA": "Emirati Arabi Uniti",
    "SPA": "Emiratos Árabes Unidos",
    "CHN": "阿拉伯联合酋长国",
    "KOR": "아랍에미리트"
  },
  {
    "JPN": "インド",
    "ENG": "India",
    "FRE": "Inde",
    "GER": "Indien",
    "ITA": "India",
    "SPA": "India",
    "CHN": "印度",
    "KOR": "인도"
  },
  null,
  null,
  null,
  null,
  {
    "JPN": "サウジアラビア",
    "ENG": "Saudi Arabia",
    "FRE": "Arabie saoudite",
    "GER": "Saudi-Arabien",
    "ITA": "Arabia Saudita",
    "SPA": "Arabia Saudí",
    "CHN": "沙特阿拉伯",
    "KOR": "사우디아라비아"
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  {
    "JPN": "サンマリノ",
    "ENG": "San Marino",
    "FRE": "Saint-Marin",
    "GER": "San Marino",
    "ITA": "San Marino",
    "SPA": "San Marino",
    "CHN": "圣马力诺",
    "KOR": "산마리노"
  },
  {
    "JPN": "バチカン",
    "ENG": "Vatican City",
    "FRE": "Vatican",
    "GER": "Vatikanstadt",
    "ITA": "Vaticano (Città del)",
    "SPA": "Vaticano",
    "CHN": "梵蒂冈",
    "KOR": "바티칸"
  },
  {
    "JPN": "バーミューダ",
    "ENG": "Bermuda",
    "FRE": "Bermudes",
    "GER": "Bermuda",
    "ITA": "Bermude",
    "SPA": "Bermudas",
    "CHN": "百慕大",
    "KOR": "버뮤다"
  }
]
},{}],3:[function(require,module,exports){
module.exports=[
  null,
  "Rock Smash",
  "Tall Grass",
  null,
  "Spear Pillar",
  "Cave/Hall of Origin",
  null,
  "Surfing/Fishing",
  null,
  "Building/Enigma Stone",
  "Safari Zone/Great Marsh",
  null,
  "Starter/Fossil/Gift",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "Distortion World",
  "Starter/Fossil/Gift"
]

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
module.exports={
  "0": "Littleroot Town",
  "1": "Oldale Town",
  "2": "Dewford Town",
  "3": "Lavaridge Town",
  "4": "Fallarbor Town",
  "5": "Verdanturf Town",
  "6": "Pacifidlog Town",
  "7": "Petalburg City",
  "8": "Slateport City",
  "9": "Mauville City",
  "10": "Rustboro City",
  "11": "Fortree City",
  "12": "Lilycove City",
  "13": "Mossdeep City",
  "14": "Sootopolis City",
  "15": "Ever Grande City",
  "16": "Route 101",
  "17": "Route 102",
  "18": "Route 103",
  "19": "Route 104",
  "20": "Route 105",
  "21": "Route 106",
  "22": "Route 107",
  "23": "Route 108",
  "24": "Route 109",
  "25": "Route 110",
  "26": "Route 111",
  "27": "Route 112",
  "28": "Route 113",
  "29": "Route 114",
  "30": "Route 115",
  "31": "Route 116",
  "32": "Route 117",
  "33": "Route 118",
  "34": "Route 119",
  "35": "Route 120",
  "36": "Route 121",
  "37": "Route 122",
  "38": "Route 123",
  "39": "Route 124",
  "40": "Route 125",
  "41": "Route 126",
  "42": "Route 127",
  "43": "Route 128",
  "44": "Route 129",
  "45": "Route 130",
  "46": "Route 131",
  "47": "Route 132",
  "48": "Route 133",
  "49": "Route 134",
  "50": "Underwater (Route 124)",
  "51": "Underwater (Route 126)",
  "52": "Underwater (Route 127)",
  "53": "Underwater (Route 128)",
  "54": "Underwater (Sootopolis City)",
  "55": "Granite Cave",
  "56": "Mt. Chimney",
  "57": "Safari Zone",
  "58": "Battle Frontier",
  "59": "Petalburg Woods",
  "60": "Rusturf Tunnel",
  "61": "Abandoned Ship",
  "62": "New Mauville",
  "63": "Meteor Falls",
  "64": "Meteor Falls",
  "65": "Mt. Pyre",
  "66": "Hideout",
  "67": "Shoal Cave",
  "68": "Seafloor Cavern",
  "69": "Underwater",
  "70": "Victory Road",
  "71": "Mirage Island",
  "72": "Cave of Origin",
  "73": "Southern Island",
  "74": "Fiery Path",
  "75": "Fiery Path",
  "76": "Jagged Pass",
  "77": "Jagged Pass",
  "78": "Sealed Chamber",
  "79": "Underwater",
  "80": "Scorched Slab",
  "81": "Island Cave",
  "82": "Desert Ruins",
  "83": "Ancient Tomb",
  "84": "Inside of Truck",
  "85": "Sky Pillar",
  "86": "Secret Base",
  "87": "Ferry",
  "88": "Pallet Town",
  "89": "Viridian City",
  "90": "Pewter City",
  "91": "Cerulean City",
  "92": "Lavender Town",
  "93": "Vermilion City",
  "94": "Celadon City",
  "95": "Fuchsia City",
  "96": "Cinnabar Island",
  "97": "Indigo Plateau",
  "98": "Saffron City",
  "99": "Route 4",
  "100": "Route 10",
  "101": "Route 1",
  "102": "Route 2",
  "103": "Route 3",
  "104": "Route 4",
  "105": "Route 5",
  "106": "Route 6",
  "107": "Route 7",
  "108": "Route 8",
  "109": "Route 9",
  "110": "Route 10",
  "111": "Route 11",
  "112": "Route 12",
  "113": "Route 13",
  "114": "Route 14",
  "115": "Route 15",
  "116": "Route 16",
  "117": "Route 17",
  "118": "Route 18",
  "119": "Route 19",
  "120": "Route 20",
  "121": "Route 21",
  "122": "Route 22",
  "123": "Route 23",
  "124": "Route 24",
  "125": "Route 25",
  "126": "Viridian Forest",
  "127": "Mt. Moon",
  "128": "S.S. Anne",
  "129": "Underground Path",
  "130": "Underground Path",
  "131": "Diglett's Cave",
  "132": "Victory Road",
  "133": "Rocket Hideout",
  "134": "Silph Co.",
  "135": "Pokémon Mansion",
  "136": "Safari Zone",
  "137": "Pokémon League",
  "138": "Rock Tunnel",
  "139": "Seafoam Islands",
  "140": "Pokémon Tower",
  "141": "Cerulean Cave",
  "142": "Power Plant",
  "143": "One Island",
  "144": "Two Island",
  "145": "Three Island",
  "146": "Four Island",
  "147": "Five Island",
  "148": "Seven Island",
  "149": "Six Island",
  "150": "Kindle Road",
  "151": "Treasure Beach",
  "152": "Cape Brink",
  "153": "Bond Bridge",
  "154": "Three Isle Port",
  "155": "Sevii Isle 6",
  "156": "Sevii Isle 7",
  "157": "Sevii Isle 8",
  "158": "Sevii Isle 9",
  "159": "Resort Gorgeous",
  "160": "Water Labyrinth",
  "161": "Five Isle Meadow",
  "162": "Memorial Pillar",
  "163": "Outcast Island",
  "164": "Green Path",
  "165": "Water Path",
  "166": "Ruin Valley",
  "167": "Trainer Tower",
  "168": "Canyon Entrance",
  "169": "Sevault Canyon",
  "170": "Tanoby Ruins",
  "171": "Sevii Isle 22",
  "172": "Sevii Isle 23",
  "173": "Sevii Isle 24",
  "174": "Navel Rock",
  "175": "Mt. Ember",
  "176": "Berry Forest",
  "177": "Icefall Cave",
  "178": "Rocket Warehouse",
  "179": "Trainer Tower",
  "180": "Dotted Hole",
  "181": "Lost Cave",
  "182": "Pattern Bush",
  "183": "Altering Cave",
  "184": "Tanoby Chambers",
  "185": "Three Isle Path",
  "186": "Tanoby Key",
  "187": "Birth Island",
  "188": "Monean Chamber",
  "189": "Liptoo Chamber",
  "190": "Weepth Chamber",
  "191": "Dilford Chamber",
  "192": "Scufib Chamber",
  "193": "Rixy Chamber",
  "194": "Viapois Chamber",
  "195": "Ember Spa",
  "196": "Celadon Dept.",
  "197": "Aqua Hideout",
  "198": "Magma Hideout",
  "199": "Mirage Tower",
  "200": "Birth Island",
  "201": "Faraway Island",
  "202": "Artisan Cave",
  "203": "Marine Cave",
  "204": "Underwater",
  "205": "Terra Cave",
  "206": "Underwater",
  "207": "Underwater",
  "208": "Underwater",
  "209": "Desert Underpass",
  "210": "Altering Cave",
  "211": "Navel Rock",
  "212": "Trainer Hill",
  "254": "(in-game trade)",
  "255": "(fateful encounter)"
}

},{}],6:[function(require,module,exports){
module.exports={
  "0": "Mystery Zone",
  "1": "Twinleaf Town",
  "2": "Sandgem Town",
  "3": "Floaroma Town",
  "4": "Solaceon Town",
  "5": "Celestic Town",
  "6": "Jubilife City",
  "7": "Canalave City",
  "8": "Oreburgh City",
  "9": "Eterna City",
  "10": "Hearthome City",
  "11": "Pastoria City",
  "12": "Veilstone City",
  "13": "Sunyshore City",
  "14": "Snowpoint City",
  "15": "Pokémon League",
  "16": "Route 201",
  "17": "Route 202",
  "18": "Route 203",
  "19": "Route 204",
  "20": "Route 205",
  "21": "Route 206",
  "22": "Route 207",
  "23": "Route 208",
  "24": "Route 209",
  "25": "Route 210",
  "26": "Route 211",
  "27": "Route 212",
  "28": "Route 213",
  "29": "Route 214",
  "30": "Route 215",
  "31": "Route 216",
  "32": "Route 217",
  "33": "Route 218",
  "34": "Route 219",
  "35": "Route 220",
  "36": "Route 221",
  "37": "Route 222",
  "38": "Route 223",
  "39": "Route 224",
  "40": "Route 225",
  "41": "Route 226",
  "42": "Route 227",
  "43": "Route 228",
  "44": "Route 229",
  "45": "Route 230",
  "46": "Oreburgh Mine",
  "47": "Valley Windworks",
  "48": "Eterna Forest",
  "49": "Fuego Ironworks",
  "50": "Mt. Coronet",
  "51": "Spear Pillar",
  "52": "Great Marsh",
  "53": "Solaceon Ruins",
  "54": "Victory Road",
  "55": "Pal Park",
  "56": "Amity Square",
  "57": "Ravaged Path",
  "58": "Floaroma Meadow",
  "59": "Oreburgh Gate",
  "60": "Fullmoon Island",
  "61": "Sendoff Spring",
  "62": "Turnback Cave",
  "63": "Flower Paradise",
  "64": "Snowpoint Temple",
  "65": "Wayward Cave",
  "66": "Ruin Maniac Cave",
  "67": "Maniac Tunnel",
  "68": "Trophy Garden",
  "69": "Iron Island",
  "70": "Old Chateau",
  "71": "Galactic HQ",
  "72": "Verity Lakefront",
  "73": "Valor Lakefront",
  "74": "Acuity Lakefront",
  "75": "Spring Path",
  "76": "Lake Verity",
  "77": "Lake Valor",
  "78": "Lake Acuity",
  "79": "Newmoon Island",
  "80": "Battle Tower",
  "81": "Fight Area",
  "82": "Survival Area",
  "83": "Resort Area",
  "84": "Stark Mountain",
  "85": "Seabreak Path",
  "86": "Hall of Origin",
  "87": "Verity Cavern",
  "88": "Valor Cavern",
  "89": "Acuity Cavern",
  "90": "Jubilife TV",
  "91": "Pokétch Co.",
  "92": "GTS",
  "93": "Trainers' School",
  "94": "Mining Museum",
  "95": "Flower Shop",
  "96": "Cycle Shop",
  "97": "Contest Hall",
  "98": "Poffin House",
  "99": "Foreign Building",
  "100": "Pokémon Day Care",
  "101": "Veilstone Store",
  "102": "Game Corner",
  "103": "Canalave Library",
  "104": "Vista Lighthouse",
  "105": "Sunyshore Market",
  "106": "Pokémon Mansion",
  "107": "Footstep House",
  "108": "Café",
  "109": "Grand Lake",
  "110": "Restaurant",
  "111": "Battle Park",
  "112": "Battle Frontier",
  "113": "Battle Factory",
  "114": "Battle Castle",
  "115": "Battle Arcade",
  "116": "Battle Hall",
  "117": "Distortion World",
  "118": "Global Terminal",
  "119": "Villa",
  "120": "Battleground",
  "121": "ROTOM's Room",
  "122": "T.G. Eterna Bldg",
  "123": "Iron Ruins",
  "124": "Iceberg Ruins",
  "125": "Rock Peak Ruins",
  "126": "New Bark Town",
  "127": "Cherrygrove City",
  "128": "Violet City",
  "129": "Azalea Town",
  "130": "Cianwood City",
  "131": "Goldenrod City",
  "132": "Olivine City",
  "133": "Ecruteak City",
  "134": "Mahogany Town",
  "135": "Lake of Rage",
  "136": "Blackthorn City",
  "137": "Mt. Silver",
  "138": "Pallet Town",
  "139": "Viridian City",
  "140": "Pewter City",
  "141": "Cerulean City",
  "142": "Lavender Town",
  "143": "Vermilion City",
  "144": "Celadon City",
  "145": "Fuchsia City",
  "146": "Cinnabar Island",
  "147": "Indigo Plateau",
  "148": "Saffron City",
  "149": "Route 1",
  "150": "Route 2",
  "151": "Route 3",
  "152": "Route 4",
  "153": "Route 5",
  "154": "Route 6",
  "155": "Route 7",
  "156": "Route 8",
  "157": "Route 9",
  "158": "Route 10",
  "159": "Route 11",
  "160": "Route 12",
  "161": "Route 13",
  "162": "Route 14",
  "163": "Route 15",
  "164": "Route 16",
  "165": "Route 17",
  "166": "Route 18",
  "167": "Route 19",
  "168": "Route 20",
  "169": "Route 21",
  "170": "Route 22",
  "171": "Route 23",
  "172": "Route 24",
  "173": "Route 25",
  "174": "Route 26",
  "175": "Route 27",
  "176": "Route 28",
  "177": "Route 29",
  "178": "Route 30",
  "179": "Route 31",
  "180": "Route 32",
  "181": "Route 33",
  "182": "Route 34",
  "183": "Route 35",
  "184": "Route 36",
  "185": "Route 37",
  "186": "Route 38",
  "187": "Route 39",
  "188": "Route 40",
  "189": "Route 41",
  "190": "Route 42",
  "191": "Route 43",
  "192": "Route 44",
  "193": "Route 45",
  "194": "Route 46",
  "195": "Route 47",
  "196": "Route 48",
  "197": "DIGLETT's Cave",
  "198": "Mt. Moon",
  "199": "Cerulean Cave",
  "200": "Rock Tunnel",
  "201": "Power Plant",
  "202": "Safari Zone",
  "203": "Seafoam Islands",
  "204": "Sprout Tower",
  "205": "Bell Tower",
  "206": "Burned Tower",
  "207": "National Park",
  "208": "Radio Tower",
  "209": "Ruins of Alph",
  "210": "Union Cave",
  "211": "SLOWPOKE Well",
  "212": "Lighthouse",
  "213": "Team Rocket HQ",
  "214": "Ilex Forest",
  "215": "Goldenrod Tunnel",
  "216": "Mt. Mortar",
  "217": "Ice Path",
  "218": "Whirl Islands",
  "219": "Mt. Silver Cave",
  "220": "Dark Cave",
  "221": "Victory Road",
  "222": "Dragon's Den",
  "223": "Tohjo Falls",
  "224": "Viridian Forest",
  "225": "Pokéathlon Dome",
  "226": "S.S. Aqua",
  "227": "Safari Zone Gate",
  "228": "Cliff Cave",
  "229": "Frontier Access",
  "230": "Bellchime Trail",
  "231": "Sinjoh Ruins",
  "232": "Embedded Tower",
  "233": "Pokéwalker",
  "234": "Cliff Edge Gate",
  "2000": "Day-Care Couple",
  "2001": "Link Trade",
  "2002": "Link Trade",
  "2003": "Kanto",
  "2004": "Johto",
  "2005": "Hoenn",
  "2006": "Sinnoh",
  "2007": "----------",
  "2008": "Distant land",
  "2009": "Traveling Man",
  "2010": "Riley",
  "2011": "Cynthia",
  "2012": "Mystery Zone",
  "2013": "Mr. Pokémon",
  "2014": "Primo",
  "3000": "Lovely place",
  "3001": "Pokémon Ranger",
  "3002": "Faraway place",
  "3003": "Pokémon Movie",
  "3004": "Pokémon Movie 06",
  "3005": "Pokémon Movie 07",
  "3006": "Pokémon Movie 08",
  "3007": "Pokémon Movie 09",
  "3008": "Pokémon Movie 10",
  "3009": "Pokémon Movie 11",
  "3010": "Pokémon Movie 12",
  "3011": "Pokémon Movie 13",
  "3012": "Pokémon Movie 14",
  "3013": "Pokémon Movie 15",
  "3014": "Pokémon Movie 16",
  "3015": "Pokémon Cartoon",
  "3016": "Space World",
  "3017": "Space World 06",
  "3018": "Space World 07",
  "3019": "Space World 08",
  "3020": "Space World 09",
  "3021": "Space World 10",
  "3022": "Space World 11",
  "3023": "Space World 12",
  "3024": "Space World 13",
  "3025": "Space World 14",
  "3026": "Space World 15",
  "3027": "Space World 16",
  "3028": "Pokémon Festa",
  "3029": "Pokémon Festa 06",
  "3030": "Pokémon Festa 07",
  "3031": "Pokémon Festa 08",
  "3032": "Pokémon Festa 09",
  "3033": "Pokémon Festa 10",
  "3034": "Pokémon Festa 11",
  "3035": "Pokémon Festa 12",
  "3036": "Pokémon Festa 13",
  "3037": "Pokémon Festa 14",
  "3038": "Pokémon Festa 15",
  "3039": "Pokémon Festa 16",
  "3040": "POKéPARK",
  "3041": "POKéPARK 06",
  "3042": "POKéPARK 07",
  "3043": "POKéPARK 08",
  "3044": "POKéPARK 09",
  "3045": "POKéPARK 10",
  "3046": "POKéPARK 11",
  "3047": "POKéPARK 12",
  "3048": "POKéPARK 13",
  "3049": "POKéPARK 14",
  "3050": "POKéPARK 15",
  "3051": "POKéPARK 16",
  "3052": "Pokémon Center",
  "3053": "PC Tokyo",
  "3054": "PC Osaka",
  "3055": "PC Fukuoka",
  "3056": "PC Nagoya",
  "3057": "PC Sapporo",
  "3058": "PC Yokohama",
  "3059": "Nintendo World",
  "3060": "Pokémon Event",
  "3061": "Pokémon Event 06",
  "3062": "Pokémon Event 07",
  "3063": "Pokémon Event 08",
  "3064": "Pokémon Event 09",
  "3065": "Pokémon Event 10",
  "3066": "Pokémon Event 11",
  "3067": "Pokémon Event 12",
  "3068": "Pokémon Event 13",
  "3069": "Pokémon Event 14",
  "3070": "Pokémon Event 15",
  "3071": "Pokémon Event 16",
  "3072": "Wi-Fi Event",
  "3073": "Wi-Fi Gift",
  "3074": "Pokémon Fan Club",
  "3075": "Event Site",
  "3076": "Concert Event"
}

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
module.exports=[
  {
    "ENG": "it was happy",
    "SPA": "cuánto se alegró",
    "FRE": "ça lui a fait plaisir",
    "GER": "wie glücklich es war",
    "ITA": "la sua felicità",
    "JPN": "うれしかった",
    "KOR": "고마웠던",
    "CHN": "うれしかった"
  },
  {
    "ENG": "it had fun",
    "SPA": "lo bien que lo pasó",
    "FRE": "c’était amusant",
    "GER": "wie viel Spaß es hatte",
    "ITA": "quanto sia stato divertente",
    "JPN": "たのしかった",
    "KOR": "즐거웠던",
    "CHN": "たのしかった"
  },
  {
    "ENG": "it was glad",
    "SPA": "la felicidad que sintió",
    "FRE": "ça l’a rendu heureux",
    "GER": "wie sehr es sich gefreut hat",
    "ITA": "la sua gioia",
    "JPN": "よろこんだ",
    "KOR": "기뻤던",
    "CHN": "よろこんだ"
  },
  {
    "ENG": "it grinned",
    "SPA": "la sonrisa que esbozó",
    "FRE": "ça l’a fait sourire",
    "GER": "wie es gegrinst hat",
    "ITA": "le sue risate",
    "JPN": "ニヤニヤした",
    "KOR": "히죽히죽 웃었던",
    "CHN": "ニヤニヤした"
  },
  {
    "ENG": "it got overwhelmed by emotion",
    "SPA": "cómo le embargó la emoción",
    "FRE": "ça l’a ému",
    "GER": "wie überwältigt es war",
    "ITA": "la sua emozione",
    "JPN": "たまらない　きもちになった",
    "KOR": "참을 수 없는 기분이 되었던",
    "CHN": "たまらない　きもちになった"
  },
  {
    "ENG": "its feelings were indescribable",
    "SPA": "la sensación inenarrable que experimentó",
    "FRE": "c’était une drôle de sensation",
    "GER": "wie unbeschreiblich seine Gefühle waren",
    "ITA": "quella sensazione indescrivibile",
    "JPN": "なんともいえない　きもちだった",
    "KOR": "말로는 표현할 수 없는 기분이 되었던",
    "CHN": "なんともいえない　きもちだった"
  },
  {
    "ENG": "it felt good",
    "SPA": "lo mucho que le agradó",
    "FRE": "c’était agréable",
    "GER": "wie gut gelaunt es war",
    "ITA": "quanto è stato piacevole",
    "JPN": "いい　きぶんになった",
    "KOR": "좋은 기분이 되었던",
    "CHN": "いい　きぶんになった"
  },
  {
    "ENG": "it got teary eyed",
    "SPA": "las lágrimas que le vinieron a los ojos",
    "FRE": "ça lui a mis les larmes aux yeux",
    "GER": "dass es feuchte Augen bekommen hat",
    "ITA": "la sua commozione",
    "JPN": "うるうるした",
    "KOR": "눈물이 글썽글썽했던",
    "CHN": "うるうるした"
  },
  {
    "ENG": "it got lighthearted",
    "SPA": "la ilusión que le hizo",
    "FRE": "ça lui a donné du baume au cœur",
    "GER": "wie sehr es sich amüsiert hat",
    "ITA": "la sua allegria",
    "JPN": "うかれてしまった",
    "KOR": "마음이 들뜨고 말았던",
    "CHN": "うかれてしまった"
  },
  {
    "ENG": "it got nervous",
    "SPA": "lo nervioso que se puso",
    "FRE": "ça l’a rendu nerveux",
    "GER": "wie nervös es war",
    "ITA": "quanto era nervoso",
    "JPN": "きんちょうした",
    "KOR": "긴장했던",
    "CHN": "きんちょうした"
  },
  {
    "ENG": "it felt comfortable",
    "SPA": "lo bien que se sintió",
    "FRE": "c’était apaisant",
    "GER": "wie wohl es sich gefühlt hat",
    "ITA": "quella bella sensazione",
    "JPN": "きもちよかった",
    "KOR": "기분이 좋았던",
    "CHN": "きもちよかった"
  },
  {
    "ENG": "it was restless",
    "SPA": "el hormigueo que sintió",
    "FRE": "ça chatouillait",
    "GER": "wie unruhig es war",
    "ITA": "che non riusciva a star fermo",
    "JPN": "もぞもぞした",
    "KOR": "꼼지락거렸던",
    "CHN": "もぞもぞした"
  },
  {
    "ENG": "it got a bit carried away",
    "SPA": "la experiencia y le gustaría revivirla",
    "FRE": "ça ne lui a laissé aucun regret",
    "GER": "wie sehr es das genossen hat",
    "ITA": "il suo entusiasmo",
    "JPN": "クセになりそうに　なった",
    "KOR": "완전히 푹 빠졌던",
    "CHN": "クセになりそうに　なった"
  },
  {
    "ENG": "it felt sorry",
    "SPA": "el regusto amargo que le quedó",
    "FRE": "ça lui a laissé un goût amer",
    "GER": "wie leid es ihm getan hat",
    "ITA": "il suo dispiacere",
    "JPN": "もうしわけない　きぶんになった",
    "KOR": "미안한 기분이 들었던",
    "CHN": "もうしわけない　きぶんになった"
  },
  {
    "ENG": "it got emotional",
    "SPA": "la pena que sintió",
    "FRE": "ça lui a fait beaucoup de peine",
    "GER": "wie herzzerreißend das war",
    "ITA": "la sua tristezza",
    "JPN": "せつない　きもちになった",
    "KOR": "슬픈 기분이 되었던",
    "CHN": "せつない　きもちになった"
  },
  {
    "ENG": "it felt nostalgic",
    "SPA": "la nostalgia que sintió",
    "FRE": "ça l’a rendu nostalgique",
    "GER": "wie nostalgisch es geworden ist",
    "ITA": "quella sensazione di malinconia",
    "JPN": "なつかしい　きもちになった",
    "KOR": "그리운 기분이 되었던",
    "CHN": "なつかしい　きもちになった"
  },
  {
    "ENG": "it had some difficulty",
    "SPA": "lo difícil que le pareció",
    "FRE": "c’était difficile",
    "GER": "was für Schwierigkeiten es hatte",
    "ITA": "la sua preoccupazione",
    "JPN": "てこずった",
    "KOR": "어려웠던",
    "CHN": "てこずった"
  },
  {
    "ENG": "it felt exhausted",
    "SPA": "lo extenuante que resultó",
    "FRE": "c’était épuisant",
    "GER": "wie anstrengend das war",
    "ITA": "la sensazione di sfinimento",
    "JPN": "きつかった",
    "KOR": "힘들었던",
    "CHN": "きつかった"
  },
  {
    "ENG": "it couldn’t be true to its feelings",
    "SPA": "cómo le costó aceptar lo que sentía",
    "FRE": "ça n’était pas facile à accepter",
    "GER": "wie es im Unreinen mit sich war",
    "ITA": "il suo dilemma",
    "JPN": "すなおに　なれなかった",
    "KOR": "솔직할 수 없었던",
    "CHN": "すなおに　なれなかった"
  },
  {
    "ENG": "it felt proud",
    "SPA": "el orgullo que sintió",
    "FRE": "ça l’a rendu fier",
    "GER": "wie stolz es war",
    "ITA": "quanto questo lo abbia reso orgoglioso",
    "JPN": "ほこらしく　おもった",
    "KOR": "자랑스럽게 생각했던",
    "CHN": "ほこらしく　おもった"
  },
  {
    "ENG": "they ended up in a foul mood",
    "SPA": "el mal humor que le sobrevino",
    "FRE": "ça l’a mis de mauvaise humeur",
    "GER": "wie schlecht gelaunt es war",
    "ITA": "la tensione di quei momenti",
    "JPN": "けんあくな　ムードになった",
    "KOR": "험악한 분위기가 되었던",
    "CHN": "けんあくな　ムードになった"
  },
  {
    "ENG": "it got angry",
    "SPA": "cuánto se enfadó",
    "FRE": "ça l’a rendu furieux",
    "GER": "wie wütend es war",
    "ITA": "quanto questo lo abbia fatto arrabbiare",
    "JPN": "おこってしまった",
    "KOR": "화를 내고 말았던",
    "CHN": "おこってしまった"
  },
  {
    "ENG": "it got jealous",
    "SPA": "los celos que sintió",
    "FRE": "ça l’a rendu jaloux",
    "GER": "wie eifersüchtig es war",
    "ITA": "quanto questo lo abbia reso geloso",
    "JPN": "しっとした",
    "KOR": "질투했던",
    "CHN": "しっとした"
  },
  {
    "ENG": "it got sleepy",
    "SPA": "el sueño que le entró",
    "FRE": "ça lui a donné sommeil",
    "GER": "wie müde es war",
    "ITA": "quanto sonno gli era venuto",
    "JPN": "ねむくなった",
    "KOR": "졸렸던",
    "CHN": "ねむくなった"
  }
]
},{}],11:[function(require,module,exports){
module.exports=[
  null,
  {
    "ENG": "The Pokémon remembers",
    "SPA": "El Pokémon recuerda muy vagamente",
    "FRE": "se souvient vaguement que",
    "GER": "Es erinnert sich daran,",
    "ITA": "Il Pokémon ricorda ancora",
    "JPN": "おもいで　らしいわ",
    "KOR": "추억인 것 같아",
    "CHN": "おもいで　らしいわ"
  },
  {
    "ENG": "The Pokémon remembers",
    "SPA": "El Pokémon recuerda vagamente",
    "FRE": "se souvient vaguement que",
    "GER": "Es erinnert sich daran,",
    "ITA": "Il Pokémon ricorda ancora",
    "JPN": "おもいで　らしいわ",
    "KOR": "추억인 것 같아",
    "CHN": "おもいで　らしいわ"
  },
  {
    "ENG": "The Pokémon remembers",
    "SPA": "El Pokémon recuerda más o menos",
    "FRE": "se souvient vaguement que",
    "GER": "Es erinnert sich daran,",
    "ITA": "Il Pokémon ricorda ancora",
    "JPN": "おもいで　らしいわ",
    "KOR": "추억인 것 같아",
    "CHN": "おもいで　らしいわ"
  },
  {
    "ENG": "The Pokémon remembers",
    "SPA": "El Pokémon recuerda bastante bien",
    "FRE": "se souvient vaguement que",
    "GER": "Es erinnert sich daran,",
    "ITA": "Il Pokémon ricorda ancora",
    "JPN": "おもいで　らしいわ",
    "KOR": "추억인 것 같아",
    "CHN": "おもいで　らしいわ"
  },
  {
    "ENG": "The Pokémon clearly remembers",
    "SPA": "El Pokémon recuerda con claridad",
    "FRE": "se souvient clairement que",
    "GER": "Es erinnert sich klar und deutlich daran,",
    "ITA": "Il Pokémon ricorda molto bene",
    "JPN": "きおくにのこる　おもいで　らしいわ",
    "KOR": "기억에 남는 추억인 것 같아",
    "CHN": "きおくにのこる　おもいで　らしいわ"
  },
  {
    "ENG": "The Pokémon definitely remembers",
    "SPA": "El Pokémon recuerda intensamente",
    "FRE": "se souvient très bien que",
    "GER": "Es erinnert sich ergriffen daran zurück,",
    "ITA": "Il Pokémon ricorda distintamente",
    "JPN": "かんがいぶかい　おもいで　だって",
    "KOR": "마음에 깊이 남았던 추억이래",
    "CHN": "かんがいぶかい　おもいで　だって"
  },
  {
    "ENG": "The Pokémon fondly remembers",
    "SPA": "El Pokémon recuerda a la perfección",
    "FRE": "n’oubliera jamais que",
    "GER": "Es erinnert sich sehr gern daran,",
    "ITA": "Il Pokémon ricorderà per sempre",
    "JPN": "さいこうの　おもいで　だって！",
    "KOR": "최고의 추억이었대!",
    "CHN": "さいこうの　おもいで　だって！"
  }
]

},{}],12:[function(require,module,exports){
module.exports=[
  {
    "ENG": "The Pokémon seems to have a good memory, but it doesn’t seem to be able to remember...",
    "SPA": "Aunque parece guardar un grato recuerdo, no es capaz de rescatarlo de la memoria, por lo que veo.",
    "FRE": "Il se rappelle un bon souvenir, mais les détails lui semblent flous.",
    "GER": "Es scheint ein gutes Gedächtnis zu haben, aber es sieht so aus, als könnte es sich nicht erinnern...",
    "ITA": "Questo Pokémon ha dei bei ricordi, ma adesso non è possibile richiamarli...",
    "JPN": "いい　おもいでが　あるようだけど ちょっと　おもいおこせないみたい……",
    "KOR": "좋은 추억이 있는 것 같은데 기억이 잘 떠오르지 않는 것 같아...",
    "CHN": "いい　おもいでが　あるようだけど ちょっと　おもいおこせないみたい……"
  },
  {
    "ENG": "{0} met {1} at... {2}. {1} threw a Poké Ball at it, and they started to travel together. {4} that {3}.",
    "SPA": "Los caminos de {0} y {1} se cruzaron en {2}. La Poké Ball lanzada por {1} marcó el punto de partida de su viaje conjunto. {4} {3}.",
    "FRE": "{0} a fait la rencontre de {1} {2}. Il a accepté d’entrer dans sa Poké Ball, et c’est ainsi que leur amitié a commencé. Il {4} {3}.",
    "GER": "{0} ist {1} {2} begegnet. {1} warf einen Pokéball und ihre gemeinsame Reise begann. {4} {3}.",
    "ITA": "Un giorno {0} ha incontrato {1} {2}. {1} ha lanciato una Poké Ball per catturarlo e da quel momento hanno iniziato a viaggiare insieme. {4} {3}.",
    "JPN": "{0}は　{1}に {2}で　であい　 モンスターボールを　なげられて いっしょに　たびする　ことになり　 {3}ことが {4}",
    "KOR": "{0} {1} {2}에서 만나 몬스터볼에 들어가게 되고 함께 여행하게 되어 {3} 게 {4}",
    "CHN": "{0}は　{1}に {2}で　であい　 モンスターボールを　なげられて いっしょに　たびする　ことになり　 {3}ことが {4}"
  },
  {
    "ENG": "{0} hatched from an Egg and saw {1} for the first time at... {2}. {4} that {3}.",
    "SPA": "Lo primero que vio {0} cuando salió del cascarón en {2} fue la cara de {1}. {4} {3}.",
    "FRE": "{0} a brisé la coquille de son Œuf et a fait la rencontre de {1} {2}. Il {4} {3}.",
    "GER": "{0} sah {1} zum ersten Mal, als es {2} aus seinem Ei geschlüpft ist. {4} {3}.",
    "ITA": "{0} uscì dal suo Uovo incontrando {1} per la prima volta {2}. {4} {3}.",
    "JPN": "{0}は {2}で　 タマゴの　からをやぶって　でてきたとき はじめて　{1}と　であい　 {3}ことが {4}",
    "KOR": "{0} {2}에서 알의 껍데기를 깨고 나왔을 때 처음 {1} 만나서 {3} 게 {4}",
    "CHN": "{0}は {2}で　 タマゴの　からをやぶって　でてきたとき はじめて　{1}と　であい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} met {1} at... {2}. {4} that {3}.",
    "SPA": "Los caminos de {0} y {1} se cruzaron en {2}. {4} {3}.",
    "FRE": "{0} a fait la rencontre de {1} {2}. Il {4} {3}.",
    "GER": "{0} ist {1} {2} begegnet. {4} {3}.",
    "ITA": "{0} ha incontrato {1} {2}. {4} {3}.",
    "JPN": "{0}は　{1}と {2}で　であえて　 {3}ことが {4}",
    "KOR": "{0} {1} {2}에서 만나서 {3} 게 {4}",
    "CHN": "{0}は　{1}と {2}で　であえて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} became {1}’s friend when it arrived via Link Trade at... {2}. {4} that {3}.",
    "SPA": "{0} y {1} se conocieron como consecuencia de un intercambio Pokémon en {2} y ambos sintieron que era el comienzo de una gran amistad. {4} {3}.",
    "FRE": "{0} est devenu l’ami de {1} lors d’un échange {2}. Il {4} {3}.",
    "GER": "{0} gelangte per Tausch {2} in das Team von {1}. {4} {3}.",
    "ITA": "{0} ha fatto amicizia con {1} {2} grazie a uno scambio di Pokémon. {4} {3}.",
    "JPN": "{0}は {2}で　 ポケモンこうかんに　よって {1}の　なかまとなり　 {3}ことが {4}",
    "KOR": "{0} {2}에서 포켓몬 교환으로 {1}의 동료가 되어 {3} 게 {4}",
    "CHN": "{0}は {2}で　 ポケモンこうかんに　よって {1}の　なかまとなり　 {3}ことが {4}"
  },
  {
    "ENG": "{0} went to a Pokémon Center with {1} to buy {2}. {4} that {3}.",
    "SPA": "En una ocasión, {0} y {1} fueron juntos a un Centro Pokémon para comprar  {2}. {4} {3}.",
    "FRE": "{0} est allé dans un Centre Pokémon avec {1} pour acheter {2}. Il {4} {3}.",
    "GER": "{0} ist mit {1} in ein Pokémon-Center gegangen, um {2} zu kaufen. {4} {3}.",
    "ITA": "Una volta {0} ha visitato con {1} il Centro Pokémon per comprare {2}. {4} {3}.",
    "JPN": "{0}は　{1}と ポケモンセンターに　{2}を　 かいに　いって {3}ことが {4}",
    "KOR": "{0} {1} 포켓몬센터에 {2} 사러가서 {3} 게 {4}",
    "CHN": "{0}は　{1}と ポケモンセンターに　{2}を　 かいに　いって {3}ことが {4}"
  },
  {
    "ENG": "{0} went to the Pokémon Center in {2} with {1} and had its tired body healed there. {4} that {3}.",
    "SPA": "{1} llevó a {0} al Centro Pokémon de {2} en una ocasión, para que pudiese reponerse. {4} {3}.",
    "FRE": "{0} est allé dans un Centre Pokémon ( {2} ) avec {1} pour se reposer un moment. Il {4} {3}.",
    "GER": "{0} wurde von {1} irgendwo in ein Pokémon-Center gebracht und dort wieder aufgepäppelt.Wo war das noch gleich? Ach ja, {2}! {4} {3}.",
    "ITA": "Una volta {0} ha visitato con {1} il Centro Pokémon di {2} per rimettersi in forze. {4} {3}.",
    "JPN": "{0}は　{1}と ~の　 ポケモンセンターに　いって つかれた　からだを　かいふくしてもらい　 {3}ことが {4}",
    "KOR": "{0} {1} {2}의 포켓몬센터에 가서 지친 몸을 회복하고 {3} 게 {4}",
    "CHN": "{0}は　{1}と ~の　 ポケモンセンターに　いって つかれた　からだを　かいふくしてもらい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} went fishing with {1}, and they caught {2}. {4} that {3}.",
    "SPA": "En una ocasión, {1} y {0} pescaron juntos un ejemplar de {2}. {4} {3}.",
    "FRE": "{0} est allé à la pêche avec {1} et ils ont attrapé un {2}. Il {4} {3}.",
    "GER": "{0} war mit {1} fischen. Zusammen haben sie ein {2} geangelt! {4} {3}.",
    "ITA": "Quando {1} ha pescato {2}, {0} era con (lui/lei). {4} {3}.",
    "JPN": "{0}は　{1}と いっしょに　つりをして　 {2}を つりあげ　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 낚시로 {2} 낚아 올려 {3} 게 {4}",
    "CHN": "{0}は　{1}と いっしょに　つりをして　 {2}を つりあげ　 {3}ことが {4}"
  },
  {
    "ENG": "{0} went fishing with {1}, but the hooked Pokémon got away! {4} that {3}.",
    "SPA": "Cuando {1} y {0} fueron juntos de pesca en una ocasión, {1} dejó escapar un Pokémon que ya tenía en el bote. {4} {3}.",
    "FRE": "{0} est allé à la pêche avec {1}.Quelque chose a mordu à l’hameçon, mais la prise s’est échappée. Il {4} {3}.",
    "GER": "{0} war mit {1} angeln und {1} hat ein mühsam an Land gezogenes Pokémon entkommen lassen. {4} {3}.",
    "ITA": "Una volta {0} stava pescando con {1}, ma si è lasciato sfuggire il Pokémon che aveva trovato. {4} {3}.",
    "JPN": "{0}は　{1}と いっしょに　つりをしたとき　 {1}が　せっかく　つれた ポケモンを　のがしてしまって　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 낚시했을 때 {1} 모처럼 낚은 포켓몬을 놓쳐 버려 {3} 게 {4}",
    "CHN": "{0}は　{1}と いっしょに　つりをしたとき　 {1}が　せっかく　つれた ポケモンを　のがしてしまって　 {3}ことが {4}"
  },
  {
    "ENG": "{0} saw {1} paying attention to {2}. {4} that {3}.",
    "SPA": "En una ocasión, {0} presenció cómo {1} mimaba a {2}. {4} {3}.",
    "FRE": "{0} a vu {1} jouer avec un {2}. Il {4} {3}.",
    "GER": "{0} hat gesehen, wie {1} sich um ein {2} gekümmert hat. {4} {3}.",
    "ITA": "Una volta {0} ha visto {1} colmare di attenzioni {2}. {4} {3}.",
    "JPN": "{0}は　{1}が {2}のことを　 かまって　いたときに {3}ことが {4}",
    "KOR": "{0} {1} {2} 놀고 있을 때 {3} 게 {4}",
    "CHN": "{0}は　{1}が {2}のことを　 かまって　いたときに {3}ことが {4}"
  },
  {
    "ENG": "{0} got treats from {1}. {4} that {3}.",
    "SPA": "En una ocasión, {1} le dio un dulce a {0}. {4} {3}.",
    "FRE": "{0} a reçu une sucrerie de {1}. Il {4} {3}.",
    "GER": "{0} hat von {1} Süßigkeiten bekommen. {4} {3}.",
    "ITA": "Una volta {0} ha ricevuto un dolcetto da {1}. {4} {3}.",
    "JPN": "{0}は {1}に　 おかしを　もらって {3}ことが {4}",
    "KOR": "{0} {1}에게 과자를 받고 {3} 게 {4}",
    "CHN": "{0}は {1}に　 おかしを　もらって {3}ことが {4}"
  },
  {
    "ENG": "{0} went clothes shopping with {1}. {4} that {3}.",
    "SPA": "En una ocasión, {0} y {1} fueron juntos a comprar ropa. {4} {3}.",
    "FRE": "{0} est allé acheter des vêtements avec {1}. Il {4} {3}.",
    "GER": "{0} war mit {1} shoppen. {4} {3}.",
    "ITA": "Una volta {0} è andato a comprare dei vestiti con {1}. {4} {3}.",
    "JPN": "{0}は {1}と　 いっしょに　ようふくを　かいにいって {3}ことが {4}",
    "KOR": "{0} {1} 함께 옷을 사러 가서 {3} 게 {4}",
    "CHN": "{0}は {1}と　 いっしょに　ようふくを　かいにいって {3}ことが {4}"
  },
  {
    "ENG": "{0} learned {2} from {1}. {4} that {3}.",
    "SPA": "{1} enseñó {2} a {0}. {4} {3}.",
    "FRE": "{0} a appris {2} grâce à {1}. Il {4} {3}.",
    "GER": "{0} hat von {1} {2} gelernt. {4} {3}.",
    "ITA": "Una volta {0} ha imparato {2} grazie a {1}. {4} {3}.",
    "JPN": "{0}は　{1}に {2}を　 おぼえさせてもらい {3}ことが {4}",
    "KOR": "{0} {1} 덕분에 {2} 배울 수 있어서 {3} 게 {4}",
    "CHN": "{0}は　{1}に {2}を　 おぼえさせてもらい {3}ことが {4}"
  },
  {
    "ENG": "{0} helped {1} hatch {2} from an Egg. {4} that {3}.",
    "SPA": "{0} ayudó una vez a {1} a eclosionar el Huevo de {2}. {4} {3}.",
    "FRE": "{0} était avec {1} quand il a aidé un {2} à sortir de son Œuf. Il {4} {3}.",
    "GER": "{0} hat {1} dabei geholfen, ein {2} aus einem Ei schlüpfen zu lassen. {4} {3}.",
    "ITA": "Una volta {0} ha aiutato {1} a far schiudere un Uovo di {2}. {4} {3}.",
    "JPN": "{0}は　{1}が {2}の　 タマゴを　かえすのを　てつだって {3}ことが {4}",
    "KOR": "{0} {1} {2}의 알을 부화시키는 걸 돕고 {3} 게 {4}",
    "CHN": "{0}は　{1}が {2}の　 タマゴを　かえすのを　てつだって {3}ことが {4}"
  },
  {
    "ENG": "{0} was with {1} when (he/she) caught {2}. {4} that {3}.",
    "SPA": "{0} estaba presente cuando {1} atrapó a {2}. {4} {3}.",
    "FRE": "{0} était avec {1} lorsque ce Dresseur a attrapé un {2}. Il {4} {3}.",
    "GER": "{0} war dabei, als {1} ein {2} gefangen hat. {4} {3}.",
    "ITA": "Quando {1} ha catturato {2}, {0} era con (lui/lei). {4} {3}.",
    "JPN": "{0}は　{1}が {2}を　 つかまえた　ときに {3}ことが {4}",
    "KOR": "{0} {1} {2} 잡았을 때 {3} 게 {4}",
    "CHN": "{0}は　{1}が {2}を　 つかまえた　ときに {3}ことが {4}"
  },
  {
    "ENG": "{1} used {2} when {0} was in trouble. {4} that {3}.",
    "SPA": "Cuando {0} estaba contra las cuerdas, {1} usó  {2}. {4} {3}.",
    "FRE": "{0} était en mauvaise posture, quand {1} a utilisé {2}. Il {4} {3}.",
    "GER": "Als {0} nur noch wenige KP hatte, setzte {1} ein Item ein.Wie hieß das Item noch gleich? Ach ja, {2}! {4} {3}.",
    "ITA": "Una volta {1} ha usato {2} quando {0} era in difficoltà. {4} {3}.",
    "JPN": "{0}は ピンチの　ときに　 {1}に {2}を　つかってもらって　 {3}ことが {4}",
    "KOR": "{0} 위기에 몰렸을 때 {1} {2} 써줘서 {3} 게 {4}",
    "CHN": "{0}は ピンチの　ときに　 {1}に {2}を　つかってもらって　 {3}ことが {4}"
  },
  {
    "ENG": "{0} used {2} at {1}’s instruction, but it had no effect. {4} that {3}.",
    "SPA": "Siguiendo las instrucciones de {1}, en una ocasión {0} ejecutó {2} en vano, sin efecto alguno. {4} {3}.",
    "FRE": "{0} a utilisé {2} sur les indications de {1}, mais ça n’a eu aucun effet. Il {4} {3}.",
    "GER": "{0} hat auf Anweisung von {1} {2} eingesetzt, aber die Attacke hat keinerlei Wirkung gezeigt. {4} {3}.",
    "ITA": "Una volta {0} ha usato {2} seguendo le indicazioni di {1}, ma la mossa non ha avuto effetto. {4} {3}.",
    "JPN": "{0}は　{1}の しじで　だした　{2}が　 あいてに　こうかが　なくて {3}ことが {4}",
    "KOR": "{0} {1}의 명령으로 썼던 {2} 상대방에게 효과가 없어서 {3} 게 {4}",
    "CHN": "{0}は　{1}の しじで　だした　{2}が　 あいてに　こうかが　なくて {3}ことが {4}"
  },
  {
    "ENG": "{0} battled at {1}’s side and defeated {2}. {4} that {3}.",
    "SPA": "{0} y {1} lucharon codo con codo para derrotar a {2}. {4} {3}.",
    "FRE": "{0} a aidé {1} à vaincre un {2}. Il {4} {3}.",
    "GER": "{0} hat zusammen mit {1} gekämpft und ein {2} besiegt. {4} {3}.",
    "ITA": "Una volta {0} ha lottato insieme a {1} e ha sconfitto {2}. {4} {3}.",
    "JPN": "{0}は　{1}と いっしょに　たたかい　 {2}を たおして　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 {2} 쓰러뜨려서 {3} 게 {4}",
    "CHN": "{0}は　{1}と いっしょに　たたかい　 {2}を たおして　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was defeated by {2} and {1} ran away. {4} that {3}.",
    "SPA": "Cuando {0} perdió el combate contra {2}, {1} se vio obligad(o/a) a poner pies en polvorosa. {4} {3}.",
    "FRE": "{0} a été battu par un {2} et s’est enfui avec {1}. Il {4} {3}.",
    "GER": "{0} wurde von einem {2} besiegt und ist mit {1} geflüchtet. {4} {3}.",
    "ITA": "Una volta {0}, lottando contro {2}, è stato sconfitto ed è fuggito con {1}. {4} {3}.",
    "JPN": "{0}は {2}との　 たたかいに　やぶれて {1}と　 いっしょに　にげかえり {3}ことが {4}",
    "KOR": "{0} {2}의 싸움에서 지고 {1} 함께 도망치고 돌아와서 {3} 게 {4}",
    "CHN": "{0}は {2}との　 たたかいに　やぶれて {1}と　 いっしょに　にげかえり {3}ことが {4}"
  },
  {
    "ENG": "{0} was raised by {1} and evolved at {2}. {4} that {3}.",
    "SPA": "Gracias al entrenamiento de {1}, llegó el día en que {0} logró evolucionar. Todo ocurrió en {2}. {4} {3}.",
    "FRE": "{0} a été entraîné par {1} et a évolué {2}. Il {4} {3}.",
    "GER": "{0} wurde von {1} trainiert und hat sich {2} entwickelt. {4} {3}.",
    "ITA": "{0} si è allenato con {1} fino a evolversi {2}. {4} {3}.",
    "JPN": "{0}は　{1}に そだてられ　 {2}で しんかして　 {3}ことが {4}",
    "KOR": "{0} {1}에게 키워지고 {2}에서 진화해서 {3} 게 {4}",
    "CHN": "{0}は　{1}に そだてられ　 {2}で しんかして　 {3}ことが {4}"
  },
  {
    "ENG": "{0} surfed across the water, carrying {1} on its back. {4} that {3}.",
    "SPA": "En cierta ocasión, {1} surcó las aguas a lomos de {0}. {4} {3}.",
    "FRE": "{0} a transporté {1} sur son dos pour lui permettre de traverser une étendue d’eau. Il {4} {3}.",
    "GER": "{0} ist mit {1} auf seinem Rücken übers Wasser gesurft. {4} {3}.",
    "ITA": "Una volta {0} ha usato Surf trasportando sul dorso {1}. {4} {3}.",
    "JPN": "{0}は なみのりで　{1}を　 じぶんの　せなかに　のせて {3}ことが {4}",
    "KOR": "{0} 파도타기로 {1} 자기 등에 태워서 {3} 게 {4}",
    "CHN": "{0}は なみのりで　{1}を　 じぶんの　せなかに　のせて {3}ことが {4}"
  },
  {
    "ENG": "{0} saw {2} carrying {1} on its back. {4} that {3}.",
    "SPA": "En cierta ocasión, {0} vio como {1} iba a lomos de {2}. {4} {3}.",
    "FRE": "{0} a vu un {2} porter {1} sur son dos. Il {4} {3}.",
    "GER": "{0} hat gesehen, wie {1} von einem {2} auf dessen Rücken getragen wurde. {4} {3}.",
    "ITA": "Una volta {0} ha visto {2} portare sul dorso {1}. {4} {3}.",
    "JPN": "{0}は {2}が　 {1}を せなかに　のせているのを　みて　 {3}ことが {4}",
    "KOR": "{0} {2} {1} 등위에 태우고 있는 걸 보고 {3} 게 {4}",
    "CHN": "{0}は {2}が　 {1}を せなかに　のせているのを　みて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} battled at {1}’s side and defeated a Gym Leader. {4} that {3}.",
    "SPA": "{0} y {1} lucharon codo con codo para derrotar a un Líder de Gimnasio. {4} {3}.",
    "FRE": "{0} a aidé {1} à vaincre un Champion d’Arène. Il {4} {3}.",
    "GER": "{0} und {1} haben zusammen einen Arenaorden errungen. {4} {3}.",
    "ITA": "Una volta {0}, lottando con {1}, ha sconfitto la squadra di un Capopalestra. {4} {3}.",
    "JPN": "{0}は　{1}と いっしょに　たたかって　 ジムリーダーに　かったとき {3}ことが {4}",
    "KOR": "{0} {1} 함께 싸워 체육관 관장을 이겼을 때 {3} 게 {4}",
    "CHN": "{0}は　{1}と いっしょに　たたかって　 ジムリーダーに　かったとき {3}ことが {4}"
  },
  {
    "ENG": "When {1} challenged the Battle Maison, {0} got so nervous. {4} that {3}.",
    "SPA": "Cuando {1} afrontó el reto de la Mansión Batalla, {0} era un manojo de nervios. {4} {3}.",
    "FRE": "{0} a aidé {1} à relever le défi de la Maison de Combat. Il {4} {3}.",
    "GER": "Als {1} sich der Herausforderung im Kampfhaus gestellt hat, war {0} extrem nervös. {4} {3}.",
    "ITA": "Una volta {0} ha affrontato le sfide della Villa Lotta con {1} in un’atmosfera di grande tensione. {4} {3}.",
    "JPN": "{0}は　{1}が バトルハウスに　いどんだとき　 あまりにも　きんちょうして {3}ことが {4}",
    "KOR": "{0} {1} 배틀하우스에 도전했을 때 너무 긴장해서 {3} 게 {4}",
    "CHN": "{0}は　{1}が バトルハウスに　いどんだとき　 あまりにも　きんちょうして {3}ことが {4}"
  },
  {
    "ENG": "{0} flew, carrying {1} on its back, to {2}. {4} that {3}.",
    "SPA": "{0} llevó volando a {1} hasta {2} en cierta ocasión. {4} {3}.",
    "FRE": "{0} a amené {1} {2} en volant. Il {4} {3}.",
    "GER": "{0} ist mit {1} auf seinem Rücken geflogen und sie landeten {2}. {4} {3}.",
    "ITA": "Una volta {0} ha usato Volo per trasportare {1} {2}. {4} {3}.",
    "JPN": "{0}は そらをとぶで　{1}を　 {2}へ　はこび {3}ことが {4}",
    "KOR": "{0} 공중날기로 {1} {2}로 옮겨서 {3} 게 {4}",
    "CHN": "{0}は そらをとぶで　{1}を　 {2}へ　はこび {3}ことが {4}"
  },
  {
    "ENG": "{0} and {1} were surprised when {2} jumped out! {4} that {3}.",
    "SPA": "En una ocasión, {0} y {1} se llevaron un susto de campeonato cuando, de repente, {2} se abalanzó sobre ellos. {4} {3}.",
    "FRE": "{0} et {1} ont été surpris quand un {2} a jailli sur leur route. Il {4} {3}.",
    "GER": "{0} wurde zusammen mit {1} von einem wilden {2} überrascht. {4} {3}.",
    "ITA": "Una volta {0} e {1} si sono presi un bello spavento quando è sbucato fuori all’improvviso {2}. {4} {3}.",
    "JPN": "{0}は とびだしてきた　{2}に　 {1}と いっしょに　おどろいてしまい　 {3}ことが {4}",
    "KOR": "{0} 튀어나온 {2}에 {1} 함께 깜짝 놀라서 {3} 게 {4}",
    "CHN": "{0}は とびだしてきた　{2}に　 {1}と いっしょに　おどろいてしまい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} saw {1} using {2}. {4} that {3}.",
    "SPA": "Una vez {0} vio como {1} utilizaba  {2}. {4} {3}.",
    "FRE": "{0} a vu {1} utiliser {2}. Il {4} {3}.",
    "GER": "{0} hat gesehen, wie {1} ein Item eingesetzt hat.Wie hieß das Item noch gleich? Ach ja, {2}! {4} {3}.",
    "ITA": "Una volta {0} ha visto {1} usare {2}. {4} {3}.",
    "JPN": "{0}は　{1}が {2}を　つかったのを　みて　 {3}ことが {4}",
    "KOR": "{0} {1} {2} 쓰는 걸 보고 {3} 게 {4}",
    "CHN": "{0}は　{1}が {2}を　つかったのを　みて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} battled at {1}’s side and defeated the Champion. {4} that {3}.",
    "SPA": "{0} y {1} lucharon codo con codo para derrotar a la Campeona. {4} {3}.",
    "FRE": "{0} a aidé {1} à vaincre le Maître de la Ligue. Il {4} {3}.",
    "GER": "{0} hat zusammen mit {1} den Champ besiegt. {4} {3}.",
    "ITA": "Una volta {0} ha lottato insieme a {1} e ha sconfitto la Campionessa. {4} {3}.",
    "JPN": "{0}は　{1}と いっしょに　たたかって　 チャンピオンを　たおしたとき {3}ことが {4}",
    "KOR": "{0} {1} 함께 싸워 챔피언을 쓰러뜨리고 {3} 게 {4}",
    "CHN": "{0}は　{1}と いっしょに　たたかって　 チャンピオンを　たおしたとき {3}ことが {4}"
  },
  {
    "ENG": "{0} was with {1} when (he/she) completed (his/her) Pokédex. {4} that {3}.",
    "SPA": "{0} estaba junto a {1} cuando consiguió completar su Pokédex. {4} {3}.",
    "FRE": "{0} était avec {1} quand ce Dresseur a complété son Pokédex. Il {4} {3}.",
    "GER": "{0} war dabei, als {1} den Pokédex vervollständigt hat. {4} {3}.",
    "ITA": "Quando {1} ha completato il Pokédex, {0} era con (lui/lei). {4} {3}.",
    "JPN": "{0}は　{1}が ポケモンずかんを　かんせい　させたとき　 {3}ことが {4}",
    "KOR": "{0} {1} 포켓몬 도감을 완성했을 때 {3} 게 {4}",
    "CHN": "{0}は　{1}が ポケモンずかんを　かんせい　させたとき　 {3}ことが {4}"
  },
  {
    "ENG": "{0} encountered {2} when it was with {1}. {4} that {3}.",
    "SPA": "{0} se hallaba junto a {1} cuando ambos se toparon con {2}. {4} {3}.",
    "FRE": "{0} était aux côtés de {1} quand ce Dresseur a croisé un {2}. Il {4} {3}.",
    "GER": "{0} und {1} sind zusammen {2} begegnet. {4} {3}.",
    "ITA": "Mentre era con {1}, {0} ha incontrato {2}. {4} {3}.",
    "JPN": "{0}は {2}と　そうぐうして　 {1}と　いっしょに {3}ことが {4}",
    "KOR": "{0} {2} 조우해서 {1} 함께 {3} 게 {4}",
    "CHN": "{0}は {2}と　そうぐうして　 {1}と　いっしょに {3}ことが {4}"
  },
  {
    "ENG": "{0} battled at {1}’s side and defeated a Battle Chatelaine. {4} that {3}.",
    "SPA": "En una ocasión, {1} derrotó a una Dama del Combate. {4} {3}.",
    "FRE": "{0} a aidé {1} à vaincre une Châtelaine Combat. Il {4} {3}.",
    "GER": "{0} war dabei, als {1} eine Kampf-Châtelaine besiegt hat. {4} {3}.",
    "ITA": "Una volta {0}, lottando insieme a {1}, ha sconfitto la squadra di una Dama della lotta. {4} {3}.",
    "JPN": "{0}は　{1}が バトルシャトレーヌを　たおしたとき　 {3}ことが {4}",
    "KOR": "{0} {1} 배틀샤틀레느를 쓰러뜨렸을 때 {3} 게 {4}",
    "CHN": "{0}は　{1}が バトルシャトレーヌを　たおしたとき　 {3}ことが {4}"
  },
  {
    "ENG": "{0} searched for hidden items with {1} using the Dowsing Machine at... {2}. {4} that {3}.",
    "SPA": "{0} y {1} utilizaron el Zahorí para buscar juntos objetos ocultos en {2}. {4} {3}.",
    "FRE": "{0} était aux côtés de {1} quand ce Dresseur a utilisé le Cherch’Objet, {2}. Il {4} {3}.",
    "GER": "{0} hat mit {1} {2} mit dem Itemradar nach versteckten Items gesucht. {4} {3}.",
    "ITA": "{0} e {1} una volta hanno usato il Ricerca Strumenti {2}. {4} {3}.",
    "JPN": "{0}は　{1}と {2}で　 ダウジングマシンを　つかって かくされた　どうぐを　さがし　 {3}ことが {4}",
    "KOR": "{0} {1} {2}에서 다우징머신으로 숨겨진 도구를 찾아서 {3} 게 {4}",
    "CHN": "{0}は　{1}と {2}で　 ダウジングマシンを　つかって かくされた　どうぐを　さがし　 {3}ことが {4}"
  },
  {
    "ENG": "{0} rode a Bicycle with {1} at... {2}. {4} that {3}.",
    "SPA": "{0} se montó en Bici con {1} en {2}. {4} {3}.",
    "FRE": "{0} est monté à Bicyclette avec {1} {2}. Il {4} {3}.",
    "GER": "{0} war mit {1} {2} Radfahren. {4} {3}.",
    "ITA": "Una volta {1} ha portato {0} in Bicicletta {2}. {4} {3}.",
    "JPN": "{0}は　{1}と {2}で　 じてんしゃに　のって {3}ことが {4}",
    "KOR": "{0} {1} {2}에서 자전거를 타고 {3} 게 {4}",
    "CHN": "{0}は　{1}と {2}で　 じてんしゃに　のって {3}ことが {4}"
  },
  {
    "ENG": "{0} checked a destination with {1} using the Town Map at... {2}. {4} that {3}.",
    "SPA": "{0} y {1} utilizaron el Mapa en {2} para comprobar adónde se dirigían. {4} {3}.",
    "FRE": "{0} a consulté la Carte avec {1} {2}. Il {4} {3}.",
    "GER": "{0} hat mit {1} {2} ein neues Reiseziel auf der Karte festgelegt. {4} {3}.",
    "ITA": "Una volta {0} ha controllato la mappa con {1} {2}. {4} {3}.",
    "JPN": "{0}は　{1}と {2}で　 タウンマップを　つかって もくてきの　ばしょを　かくにんし　 {3}ことが {4}",
    "KOR": "{0} {1} {2}에서 타운맵으로 목적지를 확인하고 {3} 게 {4}",
    "CHN": "{0}は　{1}と {2}で　 タウンマップを　つかって もくてきの　ばしょを　かくにんし　 {3}ことが {4}"
  },
  {
    "ENG": "{0} planted {2} with {1} and imagined a big harvest. {4} that {3}.",
    "SPA": "Mientras plantaba una {2} con {1}, {0} se imaginaba lo abundante que sería la cosecha. {4} {3}.",
    "FRE": "{0} a planté des Baies avec {1}, et s’est imaginé à quel point les arbustes seraient jolis à l’heure de la récolte. Il {4} {3}.",
    "GER": "{0} hat zusammen mit {1} eine {2} gepflanzt und sich vorgestellt, wie reich die Ernte sein würde. {4} {3}.",
    "ITA": "{0} ha piantato con {1} {2} ed è impaziente di vederne spuntare i frutti. {4} {3}.",
    "JPN": "{0}は　{1}と {2}を　つちに　うめて　 たくさんの　みが　なったときの ことを　そうぞうしながら　 {3}ことが {4}",
    "KOR": "{0} {1} {2} 땅에 묻고 열매가 많이 열렸을 때를 상상하며 {3} 게 {4}",
    "CHN": "{0}は　{1}と {2}を　つちに　うめて　 たくさんの　みが　なったときの ことを　そうぞうしながら　 {3}ことが {4}"
  },
  {
    "ENG": "{0} proudly used Strength at {1}’s instruction in... {2}. {4} that {3}.",
    "SPA": "Siguiendo las indicaciones de {1}, {0} se sintió muy orgulloso una vez al usar Fuerza en {2}. {4} {3}.",
    "FRE": "{0} a utilisé Force {2} sur les instructions de {1}. Il {4} {3}.",
    "GER": "{0} hat auf Befehl von {1} {2} die Attacke Stärke eingesetzt. {4} {3}.",
    "ITA": "Una volta {0}, su indicazione di {1}, ha usato Forza, la sua mossa migliore, {2}. {4} {3}.",
    "JPN": "{0}は {1}に　しじされ　 {2}で じまんの　かいりきを　つかい　 {3}ことが {4}",
    "KOR": "{0} {1}에게 명령받아 {2}에서 특기인 괴력을 쓰고 {3} 게 {4}",
    "CHN": "{0}は {1}に　しじされ　 {2}で じまんの　かいりきを　つかい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} proudly used Cut at {1}’s instruction in... {2}. {4} that {3}.",
    "SPA": "Siguiendo las indicaciones de {1}, una vez {0} hizo gala de su destreza al usar Corte en {2}. {4} {3}.",
    "FRE": "{0} a utilisé Coupe {2} sur les instructions de {1}. Il {4} {3}.",
    "GER": "{0} hat auf Befehl von {1} {2} die Attacke Zerschneider eingesetzt. {4} {3}.",
    "ITA": "Una volta {0}, su indicazione di {1}, ha usato fieramente Taglio {2}. {4} {3}.",
    "JPN": "{0}は {1}に　しじされ　 {2}で いあいぎりを　ひろうして　 {3}ことが {4}",
    "KOR": "{0} {1}에게 명령받아 {2}에서 풀베기를 펼쳐서 {3} 게 {4}",
    "CHN": "{0}は {1}に　しじされ　 {2}で いあいぎりを　ひろうして　 {3}ことが {4}"
  },
  {
    "ENG": "{0} shattered rocks to its heart’s content at {1}’s instruction in... {2}. {4} that {3}.",
    "SPA": "Siguiendo las indicaciones de {1}, una vez {0} hizo añicos una roca en {2}. {4} {3}.",
    "FRE": "{0} a utilisé Éclate-Roc {2} sur les instructions de {1}. Il {4} {3}.",
    "GER": "{0} hat auf Befehl von {1} {2} einen Felsen zertrümmert. {4} {3}.",
    "ITA": "Una volta {0}, su indicazione di {1}, ha spaccato una roccia {2}. {4} {3}.",
    "JPN": "{0}は {1}に　しじされ　 {2}で おもいっきり　いわをくだき　 {3}ことが {4}",
    "KOR": "{0} {1}에게 명령받아 {2}에서 힘껏 바위를 깨서 {3} 게 {4}",
    "CHN": "{0}は {1}に　しじされ　 {2}で おもいっきり　いわをくだき　 {3}ことが {4}"
  },
  {
    "ENG": "{0} used Waterfall while carrying {1} on its back in... {2}. {4} that {3}.",
    "SPA": "Una vez {0} utilizó Cascada en {2} llevando a cuestas a {1}. {4} {3}.",
    "FRE": "{0} a utilisé Cascade pour aider {1} à remonter le courant {2}. Il {4} {3}.",
    "GER": "{0} hat mit {1} auf seinem Rücken {2} die Attacke Kaskade eingesetzt. {4} {3}.",
    "ITA": "Una volta {0} ha usato Cascata mentre trasportava {1} {2}. {4} {3}.",
    "JPN": "{0}は {2}で　 {1}を　のせて たきのぼりを　つかい　 {3}ことが {4}",
    "KOR": "{0} {2}에서 {1} 태우고 폭포오르기를 써서 {3} 게 {4}",
    "CHN": "{0}は {2}で　 {1}を　のせて たきのぼりを　つかい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} saw {1} secretly picking up something in... {2}. {4} that {3}.",
    "SPA": "Una vez {0} vio como {1} recogía un objeto sin que nadie se diese cuenta en {2}. {4} {3}.",
    "FRE": "{0} a vu {1} ramasser un objet {2}. Il {4} {3}.",
    "GER": "{0} hat gesehen, wie {1} {2} heimlich etwas aufgehoben hat. {4} {3}.",
    "ITA": "Una volta {0} ha visto {1} raccogliere di nascosto qualcosa {2}. {4} {3}.",
    "JPN": "{0}は {2}で　 {1}が　なにかを こそっと　ひろったのを　みて　 {3}ことが {4}",
    "KOR": "{0} {2}에서 {1} 뭔가를 슬쩍 줍는 걸 보고 {3} 게 {4}",
    "CHN": "{0}は {2}で　 {1}が　なにかを こそっと　ひろったのを　みて　 {3}ことが {4}"
  },
  {
    "ENG": "{1} had {0} hold items like {2} to help it along. {4} that {3}.",
    "SPA": "En cierta ocasión, {1} equipó a {0} con  {2}. {4} {3}.",
    "FRE": "{0} a reçu {2} des mains de {1}. Il {4} {3}.",
    "GER": "{0} hat von {1} ein Item zum Tragen bekommen.Wie hieß das Item noch gleich? Ach ja, {2}! {4} {3}.",
    "ITA": "Una volta {1} ha dato a{0} {2}. {4} {3}.",
    "JPN": "{0}は {1}に　 {2}を おもむろに　もたされて　 {3}ことが {4}",
    "KOR": "{0} {1}에게 {2} 조심스럽게 받고 {3} 게 {4}",
    "CHN": "{0}は {1}に　 {2}を おもむろに　もたされて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} headed for Victory Road with {1}. {4} that {3}.",
    "SPA": "En cierto momento, {0} emprendió el camino hacia la Calle Victoria con {1}. {4} {3}.",
    "FRE": "{0} a aidé {1} à relever le défi de la Route Victoire. Il {4} {3}.",
    "GER": "{0} ist mit {1} zur Siegesstraße aufgebrochen. {4} {3}.",
    "ITA": "Una volta {0} si è diretto verso Via Vittoria assieme a {1}. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 チャンピオンロードへ　むかい {3}ことが {4}",
    "KOR": "{0} {1} 함께 챔피언로드에 가서 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 チャンピオンロードへ　むかい {3}ことが {4}"
  },
  {
    "ENG": "{0} checked the sign with {1} at... {2}. {4} that {3}.",
    "SPA": "En una ocasión, {0} y {1} examinaron juntos cierto cartel en {2}. {4} {3}.",
    "FRE": "{0} était avec {1} quand ce Dresseur a regardé un panneau {2}. Il {4} {3}.",
    "GER": "{0} hat mit {1} ein Schild {2} gelesen. {4} {3}.",
    "ITA": "Una volta {0} ha letto un cartello insieme a {1} {2}. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 {2}にある かんばんを　かくにんし　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 {2}에 있는 간판을 확인하고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 {2}にある かんばんを　かくにんし　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was impressed by the speed of the train it took with {1}. {4} that {3}.",
    "SPA": "Cuando {0} montó en el tren junto a {1}, se quedó de piedra por la velocidad vertiginosa que podía alcanzar. {4} {3}.",
    "FRE": "{0} a été impressionné par la vitesse du train qu’il a pris avec {1}. Il {4} {3}.",
    "GER": "{0} war sehr beeindruckt von der Geschwindigkeit des Zugs, den es mit {1} genommen hatte. {4} {3}.",
    "ITA": "Una volta {0} ha preso il treno con {1} ed è rimasto colpito dalla velocità a cui sfrecciava. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 のった　でんしゃの　スピードが とても　はやいことに　かんどうし　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 탄 열차의 엄청나게 빠른 스피드에 감동해서 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 のった　でんしゃの　スピードが とても　はやいことに　かんどうし　 {3}ことが {4}"
  },
  {
    "ENG": "{0} encountered {2} with {1} using the Poké Radar. {4} that {3}.",
    "SPA": "Cuando {0} y {1} usaron el Pokéradar, se toparon con {2}. {4} {3}.",
    "FRE": "{0} était avec {1} quand ce Dresseur a trouvé un {2} avec le Poké Radar. Il {4} {3}.",
    "GER": "{0} hat mit {1} das Pokéradar benutzt und zusammen sind sie einem {2} begegnet. {4} {3}.",
    "ITA": "Una volta {0} ha incontrato {2} con {1} usando il Poké Radar. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 ポケトレを　つかって {2}と　そうぐうし　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 포켓트레로 {2} 조우해서 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 ポケトレを　つかって {2}と　そうぐうし　 {3}ことが {4}"
  },
  {
    "ENG": "When {2} jumped out, {0} was surprised and ran away with {1}. {4} that {3}.",
    "SPA": "{0} y {1} tomaron las de Villadiego cuando {2} les sorprendió con su repentina emboscada. {4} {3}.",
    "FRE": "{0} a fui avec {1} face à un {2} sorti de nulle part. Il {4} {3}.",
    "GER": "{0} war mit {1} unterwegs, als sie plötzlich von einem wilden {2} angegriffen wurden. Völlig überrumpelt haben sie das Weite gesucht. {4} {3}.",
    "ITA": "Una volta {0} e {1} sono fuggiti via spaventati da {2} sbucato fuori all’improvviso. {4} {3}.",
    "JPN": "{0}は {2}が　とびだしてきたとき　 びっくりして　{1}と いっしょに　にげたし　 {3}ことが {4}",
    "KOR": "{0} {2} 튀어나왔을 때 깜짝 놀라서 {1} 함께 도망치고 {3} 게 {4}",
    "CHN": "{0}は {2}が　とびだしてきたとき　 びっくりして　{1}と いっしょに　にげたし　 {3}ことが {4}"
  },
  {
    "ENG": "{0} got a high score at the Battle Institute where it challenged with {1}. {4} that {3}.",
    "SPA": "{0} se hallaba junto a {1} cuando ambos obtuvieron una puntuación alta en la Casa Examinadora. {4} {3}.",
    "FRE": "{0} a aidé {1} à obtenir un bon score à un Test Combat, au Club des Épreuves. Il {4} {3}.",
    "GER": "{0} hat mit {1} im Haus der Prüfung eine hohe Punktzahl erzielt. {4} {3}.",
    "ITA": "Una volta {0} ha affrontato la Casa Esami con {1} e ha ottenuto un ottimo punteggio. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 チャレンジした　トライアルハウスで こうとくてんを　だして　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 도전한 트라이얼하우스에서 높은 점수를 얻고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 チャレンジした　トライアルハウスで こうとくてんを　だして　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was stared at by the Judge intensely when it met him with {1}. {4} that {3}.",
    "SPA": "Cuando {1} llevó a {0} ante el Juez, este realizó un riguroso examen. {4} {3}.",
    "FRE": "{0} s’est fait examiner de près par le Juge, que {1} lui avait présenté. Il {4} {3}.",
    "GER": "{0} hat über {1} den Richter kennengelernt, der es unverwandt angestarrt hat. {4} {3}.",
    "ITA": "Una volta {0} è stato attentamente esaminato da un Giudice da cui lo aveva portato {1}. {4} {3}.",
    "JPN": "{0}は {1}の　しょうかいで　 あった　ジャッジに じろじろと　みられすぎて　 {3}ことが {4}",
    "KOR": "{0} {1}의 소개로 만난 심판이 너무 빤히 쳐다봐서 {3} 게 {4}",
    "CHN": "{0}は {1}の　しょうかいで　 あった　ジャッジに じろじろと　みられすぎて　 {3}ことが {4}"
  },
  {
    "ENG": "The Move Deleter that {0} met through {1} made it forget {2}. {4} that {3}.",
    "SPA": "Cuando {0} se encontró con el Quita-Movimientos gracias a {1}, olvidó {2}. {4} {3}.",
    "FRE": "{0} a oublié {2} grâce à l’Effaceur de Capacités, que {1} lui avait présenté. Il {4} {3}.",
    "GER": "{0} hat über {1} den Attacken-Verlerner kennengelernt, durch den es {2} vergessen hat. {4} {3}.",
    "ITA": "Una volta {0} ha dimenticato {2} grazie ad Amnesio, il Cancellamosse presentatogli da {1}. {4} {3}.",
    "JPN": "{0}は {1}の　しょうかいで　 あった　わすれジイさんに {2}を　わすれさせられ　 {3}ことが {4}",
    "KOR": "{0} {1}의 소개로 만난 깜빡할아버지가 {2} 잊어버리게 해서 {3} 게 {4}",
    "CHN": "{0}は {1}の　しょうかいで　 あった　わすれジイさんに {2}を　わすれさせられ　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was able to remember {2} at {1}’s instruction. {4} that {3}.",
    "SPA": "Siguiendo las instrucciones de {1}, {0} fue capaz de recordar {2}. {4} {3}.",
    "FRE": "{0} s’est remémoré {2}, à la demande de {1}. Il {4} {3}.",
    "GER": "{0} konnte sich unter Anleitung von {1} wieder an {2} erinnern. {4} {3}.",
    "ITA": "Una volta {0} ha ricordato {2} su indicazione di {1}. {4} {3}.",
    "JPN": "{0}は {1}の　しじによって　 {2}を おもいだすことが　でき　 {3}ことが {4}",
    "KOR": "{0} {1}의 명령으로 {2} 떠올릴 수 있어서 {3} 게 {4}",
    "CHN": "{0}は {1}の　しじによって　 {2}を おもいだすことが　でき　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was taken to Pokémon Day Care by {1} and left with {2}. {4} that {3}.",
    "SPA": "{1} llevó a {0} a una Guardería Pokémon para que se criara junto a {2}. {4} {3}.",
    "FRE": "{0} a été amené à la Pension Pokémon par {1}. Il y est resté avec un {2}. Il {4} {3}.",
    "GER": "{0} wurde von {1} in der Pokémon-Pension abgegeben und verbrachte seine Zeit dort zusammen mit einem {2}. {4} {3}.",
    "ITA": "Una volta {1} ha affidato {0} alla Pensione Pokémon assieme a {2}. {4} {3}.",
    "JPN": "{0}は　{1}に そだてやさんへ　つれていかれて　 {2}と いっしょに　あずけられ　 {3}ことが {4}",
    "KOR": "{0} {1} 데리고 간 키우미집에 {2} 함께 맡겨져 {3} 게 {4}",
    "CHN": "{0}は　{1}に そだてやさんへ　つれていかれて　 {2}と いっしょに　あずけられ　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was excited when {1} won with (his/her) Loto Ticket and won prizes like {2}. {4} that {3}.",
    "SPA": "Cuando a {1} le tocó la lotería, {0} vio con envidia que se llevaba  {2} como premio. {4} {3}.",
    "FRE": "{0} a vu {1} gagner {2} à la Loterie ID. Il {4} {3}.",
    "GER": "{0} war neidisch, als {1} mit einem Los ein Item gewonnen hat.Wie hieß das Item noch gleich? Ach ja, {2}! {4} {3}.",
    "ITA": "Una volta {0} ha visto {1} vincere {2} al Centro Lotteria ID. {4} {3}.",
    "JPN": "{0}は {1}が　 くじびきで　{2}を もらったことを　うらやましく　おもい　 {3}ことが {4}",
    "KOR": "{0} {1} 추첨에 당첨되어 {2} 받은 게 부러워서 {3} 게 {4}",
    "CHN": "{0}は {1}が　 くじびきで　{2}を もらったことを　うらやましく　おもい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was with {1} when (he/she) used a Repel at... {2}. {4} that {3}.",
    "SPA": "Cuando {1} usó un Repelente en {2}, {0} se hallaba junto a (él/ella). {4} {3}.",
    "FRE": "{0} était avec {1} quand ce Dresseur a utilisé un Repousse {2}. Il {4} {3}.",
    "GER": "{0} war dabei, als {1} {2} das Item Schutz eingesetzt hat. {4} {3}.",
    "ITA": "Una volta {1} ha usato un Repellente {2} quando {0} era con (lui/lei). {4} {3}.",
    "JPN": "{0}は　{1}が {2}で　 むしよけスプレーを　ふりまいたとき {3}ことが {4}",
    "KOR": "{0} {1} {2}에서 벌레회피스프레이를 주변에 뿌렸을 때 {3} 게 {4}",
    "CHN": "{0}は　{1}が {2}で　 むしよけスプレーを　ふりまいたとき {3}ことが {4}"
  },
  {
    "ENG": "{0} had a very hard training session with {1}. {4} that {3}.",
    "SPA": "En una ocasión, {0} se sometió a un duro entrenamiento impartido por {1}. {4} {3}.",
    "FRE": "{0} se rappelle d’une session d’entraînement particulièrement dure avec {1}. Il {4} {3}.",
    "GER": "{0} hatte ein anstrengendes Spezialtraining mit {1}. {4} {3}.",
    "ITA": "Una volta {0} ha fatto un allenamento faticoso con {1}. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 ハードな　とっくんを　して {3}ことが {4}",
    "KOR": "{0} {1} 함께 하드한 특훈을 해서 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 ハードな　とっくんを　して {3}ことが {4}"
  },
  {
    "ENG": "{0} took an elevator with {1}. {4} that {3}.",
    "SPA": "En una ocasión, {0} se subió a un ascensor junto a {1}. {4} {3}.",
    "FRE": "{0} est monté dans un ascenseur avec {1}. Il {4} {3}.",
    "GER": "{0} ist mit {1} Fahrstuhl gefahren. {4} {3}.",
    "ITA": "Una volta {0} ha preso l’ascensore con {1}. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 エレベータに　のって {3}ことが {4}",
    "KOR": "{0} {1} 함께 엘리베이터를 타고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 エレベータに　のって {3}ことが {4}"
  },
  {
    "ENG": "{0} was taken to the Name Rater by {1} and given a fateful name. {4} that {3}.",
    "SPA": "En una ocasión, {1} y {0} fueron a ver juntos al Inspector de Motes, y este le puso un nombre de buen augurio. {4} {3}.",
    "FRE": "{0} est allé voir le Spécialiste des Noms avec {1}, et s’est vu attribuer un très joli surnom. Il {4} {3}.",
    "GER": "{0} wurde von {1} zum Namenbewerter gebracht und hat einen schicksalhaften Namen erhalten. {4} {3}.",
    "ITA": "Una volta {1} ha portato {0} dal Giudice Onomastico per dargli un nome significativo. {4} {3}.",
    "JPN": "{0}は {1}に　つれられ　 せいめいはんだんしの　ところへ　いき うんめいてきな　なまえを　つけられて　 {3}ことが {4}",
    "KOR": "{0} {1}에게 이끌려 이름 감정사에게 가서 운명적인 이름을 받아 {3} 게 {4}",
    "CHN": "{0}は {1}に　つれられ　 せいめいはんだんしの　ところへ　いき うんめいてきな　なまえを　つけられて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was with {1} when (he/she) went to a boutique and tried on clothes, but (he/she) left the boutique without buying anything. {4} that {3}.",
    "SPA": "En una ocasión, {0} acompañó a {1} cuando fue a una boutique para probarse ropa, aunque al final no compró nada. {4} {3}.",
    "FRE": "{0} était avec {1} quand ce Dresseur a essayé des vêtements dans une boutique, mais n’a rien acheté. Il {4} {3}.",
    "GER": "{0} war mit {1} in einer Boutique. {1} hat einiges anprobiert, aber nichts gekauft. {4} {3}.",
    "ITA": "Una volta {0} e {1} sono andati in un negozio di vestiti. {1} ha provato degli abiti, ma non ha comprato nulla. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 ブティックにいき　しちゃくしたけど なにも　かわずに　でてきて　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 부티크에 가서 착용해 보고도 아무것도 사지 않고 나와서 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 ブティックにいき　しちゃくしたけど なにも　かわずに　でてきて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} went to a nice restaurant with {1} and ate until it got totally full. {4} that {3}.",
    "SPA": "Una vez {0} y {1} fueron juntos a un restaurante y se pusieron las botas. {4} {3}.",
    "FRE": "{0} était avec {1} quand ce Dresseur est allé dans un grand restaurant s’offrir un menu gastronomique. Il {4} {3}.",
    "GER": "{0} war mit {1} in einem tollen Restaurant und hat dort ordentlich gemampft. {4} {3}.",
    "ITA": "Una volta {0} è andato con {1} in un bel ristorante dove hanno mangiato a volontà. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 すてきな　レストランに　いき おなか　いっぱい　たべて　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 멋진 레스토랑에서 잔뜩 먹고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 すてきな　レストランに　いき おなか　いっぱい　たべて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was taken to a nice lady by {1} and pampered. {4} that {3}.",
    "SPA": "Una vez {1} llevó a {0} a un sitio donde una chica encantadora le dio todo tipo de mimos. {4} {3}.",
    "FRE": "{0} a été amené par {1} chez une gentille dame qui aime les Pokémon. Il {4} {3}.",
    "GER": "{0} wurde von {1} zu einer freundlichen Frau gebracht, die sich liebevoll um es gekümmert hat. {4} {3}.",
    "ITA": "Una volta {1} ha portato {0} da una signorina molto carina che lo ha riempito di coccole. {4} {3}.",
    "JPN": "{0}は {1}に　つれられて　 すてきな　おねえさんに かわいがって　もらい　 {3}ことが {4}",
    "KOR": "{0} {1}에게 이끌려 멋진 아가씨에게 귀여움을 받고 {3} 게 {4}",
    "CHN": "{0}は {1}に　つれられて　 すてきな　おねえさんに かわいがって　もらい　 {3}ことが {4}"
  },
  {
    "ENG": "{0} checked a trash can with {1} at... {2}. {4} that {3}.",
    "SPA": "En una ocasión, {0} y {1} rebuscaron juntos en una papelera que hay en {2}. {4} {3}.",
    "FRE": "{0} a fouillé les poubelles avec {1} {2}. Il {4} {3}.",
    "GER": "{0} hat zusammen mit {1} {2} einen Abfalleimer durchstöbert. {4} {3}.",
    "ITA": "Una volta {0} e {1} hanno esaminato insieme un cestino dei rifiuti {2}. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 {2}に　あった ゴミばこを　あさって　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 {2}에 있었던 쓰레기통을 뒤지고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 {2}に　あった ゴミばこを　あさって　 {3}ことが {4}"
  },
  {
    "ENG": "{0} fought hard until it had to use Struggle when it battled at {1}’s side against {2}. {4} that {3}.",
    "SPA": "Cuando una vez {1} y {0} se enfrentaron a {2}, {0} resistió cuanto pudo antes de recurrir a Combate. {4} {3}.",
    "FRE": "{0} a combattu aux côtés de {1} contre un {2}, et a fini par utiliser la capacité Lutte. Il {4} {3}.",
    "GER": "{0} hat mit {1} gegen ein {2} gekämpft und sich dabei so sehr angestrengt, dass es sogar Verzweifler eingesetzt hat. {4} {3}.",
    "ITA": "Una volta {0} ha lottato duramente insieme a {1} contro {2} fino a dover usare la mossa Scontro. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに　 {2}と　たたかったとき わるあがきを　だすまで　がんばって　 {3}ことが {4}",
    "KOR": "{0} {1} 함께 {2} 싸웠을 때 발버둥을 쓸 때까지 노력해서 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに　 {2}と　たたかったとき わるあがきを　だすまで　がんばって　 {3}ことが {4}"
  },
  {
    "ENG": "{0} looked down at the world from a tall tower where it went with {1}. {4} that {3}.",
    "SPA": "Cuando {1} y {0} estaban en una torre muy alta, {0} miró hacia abajo y todo le pareció muy pequeñito. {4} {3}.",
    "FRE": "{0} a admiré le monde du haut d’une grande tour aux côtés de {1}. Il {4} {3}.",
    "GER": "{0} war mit {1} auf einem hohen Turm und hat von dort auf die Welt hinabgeblickt. {4} {3}.",
    "ITA": "Una volta {0} è salito su una torre altissima con {1} e insieme hanno guardato il mondo da lassù. {4} {3}.",
    "JPN": "{0}は {1}と　いった　 たかい　タワーの　おくじょうから げかいを　みおろし　 {3}ことが {4}",
    "KOR": "{0} {1} 간 높은 타워의 옥상에서 세상을 내려다보고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いった　 たかい　タワーの　おくじょうから げかいを　みおろし　 {3}ことが {4}"
  },
  {
    "ENG": "{0} saw itself in a mirror in a mirror cave that it went to with {1}. {4} that {3}.",
    "SPA": "Cuando {1} y {0} estaban en la Cueva de los Reflejos, {0} contempló su reflejo. {4} {3}.",
    "FRE": "{0} est allé avec {1} dans une grotte qui semblait couverte de miroirs, et y a aperçu son reflet. Il {4} {3}.",
    "GER": "{0} war mit {1} in der Spiegelhöhle und hat dort sein Spiegelbild gesehen. {4} {3}.",
    "ITA": "Una volta {0} è andato con {1} in una grotta piena di specchi e ha visto la propria immagine riflessa. {4} {3}.",
    "JPN": "{0}は {1}と　いった　 かがみの　どうくつの　なかで かがみに　うつった　じぶんを　みて　 {3}ことが {4}",
    "KOR": "{0} {1} 간 거울로 된 동굴 안에서 거울에 비친 자신을 보고 {3} 게 {4}",
    "CHN": "{0}は {1}と　いった　 かがみの　どうくつの　なかで かがみに　うつった　じぶんを　みて　 {3}ことが {4}"
  },
  {
    "ENG": "{0} almost got lost when it explored a forest with {1}. {4} that {3}.",
    "SPA": "{0} estuvo a punto de perderse al explorar un bosque junto a {1}. {4} {3}.",
    "FRE": "{0} a failli se perdre dans une forêt avec {1}. Il {4} {3}.",
    "GER": "{0} hat sich mit {1} fast verlaufen, als sie gemeinsam einen Wald erkundet haben. {4} {3}.",
    "ITA": "Una volta {0} e {1} hanno smarrito la strada durante un’escursione nel bosco. {4} {3}.",
    "JPN": "{0}は {1}と　 もりの　なかを　たんさくしたとき まよいそうに　なって　 {3}ことが {4}",
    "KOR": "{0} {1} 숲 속을 탐색하러 갔을 때 길을 잃을 뻔해서 {3} 게 {4}",
    "CHN": "{0}は {1}と　 もりの　なかを　たんさくしたとき まよいそうに　なって　 {3}ことが {4}"
  },
  {
    "ENG": "{0} went to a factory with {1} and saw a lot of machines that looked very complicated. {4} that {3}.",
    "SPA": "Al acompañar a {1} hasta una fábrica, {0} se encontró allí con un montón de máquinas que parecían muy complejas. {4} {3}.",
    "FRE": "{0} est allé avec {1} dans une usine remplie de machines étranges. Il {4} {3}.",
    "GER": "{0} war mit {1} in einer Fabrik und hat dort viele kompliziert erscheinende Maschinen gesehen. {4} {3}.",
    "ITA": "Una volta {0} è andato con {1} in una fabbrica dove c’erano un sacco di macchinari complicati. {4} {3}.",
    "JPN": "{0}は {1}と　こうじょうに　いき　 たくさんの　むずかしそうな　きかいを まのあたりにして　 {3}ことが {4}",
    "KOR": "{0} {1} 공장에 가서 수많은 어려워 보이는 기계를 눈앞에서 보고 {3} 게 {4}",
    "CHN": "{0}は {1}と　こうじょうに　いき　 たくさんの　むずかしそうな　きかいを まのあたりにして　 {3}ことが {4}"
  },
  {
    "ENG": "{0} was with {1} when (he/she) built a Secret Base. {4} that {3}.",
    "SPA": "En cierto momento, {0} y {1} construyeron juntos una Base Secreta. {4} {3}.",
    "FRE": "{0} a vu {1} créer sa propre Base Secrète. Il {4} {3}.",
    "GER": "{0} hat mit {1} an einem Wettbewerb teilgenommen und dabei viele Leute beeindruckt. {4} {3}.",
    "ITA": "Una volta {0} e {1} hanno costruito una Base Segreta. {4} {3}.",
    "JPN": "{0}は {1}が ひみつきちを　つくったとき {3}ことが {4}",
    "KOR": "{0} {1} 비밀기지를 만들었을 때 {3} 게 {4}",
    "CHN": "{0}は {1}が ひみつきちを　つくったとき {3}ことが {4}"
  },
  {
    "ENG": "{0} participated in a contest with {1} and impressed many people. {4} that {3}.",
    "SPA": "En una ocasión, {0} y {1} participaron en un concurso y se exhibieron delante de muchas personas. {4} {3}.",
    "FRE": "{0} a participé à un Concours Pokémon aux côtés de {1}. Il a pu faire son show en faisant toutes sortes de Démonstrations devant un large public. Il {4} {3}.",
    "GER": "{0} hat mit {1} an einem Wettbewerb teilgenommen und einen spektakulären Sieg errungen. {4} {3}.",
    "ITA": "Una volta {0} e {1} hanno partecipato a una gara con un’esibizione che ha conquistato il pubblico. {4} {3}.",
    "JPN": "{0}は {1}と コンテストに　さんかして たくさんの　ひとに　アピールしたとき {3}ことが {4}",
    "KOR": "{0} {1} 콘테스트에 참가해서 많은 사람들에게 어필했을 때 {3} 게 {4}",
    "CHN": "{0}は {1}と コンテストに　さんかして たくさんの　ひとに　アピールしたとき {3}ことが {4}"
  },
  {
    "ENG": "{0} participated in a contest with {1} and won the title. {4} that {3}.",
    "SPA": "En determinado momento, {0} y {1} participaron en un concurso y se alzaron con la victoria. {4} {3}.",
    "FRE": "{0} a participé à un Concours Pokémon aux côtés de {1} et il a réussi à gagner ! Il {4} {3}.",
    "GER": "{0} ist zusammen mit {1} per Überflieger durch die Lüfte gesaust und zu verschiedenen Orten geflogen. {4} {3}.",
    "ITA": "Una volta {0} e {1} hanno partecipato a una gara riportando una splendida vittoria. {4} {3}.",
    "JPN": "{0}は {1}と コンテストに　さんかして みごと　ゆうしょう　したとき {3}ことが {4}",
    "KOR": "{0} {1} 콘테스트에 참가해서 멋지게 우승했을 때 {3} 게 {4}",
    "CHN": "{0}は {1}と コンテストに　さんかして みごと　ゆうしょう　したとき {3}ことが {4}"
  },
  {
    "ENG": "{0} soared through the sky with {1} and went to many different places. {4} that {3}.",
    "SPA": "En cierta ocasión, {0} y {1} visitaron numerosos lugares gracias al Ultravuelo. {4} {3}.",
    "FRE": "{0} a pris son Grand Envol aux côtés de {1} et a visité quelques endroits exotiques. Il {4} {3}.",
    "GER": "{0} wurde von {1} gebeten, in die Tiefe hinabzutauchen und den Meeresboden zu erkunden. {4} {3}.",
    "ITA": "Una volta {0} e {1} hanno visitato posti meravigliosi usando Ipervolo. {4} {3}.",
    "JPN": "{0}は {1}と　いっしょに おおぞらを　とんで いろんなばしょに　いったとき {3}ことが {4}",
    "KOR": "{0} {1} 함께 넓은 하늘을 날고 여러 장소에 갔을 때 {3} 게 {4}",
    "CHN": "{0}は {1}と　いっしょに おおぞらを　とんで いろんなばしょに　いったとき {3}ことが {4}"
  },
  {
    "ENG": "{1} asked {0} to dive. Down it went, deep into the ocean, to explore the bottom of the sea. {4} that {3}.",
    "SPA": "Una vez, {0}, siguiendo las instrucciones de {1} se sumergió en las profundidades del mar para explorar el fondo oceánico. {4} {3}.",
    "FRE": "{0} a plongé au cœur de l’océan sur les instructions de {1}. Il {4} {3}.",
    "ITA": "Una volta {0}, su indicazione di {1}, si è immerso negli abissi e ha esplorato il fondale marino. {4} {3}.",
    "JPN": "{0}は {1}に　たのまれて ふかいうみに　もぐって うみのそこを　たんさくしたとき {3}ことが {4}",
    "KOR": "{0} {1}에게 부탁받아 깊은 바다에 잠수하여 해저 바닥을 탐사했을 때 {3} 게 {4}",
    "CHN": "{0}は {1}に　たのまれて ふかいうみに　もぐって うみのそこを　たんさくしたとき {3}ことが {4}"
  }
]
},{}],13:[function(require,module,exports){
module.exports=[
  {
    "ENG": "somewhere",
    "SPA": "algún lugar",
    "FRE": "quelque part",
    "GER": "irgendwo",
    "ITA": "da qualche parte",
    "JPN": "どこか",
    "KOR": "어딘가",
    "CHN": "どこか"
  },
  {
    "ENG": "the first town",
    "SPA": "el pueblo de partida",
    "FRE": "dans la ville de départ",
    "GER": "in der ersten Stadt",
    "ITA": "nella città iniziale",
    "JPN": "さいしょのまち",
    "KOR": "최초의 마을",
    "CHN": "さいしょのまち"
  },
  {
    "ENG": "home",
    "SPA": "casa",
    "FRE": "dans sa maison",
    "GER": "in dessenderen Zuhause",
    "ITA": "a casa",
    "JPN": "うち",
    "KOR": "집",
    "CHN": "うち"
  },
  {
    "ENG": "a friend’s house",
    "SPA": "casa de un amigo",
    "FRE": "chez un ami",
    "GER": "im Zuhause eines Freundes",
    "ITA": "a casa di amici",
    "JPN": "ともだちのいえ",
    "KOR": "친구의 집",
    "CHN": "ともだちのいえ"
  },
  {
    "ENG": "someone’s house",
    "SPA": "una casa ajena",
    "FRE": "chez quelqu’un",
    "GER": "in irgendjemandes Zuhause",
    "ITA": "a casa di qualcuno",
    "JPN": "ひとのうち",
    "KOR": "다른 사람의 집",
    "CHN": "ひとのうち"
  },
  {
    "ENG": "a lively town",
    "SPA": "una ciudad concurrida",
    "FRE": "dans une ville animée",
    "GER": "in einer lebhaften Stadt",
    "ITA": "in una città animata",
    "JPN": "にぎやかなまち",
    "KOR": "번화한 마을",
    "CHN": "にぎやかなまち"
  },
  {
    "ENG": "a boutique",
    "SPA": "una boutique",
    "FRE": "dans une boutique",
    "GER": "in einer Boutique",
    "ITA": "in un negozio di vestiti",
    "JPN": "ブティック",
    "KOR": "부티크",
    "CHN": "ブティック"
  },
  {
    "ENG": "a shop",
    "SPA": "una tienda",
    "FRE": "dans un magasin",
    "GER": "in einem Geschäft",
    "ITA": "in un negozio",
    "JPN": "ショップ",
    "KOR": "숍",
    "CHN": "ショップ"
  },
  {
    "ENG": "a simple town",
    "SPA": "un pueblo sencillo",
    "FRE": "dans une ville ordinaire",
    "GER": "in einer unscheinbaren Stadt",
    "ITA": "in una città tranquilla",
    "JPN": "そぼくなまち",
    "KOR": "소박한 마을",
    "CHN": "そぼくなまち"
  },
  {
    "ENG": "a Pokémon Center",
    "SPA": "un Centro Pokémon",
    "FRE": "dans un Centre Pokémon",
    "GER": "in einem Pokémon-Center",
    "ITA": "in un Centro Pokémon",
    "JPN": "ポケモンセンター",
    "KOR": "포켓몬센터",
    "CHN": "ポケモンセンター"
  },
  {
    "ENG": "a castle",
    "SPA": "un castillo",
    "FRE": "dans un château",
    "GER": "in einem Schloss",
    "ITA": "in un castello",
    "JPN": "おしろ",
    "KOR": "성",
    "CHN": "おしろ"
  },
  {
    "ENG": "a hotel",
    "SPA": "un hotel",
    "FRE": "dans un hôtel",
    "GER": "in einem Hotel",
    "ITA": "in un hotel",
    "JPN": "ホテル",
    "KOR": "호텔",
    "CHN": "ホテル"
  },
  {
    "ENG": "a town with a mysterious air",
    "SPA": "un pueblo misterioso",
    "FRE": "dans une ville mystérieuse",
    "GER": "in einer geheimnisvollen Stadt",
    "ITA": "in una città dall’aria misteriosa",
    "JPN": "ふしぎなふんいきのまち",
    "KOR": "이상한 분위기의 마을",
    "CHN": "ふしぎなふんいきのまち"
  },
  {
    "ENG": "a windswept town",
    "SPA": "un pueblo donde sopla el viento",
    "FRE": "dans une ville très venteuse",
    "GER": "in einer windumtosten Stadt",
    "ITA": "in una città ventosa",
    "JPN": "かぜのふくまち",
    "KOR": "바람이 부는 마을",
    "CHN": "かぜのふくまち"
  },
  {
    "ENG": "a gate",
    "SPA": "un acceso",
    "FRE": "à une porte",
    "GER": "an einem Tor",
    "ITA": "in un varco",
    "JPN": "ゲート",
    "KOR": "게이트",
    "CHN": "ゲート"
  },
  {
    "ENG": "a town on a river",
    "SPA": "un pueblo ribereño",
    "FRE": "dans une ville en bord de rivière",
    "GER": "in einer Stadt am Fluss",
    "ITA": "in una città in riva al fiume",
    "JPN": "かわべりのまち",
    "KOR": "물가의 마을",
    "CHN": "かわべりのまち"
  },
  {
    "ENG": "a lab",
    "SPA": "un laboratorio",
    "FRE": "dans un laboratoire",
    "GER": "in einem Labor",
    "ITA": "in un laboratorio",
    "JPN": "けんきゅうじょ",
    "KOR": "연구소",
    "CHN": "けんきゅうじょ"
  },
  {
    "ENG": "an aquarium",
    "SPA": "un acuario",
    "FRE": "dans un aquarium",
    "GER": "in einem Aquarium",
    "ITA": "in un acquario",
    "JPN": "すいぞくかん",
    "KOR": "수족관",
    "CHN": "すいぞくかん"
  },
  {
    "ENG": "a town on a cliff",
    "SPA": "un pueblo junto a un acantilado",
    "FRE": "dans une ville près d’une falaise",
    "GER": "in einer Stadt an einem Abhang",
    "ITA": "in una città sulla scogliera",
    "JPN": "がけにあるまち",
    "KOR": "벼랑에 세워진 마을",
    "CHN": "がけにあるまち"
  },
  {
    "ENG": "a gorgeous city",
    "SPA": "una ciudad hermosa y gloriosa",
    "FRE": "dans une ville resplendissante",
    "GER": "in einer prachtvollen Stadt",
    "ITA": "in una splendida città",
    "JPN": "はなやかなまち",
    "KOR": "화려한 마을",
    "CHN": "はなやかなまち"
  },
  {
    "ENG": "a Pokémon Gym",
    "SPA": "un Gimnasio Pokémon",
    "FRE": "dans une Arène Pokémon",
    "GER": "in einer Pokémon-Arena",
    "ITA": "in una Palestra",
    "JPN": "ポケモンジム",
    "KOR": "포켓몬체육관",
    "CHN": "ポケモンジム"
  },
  {
    "ENG": "a school",
    "SPA": "una escuela",
    "FRE": "dans une école",
    "GER": "in einer Schule",
    "ITA": "in una scuola",
    "JPN": "がっこう",
    "KOR": "학교",
    "CHN": "がっこう"
  },
  {
    "ENG": "a large city",
    "SPA": "una metrópoli",
    "FRE": "dans une ville immense",
    "GER": "in einer großen Stadt",
    "ITA": "in una grande città",
    "JPN": "きょだいなまち",
    "KOR": "거대한 마을",
    "CHN": "きょだいなまち"
  },
  {
    "ENG": "a building",
    "SPA": "un edificio",
    "FRE": "dans un immeuble",
    "GER": "in einem Gebäude",
    "ITA": "in un edificio",
    "JPN": "ビル",
    "KOR": "빌딩",
    "CHN": "ビル"
  },
  {
    "ENG": "a stylish café",
    "SPA": "una cafetería elegante",
    "FRE": "dans un café à la mode",
    "GER": "in einem eleganten Café",
    "ITA": "in un caffè elegante",
    "JPN": "オシャレなカフェ",
    "KOR": "세련된 카페",
    "CHN": "オシャレなカフェ"
  },
  {
    "ENG": "a hideout",
    "SPA": "una guarida",
    "FRE": "dans une planque",
    "GER": "in einem Geheimversteck",
    "ITA": "in un covo segreto",
    "JPN": "アジト",
    "KOR": "아지트",
    "CHN": "アジト"
  },
  {
    "ENG": "a museum",
    "SPA": "un museo",
    "FRE": "dans un musée",
    "GER": "in einem Museum",
    "ITA": "in un museo",
    "JPN": "びじゅつかん",
    "KOR": "미술관",
    "CHN": "びじゅつかん"
  },
  {
    "ENG": "a studio",
    "SPA": "un estudio de grabación",
    "FRE": "dans un studio vidéo",
    "GER": "in einem Filmstudio",
    "ITA": "in uno studio",
    "JPN": "スタジオ",
    "KOR": "스튜디오",
    "CHN": "スタジオ"
  },
  {
    "ENG": "a train station",
    "SPA": "una estación",
    "FRE": "dans une gare",
    "GER": "in einem Bahnhof",
    "ITA": "in una stazione",
    "JPN": "えき",
    "KOR": "역",
    "CHN": "えき"
  },
  {
    "ENG": "a battling spot",
    "SPA": "un terreno de combate",
    "FRE": "dans un lieu où l’on se bat",
    "GER": "an einem Kampfschauplatz",
    "ITA": "sul campo di lotta",
    "JPN": "たたかいのば",
    "KOR": "배틀 장소",
    "CHN": "たたかいのば"
  },
  {
    "ENG": "a beauty salon",
    "SPA": "un salón de belleza",
    "FRE": "dans un salon de beauté",
    "GER": "in einem Schönheitssalon",
    "ITA": "in un salone di bellezza",
    "JPN": "びようしつ",
    "KOR": "미용실",
    "CHN": "びようしつ"
  },
  {
    "ENG": "a restaurant",
    "SPA": "un restaurante",
    "FRE": "dans un restaurant",
    "GER": "in einem Restaurant",
    "ITA": "in un ristorante",
    "JPN": "レストラン",
    "KOR": "레스토랑",
    "CHN": "レストラン"
  },
  {
    "ENG": "a high-class restaurant",
    "SPA": "un restaurante refinado",
    "FRE": "dans un grand restaurant",
    "GER": "in einem Edelrestaurant",
    "ITA": "in un ristorante di lusso",
    "JPN": "こうきゅうレストラン",
    "KOR": "고급 레스토랑",
    "CHN": "こうきゅうレストラン"
  },
  {
    "ENG": "a seaside city",
    "SPA": "una ciudad costera",
    "FRE": "dans une ville en bord de mer",
    "GER": "in einer Küstenstadt",
    "ITA": "in una città in riva al mare",
    "JPN": "うみべのまち",
    "KOR": "해변의 마을",
    "CHN": "うみべのまち"
  },
  {
    "ENG": "the inside of a tall building",
    "SPA": "un edificio alto",
    "FRE": "dans un bâtiment élevé",
    "GER": "im Inneren eines hohen Gebäudes",
    "ITA": "in un edificio alto",
    "JPN": "たかいたてもののなか",
    "KOR": "높은 건물 안",
    "CHN": "たかいたてもののなか"
  },
  {
    "ENG": "a city with a mysterious air",
    "SPA": "una ciudad misteriosa",
    "FRE": "dans une ville mystérieuse",
    "GER": "in einer geheimnisvollen Stadt",
    "ITA": "in una città dall’aria misteriosa",
    "JPN": "ふしぎなふんいきのまち",
    "KOR": "이상한 분위기의 마을",
    "CHN": "ふしぎなふんいきのまち"
  },
  {
    "ENG": "a riverside city",
    "SPA": "una ciudad a la orilla del río",
    "FRE": "dans une ville au bord de l’eau",
    "GER": "in einer Stadt am Fluss",
    "ITA": "in una città lungo il fiume",
    "JPN": "かわぞいのまち",
    "KOR": "강가의 마을",
    "CHN": "かわぞいのまち"
  },
  {
    "ENG": "a snowcapped city",
    "SPA": "una ciudad cubierta de nieve",
    "FRE": "dans une ville enneigée",
    "GER": "in einer schneebedeckten Stadt",
    "ITA": "in una città innevata",
    "JPN": "ゆきのふりつもるまち",
    "KOR": "눈이 내려 쌓이는 마을",
    "CHN": "ゆきのふりつもるまち"
  },
  {
    "ENG": "the Pokémon League",
    "SPA": "la Liga Pokémon",
    "FRE": "à la Ligue Pokémon",
    "GER": "in der Pokémon Liga",
    "ITA": "alla Lega Pokémon",
    "JPN": "ポケモンリーグ",
    "KOR": "포켓몬리그",
    "CHN": "ポケモンリーグ"
  },
  {
    "ENG": "a palace",
    "SPA": "un palacio",
    "FRE": "dans un palais",
    "GER": "in einem Palast",
    "ITA": "in una reggia",
    "JPN": "きゅうでん",
    "KOR": "궁전",
    "CHN": "きゅうでん"
  },
  {
    "ENG": "a cave",
    "SPA": "una cueva",
    "FRE": "dans une grotte",
    "GER": "in einer Höhle",
    "ITA": "in una grotta",
    "JPN": "どうくつ",
    "KOR": "동굴",
    "CHN": "どうくつ"
  },
  {
    "ENG": "a forest",
    "SPA": "un bosque",
    "FRE": "dans une forêt",
    "GER": "in einem Wald",
    "ITA": "in un bosco",
    "JPN": "もり",
    "KOR": "숲",
    "CHN": "もり"
  },
  {
    "ENG": "a tree-lined road",
    "SPA": "una alameda",
    "FRE": "sur un chemin bordé d’arbres",
    "GER": "auf einer Allee",
    "ITA": "in un viale alberato",
    "JPN": "がいろじゅのつづくみち",
    "KOR": "가로수가 늘어선 길",
    "CHN": "がいろじゅのつづくみち"
  },
  {
    "ENG": "a riverside road",
    "SPA": "un camino ribereño",
    "FRE": "sur un chemin au bord de l’eau",
    "GER": "auf einem Weg am Fluss",
    "ITA": "su un lungofiume",
    "JPN": "かわぞいのみち",
    "KOR": "강가의 길",
    "CHN": "かわぞいのみち"
  },
  {
    "ENG": "a tranquil road",
    "SPA": "un sendero tranquilo",
    "FRE": "sur un chemin tranquille",
    "GER": "auf einem ruhigen Weg",
    "ITA": "in una strada tranquilla",
    "JPN": "のどかなみち",
    "KOR": "평온한 길",
    "CHN": "のどかなみち"
  },
  {
    "ENG": "a road in bloom",
    "SPA": "un camino florido",
    "FRE": "sur un chemin fleuri",
    "GER": "auf einem Weg voller Blumen",
    "ITA": "in una strada piena di fiori",
    "JPN": "はなさくみち",
    "KOR": "꽃 피는 길",
    "CHN": "はなさくみち"
  },
  {
    "ENG": "the Pokémon Day Care",
    "SPA": "una Guardería Pokémon",
    "FRE": "à la Pension Pokémon",
    "GER": "in einer Pokémon-Pension",
    "ITA": "in una Pensione Pokémon",
    "JPN": "そだてや",
    "KOR": "키우미집",
    "CHN": "そだてや"
  },
  {
    "ENG": "a rugged mountain pass",
    "SPA": "un paso de montaña",
    "FRE": "sur un chemin escarpé",
    "GER": "auf einem steilen Bergweg",
    "ITA": "in un’erta strada di montagna",
    "JPN": "けわしいやまみち",
    "KOR": "험한 산길",
    "CHN": "けわしいやまみち"
  },
  {
    "ENG": "a stone-lined area",
    "SPA": "una zona repleta de menhires",
    "FRE": "dans un champ de pierres levées",
    "GER": "in einem steinigen Gebiet",
    "ITA": "in un luogo con pietre allineate",
    "JPN": "いしのたちならぶばしょ",
    "KOR": "돌이 늘어선 장소",
    "CHN": "いしのたちならぶばしょ"
  },
  {
    "ENG": "a road above the sea",
    "SPA": "un sendero con vistas al mar",
    "FRE": "sur un chemin surplombant la mer",
    "GER": "auf einem Weg mit Meerblick",
    "ITA": "in una via da cui si vede il mare",
    "JPN": "うみのみえるみち",
    "KOR": "바다가 보이는 길",
    "CHN": "うみのみえるみち"
  },
  {
    "ENG": "a mired road",
    "SPA": "un sendero cenagoso",
    "FRE": "sur un chemin boueux",
    "GER": "auf einem schlammigen Weg",
    "ITA": "in una strada fangosa",
    "JPN": "ぬかるんだみち",
    "KOR": "질퍽거리는 길",
    "CHN": "ぬかるんだみち"
  },
  {
    "ENG": "a sand-swept road",
    "SPA": "un sendero con arena por doquier",
    "FRE": "sur un chemin balayé par le sable",
    "GER": "auf einem Weg voller Sandwehen",
    "ITA": "in una strada piena di sabbia",
    "JPN": "すなのふきあれるみち",
    "KOR": "거친 모래바람이 부는 길",
    "CHN": "すなのふきあれるみち"
  },
  {
    "ENG": "a leaf-strewn road",
    "SPA": "un sendero otoñal",
    "FRE": "sur un chemin couvert de feuilles",
    "GER": "auf einem laubbedeckten Weg",
    "ITA": "in una via piena di foglie secche",
    "JPN": "おちばみち",
    "KOR": "낙엽이 쌓인 길",
    "CHN": "おちばみち"
  },
  {
    "ENG": "a snow-swept road",
    "SPA": "un sendero nevado",
    "FRE": "sur un chemin enneigé",
    "GER": "auf einem schneebedeckten Weg",
    "ITA": "in una strada innevata",
    "JPN": "ゆきみち",
    "KOR": "눈이 쌓인 길",
    "CHN": "ゆきみち"
  },
  {
    "ENG": "a factory",
    "SPA": "una fábrica",
    "FRE": "dans une usine",
    "GER": "in einer Fabrik",
    "ITA": "in una fabbrica",
    "JPN": "こうじょう",
    "KOR": "공장",
    "CHN": "こうじょう"
  },
  {
    "ENG": "Victory Road",
    "SPA": "la Calle Victoria",
    "FRE": "sur la Route Victoire",
    "GER": "auf der Siegesstraße",
    "ITA": "in Via Vittoria",
    "JPN": "チャンピオンロード",
    "KOR": "챔피언로드",
    "CHN": "チャンピオンロード"
  },
  {
    "ENG": "a snowy mountain",
    "SPA": "una montaña nevada",
    "FRE": "sur une montagne enneigée",
    "GER": "auf einem schneebedeckten Berg",
    "ITA": "su una montagna innevata",
    "JPN": "ゆきやま",
    "KOR": "설산",
    "CHN": "ゆきやま"
  },
  {
    "ENG": "a power plant",
    "SPA": "una central eléctrica",
    "FRE": "dans une centrale électrique",
    "GER": "in einem Kraftwerk",
    "ITA": "in una centrale elettrica",
    "JPN": "はつでんしょ",
    "KOR": "발전소",
    "CHN": "はつでんしょ"
  },
  {
    "ENG": "a field",
    "SPA": "un huerto",
    "FRE": "dans un champ",
    "GER": "auf einem Feld",
    "ITA": "in un orto",
    "JPN": "はたけ",
    "KOR": "밭",
    "CHN": "はたけ"
  },
  {
    "ENG": "a ruin",
    "SPA": "unas ruinas",
    "FRE": "dans des ruines",
    "GER": "in einer Ruine",
    "ITA": "in mezzo a delle rovine",
    "JPN": "はいきょ",
    "KOR": "폐허",
    "CHN": "はいきょ"
  },
  {
    "ENG": "a watery route",
    "SPA": "unas alcantarillas",
    "FRE": "dans un Chenal",
    "GER": "auf einer Wasserroute",
    "ITA": "in una via d’acqua",
    "JPN": "すいどう",
    "KOR": "수로",
    "CHN": "すいどう"
  },
  {
    "ENG": "a safari",
    "SPA": "un safari",
    "FRE": "au cours d’un safari",
    "GER": "auf einer Safari",
    "ITA": "in un safari",
    "JPN": "サファリ",
    "KOR": "사파리",
    "CHN": "サファリ"
  },
  {
    "ENG": "a Secret Base",
    "SPA": "una Base Secreta",
    "FRE": "dans une Base Secrète",
    "GER": "in einer Geheimbasis",
    "ITA": "in una Base Segreta",
    "JPN": "ひみつきち",
    "KOR": "비밀기지",
    "CHN": "ひみつきち"
  },
  {
    "ENG": "a Contest Spectacular Hall",
    "SPA": "un Auditorio del Gran Concurso",
    "FRE": "au Concours Pokémon",
    "GER": "in einer Wettbewerbshalle",
    "ITA": "in un’Arena delle Virtù",
    "JPN": "コンテストライブかいじょう",
    "KOR": "콘테스트 라이브 회장",
    "CHN": "コンテストライブかいじょう"
  },
  {
    "ENG": "a place deep in the ocean",
    "SPA": "el fondo del mar",
    "FRE": "tout au fond de la mer",
    "GER": "in der Tiefe des Meeres",
    "ITA": "sul fondo del mare",
    "JPN": "ふかいうみのそこ",
    "KOR": "깊은 바다 밑",
    "CHN": "ふかいうみのそこ"
  },
  {
    "ENG": "a Mirage spot",
    "SPA": "un paraje irreal",
    "FRE": "dans un endroit irréel",
    "GER": "an einem wundersamen Ort",
    "ITA": "in una zona miraggio",
    "JPN": "マボロシのばしょ",
    "KOR": "환상의 장소",
    "CHN": "マボロシのばしょ"
  },
  {
    "ENG": "a large ship",
    "SPA": "un gran navío",
    "FRE": "dans un grand bateau",
    "GER": "auf einem großen Schiff",
    "ITA": "in una grande nave",
    "JPN": "おおきなふね",
    "KOR": "커다란 배",
    "CHN": "おおきなふね"
  },
  {
    "ENG": "an ash-covered path",
    "SPA": "una ruta cubierta de ceniza",
    "FRE": "sur une route pleine de cendres",
    "GER": "auf einem aschebedeckten Weg",
    "ITA": "in una strada coperta di cenere",
    "JPN": "はいがふりつもるみち",
    "KOR": "재가 떨어져 쌓이는 길",
    "CHN": "はいがふりつもるみち"
  },
  {
    "ENG": "a tiny island",
    "SPA": "un islote",
    "FRE": "sur un tout petit îlot",
    "GER": "auf einer kleinen Insel",
    "ITA": "su una piccola isola",
    "JPN": "ちいさなしま",
    "KOR": "작은 섬",
    "CHN": "ちいさなしま"
  },
  {
    "ENG": "a mystical place",
    "SPA": "un lugar misterioso",
    "FRE": "dans un lieu très impressionnant",
    "GER": "an einem geheimnisvollen Ort",
    "ITA": "in un luogo misterioso",
    "JPN": "しんぴてきなばしょ",
    "KOR": "신비스러운 장소",
    "CHN": "しんぴてきなばしょ"
  },
  {
    "ENG": "oh, while soaring in the sky",
    "SPA": "el firmamento",
    "FRE": "dans le Grand Ciel",
    "GER": "beim Flug durch die Lüfte",
    "ITA": "nell’Ipersfera",
    "JPN": "おおぞら",
    "KOR": "창공",
    "CHN": "おおぞら"
  }
]

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

const TYPES = [
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark'
];

const calculateHiddenPower = (hp, atk, def, spa, spd, spe) => ({
  type: TYPES[Math.floor((hp % 2 + 2 * (atk % 2) + 4 * (def % 2) + 8 * (spe % 2) + 16 * (spa % 2) + 32 * (spd % 2)) * 5 / 21)],
  power: 30 + Math.floor(((hp & 2) + 2 * (atk & 2) + 4 * (def & 2) + 8 * (spe & 2) + 16 * (spa & 2) + 32 * (spd & 2)) * 20 / 63)
});

exports.parseBuffer = (buf, options) => {
  if (buf.readUInt16LE(0x04) || [232, 260].indexOf(buf.length) === -1 || !checksumIsValid(buf) || buf.readUInt8(0x58) ||
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
  data.pokerusDuration = pokerusByte & 15;
  data.pokerusStrain = pokerusByte >>> 4;

  data.medalData = buf.readUInt32LE(0x2c);
  data.ribbonData = buf.readUIntLE(0x30, 6);
  data.contestMemoryRibbonCount = buf.readUInt8(0x38);
  data.battleMemoryRibbonCount = buf.readUInt8(0x39);
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
  data.notOtMemoryIntensity = buf.readUInt8(0xa4);
  data.notOtMemoryLine = buf.readUInt8(0xa5);
  data.notOtMemoryFeeling = buf.readUInt8(0xa6);
  data.notOtMemoryTextVar = buf.readUInt16LE(0xa8);

  data.fullness = buf.readUInt8(0xae);
  data.enjoyment = buf.readUInt8(0xaf);

  data.ot = stripNullChars(buf.toString('utf16le', 0xb0, 0xc8));
  data.otFriendship = buf.readUInt8(0xca);
  data.otAffection = buf.readUInt8(0xcb);
  data.otMemoryIntensity = buf.readUInt8(0xcc);
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
  data.countryId = buf.readUInt8(0xe0);
  data.regionId = buf.readUInt8(0xe1);
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
  if (level > 100) {
    return Infinity;
  }
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

function calculateStat (baseStat, level, iv, ev, natureMultiplier, isHp) {
  if (isHp && baseStat === 1) {
    // shedinja hp
    return 1;
  }
  if (isHp) {
    return Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + level + 10;
  }
  return Math.floor((Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + 5) * natureMultiplier);
}

function assignCalculatedStat (data, statName) {
  data[`stat${statName}`] = calculateStat(
    data[`baseStat${statName}`],
    data.level,
    data[`iv${statName}`],
    data[`ev${statName}`],
    data.increasedStat === statName ? 1.1 : data.decreasedStat === statName ? 0.9 : 1,
    statName === 'Hp'
  );
}

function assignRegionAndCountryNames (data, locationNum, language) {
  const regionId = data[`geoLocation${locationNum}RegionId`];
  const countryId = data[`geoLocation${locationNum}CountryId`];
  const regionNameKey = `geoLocation${locationNum}RegionName`;
  const countryNameKey = `geoLocation${locationNum}CountryName`;
  data[regionNameKey] = regionId ? data[regionNameKey] = exports.getSubregionName(countryId, regionId, language) : null;
  data[countryNameKey] = countryId ? data[countryNameKey] = exports.getCountryName(countryId, language) : null;
}

const langMap = {ENG: 'en', SPA: 'es', FRE: 'fr', GER: 'de', ITA: 'it', JPN: 'ja', KOR: 'ko'};
exports.assignReadableNames = (data, language) => {
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

  const natureData = exports.getNatureData(data.natureId);
  data.natureName = findName(natureData);
  const alternateForms = require('./data/alternate_forms');
  data.formName = alternateForms[data.dexNo] && alternateForms[data.dexNo][data.formId];
  data.increasedStat = abbreviateStat(natureData.increased_stat && natureData.increased_stat.name);
  data.decreasedStat = abbreviateStat(natureData.decreased_stat && natureData.decreased_stat.name);
  data.types = pkmnData.types;

  data.baseStatHp = pkmnData.base_stats.hp;
  data.baseStatAtk = pkmnData.base_stats.attack;
  data.baseStatDef = pkmnData.base_stats.defense;
  data.baseStatSpAtk = pkmnData.base_stats['special-attack'];
  data.baseStatSpDef = pkmnData.base_stats['special-defense'];
  data.baseStatSpe = pkmnData.base_stats.speed;

  ['Hp', 'Atk', 'Def', 'SpAtk', 'SpDef', 'Spe'].forEach(statName => assignCalculatedStat(data, statName));

  data.heldItemName = findName(exports.getItemData(data.heldItemId));
  /* For all the pokeballs obtainable in gen 6 (ball IDs 1-16), the ball ID is the same as the item ID for that ball.
  For johto balls (apricorn/sport), the ball IDs are 17-24 and the corresponding item IDs are 492-499, in the same order.
  For dream balls, the ball ID is 25 and the corresponding item ID is 576. */
  const correctedBallId = data.ballId < 17 ? data.ballId : data.ballId === 25 ? 576 : data.ballId + 475;
  data.ballName = findName(exports.getItemData(correctedBallId));
  data.abilityName = findName(exports.getAbilityData(data.abilityId));

  const move1Data = exports.getMoveData(data.move1Id);
  data.move1Name = move1Data && findName(move1Data);
  data.move1Type = move1Data && move1Data.type.name;
  data.move1Power = move1Data && move1Data.power;

  const move2Data = exports.getMoveData(data.move2Id);
  data.move2Name = move2Data && findName(move2Data);
  data.move2Type = move2Data && move2Data.type.name;
  data.move2Power = move2Data && move2Data.power;

  const move3Data = exports.getMoveData(data.move3Id);
  data.move3Name = move3Data && findName(move3Data);
  data.move3Type = move3Data && move3Data.type.name;
  data.move3Power = move3Data && move3Data.power;

  const move4Data = exports.getMoveData(data.move4Id);
  data.move4Name = move4Data && findName(move4Data);
  data.move4Type = move4Data && move4Data.type.name;
  data.move4Power = move4Data && move4Data.power;

  data.eggMove1Name = findName(exports.getMoveData(data.eggMove1Id));
  data.eggMove2Name = findName(exports.getMoveData(data.eggMove2Id));
  data.eggMove3Name = findName(exports.getMoveData(data.eggMove3Id));
  data.eggMove4Name = findName(exports.getMoveData(data.eggMove4Id));

  [1, 2, 3, 4, 5].forEach(num => assignRegionAndCountryNames(data, num, language));

  data.notOtMemory = exports.parseMemoryData(
    data.notOtMemoryIntensity,
    data.notOtMemoryLine,
    data.notOtMemoryFeeling,
    data.notOtMemoryTextVar,
    data.nickname,
    data.notOt,
    language
  );

  data.otMemory = exports.parseMemoryData(
    data.otMemoryIntensity,
    data.otMemoryLine,
    data.otMemoryFeeling,
    data.otMemoryTextVar,
    data.nickname,
    data.ot,
    language
  );

  data.medals = exports.getMedalData(data.medalData);
  data.ribbons = exports.getRibbonData(data.ribbonData);

  if (data.contestMemoryRibbonCount === 40) {
    data.ribbons.push('Contest Memory Ribbon (Gold)');
  } else if (data.contestMemoryRibbonCount) {
    data.ribbons.push('Contest Memory Ribbon');
  }

  if (data.battleMemoryRibbonCount === 8) {
    data.ribbons.push('Battle Memory Ribbon (Gold)');
  } else if (data.battleMemoryRibbonCount) {
    data.ribbons.push('Battle Memory Ribbon');
  }

  data.eggLocationName = exports.getLocationData(data.eggLocationId, data.otGameId, true);
  data.metLocationName = exports.getLocationData(data.metLocationId, data.otGameId);
  data.encounterTypeName = exports.getEncounterTypeData(data.encounterTypeId);
  data.otGameName = exports.getGameData(data.otGameId);

  data.countryName = exports.getCountryName(data.countryId, language);
  data.regionName = data.regionId ? exports.getSubregionName(data.countryId, data.regionId, language) : null;
  data.tsv = (data.tid ^ data.sid) >>> 4;
  data.esv = (data.pid & 0xffff ^ data.pid >>> 16) >>> 4;
  data.isShiny = !data.isEgg && data.tsv === data.esv;

  const hp = calculateHiddenPower(data.ivHp, data.ivAtk, data.ivDef, data.ivSpAtk, data.ivSpDef, data.ivSpe);
  data.hiddenPowerType = hp.type;
  data.hiddenPowerPower = hp.power;

  return data;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

function tryRequire (path, errorMessage) {
  try {
    return require(path);
  } catch (err) {
    throw errorMessage ? new TypeError(errorMessage) : err;
  }
  // TODO: Handle memory better if the process is running for a long time
}

exports.getPokemonData = dexNo => tryRequire(`./data/pokemon/${dexNo}`, `Invalid dex number: ${dexNo}`);
exports.getItemData = itemId => itemId ? tryRequire(`./data/item_gen6/${itemId}`, `Invalid item ID: ${itemId}`) : null;
exports.getMoveData = moveId => moveId ? tryRequire(`./data/move/${moveId}`, `Invalid move ID: ${moveId}`) : null;
exports.getAbilityData = abilId => abilId ? tryRequire(`./data/ability/${abilId}`, `Invalid ability ID: ${abilId}`) : null;
exports.getNatureData = natureId => tryRequire(`./data/nature/${natureId}`, `Invalid nature ID: ${natureId}`);

exports.getLocationData = (locationId, otGameId, isEggLocation) => {
  if (!locationId && isEggLocation) {
    return null;
  }
  if (otGameId >= 24 && otGameId <= 29 || otGameId === undefined) {
    return require('./data/location_gen6.json')[locationId] || null;
  }
  if (otGameId >= 20 && otGameId <= 23) {
    return require('./data/location_gen5.json')[locationId] || null;
  }
  if (!isEggLocation) {
    return 'Poké Transfer';
  }
  if (otGameId >= 7 && otGameId <= 12) {
    return require('./data/location_gen4.json')[locationId] || null;
  }
  if (otGameId >= 1 && otGameId <= 5 || otGameId === 15) {
    return require('./data/location_gen3.json')[locationId] || null;
  }
  return null;
};

exports.getRibbonData = ribbonData => {
  return parseMap(ribbonData, require('./data/ribbons.json'));
};

exports.getMedalData = medalData => {
  return parseMap(medalData, require('./data/medals.json'));
};

exports.getEncounterTypeData = encounterTypeId => {
  return require('./data/encounterTypes')[encounterTypeId];
};

exports.getGameData = gameId => require('./data/games.json')[gameId];

exports.getCountryName = (countryId, language) => require('./data/countries')[countryId][language];

exports.getSubregionName = (countryId, subregionId, language) => {
  const countryData = tryRequire(`./data/subregions/${countryId}`, `Invalid country ID ${countryId}`);
  try {
    return countryData[subregionId][language];
  } catch (err) {
    throw new TypeError(`Invalid subregion ID ${subregionId}`);
  }
};

function getTextVar (lineId, textVarId, language) {
  const shortLang = langMap[language];
  if ([5, 15, 26, 34, 40, 51].indexOf(lineId) !== -1) {
    return exports.getItemData(textVarId).names.find(d => d.language === shortLang).name;
  }
  if ([7, 9, 13, 14, 17, 18, 21, 25, 29, 44, 45, 50, 60].indexOf(lineId) !== -1) {
    return exports.getPokemonData(textVarId).names.find(d => d.language === shortLang).name;
  }
  if ([12, 16, 48, 49].indexOf(lineId) !== -1) {
    return exports.getMoveData(textVarId).names.find(d => d.language === shortLang).name;
  }
  if (lineId === 6) {
    return require('./data/location_gen6.json')[textVarId];
  }
  try {
    return require('./data/memories/memoryTextVars')[textVarId][language];
  } catch (err) {
    throw new TypeError(`Invalid memory textVar ID: ${textVarId}`);
  }
}

exports.parseMemoryData = (intensityId, lineId, feelingId, textVarId, nickname, trainerName, language) => {
  let intensity, line, feeling;
  const textVar = getTextVar(lineId, textVarId, language);
  try {
    line = require('./data/memories/memoryLines')[lineId][language];
  } catch (err) {
    throw new TypeError(`Invalid memory line ID: ${lineId}`);
  }
  if (lineId) {
    try {
      intensity = require('./data/memories/memoryIntensities')[intensityId][language];
    } catch (err) {
      throw new TypeError(`Invalid memory intensity ID: ${intensityId}`);
    }
    try {
      feeling = require('./data/memories/memoryFeelings')[feelingId][language];
    } catch (err) {
      throw new TypeError(`Invalid memory feeling ID: ${feelingId}`);
    }
  }
  return line
    .replace(/\{0\}/g, nickname)
    .replace(/\{1\}/g, trainerName)
    .replace(/\{2\}/g, textVar)
    .replace(/\{3\}/g, feeling)
    .replace(/\{4\}/g, intensity);
};

},{"./data/alternate_forms":1,"./data/countries":2,"./data/encounterTypes":3,"./data/games.json":4,"./data/location_gen3.json":5,"./data/location_gen4.json":6,"./data/location_gen5.json":7,"./data/location_gen6.json":8,"./data/medals.json":9,"./data/memories/memoryFeelings":10,"./data/memories/memoryIntensities":11,"./data/memories/memoryLines":12,"./data/memories/memoryTextVars":13,"./data/ribbons.json":14,"fs":18}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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
},{"buffer":19}],18:[function(require,module,exports){

},{}],19:[function(require,module,exports){
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
},{"base64-js":16,"ieee754":21,"isarray":20}],20:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{".":15,"blob-to-buffer":17}]},{},[22]);
