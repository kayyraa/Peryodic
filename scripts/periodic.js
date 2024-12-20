const PropertiesContainer = document.querySelector(".Properties");

const AtomicNumbers = {
    "H": 1, "He": 2, "Li": 3, "Be": 4, "B": 5, "C": 6, "N": 7, "O": 8, "F": 9, "Ne": 10,
    "Na": 11, "Mg": 12, "Al": 13, "Si": 14, "P": 15, "S": 16, "Cl": 17, "Ar": 18, "K": 19,
    "Ca": 20, "Sc": 21, "Ti": 22, "V": 23, "Cr": 24, "Mn": 25, "Fe": 26, "Co": 27, "Ni": 28,
    "Cu": 29, "Zn": 30, "Ga": 31, "Ge": 32, "As": 33, "Se": 34, "Br": 35, "Kr": 36, "Rb": 37,
    "Sr": 38, "Y": 39, "Zr": 40, "Nb": 41, "Mo": 42, "Tc": 43, "Ru": 44, "Rh": 45, "Pd": 46,
    "Ag": 47, "Cd": 48, "In": 49, "Sn": 50, "Sb": 51, "I": 52, "Te": 53, "Xe": 54, "Cs": 55,
    "Ba": 56, "La": 57, "Ce": 58, "Pr": 59, "Nd": 60, "Pm": 61, "Sm": 62, "Eu": 63, "Gd": 64,
    "Tb": 65, "Dy": 66, "Ho": 67, "Er": 68, "Tm": 69, "Yb": 70, "Lu": 71, "Hf": 72, "Ta": 73,
    "W": 74, "Re": 75, "Os": 76, "Ir": 77, "Pt": 78, "Au": 79, "Hg": 80, "Tl": 81, "Pb": 82,
    "Bi": 83, "Po": 84, "At": 85, "Rn": 86, "Fr": 87, "Ra": 88, "Ac": 89, "Th": 90, "Pa": 91,
    "U": 92, "Np": 93, "Pu": 94, "Am": 95, "Cm": 96, "Bk": 97, "Cf": 98, "Es": 99, "Fm": 100,
    "Md": 101, "No": 102, "Lr": 103, "Rf": 104, "Db": 105, "Sg": 106, "Bh": 107, "Hs": 108,
    "Mt": 109, "Ds": 110, "Rg": 111, "Cn": 112, "Nh": 113, "Fl": 114, "Mc": 115, "Lv": 116,
    "Ts": 117, "Og": 118
};

const Types = {
    "Nonmetal": "rgb(100, 100, 155)",
    "NobleGas": "rgb(100, 100, 155)",
    "Metalloid": "rgb(155, 155, 100)",
    "Metal": "rgb(155, 100, 100)"
};

const GetPeriod = (ElectronCount) => {
    let N = 1;
    while (2 * N * N < ElectronCount) {
        N++;
    }
    return N;
};

Array.from(document.querySelector(".Table").children).forEach(Group => {
    if (!Group.hasAttribute("class")) return;
    const GroupName = String(Group.getAttribute("class"))[0].trim().toUpperCase();
    const GroupNumber = parseInt(String(Group.getAttribute("class")).slice(1), 10);

    const Identifier = document.createElement("span");
    Identifier.innerHTML = GroupNumber + GroupName;
    Identifier.style.order = "-1";
    Group.appendChild(Identifier);

    Array.from(Group.children).forEach((Element, Index) => {
        if (Index === Array.from(Group.children).length - 1) return;
        ["mouseenter", "click"].forEach(Event => {
            Element.addEventListener(Event, () => {
                PropertiesContainer.querySelector(".Element").querySelector("header").innerHTML = Element.innerHTML;
    
                const ElementSymbol = Element.innerHTML.trim();
                const ProtonCount = AtomicNumbers[ElementSymbol];
    
                PropertiesContainer.querySelector(".Element").querySelector("span").innerHTML = ProtonCount;
                PropertiesContainer.querySelector(".Inspect").querySelectorAll("span")[0].innerHTML = `Electrons: ${ProtonCount}`;
                PropertiesContainer.querySelector(".Inspect").querySelectorAll("span")[1].innerHTML = `Group: ${GroupNumber}${GroupName}`;
                PropertiesContainer.querySelector(".Inspect").querySelectorAll("span")[2].innerHTML = `Period: ${GetPeriod(ProtonCount)}`;

                console.log(Types[Element.className]);
                PropertiesContainer.querySelector(".Element").style.backgroundColor = Types[Element.className] ? Types[Element.className] : Types.Metal;
            });
        });
    });
});