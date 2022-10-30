-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "collaborator" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "salary" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
