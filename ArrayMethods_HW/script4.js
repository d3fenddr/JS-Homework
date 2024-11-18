const audiences = [
    { name: "Room A", seats: 15, faculty: "Math" },
    { name: "Room B", seats: 10, faculty: "Science" },
    { name: "Room C", seats: 20, faculty: "Arts" }
];

function displayAudiences() {
    console.log("Audiences:");
    audiences.forEach(audience => console.log(`${audience.name} - ${audience.seats} seats (${audience.faculty})`));
}

function displayFacultyAudiences(faculty) {
    console.log(`Audiences for ${faculty}:`);
    audiences.filter(audience => audience.faculty === faculty)
        .forEach(audience => console.log(`${audience.name} - ${audience.seats} seats`));
}

function displaySuitableAudiences(group) {
    console.log(`Suitable audiences for group "${group.name}":`);
    audiences.filter(audience => audience.seats >= group.students && audience.faculty === group.faculty)
        .forEach(audience => console.log(`${audience.name} - ${audience.seats} seats`));
}

function sortAudiencesBySeats() {
    audiences.sort((a, b) => a.seats - b.seats);
}

function sortAudiencesByName() {
    audiences.sort((a, b) => a.name.localeCompare(b.name));
}

const group = { name: "Group 1", students: 12, faculty: "Math" };

displayAudiences();
displayFacultyAudiences("Math");
displaySuitableAudiences(group);
sortAudiencesBySeats();
displayAudiences();
sortAudiencesByName();
displayAudiences();