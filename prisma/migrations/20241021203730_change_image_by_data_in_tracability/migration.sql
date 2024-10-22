/*
  Warnings:

  - You are about to drop the column `image` on the `Tracability` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tracability" DROP COLUMN "image",
ADD COLUMN     "data" JSONB[];
