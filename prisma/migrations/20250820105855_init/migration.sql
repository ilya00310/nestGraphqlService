-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "work" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
