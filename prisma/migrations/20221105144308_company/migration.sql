-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "collaborator" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
