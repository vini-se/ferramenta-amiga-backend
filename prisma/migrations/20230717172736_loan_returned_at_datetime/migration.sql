/*
  Warnings:

  - Changed the type of `devolvido_em` on the `tb_emprestimos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `tb_emprestimos` DROP COLUMN `devolvido_em`,
    ADD COLUMN `devolvido_em` DATETIME(3) NOT NULL;
