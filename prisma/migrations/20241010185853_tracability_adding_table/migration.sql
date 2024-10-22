-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "address" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Tracability" (
    "id" SERIAL NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tracability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tracability" ADD CONSTRAINT "Tracability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracability" ADD CONSTRAINT "Tracability_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
