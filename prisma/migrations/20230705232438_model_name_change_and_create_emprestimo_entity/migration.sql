-- CreateTable
CREATE TABLE `tb_emprestimos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_amigo` INTEGER NOT NULL,
    `id_ferramenta` INTEGER NOT NULL,
    `data_emprestimo` DATETIME(3) NOT NULL,
    `data_devolucao` DATETIME(3) NOT NULL,
    `devolvido` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_id_amigo_fkey` FOREIGN KEY (`id_amigo`) REFERENCES `tb_amigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_emprestimos` ADD CONSTRAINT `tb_emprestimos_id_ferramenta_fkey` FOREIGN KEY (`id_ferramenta`) REFERENCES `tb_ferramentas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
