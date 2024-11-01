/*
  Warnings:

  - You are about to drop the column `type_ProductId` on the `Delivery` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_type_ProductId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "type_ProductId",
ALTER COLUMN "temperature" DROP NOT NULL;
