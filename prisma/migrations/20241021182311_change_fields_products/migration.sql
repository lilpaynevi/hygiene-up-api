/*
  Warnings:

  - You are about to drop the column `date_dlc` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "date_dlc",
ADD COLUMN     "quantityDLC" INTEGER,
ADD COLUMN     "typeQuantityDLC" TEXT;
