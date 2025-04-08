import { Bathroom } from "./bathroom.ts";
import { Bistro } from "./bistro.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly.`);
  }
  entryBathroom(): Bathroom {
    //? Bathroom je typová anotace (metoda vždy vrátí objekt z class Bathroom)
    console.log(`${this.name} jde na toaletu.`);
    return new Bathroom(this.name);
  }
  askReceptionistQuestion(question: string) {
    console.log(`Návštěvník ${this.name} ptá recepční na otázku: ${question}`);
    console.log("Recepční mlčí.");
    return this;
  }

  entryBistro(): Bistro {
    console.log(`${this.name} jde do bistra.`);
    return new Bistro(this.name);
  }
  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.name} si volá výtah do 2. patra.`);
    const waitingForElevatorMs = 2000; // Čekání na výtah 2 sekundy
    // Simulace čekání na výtah
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    // Výtah přijíždí
    console.log(`Výtah přijel do vstupní haly.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    // Jízda výtahem 2 sekundy
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu ve druhém patře.`);
    return new SecondFloor(this.name);
  }
}
