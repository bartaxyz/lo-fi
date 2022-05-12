import React, { Suspense, useEffect, useState } from "react";
import { Button, Loading, styled } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import { PlayerScene } from "../../scenes/PlayerScene/PlayerScene";
import { MeshGradientScene } from "../../scenes/MeshGradientScene/MeshGradientScene";
import {
  MusicPlayerProvider,
  useMusicPlayer,
} from "../../src/contexts/MusicPlayer";
import { songs } from "../../music/data";
import { Html, useProgress } from "@react-three/drei";
import {
  DepthOfField,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html center>
      <Button
        rounded={true}
        disabled={true}
        icon={<Loading color="white" size="sm" type="spinner" />}
      >
        {progress.toFixed(0)} % loaded
      </Button>
    </Html>
  );
};

const DemoPage = () => {
  const [enabled, setEnabled] = useState(false);
  const musicPlayer = useMusicPlayer();

  useEffect(() => {
    musicPlayer.setCurrentSong(songs[0]);
  }, []);

  const enable = () => {
    setEnabled(true);
  };

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
        {enabled ? (
          <BottomControls>
            <Button
              rounded={true}
              onClick={() => {
                if (musicPlayer.isPlaying) {
                  musicPlayer.pause();
                } else {
                  musicPlayer.play();
                }
              }}
            >
              {musicPlayer.isPlaying ? "Stop" : "Play"}
            </Button>
          </BottomControls>
        ) : (
          <CenteredControls>
            <Button
              css={{
                zIndex: 1,
                pointerEvents: "all",
              }}
              color="primary"
              rounded={true}
              onClick={enable}
            >
              Play
            </Button>
          </CenteredControls>
        )}

        <StyledCanvas
          shadows={true}
          gl={{ antialias: true }}
          dpr={
            typeof window === "undefined"
              ? 1
              : Math.max(window.devicePixelRatio ?? 1, 2)
          }
        >
          <EffectComposer>
            <Noise opacity={1} premultiply blendFunction={BlendFunction.ADD} />

            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
            />
          </EffectComposer>

          <Suspense fallback={<Loader />}>
            {enabled ? (
              <PlayerScene musicPlayer={musicPlayer} />
            ) : (
              <MeshGradientScene />
            )}
          </Suspense>
        </StyledCanvas>
      </CanvasContainer>
    </React.Fragment>
  );
};

export default () => (
  <MusicPlayerProvider>
    <DemoPage />
  </MusicPlayerProvider>
);

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

const BottomControls = styled("div", {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
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
