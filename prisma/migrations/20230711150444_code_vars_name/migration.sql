/*
  Warnings:

  - You are about to drop the column `data_devolucao` on the `tb_emprestimos` table. All the data in the column will be lost.
  - You are about to drop the column `devolvido` on the `tb_emprestimos` table. All the data in the column will be lost.
  - You are about to drop the column `idAmigo` on the `tb_emprestimos` table. All the data in the column will be lost.
  - You are about to drop the column `idFerramenta` on the `tb_emprestimos` table. All the data in the column will be lost.
  - You are about to drop the `tb_amigos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_ferramentas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data_para_devolver` to the `tb_emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `devolvido_em` to the `tb_emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_amigo` to the `tb_emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_ferramenta` to the `tb_emprestimos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_idAmigo_fkey`;

-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_idFerramenta_fkey`;

-- AlterTable
ALTER TABLE `tb_emprestimos` DROP COLUMN `data_devolucao`,
    DROP COLUMN `devolvido`,
    DROP COLUMN `idAmigo`,
    DROP COLUMN `idFerramenta`,
    ADD COLUMN `data_para_devolver` DATETIME(3) NOT NULL,
    ADD COLUMN `devolvido_em` BOOLEAN NOT NULL,
    ADD COLUMN `id_amigo` INTEGER NOT NULL,
    ADD COLUMN `id_ferramenta` INTEGER NOT NULL;

-- DropTable
DROP TABLE `tb_amigos`;

-- DropTable
DROP TABLE `tb_ferramentas`;

-- CreateTable
CREATE TABLE `tb_friends` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_friends_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_tools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_id_amigo_fkey` FOREIGN KEY (`id_amigo`) REFERENCES `tb_friends`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_id_ferramenta_fkey` FOREIGN KEY (`id_ferramenta`) REFERENCES `tb_tools`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
