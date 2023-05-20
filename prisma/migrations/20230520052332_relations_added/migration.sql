/*
  Warnings:

  - You are about to drop the `_PostToRecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostToRecipe" DROP CONSTRAINT "_PostToRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToRecipe" DROP CONSTRAINT "_PostToRecipe_B_fkey";

-- DropTable
DROP TABLE "_PostToRecipe";

-- CreateTable
CREATE TABLE "__PostToRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__PostToRecipe_AB_unique" ON "__PostToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "__PostToRecipe_B_index" ON "__PostToRecipe"("B");

-- AddForeignKey
ALTER TABLE "__PostToRecipe" ADD CONSTRAINT "__PostToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__PostToRecipe" ADD CONSTRAINT "__PostToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
