export interface Song {
  name: string;
  artist: string;
  file: string;
  cover: string;
}

export const songs: Song[] = [
  {
    name: "Good Things Take Time",
    artist: "Ondřej Bárta",
    file: "/music/sound/OndrejBarta-GoodThingsTakeTime.mp3",
    cover: "/music/covers/OndrejBarta-GoodThingsTakeTime.png",
  },
];
