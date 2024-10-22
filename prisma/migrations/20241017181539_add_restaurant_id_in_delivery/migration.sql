/*
  Warnings:

  - Added the required column `restaurantId` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suppliersId` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Delivery" ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "suppliersId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_suppliersId_fkey" FOREIGN KEY ("suppliersId") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
