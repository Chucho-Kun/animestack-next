/*
  Warnings:

  - A unique constraint covering the columns `[nameUrl]` on the table `Animes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Animes_nameUrl_key" ON "public"."Animes"("nameUrl");
