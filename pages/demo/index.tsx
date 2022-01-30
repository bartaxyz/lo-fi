import React, { Suspense, useEffect, useState } from "react";
import {
  Button,
  Card,
  Image,
  Loading,
  Progress,
  styled,
  Text,
} from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import { PlayerScene } from "../../scenes/PlayerScene/PlayerScene";
import { MeshGradientScene } from "../../scenes/MeshGradientScene/MeshGradientScene";
import { useMusicPlayer } from "../../src/contexts/MusicPlayer";
import { songs } from "../../music/data";
import { Html, useGLTF, useProgress, useTexture } from "@react-three/drei";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const [loaded, setLoaded] = useState(0);
  const musicPlayer = useMusicPlayer();

  useEffect(() => {
    musicPlayer.setCurrentSong(songs[0]);
  }, []);

  const enable = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    const loadingTimeout = setTimeout(() => {
      setLoaded(Math.min(100, loaded + Math.random() * 10));

      if (loaded >= 100) {
        clearInterval(loadingTimeout);
        setLoading(false);
        setEnabled(true);
      }
    }, 25);

    return () => clearTimeout(loadingTimeout);
  }, [loading, loaded]);

  return (
    <React.Fragment>
      {/* <div>
        {songs.map((song) => (
          <Card key={song.name}>
            <img
              style={{ width: 200, height: 200, borderRadius: 16 }}
              src={song.cover}
            />
            <Text>{song.name}</Text>
          </Card>
        ))}
      </div> */}

      <CanvasContainer>
        {!enabled && (
          <CenteredControls>
            <Button
              css={{
                zIndex: 1,
                pointerEvents: "all",
              }}
              color="primary"
              rounded={true}
              onClick={enable}
              disabled={loading}
              icon={
                loading ? (
                  <Loading color="white" size="sm" type="spinner" />
                ) : null
              }
            >
              {loading ? (
                <React.Fragment>
                  {Math.floor(loaded)}% Loaded
                  <Progress color="primary" />
                </React.Fragment>
              ) : (
                "Play"
              )}
            </Button>
          </CenteredControls>
        )}

        <StyledCanvas
          shadows={true}
          gl={{ antialias: false }}
          dpr={
            typeof window === "undefined"
              ? 1
              : Math.max(window.devicePixelRatio ?? 1, 2)
          }
        >
          <Suspense fallback={null}>
            {enabled ? <PlayerScene /> : <MeshGradientScene />}
          </Suspense>
        </StyledCanvas>
      </CanvasContainer>
    </React.Fragment>
  );
};

const CanvasContainer = styled("div", {
  padding: "$8",
  height: "100%",
});

const CenteredControls = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  pointerEvents: "none",
});

const StyledCanvas = styled(Canvas, {
  position: "absolute",
  height: "100%",
  top: 0,
  left: 0,
  background: "$accents1",
  borderRadius: "$base",
});
