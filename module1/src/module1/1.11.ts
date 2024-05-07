{

  //ternary operator || optional chining ||  nullish coalesching operator

  const age: number = 19;

  // if (age >= 18) {
  //   console.log('Adult');

  // } else {
  //   console.log('Not Adult');

  // }

  // const isAdult = (age > 18) ? 'adult' : 'not adult';
  // console.log({ isAdult });

  // Nullish coalesching operator
  // null and undefined --> Desition making


  const isAuthenticated = '';
  const result = isAuthenticated ?? 'Guest';
  const result2 = isAuthenticated ? isAuthenticated : 'Guest'


  // console.log({ result }, {result2});

  type User = {
    name: string;
    address: {
      city: string,
      road: string,
      presentAddress: string,
      permenantAddress?: string,
    }
  }

  const user: User = {
    name: 'Persian',

    address: {
      city: 'Chittagong',
      road: 'Awesome Road',
      presentAddress: 'Ctg town'
    }

  }


  const permenantAddress = user?.address?.permenantAddress ?? "No Permanant Address"
  console.log({ permenantAddress });
















}