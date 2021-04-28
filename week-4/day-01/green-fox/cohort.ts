"use strict";

import { Person} from "./person"
import { Student } from "./student";
import { Mentor } from "./mentor";
import { Sponsor} from "./sponsor";

class Cohort {
  private _name: string;
  private _students: Student[];
  private _mentors: Mentor[];

  constructor(name: string, students: Student[], mentors: Mentor[]) {
    this._name = name;
    this._students = students;
    this._mentors = mentors;
  }

  public addStudent(student: Student) {
    this._students.push(student);
  }
  public addMentor(mentor: Mentor) {
    this._mentors.push(mentor);
  }

  public info() {
    console.log( `'The ${this._name} cohort has size of ${this._students.length} students and size of ${this._mentors.length} mentors.'`);
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME',[],[]);
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();