import { User } from "./user.ts";

//? Vytvoření instance třídy (objektu) User s názvem (const) adminUser

const adminUser = new User("admin", "admin", 55, "markosaurus@cosicosi.com");

console.log(adminUser.getUserName());
adminUser.logUser();
adminUser.setAge(26);
adminUser.logUser();
console.log(adminUser.getEmail());
