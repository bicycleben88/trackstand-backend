import { bikeRides } from "./data";
export async function addSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  //   const { lists } = keystone;

  //   console.log(lists);
  const { BikeRide } = keystone.lists;

  BikeRide.createMany({ data: bikeRides });
  //   console.log(bikeRide);
  //   for (let ride of bikeRides) {
  //     bikeRide.create(ride);
  //   }
}
