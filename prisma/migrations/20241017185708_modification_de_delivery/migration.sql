/*
  Warnings:

  - You are about to drop the column `name` on the `Delivery` table. All the data in the column will be lost.
  - Added the required column `comments` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TYPE_CONFORMITY" AS ENUM ('QUANTITY_NO_CONFORMITY', 'DLC_SHORT', 'DLC_DEPASSED', 'ABS_NUMBER_AGREMENT', 'PACKAGE_PERCE', 'PACKAGE_ENDOMMAGED', 'DENREE_IMPROPRES', 'TEMP_CAR_NO_CONFORMITY', 'CAR_IMPROPRE', 'TEMP_DELIVERY_NO_CONFORMITY');

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_productsId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_type_ProductsId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "name",
ADD COLUMN     "comments" TEXT NOT NULL,
ADD COLUMN     "conformity" "TYPE_CONFORMITY",
ADD COLUMN     "number_lot" TEXT,
ALTER COLUMN "productsId" DROP NOT NULL,
ALTER COLUMN "type_ProductsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_type_ProductsId_fkey" FOREIGN KEY ("type_ProductsId") REFERENCES "Type_Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
