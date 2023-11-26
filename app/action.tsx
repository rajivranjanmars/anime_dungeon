"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";


export const fetchAnime = async (page:number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`);
    const data = await res.json();
    return data.map((anime: AnimeProp, index: number) => (
          <AnimeCard key={anime.id} anime={anime} index={index} />
        ));
}
