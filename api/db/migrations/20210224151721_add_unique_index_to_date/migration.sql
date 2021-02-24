/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[date]` on the table `Menu`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Menu.date_unique" ON "Menu"("date");
