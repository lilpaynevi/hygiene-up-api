/*
  Warnings:

  - You are about to drop the column `userId` on the `Tracability` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tracability" DROP CONSTRAINT "Tracability_userId_fkey";

-- AlterTable
ALTER TABLE "Tracability" DROP COLUMN "userId";
