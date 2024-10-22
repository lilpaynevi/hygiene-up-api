-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_suppliersId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_type_ProductsId_fkey";

-- AlterTable
ALTER TABLE "Delivery" ALTER COLUMN "suppliersId" DROP NOT NULL,
ALTER COLUMN "type_ProductsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_suppliersId_fkey" FOREIGN KEY ("suppliersId") REFERENCES "Suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_type_ProductsId_fkey" FOREIGN KEY ("type_ProductsId") REFERENCES "Type_Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
