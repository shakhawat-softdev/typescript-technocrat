{

  //Union types

  // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
  // type FullStackDeveloper = 'fronded' | 'ExpertDeveloper';
  // type Developer = FrontendDeveloper | FullStackDeveloper;

  // const newDeveloper: Developer = 'juniorDeveloper';


  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: 'male' | 'female';
  //   bloodGroup: 'O+' | 'a+' | 'ab+';
  // }

  // const user1: User = {
  //   name: "persian",
  //   gender: 'female',
  //   bloodGroup: 'a+',
  // }


  type FrontendDeveloper = {
    skills: string[],
    designation1: `Frontend developer`,
  }
  type BackendDeveloper = {
    skills: string[],
    designation2: `Backend developer`,
  }

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
  
  const FullStackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'CSS', 'JS'],
    designation1: `Frontend developer`,
    designation2: `Backend developer`,
  }














}