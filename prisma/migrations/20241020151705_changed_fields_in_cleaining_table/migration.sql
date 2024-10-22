/*
  Warnings:

  - You are about to drop the column `zonesId` on the `Cleaning` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cleaning" DROP CONSTRAINT "Cleaning_zonesId_fkey";

-- AlterTable
ALTER TABLE "Cleaning" DROP COLUMN "zonesId";
