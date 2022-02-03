import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactAudioPlayer from "react-audio-player";
import { Song } from "../../music/data";

export interface MusicPlayerContext {
  currentSong?: Song;
  setCurrentSong: (song: Song) => void;
  audioContext?: HTMLAudioElement;
  setAudioContext: (audioContext: HTMLAudioElement) => void;
  isPlaying?: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  play: () => void;
  pause: () => void;
}

export const MusicPlayerContext = createContext<MusicPlayerContext>({
  setCurrentSong: () => {},
  setAudioContext: () => {},
  setIsPlaying: () => {},
  play: () => {},
  pause: () => {},
});

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
};

export interface MusicPlayerProviderProps extends Partial<MusicPlayerContext> {}

export const MusicPlayer: React.FC = () => {
  const { currentSong, audioContext, setAudioContext, setIsPlaying } =
    useMusicPlayer();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>();

  useEffect(() => {
    if (!audioElement) return;

    setAudioContext(audioElement);

    const start = () => setIsPlaying(true);
    const stop = () => setIsPlaying(false);

    audioElement.addEventListener("play", start);
    audioElement.addEventListener("ended", stop);
    audioElement.addEventListener("pause", stop);

    return () => {
      audioElement.removeEventListener("play", start);
      audioElement.removeEventListener("ended", stop);
      audioElement.removeEventListener("pause", stop);
    };
  }, [audioElement]);

  if (!currentSong) return null;

  return (
    <ReactAudioPlayer
      ref={(el) => {
        if (!el || !el.audioEl || !el.audioEl.current) return;
        setAudioElement(el.audioEl.current);
      }}
      src={currentSong.file}
      autoPlay={true}
      controls={true}
      style={{ display: "none" }}
    />
  );
};

export const MusicPlayerProvider: React.FC<MusicPlayerProviderProps> = ({
  children,
}) => {
  const [currentSong, setCurrentSong] = useState<Song>();
  const [audioContext, setAudioContext] = useState<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    if (audioContext) audioContext.play();
    setIsPlaying(true);
  };

  const pause = () => {
    if (audioContext) audioContext.pause();
    setIsPlaying(false);
  }

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        audioContext,
        setAudioContext,
        isPlaying,
        setIsPlaying,
        play,
        pause,
      }}
    >
      <React.Fragment>
        <MusicPlayer />
        {children}
      </React.Fragment>
    </MusicPlayerContext.Provider>
  );
};
