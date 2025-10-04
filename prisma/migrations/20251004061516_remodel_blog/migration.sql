/*
  Warnings:

  - You are about to drop the column `adminId` on the `Blog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_adminId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "adminId";
