import { PrismaClient } from '@prisma/client';
import { typeEquipment, typeProduct } from "../constants/constants"
const prisma = new PrismaClient();

async function restaurants() {
  const users = await prisma.restaurant.create({
    data: {
      username: "fefef",
      password: "fefefe",
      User:{
        connect:{
          id: "70e8f941-928b-4f3c-84ee-a04ea5be9d96"
        }
      }
    }
  })

  return users;
}

async function users() {
  const users = await prisma.restaurant.create({
    data: {
      username: 'lilp',
      password: 'lilpayne12'
    }
  })

  return users;
}

async function type_equipment() {
  const total = await prisma.type_Equipment.findMany({})


  const typeEquipments = await Promise.all(
    typeEquipment.map(async (it) => {
      return await prisma.type_Equipment.create({
        data: {
          max: it.max,
          min: it.min,
          between_desc: it.between_desc,
          title: it.title
        },
      });
    })
  );

  return total.length < 1 ? typeEquipments : 'deja fait';
}

async function type_products() {
  const total = await prisma.type_Products.findMany({})

  const typeProducts = await Promise.all(
    typeProduct.map(async (it) => {
      return await prisma.type_Products.create({
        data: {
          name: it.name,
          description: it.description
        },
      });
    })
  );

  return total.length < 1 ?  typeProducts : 'deja fait';

}

async function byDefault() {
  type_equipment()
  type_products()
}

async function main() {
  byDefault();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
