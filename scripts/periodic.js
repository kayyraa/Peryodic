const Table = document.querySelector(".Table")

const PropertiesContainer = document.querySelector(".Properties");
PropertiesContainer.style.width = `${Table.offsetWidth}px`;
document.querySelector("column").style.width = `${Table.offsetWidth}px`;

const Atomic = {
    "H": [1, "Hydrogen", 1], "He": [2, "Helium", 1], "Li": [3, "Lithium", 2], "Be": [4, "Beryllium", 2],
    "B": [5, "Boron", 2], "C": [6, "Carbon", 2], "N": [7, "Nitrogen", 2], "O": [8, "Oxygen", 2],
    "F": [9, "Fluorine", 2], "Ne": [10, "Neon", 2], "Na": [11, "Sodium", 3], "Mg": [12, "Magnesium", 3],
    "Al": [13, "Aluminium", 3], "Si": [14, "Silicon", 3], "P": [15, "Phosphorus", 3], "S": [16, "Sulfur", 3],
    "Cl": [17, "Chlorine", 3], "Ar": [18, "Argon", 3], "K": [19, "Potassium", 4], "Ca": [20, "Calcium", 4],
    "Sc": [21, "Scandium", 4], "Ti": [22, "Titanium", 4], "V": [23, "Vanadium", 4], "Cr": [24, "Chromium", 4],
    "Mn": [25, "Manganese", 4], "Fe": [26, "Iron", 4], "Co": [27, "Cobalt", 4], "Ni": [28, "Nickel", 4],
    "Cu": [29, "Copper", 4], "Zn": [30, "Zinc", 4], "Ga": [31, "Gallium", 4], "Ge": [32, "Germanium", 4],
    "As": [33, "Arsenic", 4], "Se": [34, "Selenium", 4], "Br": [35, "Bromine", 4], "Kr": [36, "Krypton", 4],
    "Rb": [37, "Rubidium", 5], "Sr": [38, "Strontium", 5], "Y": [39, "Yttrium", 5], "Zr": [40, "Zirconium", 5],
    "Nb": [41, "Niobium", 5], "Mo": [42, "Molybdenum", 5], "Tc": [43, "Technetium", 5], "Ru": [44, "Ruthenium", 5],
    "Rh": [45, "Rhodium", 5], "Pd": [46, "Palladium", 5], "Ag": [47, "Silver", 5], "Cd": [48, "Cadmium", 5],
    "In": [49, "Indium", 5], "Sn": [50, "Tin", 5], "Sb": [51, "Antimony", 5], "Te": [52, "Tellurium", 5],
    "I": [53, "Iodine", 5], "Xe": [54, "Xenon", 5], "Cs": [55, "Cesium", 6], "Ba": [56, "Barium", 6],
    "La": [57, "Lanthanum", 6], "Ce": [58, "Cerium", 6], "Pr": [59, "Praseodymium", 6], "Nd": [60, "Neodymium", 6],
    "Pm": [61, "Promethium", 6], "Sm": [62, "Samarium", 6], "Eu": [63, "Europium", 6], "Gd": [64, "Gadolinium", 6],
    "Tb": [65, "Terbium", 6], "Dy": [66, "Dysprosium", 6], "Ho": [67, "Holmium", 6], "Er": [68, "Erbium", 6],
    "Tm": [69, "Thulium", 6], "Yb": [70, "Ytterbium", 6], "Lu": [71, "Lutetium", 6], "Hf": [72, "Hafnium", 6],
    "Ta": [73, "Tantalum", 6], "W": [74, "Tungsten", 6], "Re": [75, "Rhenium", 6], "Os": [76, "Osmium", 6],
    "Ir": [77, "Iridium", 6], "Pt": [78, "Platinum", 6], "Au": [79, "Gold", 6], "Hg": [80, "Mercury", 6],
    "Tl": [81, "Thallium", 6], "Pb": [82, "Lead", 6], "Bi": [83, "Bismuth", 6], "Po": [84, "Polonium", 6],
    "At": [85, "Astatine", 6], "Rn": [86, "Radon", 6], "Fr": [87, "Francium", 7], "Ra": [88, "Radium", 7],
    "Ac": [89, "Actinium", 7], "Th": [90, "Thorium", 7], "Pa": [91, "Protactinium", 7], "U": [92, "Uranium", 7],
    "Np": [93, "Neptunium", 7], "Pu": [94, "Plutonium", 7], "Am": [95, "Americium", 7], "Cm": [96, "Curium", 7],
    "Bk": [97, "Berkelium", 7], "Cf": [98, "Californium", 7], "Es": [99, "Einsteinium", 7], "Fm": [100, "Fermium", 7],
    "Md": [101, "Mendelevium", 7], "No": [102, "Nobelium", 7], "Lr": [103, "Lawrencium", 7], "Rf": [104, "Rutherfordium", 7],
    "Db": [105, "Dubnium", 7], "Sg": [106, "Seaborgium", 7], "Bh": [107, "Bohrium", 7], "Hs": [108, "Hassium", 7],
    "Mt": [109, "Meitnerium", 7], "Ds": [110, "Darmstadtium", 7], "Rg": [111, "Roentgenium", 7], "Cn": [112, "Copernicium", 7],
    "Nh": [113, "Nihonium", 7], "Fl": [114, "Flerovium", 7], "Mc": [115, "Moscovium", 7], "Lv": [116, "Livermorium", 7],
    "Ts": [117, "Tennessine", 7], "Og": [118, "Oganesson", 7]
}

const Types = {
    "Nonmetal": "rgb(100, 100, 155)",
    "NobleGas": "rgb(100, 100, 155)",
    "Metalloid": "rgb(155, 155, 100)",
    "Metal": "rgb(155, 100, 100)"
};

const AddElementListeners = (Elements, GroupNumber, GroupName) => {
    Array.from(Elements).forEach(Element => {
        ["mouseenter", "click"].forEach(Event => {
            Element.addEventListener(Event, () => {
                const [ProtonCount, ElementName, ElementGroupName] = Atomic[Element.innerHTML];

                Array.from(Table.children).forEach(Child => {
                    Array.from(Child.children).forEach(Label => {
                        Label.style.fontWeight = ""
                        if (Label.innerHTML !== `${GroupNumber}${GroupName}`) return;
                        Label.style.fontWeight = "900"
                    });
                });
                const Label = Table.querySelector(":first-child").querySelector(`.${"abcdefg"[ElementGroupName - 1]}`);
                if (Label) Label.style.fontWeight = "900";
                else Array.from(Table.querySelector(":first-child").children).forEach(Label => Label.style.fontWeight = "");

                const InspectSpans = PropertiesContainer.querySelector(".Inspect").querySelectorAll("span");
                PropertiesContainer.querySelector(".Element").querySelector("header").innerHTML = Element.innerHTML;
                PropertiesContainer.querySelector(".Element").querySelector("span").innerHTML = ProtonCount;

                InspectSpans[0].innerHTML = `Electrons: ${ProtonCount}`;
                InspectSpans[1].innerHTML = `Group: ${GroupNumber}${GroupName}`;
                InspectSpans[2].innerHTML = `Period: ${ElementGroupName}`;
                InspectSpans[3].innerHTML = ElementName;
                PropertiesContainer.querySelector(".Element").style.backgroundColor = Types[Element.className] || Types.Metal;
            });
        });
    });
};

Array.from(Table.children).forEach(Group => {
    const GroupClass = Group.getAttribute("class");
    let TransitionGroup = !GroupClass;
    const GroupName = TransitionGroup ? "" : GroupClass[0].toUpperCase();
    const GroupNumber = TransitionGroup ? 0 : parseInt(GroupClass.slice(1), 10);

    if (TransitionGroup) Array.from(Group.children).forEach(Subgroup => AddElementListeners(Subgroup.children, GroupNumber, GroupName));
    else AddElementListeners(Group.children, GroupNumber, GroupName);

    const Identifier = document.createElement("span");
    Identifier.innerHTML = GroupNumber + GroupName;
    Identifier.style.order = "-1";
    if (!TransitionGroup) Group.appendChild(Identifier);
});