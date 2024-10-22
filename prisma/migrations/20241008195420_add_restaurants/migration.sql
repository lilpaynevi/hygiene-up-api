-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "identifiant" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Temperature" (
    "id" SERIAL NOT NULL,
    "data" JSONB[],

    CONSTRAINT "Temperature_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_identifiant_key" ON "Restaurant"("identifiant");
