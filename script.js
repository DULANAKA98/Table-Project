
const table1Data = [
    { index: 'A1', value: 41 },
    { index: 'A2', value: 18 },
    { index: 'A3', value: 21 },
    { index: 'A4', value: 63 },
    { index: 'A5', value: 2 },
    { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },
    { index: 'A8', value: 57 },
    { index: 'A9', value: 60 },
    { index: 'A10', value: 93 },
    { index: 'A11', value: 28 },
    { index: 'A12', value: 3 },
    { index: 'A13', value: 90 },
    { index: 'A14', value: 39 },
    { index: 'A15', value: 80 },
    { index: 'A16', value: 88 },
    { index: 'A17', value: 49 },
    { index: 'A18', value: 60 },
    { index: 'A19', value: 26 },
    { index: 'A20', value: 28 }
];

// Populate Table 1
const table1 = document.getElementById('table1');
table1Data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.index}</td><td>${row.value}</td>`;
    table1.appendChild(tr);
});

// Calculate values for Table 2
const A5 = table1Data.find(row => row.index === 'A5').value;
const A20 = table1Data.find(row => row.index === 'A20').value;
const A15 = table1Data.find(row => row.index === 'A15').value;
const A7 = table1Data.find(row => row.index === 'A7').value;
const A13 = table1Data.find(row => row.index === 'A13').value;
const A12 = table1Data.find(row => row.index === 'A12').value;

document.getElementById('alpha').textContent = A5 + A20;
document.getElementById('beta').textContent = A15 / A7;
document.getElementById('charlie').textContent = A13 * A12;