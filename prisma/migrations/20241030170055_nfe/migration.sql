-- DropForeignKey
ALTER TABLE "Cleaning" DROP CONSTRAINT "Cleaning_userId_fkey";

-- AlterTable
ALTER TABLE "Cleaning" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cleaning" ADD CONSTRAINT "Cleaning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
