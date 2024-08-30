-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "linkTemporario" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "base64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);
