const home = [
    { name: "D5 Stainless Brushed 5-ply Bonded Cookware Set, 14 piece Set", imageUrl: "hpics/Image1.png", url: "https://www.all-clad.com/d5-stainless-brushed-5-ply-bonded-cookware-set-14-piece-set.html", price: 1499.99, notes: "These will last forever people still have their all clads from 20+ years ago", wantedness: 4, order:1},
    { name: "Sourdough Kit", imageUrl: "hpics/Image2.png", url: "https://www.amazon.com/Kootek-Sourdough-Supplies-Banneton-Proofing/dp/B0CB6FPNRQ/ref=sr_1_5?crid=1ORMINFLEPBKQ&dib=eyJ2IjoiMSJ9.51nLJlskuGbBplbjXehVYzpl8yVtC7c9DJgeOnwj3vvcPunGDcsthrYIuLjBZ7crHWYf2fmXlzfu61Bz5CzssM-ZBpKP4ZHk9EF6iSBsuMJO-hmOgrHuC2WlGspCtrlptMbffV5AP0BLoOp2kBBcohWa-KdSs9sB3cv1x3PlmWiVWsz_RSL6ZuBXxUSA5AJxd5NY_ZuRgJhr82N77MgCRcwIeVSpQ2KoPyqGkqrgDoEN9Qf9g5XjaFXaKfFiBrxc90mH76uTqDV2TrVQ5ydYjddPr1E_HDZmDVJMbepj1LA.Vdc7r7qPb0qag-U1C9QXkrIMMmO5qH4JEY2T2XbUShM&dib_tag=se&keywords=sourdough%2Bkit&qid=1708671972&s=home-garden&sprefix=sourdough%2Bki%2Cgarden%2C181&sr=1-5&th=1", price: 29.99 , notes: "for fresh sourdough", wantedness: 1, order:2 },
    { name: "Chef Knifes", imageUrl: "hpics/Image3.png", url: "https://www.zwilling.com/us/miyabi-birchwood-sg2-7-pc-knife-block-set-brown-34370-007/34370-007-0.html?cgid=our-brands_miyabi_cutlery", price: 1299, notes: "Just like the pans these are QUALITY (btw you can get a discount just lmk)", wantedness: 2, order:3 },
    { name: "5-Qt Tilt Head Stand Mixer", imageUrl: "hpics/Image4.png", url: "https://www.crateandbarrel.com/kitchenaid-artisan-series-matte-milkshake-5-quart-tilt-head-stand-mixer/s459206%22", price: 375, notes: "COLOR:Milkshake", wantedness: 3, order:4 },
];

function populateHomeTable() {
    const table = document.getElementById("homeTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    home.forEach(home => {
        const row = tbody.insertRow();
        const imgCell = row.insertCell(0);
        const linkCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const notesCell = row.insertCell(3);

        imgCell.innerHTML = `<img src="${home.imageUrl}" width="300" height="300">`;
        linkCell.innerHTML = `<a href="${home.url}" target="_blank">${home.name}</a>`;
        priceCell.textContent = `$${home.price}`;
        notesCell.textContent = home.notes;
    });
}

function sortHome() {
    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "lowToHigh") {
        home.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
        home.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "reset") {
        // Reset to default list
        home.sort((a, b) => a.order - b.order);
    }
    populateHomeTable();
}

function clearFilters() {
    // Reset price filter
    document.getElementById("priceFilter").selectedIndex = 0;

    // Re-populate the home table with the original data
    populateHomeTable();
}

function filterMostToLeastWanted() {
    home.sort((a, b) => b.wantedness - a.wantedness);
    populateHomeTable();
}

// Initial population of home table
populateHomeTable();
