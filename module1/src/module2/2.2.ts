{

  //type assertion

  let anything: any;

  anything = 'Next Level Web Development';
  anything = 156985;

  (anything as string)

  anything = false;


  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof (value) === 'string') {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue} grame`;
    }
    else if (typeof (value) === 'number') {
      return value * 1000;
    }

  }

  const result1 = kgToGm(10) as number;
  const result2 = kgToGm("3") as string;
  console.log(result2);


  type CustomeError = {
    message: string
  }

  try {

  } catch (error) {
    console.log((error as CustomeError).message);
  }









}