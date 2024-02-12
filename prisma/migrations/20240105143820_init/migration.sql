-- CreateTable
CREATE TABLE "Catergoy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Catergoy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Catergoy_name_key" ON "Catergoy"("name");
