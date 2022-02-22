/*
  Warnings:

  - You are about to drop the `_categorytouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytouser` DROP FOREIGN KEY `_categorytouser_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_categorytouser` DROP FOREIGN KEY `_categorytouser_ibfk_2`;

-- DropTable
DROP TABLE `_categorytouser`;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_username_fkey` FOREIGN KEY (`username`) REFERENCES `User`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
