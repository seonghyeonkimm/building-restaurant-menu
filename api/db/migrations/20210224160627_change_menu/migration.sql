/*
  Warnings:

  - You are about to drop the column `date` on the `Menu` table. All the data in the column will be lost.
  - Added the required column `title` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Menu.date_unique";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "date",
ADD COLUMN     "title" TEXT NOT NULL;
