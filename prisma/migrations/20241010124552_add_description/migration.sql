/*
  Warnings:

  - Added the required column `description` to the `Type_Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Type_Products" ADD COLUMN     "description" TEXT NOT NULL;
