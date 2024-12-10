document.querySelectorAll('th').forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent;
        const cellB = rowB.children[index].textContent;
        return !isNaN(cellA - cellB) ? cellA - cellB : cellA.localeCompare(cellB);
      });
      rows.forEach(row => document.querySelector('tbody').appendChild(row));
    });
  });