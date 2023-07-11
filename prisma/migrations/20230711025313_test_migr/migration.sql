/*
  Warnings:

  - You are about to drop the column `id_amigo` on the `tb_emprestimos` table. All the data in the column will be lost.
  - You are about to drop the column `id_ferramenta` on the `tb_emprestimos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `testes` table. All the data in the column will be lost.
  - Added the required column `idAmigo` to the `tb_emprestimos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFerramenta` to the `tb_emprestimos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_id_amigo_fkey`;

-- DropForeignKey
ALTER TABLE `tb_emprestimos` DROP FOREIGN KEY `tb_emprestimos_id_ferramenta_fkey`;

-- AlterTable
ALTER TABLE `tb_emprestimos` DROP COLUMN `id_amigo`,
    DROP COLUMN `id_ferramenta`,
    ADD COLUMN `idAmigo` INTEGER NOT NULL,
    ADD COLUMN `idFerramenta` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `testes` DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_idAmigo_fkey` FOREIGN KEY (`idAmigo`) REFERENCES `tb_amigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_idFerramenta_fkey` FOREIGN KEY (`idFerramenta`) REFERENCES `tb_ferramentas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
