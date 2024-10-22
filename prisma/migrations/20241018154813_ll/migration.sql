/*
  Warnings:

  - You are about to drop the column `suppliersId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `type_ProductsId` on the `Delivery` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_productsId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_suppliersId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_type_ProductsId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "suppliersId",
DROP COLUMN "type_ProductsId";
