/*
왜 데이터 구조를 배워야 하는가? => 목적에 따라 데이터들을 다루는 방법 달라져야 하기 때문.
자바스크립트에 이미 구현된 데이터 구조가 있긴 하지만, 여기서는 직접 만들어보는 걸 지향한다.
그것을 위해서 클래스 문법을 사용하는 법을 알아야 한다.

배울 개념.
1. Understand how javaScript implements the idea of classes
2. define terms like abstraction,encapsulation and polymorphism
(추상화, 캡슐화 다형성)
3. class이용하는 법.

클래스란? 사전 정의된 속성 및 메소드를 이용해서, 객체를 생성하기 위한 청사진.
*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  // static 키워드는 클래스에 종속되는 반면 클래스의 개별 인스턴스 메소드에는 반드시 종속적일 필요가 없는
  // 메소드 혹은 기능을 사용할 수 있도록 해준다.
  // 이렇게 만들어진 static method는 클래스의 인스턴스로 접근할 수 없다.
  static enrollStudents() {
    return 'Enrolling....';
  }
}
const firstStudent = new Student('Colt', 'Steele', 1995);
console.log(firstStudent.firstName, firstStudent.lastName, firstStudent.grade);
console.log(firstStudent.fullName());
console.log(Student.enrollStudents());
// error!
// console.log(firstStudent.enrollStudents());
