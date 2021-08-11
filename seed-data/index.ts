import { bikeRides } from "./data";
export async function addSeedData(ks: any) {
  const keystone = ks.keystone || ks;

  const { BikeRide } = keystone.lists;

  BikeRide.createMany({ data: bikeRides });
}
