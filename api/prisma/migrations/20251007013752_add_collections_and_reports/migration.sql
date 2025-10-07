-- CreateTable
CREATE TABLE "waste_types" (
    "waste_type_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "waste_types_pkey" PRIMARY KEY ("waste_type_id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "collection_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "waste_type_id" UUID NOT NULL,
    "date_scheduled" TIMESTAMP(3) NOT NULL,
    "date_collected" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "weight_kg" DOUBLE PRECISION DEFAULT 0,
    "points_earned" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("collection_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waste_types_name_key" ON "waste_types"("name");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_waste_type_id_fkey" FOREIGN KEY ("waste_type_id") REFERENCES "waste_types"("waste_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
