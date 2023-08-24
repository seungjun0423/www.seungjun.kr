/*
  Warnings:

  - You are about to drop the column `email` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Admin_email_key` ON `Admin`;

-- AlterTable
ALTER TABLE `Admin` DROP COLUMN `email`,
    DROP COLUMN `password`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
