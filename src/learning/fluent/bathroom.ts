import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil na toaletu.`);
  }

  returnToEntryHall(): EntryHall {
    console.log(`${this.name} se vrací do vstupní haly.`);
    return new EntryHall(this.name);
  }

  washHands() {
    console.log(`${this.name} si umyl ruce.`);
    return this;
  }
}
