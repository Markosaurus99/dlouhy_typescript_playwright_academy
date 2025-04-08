import { EntryHall } from "./entry_hall.ts";

export class Bistro {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do Bistra.`);
  }

  buyDrink() {
    console.log(`Návštěvník ${this.name} si koupil drink`);
    return this;
  }

  returnToEntryHall(): EntryHall {
    console.log(`${this.name} se vrací do vstupní haly.`);
    return new EntryHall(this.name);
  }
}
