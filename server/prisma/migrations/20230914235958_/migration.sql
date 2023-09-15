/*
  Warnings:

  - You are about to drop the column `img` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `img`,
    ADD COLUMN `desc` VARCHAR(191) NULL;
