// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const category1 = await prisma.category.upsert({
    where: { name: 'Villa' },
    update: {},
    create: {
      name: 'Villa'
    },
  });

  const category2 = await prisma.category.upsert({
    where: { name: 'Apartments' },
    update: {},
    create: {
      name: 'Apartments'
    },
  });

  const category3 = await prisma.category.upsert({
    where: { name: 'Office' },
    update: {},
    create: {
      name: 'Office'
    },
  });
  console.log({ category3, category2, category1 });

  // CITIES
  const city1 = await prisma.city.upsert({
    where: { name: 'Dubai' },
    update: {},
    create: {
      name: 'Dubai'
    },
  });
  const city2 = await prisma.city.upsert({
    where: { name: 'Abu dhabi' },
    update: {},
    create: {
      name: 'Abu dhabi'
    },
  });
  const city3 = await prisma.city.upsert({
    where: { name: 'Sharjah' },
    update: {},
    create: {
      name: 'Sharjah'
    },
  });
  // CITIES

  // LOCATIONS
  const location1 = await prisma.location.upsert({
    where: { name: 'Al quoz' },
    update: {},
    create: {
      name: 'Al Quoz',
      cityId: city1.id,
      lat: "25.5004",
      long: "26.9004",
    },
  });

  const location2 = await prisma.location.upsert({
    where: { name: 'Al Barsha' },
    update: {},
    create: {
      name: 'Al Barsha',
      cityId: city1.id,
      lat: "25.3004",
      long: "26.2004",
    },
  });

  const location3 = await prisma.location.upsert({
    where: { name: 'Karama' },
    update: {},
    create: {
      name: 'Karama',
      cityId: city1.id,
      lat: "25.6004",
      long: "26.6004",
    },
  });
  // LOCATIONS

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
