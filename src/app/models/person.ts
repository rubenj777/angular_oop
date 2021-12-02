export class Person {
  firstName: string;
  lastName: string;
  birthDate: Date;
  name: string;
  major!: boolean;

  constructor(aFirstName: string, aLastName: string, aBirthDate: Date) {
    this.firstName = aFirstName;
    this.lastName = aLastName;
    this.birthDate = aBirthDate;
    this.name = this.firstName + this.lastName;
    this.getAge();
  }

  private getAge() {
    var today = new Date();
    var age = today.getFullYear() - this.birthDate.getFullYear();
    var m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
    // if (age > 18) {
    //   this.major = true;
    // } else {
    //   this.major = false;
    // }
    age > 18 ? (this.major = true) : (this.major = false);
  }
}
