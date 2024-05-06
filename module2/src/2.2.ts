{

  //interface
  type User1 = {
    name: string;
    age: number;
  };

  //interface
  interface User2 {
    name: string,
    age: number,
  };


  //alish
  type UserWithRole1 = User1 & { role: string }

  interface UserWithRole2 extends User2 {
    role: string
  };

  //alish
  const user1: UserWithRole2 = {
    name: 'Mezba',
    age: 100,
    role: 'manager'
  };




  const user2: UserWithRole2 = {
    name: 'Parsian',
    age: 400,
    role: 'rrrr'
  }



  //  ARRAY 
  //JS --> Object, Array --> Object, function --> Object

  type Roll_1 = number[];

  interface Roll_2 {
    [index: number]: number
  }
  const rollNumber1: Roll_1 = [1, 2, 4, 8, 10];
  const rollNumber2: Roll_1 = [4, 10, 5, 9, 11];


  //Function
  type add_X = (number_1: number, number_2: number) => number;
  interface add_Y {
    (number_1: number, number_2: number): number;
  }

  const add_1: add_X = (number_1, number_2) => number_1 + number_2;
  const add_2: add_Y = (number_1, number_2) => number_1 + number_2;
















}