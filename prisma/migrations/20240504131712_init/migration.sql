-- CreateTable
CREATE TABLE "Excuse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "http_code" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
