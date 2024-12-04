class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("Radius must be a positive number");
    }
  }

  get diameter() {
    return this._radius * 2;
  }
  area() {
    return Math.PI * Math.pow(this._radius, 2);
  }
  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

let myCircle = new Circle(5);
console.log("Circle radius:", myCircle.radius);
myCircle.radius = 10;
console.log("New circle radius:", myCircle.radius); // 10
console.log("Circle diameter:", myCircle.diameter); // 20
console.log("Circle area:", myCircle.area()); // 314.1592653589793
console.log("Circle circumference:", myCircle.circumference()); // 62.83185307179586
