{

  //learning function
  // Normal Function
  //Arrow Function

  //Normal Function
  function add(a: number, b: number = 50): number {
    return a + b;
  };

  add(10, 10)

  //arrow Function
  const addArrow = (a: number, b: number = 50): number => {
    return a + b;
  }

  addArrow(30, 40)

  //object ==> Function => method

  const poorUser = {
    name: 'Mezba',
    balance: 0,
    addBalance(balanceEx: number): string {
      return `my new balance is ${this.balance} + ${balanceEx}`;
    }
  }

  //map types

  const arr: number[] = [10, 20, 30, 40, 50];

  const sqrResult: number[] = arr.map((item: number): number => item * item)
}