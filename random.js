/**const purses = [
   { name: " ", imageUrl: "hpics/Image4.png", url: " ", price: , notes: " ", wantedness: 3, order:4 },
   { name: " ", imageUrl: "hpics/Image4.png", url: " ", price: , notes: " ", wantedness: 3, order:4 },
   { name: " ", imageUrl: "hpics/Image4.png", url: " ", price: , notes: " ", wantedness: 3, order:4 },
   { name: " ", imageUrl: "hpics/Image4.png", url: " ", price: , notes: " ", wantedness: 3, order:4 },
   { name: " ", imageUrl: "hpics/Image4.png", url: " ", price: , notes: " ", wantedness: 3, order:4 },
];


function populatePurseTable() {
    const table = document.getElementById("purseTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    purses.forEach(purse => {
        const row = tbody.insertRow();
        const imgCell = row.insertCell(0);
        const linkCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const notesCell = row.insertCell(3);

        imgCell.innerHTML = `<img src="${purse.imageUrl}" width="300" height="300">`;
        linkCell.innerHTML = `<a href="${purse.url}" target="_blank">${purse.name}</a>`;
        priceCell.textContent = `$${purse.price}`;
        notesCell.textContent = purse.notes;
    });
}

function sortPurses() {
    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "lowToHigh") {
        purses.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
        purses.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "reset") {
        // Reset to default list
        purses.sort((a, b) => a.order - b.order);
    }
    populatePurseTable();
}

function clearFilters() {
    // Reset price filter
    document.getElementById("priceFilter").selectedIndex = 0;

    // Re-populate the purse table with the original data
    populatePurseTable();
}

/*function sortPurses() {
    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "lowToHigh") {
        purses.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
        purses.sort((a, b) => b.price - a.price);
    }
    populatePurseTable();
}
*/
/*function filterMostToLeastWanted() {
    purses.sort((a, b) => b.wantedness - a.wantedness);
    populatePurseTable();
}


// Initial population of purse table
populatePurseTable();

**/