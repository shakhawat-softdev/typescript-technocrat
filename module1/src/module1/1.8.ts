{

  //Destructuring

  //Object Destructuring
  const user = {
    id: 345,
    name: {
      firstName: 'Mezbaul',
      middleName: 'Abaden',
      lastName: 'Persian'
    },
    contractNo: "01517189480",
    address: 'Ugannda'
  }

  const { contractNo,
    name: { middleName }

  } = user;

  const myFriends = ['Chandler', 'joey', 'ross', 'rachel',];
  const [, , bestFriend, ...rest] = myFriends;

}