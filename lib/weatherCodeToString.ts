const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "01d",
    label: "Clear sky",
  },

  1: {
    icon: "02d",
    label: "Mainly clear",
  },

  2: {
    icon: "03d",
    label: "Partly cloudy",
  },

  3: {
    icon: "04d",
    label: "Broken Clouds",
  },

  45: {
    icon: "50d",
    label: "Fog",
  },
  48: {
    icon: "50d",
    label: "Deposit rime fog",
  },

  51: {
    icon: "09d",
    label: "Drizzle",
  },

  53: {
    icon: "09d",
    label: "Drizzle",
  },

  55: {
    icon: "09d",
    label: "Drizzle",
  },

  56: {
    icon: "09d",
    label: "Freezing Drizzle",
  },

  57: {
    icon: "09d",
    label: "Freezing Drizzle",
  },

  61: {
    icon: "10d",
    label: "Rain",
  },

  63: {
    icon: "10d",
    label: "Rain",
  },

  65: {
    icon: "10d",
    label: "Rain",
  },

  66: {
    icon: "13d",
    label: "Freezing Rain",
  },

  67: {
    icon: "13d",
    label: "Freezing Rain",
  },

  71: {
    icon: "13d",
    label: "Snow",
  },

  73: {
    icon: "13d",
    label: "Snow",
  },

  75: {
    icon: "13d",
    label: "Snow",
  },

  77: {
    icon: "13d",
    label: "Snow Grains",
  },

  80: {
    icon: "09d",
    label: "Rain Showers",
  },

  81: {
    icon: "09d",
    label: "Rain Showers",
  },

  82: {
    icon: "09d",
    label: "Rain Showers",
  },

  85: {
    icon: "13d",
    label: "Snow Showers",
  },

  86: {
    icon: "13d",
    label: "Snow Showers",
  },

  95: {
    icon: "11d",
    label: "Thunderstorm",
  },

  96: {
    icon: "11d",
    label: "Thunderstorm",
  },

  99: {
    icon: "11d",
    label: "Thunderstorm",
  },
};

export default weatherCodeToString;
