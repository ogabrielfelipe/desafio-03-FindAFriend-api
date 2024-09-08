/*
  Warnings:

  - Added the required column `city` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `organizations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `organizations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "city" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
