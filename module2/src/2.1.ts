{

  //generic type

  type GeniricArray<T> = Array<T>;

  // const rollNumber: number[] = [3, 6, 8];
  const rollNumber: GeniricArray<number> = [3, 6, 8];

  // const mentors: string = [] = ['Mr X', 'Mr. Y',];
  const mentors: GeniricArray<string> = [] = ['Mr X', 'Mr. Y',];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GeniricArray<boolean> = [true, false, true];

  const user: GeniricArray<{ name: string, age: number }> = [
    {
      name: 'Mezba',
      age: 100,
    },
    {
      name: 'Zhankar Vai',
      age: 110,
    },

  ]

  //Generic Tuple Example

  type GenericTuple<X, Y> = [X, Y]

  const Manush: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];
  const userWithId: GenericTuple<number, { name: string, email: string }> = [1502910201055, { name: 'Persian', email: 'abc@gmail.com' }]









}


