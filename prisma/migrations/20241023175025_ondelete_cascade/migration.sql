-- DropForeignKey
ALTER TABLE "Surfaces" DROP CONSTRAINT "Surfaces_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Surfaces" DROP CONSTRAINT "Surfaces_zoneId_fkey";

-- AddForeignKey
ALTER TABLE "Surfaces" ADD CONSTRAINT "Surfaces_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surfaces" ADD CONSTRAINT "Surfaces_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
