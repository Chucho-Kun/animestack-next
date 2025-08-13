-- CreateTable
CREATE TABLE "public"."Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Animes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameUrl" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL,

    CONSTRAINT "Animes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ranking" (
    "userId" INTEGER NOT NULL,
    "animeId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "followedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("userId","animeId")
);

-- CreateTable
CREATE TABLE "public"."_AnimesToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AnimesToUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AnimesToUsers_B_index" ON "public"."_AnimesToUsers"("B");

-- AddForeignKey
ALTER TABLE "public"."Ranking" ADD CONSTRAINT "Ranking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Ranking" ADD CONSTRAINT "Ranking_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "public"."Animes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AnimesToUsers" ADD CONSTRAINT "_AnimesToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Animes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AnimesToUsers" ADD CONSTRAINT "_AnimesToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
