class ExtendedDate extends Date {
  getTextDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${this.getDate()} ${months[this.getMonth()]}`;
  }

  isFuture() {
    return this.getTime() >= Date.now();
  }

  isLeapYear() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  getNextDate() {
    const nextDate = new ExtendedDate(this);
    nextDate.setDate(this.getDate() + 1);
    return nextDate;
  }
}

const date = new ExtendedDate("2024-12-04");
console.log(`Current date: ${date.getTextDate()}`);
console.log(`Is future date: ${date.isFuture()}`);
console.log(`Is leap year: ${date.isLeapYear()}`);
console.log(`Next date: ${date.getNextDate().getTextDate()}`);