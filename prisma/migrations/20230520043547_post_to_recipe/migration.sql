-- CreateTable
CREATE TABLE "_PostToRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToRecipe_AB_unique" ON "_PostToRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToRecipe_B_index" ON "_PostToRecipe"("B");

-- AddForeignKey
ALTER TABLE "_PostToRecipe" ADD CONSTRAINT "_PostToRecipe_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToRecipe" ADD CONSTRAINT "_PostToRecipe_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
