class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  print(text) {
    let output = "";
    for (const char of text) {
      if (this.inkLevel <= 0) break;
      if (char !== " ") {
        this.inkLevel -= 0.5;
      }
      output += char;
    }
    console.log(`%c${output}`, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {
  refill() {
    this.inkLevel = 100; // loading marker to 100
    console.log("Marker loaded!");
  }
}
const marker = new RefillableMarker("blue", 10);
marker.print("Hello, world! Text example");
console.log(`Marker ink left: ${marker.inkLevel}%`);
marker.refill();
marker.print("Asadas dasdsada dsad");