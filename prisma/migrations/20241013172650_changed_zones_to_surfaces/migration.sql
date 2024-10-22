/*
  Warnings:

  - The primary key for the `Surfaces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Surfaces` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Surfaces` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Surfaces` table. All the data in the column will be lost.
  - The `id` column on the `Surfaces` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Zones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `surfaceId` on the `Zones` table. All the data in the column will be lost.
  - You are about to drop the column `zone` on the `Zones` table. All the data in the column will be lost.
  - Added the required column `surface` to the `Surfaces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zoneId` to the `Surfaces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Zones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Zones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Zones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Surfaces" DROP CONSTRAINT "Surfaces_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Zones" DROP CONSTRAINT "Zones_surfaceId_fkey";

-- AlterTable
ALTER TABLE "Surfaces" DROP CONSTRAINT "Surfaces_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "surface" TEXT NOT NULL,
ADD COLUMN     "zoneId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "restaurantId" DROP NOT NULL,
ADD CONSTRAINT "Surfaces_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Zones" DROP CONSTRAINT "Zones_pkey",
DROP COLUMN "surfaceId",
DROP COLUMN "zone",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Zones_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Zones_id_seq";

-- AddForeignKey
ALTER TABLE "Zones" ADD CONSTRAINT "Zones_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surfaces" ADD CONSTRAINT "Surfaces_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surfaces" ADD CONSTRAINT "Surfaces_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
