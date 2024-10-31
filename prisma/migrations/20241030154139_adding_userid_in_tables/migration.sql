/*
  Warnings:

  - Added the required column `userId` to the `Cleaning` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cleaning" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "disabledAt" TIMESTAMP(3),
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Temperature" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Tracability" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Tracability" ADD CONSTRAINT "Tracability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Temperature" ADD CONSTRAINT "Temperature_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cleaning" ADD CONSTRAINT "Cleaning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
