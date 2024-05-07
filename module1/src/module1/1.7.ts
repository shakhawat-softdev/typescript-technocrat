{

  //Spread Operator
  //Rest Oerator
  //Destructuring


  //Learn spread operator
  const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
  const bros2: string[] = ['Tonmoy', 'Nahid', 'Mizan'];

  bros1.push(...bros2)

  const mentors1 = {
    typesript: 'Mezba',
    redux: 'Mirt',
    dbms: 'Mizan'
  };
  const mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    dbms: 'Mizan',
    cloud: 'Nahid'
  };

  const mentorList = {
    ...mentors1,
    ...mentors2
  };


  //Learn Rest Operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((element: string) => {
      `Hi ${element}`
    })
  };

  greetFriends('Abul', 'kabul', 'Babul')











}