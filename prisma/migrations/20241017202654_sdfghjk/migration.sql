/*
  Warnings:

  - Made the column `productsId` on table `Delivery` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type_ProductsId` on table `Delivery` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_productsId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_type_ProductsId_fkey";

-- AlterTable
ALTER TABLE "Delivery" ALTER COLUMN "productsId" SET NOT NULL,
ALTER COLUMN "type_ProductsId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_type_ProductsId_fkey" FOREIGN KEY ("type_ProductsId") REFERENCES "Type_Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
