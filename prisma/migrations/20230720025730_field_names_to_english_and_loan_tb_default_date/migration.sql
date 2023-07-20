/*
  Warnings:

  - You are about to drop the `tb_amigos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_emprestimos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_ferramentas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_id_amigo_fkey`;

-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_id_ferramenta_fkey`;

-- DropTable
DROP TABLE `tb_amigos`;

-- DropTable
DROP TABLE `tb_emprestimos`;

-- DropTable
DROP TABLE `tb_ferramentas`;

-- CreateTable
CREATE TABLE `tb_friends` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_friends_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_tools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `isLoanable` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_loan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idFriend` INTEGER NOT NULL,
    `idTool` INTEGER NOT NULL,
    `loanedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateToReturn` DATETIME(3) NOT NULL,
    `returnedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_loan` ADD CONSTRAINT `tb_loan_idFriend_fkey` FOREIGN KEY (`idFriend`) REFERENCES `tb_friends`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_loan` ADD CONSTRAINT `tb_loan_idTool_fkey` FOREIGN KEY (`idTool`) REFERENCES `tb_tools`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
