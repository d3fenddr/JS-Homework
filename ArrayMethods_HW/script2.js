const receipt = [
    { name: "Milk", quantity: 2, pricePerUnit: 3 },
    { name: "Bread", quantity: 5, pricePerUnit: 0.55 },
    { name: "Eggs", quantity: 12, pricePerUnit: 0.2 }
];

function printReceipt() {
    console.log("Receipt:");
    receipt.forEach(item => {
        console.log(`${item.name} x${item.quantity} for $${item.pricePerUnit.toFixed(2)} = $${(item.quantity * item.pricePerUnit).toFixed(2)}`);
    });
}

function calculateTotal() {
    return receipt.reduce((total, item) => total + item.quantity * item.pricePerUnit, 0).toFixed(2);
}

function getMostExpensiveItem() {
    return receipt.reduce((max, item) => (item.quantity * item.pricePerUnit > max.quantity * max.pricePerUnit ? item : max));
}

function calculateAveragePrice() {
    const totalItems = receipt.reduce((sum, item) => sum + item.quantity, 0);
    return (calculateTotal() / totalItems).toFixed(2);
}

printReceipt();
console.log("Total: $" + calculateTotal());
console.log("Most Expensive Item:", getMostExpensiveItem());
console.log("Average Price Per Item: $" + calculateAveragePrice());