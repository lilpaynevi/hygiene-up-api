/*
  Warnings:

  - You are about to drop the column `identifiant` on the `Restaurant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Equipments" DROP CONSTRAINT "Equipments_restaurantId_fkey";

-- DropIndex
DROP INDEX "Restaurant_identifiant_key";

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "identifiant",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_username_key" ON "Restaurant"("username");

-- AddForeignKey
ALTER TABLE "Equipments" ADD CONSTRAINT "Equipments_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
