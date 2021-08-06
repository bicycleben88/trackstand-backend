function createDate() {
  let today = new Date();
  return today.toDateString();
}

export const bikeRides = [
  {
    data: {
      date: createDate(),
      miles: Math.floor(Math.random() * 100),
      hours: Math.floor(Math.random() * 5),
      minutes: Math.floor(Math.random() * 60),
    },
  },
];
