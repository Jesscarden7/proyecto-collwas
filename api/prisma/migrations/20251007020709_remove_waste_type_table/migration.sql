/*
  Warnings:

  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `waste_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Collection" DROP CONSTRAINT "Collection_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Collection" DROP CONSTRAINT "Collection_waste_type_id_fkey";

-- DropTable
DROP TABLE "public"."Collection";

-- DropTable
DROP TABLE "public"."waste_types";

-- CreateTable
CREATE TABLE "collections" (
    "collection_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "waste_type_id" TEXT NOT NULL,
    "date_scheduled" TIMESTAMP(3) NOT NULL,
    "date_collected" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "weight_kg" DOUBLE PRECISION DEFAULT 0,
    "points_earned" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("collection_id")
);

-- AddForeignKey
ALTER TABLE "collections" ADD CONSTRAINT "collections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
