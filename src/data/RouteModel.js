export const getTodayId = () => {
  const jsDay = new Date().getDay();
  const map = { 0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
  return map[jsDay];
};

export const arrivalRoutesByDay = {
  1: {
    day: 'Monday',
    title: 'Johar Town → UOL (Via DHA & Township)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Township', lat: 31.4504, lng: 74.2906 },
      { name: 'Thokar Niaz Baig', lat: 31.4803, lng: 74.275 },
      { name: 'Bhoptian Chowk', lat: 31.49, lng: 74.26 },
      { name: 'DHA Rehbar', lat: 31.43, lng: 74.24 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  2: {
    day: 'Tuesday',
    title: 'Johar Town → UOL (Via Valencia)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Allama Iqbal Town', lat: 31.51, lng: 74.3 },
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Wapda Town', lat: 31.43, lng: 74.27 },
      { name: 'Valencia', lat: 31.4, lng: 74.26 },
      { name: 'Thokar Niaz Baig', lat: 31.4803, lng: 74.275 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  3: {
    day: 'Wednesday',
    title: 'Johar Town → UOL (Canal Route)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Expo Center', lat: 31.48, lng: 74.32 },
      { name: 'Canal Road', lat: 31.5, lng: 74.33 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  4: {
    day: 'Thursday',
    title: 'Johar Town → UOL (Direct)',
    arrival: '8:00 AM',
    busNo: 'UOL-07',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'Thokar Niaz Baig', lat: 31.4803, lng: 74.275 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  5: null,

  6: {
    day: 'Saturday',
    title: 'Weekend Shuttle',
    arrival: '9:00 AM',
    busNo: 'UOL-Weekend',
    stops: [
      { name: 'Johar Town', lat: 31.46, lng: 74.28 },
      { name: 'UOL Campus', lat: 31.36, lng: 74.18 },
    ],
  },

  7: null,
};