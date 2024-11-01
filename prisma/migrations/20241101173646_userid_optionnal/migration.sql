-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_userId_fkey";

-- AlterTable
ALTER TABLE "Delivery" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
