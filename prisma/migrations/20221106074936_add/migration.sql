/*
  Warnings:

  - Added the required column `candidate` to the `Candidates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Candidates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidates" ADD COLUMN     "candidate" VARCHAR(255) NOT NULL,
ADD COLUMN     "district" INTEGER NOT NULL;
