/*
  Warnings:

  - Added the required column `restaurantId` to the `Equipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Staffers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Surfaces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Temperature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLES_USERS" AS ENUM ('OWNER', 'EDITOR', 'STAFF');

-- AlterTable
ALTER TABLE "Equipments" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Staffers" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Suppliers" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Surfaces" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Temperature" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "roles" "ROLES_USERS"[];

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Temperature" ADD CONSTRAINT "Temperature_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipments" ADD CONSTRAINT "Equipments_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staffers" ADD CONSTRAINT "Staffers_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suppliers" ADD CONSTRAINT "Suppliers_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surfaces" ADD CONSTRAINT "Surfaces_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
