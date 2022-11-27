/*
  Warnings:

  - You are about to drop the column `login` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `senha` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "login",
ADD COLUMN     "email" TEXT NOT NULL,
DROP COLUMN "senha",
ADD COLUMN     "senha" INTEGER NOT NULL;
