/*
  Warnings:

  - You are about to drop the `Catergoy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Catergoy";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
