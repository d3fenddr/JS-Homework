const styles = [
    { name: "color", value: "red" },
    { name: "font-size", value: "20px" },
    { name: "text-align", value: "center" }
];

function applyStyles(styles, text) {
    const styleString = styles.map(style => `${style.name}: ${style.value}`).join("; ");
    console.log(`<p style="${styleString}">${text}</p>`);
}

applyStyles(styles, "This is a styled paragraph!");