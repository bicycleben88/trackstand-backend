function createDate() {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();

  today = `${month}/${day}/${year}`;

  return today;
}
export const bikeRides = [
  {
    date: createDate(),
    miles: Math.floor(Math.random() * 100),
    hours: Math.floor(Math.random() * 5),
    minutes: Math.floor(Math.random() * 60),
    user: {
      name: "Ben Higginbotham",
      email: "bicycleben88@gmail.com",
      id: "ckqxy1tbb0012fx01zu0m3z41",
    },
  },
  {
    date: createDate(),
    miles: Math.floor(Math.random() * 100),
    hours: Math.floor(Math.random() * 5),
    minutes: Math.floor(Math.random() * 60),
    user: {
      name: "Ben Higginbotham",
      email: "bicycleben88@gmail.com",
      id: "ckqxy1tbb0012fx01zu0m3z41",
    },
  },
  {
    date: createDate(),
    miles: Math.floor(Math.random() * 100),
    hours: Math.floor(Math.random() * 5),
    minutes: Math.floor(Math.random() * 60),
    user: {
      name: "Ben Higginbotham",
      email: "bicycleben88@gmail.com",
      id: "ckqxy1tbb0012fx01zu0m3z41",
    },
  },
];
