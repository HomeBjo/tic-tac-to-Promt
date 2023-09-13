let fields = [
  null,
  "circle",
  "circle",
  "circle",
  "circle",
  null,
  null,
  "cross",
  null,
];


function init() {
    render()
}


function render() {
    const table = document.getElementById("game-board");
    let tableHTML = ''; // HTML-Inhalt der Tabelle

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const fieldValue = fields[i * 3 + j];
            let cellContent = '';

            if (fieldValue === 'circle') {
                cellContent = 'O';
            } else if (fieldValue === 'cross') {
                cellContent = 'X';
            }

            tableHTML += `<td>${cellContent}</td>`;
        }
        tableHTML += '</tr>';
    }

    table.innerHTML = tableHTML; // Setzen Sie den HTML-Inhalt der Tabelle
}

