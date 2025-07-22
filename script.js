// Full periodic table data (118 elements)
const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', info: 'Lightest element. Used in fuel cells.' },
  { number: 2, symbol: 'He', name: 'Helium', category: 'noble gas', info: 'Inert gas. Used in balloons.' },
  { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali metal', info: 'Used in batteries.' },
  { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline earth metal', info: 'Light metal, toxic.' },
  { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', info: 'Used in glass and detergents.' },
  { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', info: 'Basis of life.' },
  { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', info: '78% of air.' },
  { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', info: 'Essential for respiration.' },
  { number: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', info: 'Most reactive element.' },
  { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble gas', info: 'Used in neon signs.' },
  { number: 11, symbol: 'Na', name: 'Sodium', category: 'alkali metal', info: 'Reacts violently with water.' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline earth metal', info: 'Used in fireworks.' },
  { number: 13, symbol: 'Al', name: 'Aluminum', category: 'post-transition metal', info: 'Lightweight metal.' },
  { number: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', info: 'Used in electronics.' },
  { number: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', info: 'Essential for life.' },
  { number: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', info: 'Used in sulfuric acid.' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', info: 'Used in disinfectants.' },
  { number: 18, symbol: 'Ar', name: 'Argon', category: 'noble gas', info: 'Inert gas in bulbs.' },
  { number: 19, symbol: 'K', name: 'Potassium', category: 'alkali metal', info: 'Essential nutrient.' },
  { number: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline earth metal', info: 'Important for bones.' },
  { number: 21, symbol: 'Sc', name: 'Scandium', category: 'transition metal', info: 'Used in alloys.' },
  { number: 22, symbol: 'Ti', name: 'Titanium', category: 'transition metal', info: 'Strong, light metal.' },
  { number: 23, symbol: 'V', name: 'Vanadium', category: 'transition metal', info: 'Used in steel.' },
  { number: 24, symbol: 'Cr', name: 'Chromium', category: 'transition metal', info: 'Used in stainless steel.' },
  { number: 25, symbol: 'Mn', name: 'Manganese', category: 'transition metal', info: 'Used in steel.' },
  { number: 26, symbol: 'Fe', name: 'Iron', category: 'transition metal', info: 'Main component of steel.' },
  { number: 27, symbol: 'Co', name: 'Cobalt', category: 'transition metal', info: 'Used in batteries.' },
  { number: 28, symbol: 'Ni', name: 'Nickel', category: 'transition metal', info: 'Used in coins.' },
  { number: 29, symbol: 'Cu', name: 'Copper', category: 'transition metal', info: 'Used in wiring.' },
  { number: 30, symbol: 'Zn', name: 'Zinc', category: 'post-transition metal', info: 'Used in galvanizing.' },
  { number: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition metal', info: 'Melts in hand.' },
  { number: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', info: 'Used in semiconductors.' },
  { number: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', info: 'Toxic element.' },
  { number: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', info: 'Used in glass.' },
  { number: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', info: 'Liquid at room temp.' },
  { number: 36, symbol: 'Kr', name: 'Krypton', category: 'noble gas', info: 'Used in lighting.' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali metal', info: 'Highly reactive.' },
  { number: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline earth metal', info: 'Used in fireworks.' },
  { number: 39, symbol: 'Y', name: 'Yttrium', category: 'transition metal', info: 'Used in LEDs.' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition metal', info: 'Used in ceramics.' },
  { number: 41, symbol: 'Nb', name: 'Niobium', category: 'transition metal', info: 'Used in steel.' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition metal', info: 'Used in alloys.' },
  { number: 43, symbol: 'Tc', name: 'Technetium', category: 'transition metal', info: 'Radioactive.' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition metal', info: 'Used in electronics.' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition metal', info: 'Used in jewelry.' },
  { number: 46, symbol: 'Pd', name: 'Palladium', category: 'transition metal', info: 'Used in catalytic converters.' },
  { number: 47, symbol: 'Ag', name: 'Silver', category: 'transition metal', info: 'Precious metal.' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', category: 'post-transition metal', info: 'Toxic metal.' },
  { number: 49, symbol: 'In', name: 'Indium', category: 'post-transition metal', info: 'Used in touchscreens.' },
  { number: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition metal', info: 'Used in solder.' },
  { number: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', info: 'Used in flame retardants.' },
  { number: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', info: 'Used in alloys.' },
  { number: 53, symbol: 'I', name: 'Iodine', category: 'halogen', info: 'Essential nutrient.' },
  { number: 54, symbol: 'Xe', name: 'Xenon', category: 'noble gas', info: 'Used in lamps.' },
  { number: 55, symbol: 'Cs', name: 'Cesium', category: 'alkali metal', info: 'Highly reactive.' },
  { number: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline earth metal', info: 'Used in X-rays.' },
  { number: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', info: 'Used in camera lenses.' },
  { number: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', info: 'Used in glass polishing.' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', info: 'Used in magnets.' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', info: 'Used in strong magnets.' },
  { number: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', info: 'Radioactive.' },
  { number: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', info: 'Used in magnets.' },
  { number: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', info: 'Used in TV screens.' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', info: 'Used in MRI.' },
  { number: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', info: 'Used in electronics.' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', info: 'Used in magnets.' },
  { number: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', info: 'Used in magnets.' },
  { number: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', info: 'Used in lasers.' },
  { number: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', info: 'Rare, used in X-rays.' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', info: 'Used in lasers.' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', info: 'Used in PET scans.' },
  { number: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition metal', info: 'Used in nuclear reactors.' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition metal', info: 'Used in electronics.' },
  { number: 74, symbol: 'W', name: 'Tungsten', category: 'transition metal', info: 'Used in light bulbs.' },
  { number: 75, symbol: 'Re', name: 'Rhenium', category: 'transition metal', info: 'Used in jet engines.' },
  { number: 76, symbol: 'Os', name: 'Osmium', category: 'transition metal', info: 'Dense metal.' },
  { number: 77, symbol: 'Ir', name: 'Iridium', category: 'transition metal', info: 'Used in spark plugs.' },
  { number: 78, symbol: 'Pt', name: 'Platinum', category: 'transition metal', info: 'Precious metal.' },
  { number: 79, symbol: 'Au', name: 'Gold', category: 'transition metal', info: 'Precious metal.' },
  { number: 80, symbol: 'Hg', name: 'Mercury', category: 'post-transition metal', info: 'Liquid metal.' },
  { number: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition metal', info: 'Toxic metal.' },
  { number: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition metal', info: 'Toxic metal.' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition metal', info: 'Low toxicity.' },
  { number: 84, symbol: 'Po', name: 'Polonium', category: 'post-transition metal', info: 'Radioactive.' },
  { number: 85, symbol: 'At', name: 'Astatine', category: 'halogen', info: 'Rare, radioactive.' },
  { number: 86, symbol: 'Rn', name: 'Radon', category: 'noble gas', info: 'Radioactive gas.' },
  { number: 87, symbol: 'Fr', name: 'Francium', category: 'alkali metal', info: 'Highly radioactive.' },
  { number: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline earth metal', info: 'Radioactive.' },
  { number: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', info: 'Radioactive.' },
  { number: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', info: 'Radioactive.' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', info: 'Radioactive.' },
  { number: 92, symbol: 'U', name: 'Uranium', category: 'actinide', info: 'Used in nuclear fuel.' },
  { number: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', info: 'Radioactive.' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', info: 'Used in nuclear weapons.' },
  { number: 95, symbol: 'Am', name: 'Americium', category: 'actinide', info: 'Used in smoke detectors.' },
  { number: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', info: 'Radioactive.' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', info: 'Radioactive.' },
  { number: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', info: 'Radioactive.' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', info: 'Radioactive.' },
  { number: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', info: 'Radioactive.' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', info: 'Radioactive.' },
  { number: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', info: 'Radioactive.' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', info: 'Radioactive.' },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition metal', info: 'Synthetic.' },
  { number: 105, symbol: 'Db', name: 'Dubnium', category: 'transition metal', info: 'Synthetic.' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition metal', info: 'Synthetic.' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition metal', info: 'Synthetic.' },
  { number: 108, symbol: 'Hs', name: 'Hassium', category: 'transition metal', info: 'Synthetic.' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', category: 'unknown', info: 'Synthetic.' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'unknown', info: 'Synthetic.' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', category: 'unknown', info: 'Synthetic.' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', category: 'post-transition metal', info: 'Synthetic.' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', category: 'unknown', info: 'Synthetic.' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', category: 'post-transition metal', info: 'Synthetic.' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', category: 'unknown', info: 'Synthetic.' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', category: 'post-transition metal', info: 'Synthetic.' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', category: 'unknown', info: 'Synthetic.' },
  { number: 118, symbol: 'Og', name: 'Oganesson', category: 'noble gas', info: 'Synthetic.' },
];

// Periodic table layout for all 118 elements
const layout = {
  1:  { row: 1, col: 1 },  2:  { row: 1, col: 18 },
  3:  { row: 2, col: 1 },  4:  { row: 2, col: 2 },
  5:  { row: 2, col: 13 }, 6:  { row: 2, col: 14 }, 7:  { row: 2, col: 15 }, 8:  { row: 2, col: 16 }, 9:  { row: 2, col: 17 }, 10: { row: 2, col: 18 },
  11: { row: 3, col: 1 }, 12: { row: 3, col: 2 },
  13: { row: 3, col: 13 }, 14: { row: 3, col: 14 }, 15: { row: 3, col: 15 }, 16: { row: 3, col: 16 }, 17: { row: 3, col: 17 }, 18: { row: 3, col: 18 },
  19: { row: 4, col: 1 }, 20: { row: 4, col: 2 },
  21: { row: 4, col: 3 }, 22: { row: 4, col: 4 }, 23: { row: 4, col: 5 }, 24: { row: 4, col: 6 }, 25: { row: 4, col: 7 }, 26: { row: 4, col: 8 }, 27: { row: 4, col: 9 }, 28: { row: 4, col: 10 }, 29: { row: 4, col: 11 }, 30: { row: 4, col: 12 },
  31: { row: 4, col: 13 }, 32: { row: 4, col: 14 }, 33: { row: 4, col: 15 }, 34: { row: 4, col: 16 }, 35: { row: 4, col: 17 }, 36: { row: 4, col: 18 },
  37: { row: 5, col: 1 }, 38: { row: 5, col: 2 },
  39: { row: 5, col: 3 }, 40: { row: 5, col: 4 }, 41: { row: 5, col: 5 }, 42: { row: 5, col: 6 }, 43: { row: 5, col: 7 }, 44: { row: 5, col: 8 }, 45: { row: 5, col: 9 }, 46: { row: 5, col: 10 }, 47: { row: 5, col: 11 }, 48: { row: 5, col: 12 },
  49: { row: 5, col: 13 }, 50: { row: 5, col: 14 }, 51: { row: 5, col: 15 }, 52: { row: 5, col: 16 }, 53: { row: 5, col: 17 }, 54: { row: 5, col: 18 },
  55: { row: 6, col: 1 }, 56: { row: 6, col: 2 },
  57: { row: 8, col: 4 }, 58: { row: 8, col: 5 }, 59: { row: 8, col: 6 }, 60: { row: 8, col: 7 }, 61: { row: 8, col: 8 }, 62: { row: 8, col: 9 }, 63: { row: 8, col: 10 }, 64: { row: 8, col: 11 }, 65: { row: 8, col: 12 }, 66: { row: 8, col: 13 }, 67: { row: 8, col: 14 }, 68: { row: 8, col: 15 }, 69: { row: 8, col: 16 }, 70: { row: 8, col: 17 }, 71: { row: 8, col: 18 },
  72: { row: 6, col: 4 }, 73: { row: 6, col: 5 }, 74: { row: 6, col: 6 }, 75: { row: 6, col: 7 }, 76: { row: 6, col: 8 }, 77: { row: 6, col: 9 }, 78: { row: 6, col: 10 }, 79: { row: 6, col: 11 }, 80: { row: 6, col: 12 },
  81: { row: 6, col: 13 }, 82: { row: 6, col: 14 }, 83: { row: 6, col: 15 }, 84: { row: 6, col: 16 }, 85: { row: 6, col: 17 }, 86: { row: 6, col: 18 },
  87: { row: 7, col: 1 }, 88: { row: 7, col: 2 },
  89: { row: 9, col: 4 }, 90: { row: 9, col: 5 }, 91: { row: 9, col: 6 }, 92: { row: 9, col: 7 }, 93: { row: 9, col: 8 }, 94: { row: 9, col: 9 }, 95: { row: 9, col: 10 }, 96: { row: 9, col: 11 }, 97: { row: 9, col: 12 }, 98: { row: 9, col: 13 }, 99: { row: 9, col: 14 }, 100: { row: 9, col: 15 }, 101: { row: 9, col: 16 }, 102: { row: 9, col: 17 }, 103: { row: 9, col: 18 },
  104: { row: 7, col: 4 }, 105: { row: 7, col: 5 }, 106: { row: 7, col: 6 }, 107: { row: 7, col: 7 }, 108: { row: 7, col: 8 }, 109: { row: 7, col: 9 }, 110: { row: 7, col: 10 }, 111: { row: 7, col: 11 }, 112: { row: 7, col: 12 },
  113: { row: 7, col: 13 }, 114: { row: 7, col: 14 }, 115: { row: 7, col: 15 }, 116: { row: 7, col: 16 }, 117: { row: 7, col: 17 }, 118: { row: 7, col: 18 },
};

const table = document.getElementById('periodic-table');
const tooltip = document.getElementById('tooltip');
const search = document.getElementById('search');

const categoryClassMap = {
  'alkali metal': 'alkali-metal',
  'alkaline earth metal': 'alkaline-earth-metal',
  'transition metal': 'transition-metal',
  'post-transition metal': 'post-transition-metal',
  'metalloid': 'metalloid',
  'reactive nonmetal': 'reactive-nonmetal',
  'noble gas': 'noble-gas',
  'lanthanide': 'lanthanide',
  'actinide': 'actinide',
  'halogen': 'halogen',
  'unknown': 'unknown',
};

function renderTable(filter = '', catFilter = []) {
  table.innerHTML = '';
  document.getElementById('lanthanide-row').innerHTML = '';
  document.getElementById('actinide-row').innerHTML = '';
  // Render main table elements (not lanthanides/actinides)
  elements.forEach(el => {
    if ((el.number >= 57 && el.number <= 71) || (el.number >= 89 && el.number <= 103)) return;
    if (
      filter &&
      !el.name.toLowerCase().includes(filter) &&
      !el.symbol.toLowerCase().includes(filter) &&
      String(el.number) !== filter
    ) return;
    let cat = (el.category || '').toLowerCase();
    if (cat === 'post-transition metal' || cat === 'post transition metal') cat = 'post-transition metal';
    if (cat === 'alkali metal') cat = 'alkali metal';
    if (cat === 'alkaline earth metal') cat = 'alkaline earth metal';
    if (cat === 'transition metal') cat = 'transition metal';
    if (cat === 'noble gas') cat = 'noble gas';
    if (cat === 'reactive nonmetal' || cat === 'other nonmetal' || cat === 'nonmetal') cat = 'reactive nonmetal';
    if (cat === 'halogen') cat = 'halogen';
    if (cat === 'lanthanide') cat = 'lanthanide';
    if (cat === 'actinide') cat = 'actinide';
    if (!categoryClassMap[cat]) cat = 'unknown';
    if (catFilter.length && !catFilter.includes(categoryClassMap[cat])) return;
    const div = document.createElement('div');
    div.className = 'element ' + categoryClassMap[cat];
    div.style.gridRow = layout[el.number].row;
    div.style.gridColumn = layout[el.number].col;
    div.innerHTML = `
      <span class="number">${el.number}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="name">${el.name}</span>
    `;
    div.addEventListener('mouseenter', e => showTooltip(e, el));
    div.addEventListener('mousemove', e => moveTooltip(e));
    div.addEventListener('mouseleave', hideTooltip);
    div.addEventListener('click', e => showTooltip(e, el, true));
    table.appendChild(div);
  });
  // Render lanthanides row (no label)
  const lanRow = document.getElementById('lanthanide-row');
  elements.filter(el => el.number >= 57 && el.number <= 71).forEach(el => {
    if (
      filter &&
      !el.name.toLowerCase().includes(filter) &&
      !el.symbol.toLowerCase().includes(filter) &&
      String(el.number) !== filter
    ) return;
    let cat = (el.category || '').toLowerCase();
    if (cat === 'lanthanide') cat = 'lanthanide';
    if (!categoryClassMap[cat]) cat = 'unknown';
    if (catFilter.length && !catFilter.includes(categoryClassMap[cat])) return;
    const div = document.createElement('div');
    div.className = 'element ' + categoryClassMap[cat];
    div.innerHTML = `
      <span class="number">${el.number}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="name">${el.name}</span>
    `;
    div.addEventListener('mouseenter', e => showTooltip(e, el));
    div.addEventListener('mousemove', e => moveTooltip(e));
    div.addEventListener('mouseleave', hideTooltip);
    div.addEventListener('click', e => showTooltip(e, el, true));
    lanRow.appendChild(div);
  });
  // Render actinides row (no label)
  const actRow = document.getElementById('actinide-row');
  elements.filter(el => el.number >= 89 && el.number <= 103).forEach(el => {
    if (
      filter &&
      !el.name.toLowerCase().includes(filter) &&
      !el.symbol.toLowerCase().includes(filter) &&
      String(el.number) !== filter
    ) return;
    let cat = (el.category || '').toLowerCase();
    if (cat === 'actinide') cat = 'actinide';
    if (!categoryClassMap[cat]) cat = 'unknown';
    if (catFilter.length && !catFilter.includes(categoryClassMap[cat])) return;
    const div = document.createElement('div');
    div.className = 'element ' + categoryClassMap[cat];
    div.innerHTML = `
      <span class="number">${el.number}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="name">${el.name}</span>
    `;
    div.addEventListener('mouseenter', e => showTooltip(e, el));
    div.addEventListener('mousemove', e => moveTooltip(e));
    div.addEventListener('mouseleave', hideTooltip);
    div.addEventListener('click', e => showTooltip(e, el, true));
    actRow.appendChild(div);
  });
}

function showTooltip(e, el, sticky = false) {
  tooltip.innerHTML = `<b>${el.name} (${el.symbol})</b><br>Atomic Number: ${el.number}<br>Category: ${el.category}<br>${el.info}`;
  tooltip.style.display = 'block';
  moveTooltip(e);
  if (sticky) {
    tooltip.style.pointerEvents = 'auto';
    tooltip.onclick = hideTooltip;
  } else {
    tooltip.style.pointerEvents = 'none';
    tooltip.onclick = null;
  }
}

function moveTooltip(e) {
  const tooltipRect = tooltip.getBoundingClientRect();
  const padding = 12;
  let left = e.clientX + 20;
  let top = e.clientY + 20;
  // Prevent right overflow
  if (left + tooltipRect.width > window.innerWidth - padding) {
    left = e.clientX - tooltipRect.width - 20;
  }
  // Prevent bottom overflow
  if (top + tooltipRect.height > window.innerHeight - padding) {
    top = e.clientY - tooltipRect.height - 20;
  }
  // Prevent left/top overflow
  if (left < padding) left = padding;
  if (top < padding) top = padding;
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideTooltip() {
  tooltip.style.display = 'none';
}

const legendCircles = Array.from(document.querySelectorAll('.legend-color[data-category]'));
let activeLegendCats = [];
legendCircles.forEach(circle => {
  circle.addEventListener('click', function() {
    const cat = this.getAttribute('data-category');
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      activeLegendCats.push(cat);
    } else {
      activeLegendCats = activeLegendCats.filter(c => c !== cat);
    }
    updateTableLegendCircles();
  });
});
function updateTableLegendCircles() {
  renderTable(search.value.trim().toLowerCase(), activeLegendCats);
}
search.addEventListener('input', updateTableLegendCircles);
renderTable();

// Legend hamburger menu toggle for mobile
const legendToggle = document.getElementById('legend-toggle');
const legend = document.getElementById('legend');

function isMobile() {
  return window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
}

function hideLegend() {
  legend.classList.remove('show');
  legendToggle.classList.remove('active');
}

function showLegend() {
  legend.classList.add('show');
  legendToggle.classList.add('active');
}

if (legendToggle && legend) {
  legendToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (legend.classList.contains('show')) {
      hideLegend();
    } else {
      showLegend();
    }
  });
  // Hide legend when clicking outside
  document.addEventListener('click', function(e) {
    if (isMobile() && legend.classList.contains('show')) {
      if (!legend.contains(e.target) && e.target !== legendToggle) {
        hideLegend();
      }
    }
  });
  // Hide legend on resize if not mobile
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      hideLegend();
      legend.style.display = '';
    }
  });
  // Hide legend by default on mobile
  if (isMobile()) {
    hideLegend();
  }
} 