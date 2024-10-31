/*
  Warnings:

  - The primary key for the `Tracability` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Tracability" DROP CONSTRAINT "Tracability_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tracability_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tracability_id_seq";
