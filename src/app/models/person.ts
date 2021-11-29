export class Person {
  firstName: string;
  lastName: string;
  birthDate: Date;
  name: string;

  constructor(aFirstName: string, aLastName: string, aBirthDate: Date) {
    this.firstName = aFirstName;
    this.lastName = aLastName;
    this.birthDate = aBirthDate;
    this.name = this.firstName + this.lastName;
  }
}
