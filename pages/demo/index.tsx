import React, { useEffect, useState } from "react";
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
import { useGLTF, useTexture } from "@react-three/drei";

export default () => {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const [loaded, setLoaded] = useState(0);

  useGLTF.preload("/models/vinyl.gltf");
  useGLTF.preload("/models/record-player.gltf");
  const textures = useTexture.preload(songs[0].cover);
  const vinylTexture = useTexture.preload("/models/vinyl-texture.png");

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

        <StyledCanvas shadows={true}>
          {enabled ? <PlayerScene /> : <MeshGradientScene />}
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
