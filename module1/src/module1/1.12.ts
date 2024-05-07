{

  //Nullable Type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("There is Nothing to Search");
    }

  }

  // searchName(null)

  //Unkonown Type

  const getSpreedInMeterPerSecond = (value: unknown) => {

    if (typeof value === 'number') {
      const convertedNumber = (value * 1000) / 3600
      console.log(`The spreed is ${convertedNumber} ms^-1`);
    }
    else if (typeof value === 'string') {
      const [result, unit] = value.split(' ')
      const convertedNumber = (parseFloat(result) * 1000) / 3600
      console.log(convertedNumber);

    } else {
      console.log('Wrong Input');

    }

  }

  // getSpreedInMeterPerSecond(null)

  const throwError = (message: string): never => {
    throw new Error(message)
  }

  throwError('Mushkil se error How giya')





















}