/*
  Warnings:

  - You are about to drop the column `suppliersId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `type_ProductsId` on the `Delivery` table. All the data in the column will be lost.
  - Added the required column `supplierId` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_ProductId` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_suppliersId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_type_ProductsId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "suppliersId",
DROP COLUMN "type_ProductsId",
ADD COLUMN     "supplierId" INTEGER NOT NULL,
ADD COLUMN     "temperature" INTEGER NOT NULL,
ADD COLUMN     "type_ProductId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_type_ProductId_fkey" FOREIGN KEY ("type_ProductId") REFERENCES "Type_Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
