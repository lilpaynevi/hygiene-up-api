-- CreateTable
CREATE TABLE "Cleaning" (
    "id" TEXT NOT NULL,
    "data" JSONB[],
    "restaurantId" TEXT NOT NULL,
    "zonesId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cleaning_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cleaning" ADD CONSTRAINT "Cleaning_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cleaning" ADD CONSTRAINT "Cleaning_zonesId_fkey" FOREIGN KEY ("zonesId") REFERENCES "Zones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
