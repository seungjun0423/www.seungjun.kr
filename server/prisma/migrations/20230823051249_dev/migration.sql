/*
  Warnings:

  - You are about to drop the column `subcategoryId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_subcategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `SubCategory` DROP FOREIGN KEY `SubCategory_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `subcategoryId`,
    MODIFY `img` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Admin`;

-- DropTable
DROP TABLE `SubCategory`;

-- CreateTable
CREATE TABLE `Auth` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
