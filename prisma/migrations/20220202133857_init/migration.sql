/*
  Warnings:

  - You are about to drop the column `registerAt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `registerAt`,
    ADD COLUMN `register_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
