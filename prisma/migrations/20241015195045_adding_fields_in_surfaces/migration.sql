/*
  Warnings:

  - Added the required column `frequencyType` to the `Surfaces` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TYPE_FREQUENCY" AS ENUM ('JOUR', 'MOIS', 'ANNEE');

-- AlterTable
ALTER TABLE "Surfaces" ADD COLUMN     "frequencyQuantity" INTEGER,
ADD COLUMN     "frequencyType" "TYPE_FREQUENCY" NOT NULL;
