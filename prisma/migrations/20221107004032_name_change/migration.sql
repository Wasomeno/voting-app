/*
  Warnings:

  - You are about to drop the `Candidates` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Candidates";

-- CreateTable
CREATE TABLE "FilteredCandidates" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "candidate" VARCHAR(255) NOT NULL,
    "district" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FilteredCandidates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinalCandidates" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "district" INTEGER NOT NULL,
    "votes" INTEGER NOT NULL,

    CONSTRAINT "FinalCandidates_pkey" PRIMARY KEY ("id")
);
