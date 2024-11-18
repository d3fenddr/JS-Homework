const shoppingList = [
    { name: "Milk", quantity: 2, purchased: false },
    { name: "Bread", quantity: 5, purchased: true },
    { name: "Eggs", quantity: 12, purchased: false }
];

function displayShoppingList() {
    const sortedList = [...shoppingList].sort((a, b) => a.purchased - b.purchased);
    console.log("Shopping List:");
    sortedList.forEach(item => {
        console.log(`${item.name} (${item.quantity}) - ${item.purchased ? "Purchased" : "Not Purchased"}`);
    });
}

function addItem(name, quantity) {
    const existingItem = shoppingList.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        shoppingList.push({ name, quantity, purchased: false });
    }
}

function purchaseItem(name) {
    const item = shoppingList.find(item => item.name === name);
    if (item) {
        item.purchased = true;
    }
}

displayShoppingList();
addItem("Milk", 1);
purchaseItem("Eggs");
displayShoppingList();