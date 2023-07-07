-- CreateTable
CREATE TABLE `tb_ferramentas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `custo_aquisicao` INTEGER NOT NULL,

    UNIQUE INDEX `tb_ferramentas_custo_aquisicao_key`(`custo_aquisicao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
