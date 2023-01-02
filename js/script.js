'use strict';
(function (){


  class Human{
    name = null;
    surname = null;
    yearOfBirth = null;
    #isHumanHasAPet = null;

    constructor(name, surname, yearOfBirth) {
      this.name = name;
      this.surname = surname;
      this.yearOfBirth = yearOfBirth;
    }

    getHumanAge(){
      const today = new Date().getFullYear();
      return today - this.yearOfBirth;
    }

    static isHuman(){
      console.log('static method without this word')
    }

    get isHumanHasAPet(){
      return this.#isHumanHasAPet;
    }

    set isHumanHasAPet(value){
      if (value.length < 2) throw new Error('enter the answer');
      this.#isHumanHasAPet = value;
    }

  }
  Human.isHuman();


  class Student extends Human{

    constructor(...args) {
      super(...args);
    }

    _attendance = new Array(10);
    _indexOfAttendance = 0;
    _estimates = new Array(10);
    _indexOfEstimates = 0;

    isHumanHasAPet() {
      console.log(super.isHumanHasAPet);;
    }

    getHumanAge() {
      return super.getHumanAge();
    }

    present(){

      if (this._attendance.length > this._indexOfAttendance){
        this._attendance[this._indexOfAttendance] = true;
        this._indexOfAttendance += 1;
      } else {
        throw new Error('amount of chain is bigger than need to')
      }
      return this._attendance;
    };

    absent(){
      if (this._attendance.length > this._indexOfAttendance){
        this._attendance[this._indexOfAttendance] = false;
        this._indexOfAttendance += 1;
      } else {
        throw new Error('amount of chain is bigger than need to')
      }
      return this._attendance;
    };

    getMark(mark){

      if (mark >= 1 && mark <= 10){
        if (this._estimates.length > this._indexOfEstimates){
          this._estimates[this._indexOfEstimates] = +mark;
          this._indexOfEstimates += 1;
        } else {
          throw new Error('amount of chain is bigger than need to')
        }
      }
      return this._estimates;
    };

    summary(){
      let averageGrade = 0;
      averageGrade = this._estimates.reduce((sum = 0, item) => sum + item) / this._indexOfEstimates;

      let averageAttendance = 0;
      averageAttendance = this._attendance.reduce((sum = 0, item) => sum + item) / this._indexOfAttendance;


      const bestGrade = 'Ути какой молодчинка!';
      const normalGrade = 'Норм, но можно лучше';
      const worstGrade = 'Редиска!';

      let result = null;

      if (averageGrade > 9 && averageAttendance > 0.9){
        result = bestGrade;
      }
      if (averageGrade > 9 || averageAttendance > 0.9){
        result = normalGrade;
      }
      if (averageGrade < 9 && averageAttendance < 0.9){
        result = worstGrade;
      }
      return result
    };


  }

  let student = new Student('alina', 'mytsa', 2000)
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  student.present()
  console.log(student._attendance);

  student.getMark(10);
  student.getMark(10);
  student.getMark(9);
  student.getMark(8);
  student.getMark(10);
  student.getMark(10);
  student.getMark(2);
  student.getMark(4);
  student.getMark(2);
  student.getMark(2);
  console.log(student._estimates);

  console.log(student.summary());

  Student.isHuman();

  console.log(student instanceof Student);
  console.log(student instanceof Human);
}())



