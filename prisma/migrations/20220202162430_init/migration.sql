/*
  Warnings:

  - Added the required column `profile_photo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `profile_photo` VARCHAR(191) NOT NULL;
