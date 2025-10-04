/*
  Warnings:

  - You are about to drop the column `image` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `publishedAt` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_adminId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "image",
ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "adminId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Blog" ADD CONSTRAINT "Blog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
