// https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

import {
  deleteAllExcuses,
  createManyExcuses,
  prisma,
} from "../src/services/prismaClient";
import { excusesData } from "../src/assets/excusesData";

const seedDB = async () => {
  console.log("*** start seeding DB ***");

  console.log("1. delete existing data ...");
  await deleteAllExcuses();

  console.log("2. creating new excuses in DB ...");
  await createManyExcuses(excusesData);

  console.log("*** finish seeding DB ***");
};

seedDB()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
