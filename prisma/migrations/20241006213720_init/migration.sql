-- CreateEnum
CREATE TYPE "Type_Products_Value" AS ENUM ('QUANTITE', 'LITRES', 'KILOGRAMMES', 'GRAMMES', 'CENTILITRES', 'MILILITRES');

-- CreateEnum
CREATE TYPE "MODULES" AS ENUM ('TEMPERATURE', 'OIL', 'TRACABILITY', 'FREEZING', 'DELIVERY', 'MAINTAIN_TEMPERATURE', 'MANAGEMENT_OIL', 'CLEANING', 'PRINTER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type_Equipment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Type_Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipments" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "linkTo" "MODULES" NOT NULL,
    "type_EquipmentId" INTEGER,

    CONSTRAINT "Equipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staffers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Staffers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Suppliers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type_ProductsId" INTEGER NOT NULL,
    "isDLC" BOOLEAN,
    "date_dlc" TIMESTAMP(3),
    "isFinished" BOOLEAN,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type_Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinishedIngredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "type_value" "Type_Products_Value" NOT NULL,

    CONSTRAINT "FinishedIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductFinishedIngredient" (
    "productId" INTEGER NOT NULL,
    "finishedIngredientId" INTEGER NOT NULL,

    CONSTRAINT "ProductFinishedIngredient_pkey" PRIMARY KEY ("productId","finishedIngredientId")
);

-- CreateTable
CREATE TABLE "Surfaces" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Surfaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zones" (
    "id" SERIAL NOT NULL,
    "zone" TEXT NOT NULL,
    "surfaceId" TEXT NOT NULL,

    CONSTRAINT "Zones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductFinishedIngredients" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductFinishedIngredients_AB_unique" ON "_ProductFinishedIngredients"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductFinishedIngredients_B_index" ON "_ProductFinishedIngredients"("B");

-- AddForeignKey
ALTER TABLE "Equipments" ADD CONSTRAINT "Equipments_type_EquipmentId_fkey" FOREIGN KEY ("type_EquipmentId") REFERENCES "Type_Equipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_type_ProductsId_fkey" FOREIGN KEY ("type_ProductsId") REFERENCES "Type_Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFinishedIngredient" ADD CONSTRAINT "ProductFinishedIngredient_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFinishedIngredient" ADD CONSTRAINT "ProductFinishedIngredient_finishedIngredientId_fkey" FOREIGN KEY ("finishedIngredientId") REFERENCES "FinishedIngredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zones" ADD CONSTRAINT "Zones_surfaceId_fkey" FOREIGN KEY ("surfaceId") REFERENCES "Surfaces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductFinishedIngredients" ADD CONSTRAINT "_ProductFinishedIngredients_A_fkey" FOREIGN KEY ("A") REFERENCES "FinishedIngredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductFinishedIngredients" ADD CONSTRAINT "_ProductFinishedIngredients_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
