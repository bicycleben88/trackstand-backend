import { bikeRides } from "./data";
export async function addSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  console.log(keystone.prisma);

  for (let bikeRide of bikeRides) {
    console.log(bikeRide);
  }
  //   const adapter = keystone.adapter?.prisma || keystone.adapter;

  //   console.log(adapter);
  //   console.log(`inserting ${bikeRides.length} bike rides!`);

  //   const { prisma } = adapter;

  //   console.log(prisma);
}
