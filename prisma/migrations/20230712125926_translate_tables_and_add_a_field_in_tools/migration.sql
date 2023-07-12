/*
  Warnings:

  - You are about to drop the `tb_friends` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_tools` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_id_amigo_fkey`;

-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_id_ferramenta_fkey`;

-- DropTable
DROP TABLE `tb_friends`;

-- DropTable
DROP TABLE `tb_tools`;

-- DropTable
DROP TABLE `testes`;

-- CreateTable
CREATE TABLE `tb_amigos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_amigos_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_ferramentas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `emprestavel` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_id_amigo_fkey` FOREIGN KEY (`id_amigo`) REFERENCES `tb_amigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_id_ferramenta_fkey` FOREIGN KEY (`id_ferramenta`) REFERENCES `tb_ferramentas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
