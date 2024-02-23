const clothes = [
    { name: "Shawl Merino Wool Jacket", imageUrl: "cpics/Image1.png", url: "https://www.aritzia.com/us/en/product/shawl-merino-wool-jacket/101945.html?dwvar_101945_color=10250&dwvar_101945_size=3", price: 248, notes: "Color: Heather Bone", wantedness: 4, order:1},
    { name: "Shirt", imageUrl: "cpics/Image3.png", url: "https://www.aritzia.com/us/en/product/contour-one-shoulder-top/118149.html?dwvar_118149_color=1274", price:40  , notes: "Color: Black", wantedness: 3, order:2 },
    { name: "Shirt", imageUrl: "cpics/Image2.png", url: "https://www.aritzia.com/us/en/product/contour-one-shoulder-top/118149.html?dwvar_118149_color=1275", price: 40, notes: "Color: White", wantedness: 2, order:3 },
    { name: " Sweat Pants", imageUrl: "cpics/Image4.png", url: " https://www.aritzia.com/us/en/product/cozy-fleece-mega-cargo™-sweatpant/116230.html?dwvar_116230_color=4425", price: 85, notes: "Color: Med, Color: Heather Chrome  ", wantedness: 6, order:5 },
    { name: "Sweat Shirt ", imageUrl: "cpics/Image5.png", url: "https://www.aritzia.com/us/en/product/cozy-fleece-perfect-zip-hoodie/116269.html?dwvar_116269_color=4425 ", price: 85, notes: "Color: Med, Color: Heather Chrome  ", wantedness: 5, order:4 },
    { name: "pijamas ", imageUrl: "cpics/Image6.png", url: "https://skims.com/products/soft-lounge-sleep-set-marble ", price: 120, notes: "Color: Marble ", wantedness: 4, order:6 },
    { name: " Apron", imageUrl: "cpics/Image7.png", url: "https://whitebarkworkwear.com/collections/hemp-aprons/products/hemp-natural-full-cross-back-apron ", price: 110, notes: "Color:whit w/ red stiching you can also add my name but thats only if u wanna be nice..  ", wantedness: 7, order:7 },
   // { name: " ", imageUrl: "cpics/Image4.png", url: " ", price: , notes: " ", wantedness: 3, order:4 },
];

function populateClothesTable() {
    const table = document.getElementById("clothesTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    clothes.forEach(item => {
        const row = tbody.insertRow();
        const imgCell = row.insertCell(0);
        const linkCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const notesCell = row.insertCell(3);

        imgCell.innerHTML = `<img src="${item.imageUrl}" width="300" height="300">`;
        linkCell.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        priceCell.textContent = `$${item.price}`;
        notesCell.textContent = item.notes;
    });
}

function sortClothes() {
    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "lowToHigh") {
        clothes.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
        clothes.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "reset") {
        // Reset to default list
        clothes.sort((a, b) => a.order - b.order);
    }
    populateClothesTable();
}

function clearFilters() {
    // Reset price filter
    document.getElementById("priceFilter").selectedIndex = 0;

    // Re-populate the clothes table with the original data
    populateClothesTable();
}

function filterMostToLeastWanted() {
    clothes.sort((a, b) => b.wantedness - a.wantedness);
    populateClothesTable();
}

// Initial population of clothes table
populateClothesTable();
