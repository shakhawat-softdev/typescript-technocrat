{


  type Student = {
    name: string,
    age: number,
    gender: string,
    contarctNo?: string,
    address?: string,
  }

  const student1: Student = {
    name: 'mizba',
    age: 50,
    gender: 'male',
    contarctNo: '01517189480',
    address: 'ctg',
  }

  const student2: Student = {
    name: 'Mir',
    age: 40,
    gender: 'male',

  }

  type userName = String;
  type IsAdmin = boolean;

  const userName: userName = 'ARAFAT';
  const isAdmin: IsAdmin = false;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (number1, number2): number => number1 * number2;









}