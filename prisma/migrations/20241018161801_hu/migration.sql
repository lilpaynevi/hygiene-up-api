/*
  Warnings:

  - Added the required column `productsId` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_ProductsId` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Delivery" ADD COLUMN     "productsId" INTEGER NOT NULL,
ADD COLUMN     "type_ProductsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_type_ProductsId_fkey" FOREIGN KEY ("type_ProductsId") REFERENCES "Type_Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
