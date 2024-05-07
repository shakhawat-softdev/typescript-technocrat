{
  // interface - generic

  interface Developer<param1, param2 = null> {
    name: string,
    computer: {
      brand: string;
      model: string;
      releseYear: number;
    },
    smartWatch: param1;
    bike?: param2;
  }

  type EmilabWatch = {

    brand: string;
    model: string,
    display: string;

  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: 'persian',
    computer: {
      brand: 'ASUS',
      model: 'X-255R',
      releseYear: 2013
    },
    smartWatch: {
      brand: 'Emilab',
      model: 'Kw^6',
      display: 'OLED',
    },

  };


  type AppleWatch = {
    brand: string;
    model: string;
    heartTracker: boolean;
    sleepTracker: boolean;
  }

  type YamahaBike = {
    model: string;
    engineCapacity: string;
  }


  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Rich-dev',
    computer: {
      brand: 'HP',
      model: 'X-25UR',
      releseYear: 2018
    },
    smartWatch: {
      brand: 'Apple Watch',
      model: 'something',
      heartTracker: true,
      sleepTracker: true,
    },
    bike: {
      model: 'Yhama',
      engineCapacity: '100'
    }
  }


















}