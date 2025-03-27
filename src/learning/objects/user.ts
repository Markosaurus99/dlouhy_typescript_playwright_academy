export class User {
  username: string;
  password: string;
  age: number;
  email: string;
  isActivated = true; // ? Implicitně se přiřadí typ boolean
  readonly value = "user"; // Readonly property musíme nastavit buď přímo nebo v constructoru
  // ? Konstruktor třídy, který při vytvoření instance třídy nastaví vlastnosti
  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvořen uživatel: ${this.username} ve věku ${this.age}, aktivován:
${this.isActivated}`
    );
  }

  getEmail(): string {
    return this.email;
  }
  // ? Metoda pro získání uživatelského jména, vrací string
  getUserName(): string {
    return this.username;
  }
  // ? Metoda pro výpis uživatele, nevrací žádnou hodnotu
  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActivated}`
    );
  }
  // ? Metoda pro změnu věku uživatele, přijímá newAge typu number
  setAge(newAge: number): void {
    console.log(
      `Změna věku uživatele ${this.username} z ${this.age} na ${newAge}`
    );
    this.age = newAge;
  }
}
