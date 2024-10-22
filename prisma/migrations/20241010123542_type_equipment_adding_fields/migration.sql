/*
  Warnings:

  - Added the required column `between_desc` to the `Type_Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max` to the `Type_Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min` to the `Type_Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Type_Equipment" ADD COLUMN     "between_desc" TEXT NOT NULL,
ADD COLUMN     "max" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "min" DOUBLE PRECISION NOT NULL;
