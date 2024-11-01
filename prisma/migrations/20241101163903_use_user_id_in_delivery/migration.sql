/*
  Warnings:

  - Added the required column `userId` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Delivery" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
