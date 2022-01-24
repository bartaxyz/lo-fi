import React, { useEffect, useState } from "react";
import { Button, Loading, Progress, styled } from "@nextui-org/react";
import { Canvas, ReactThreeFiber } from "@react-three/fiber";
import { PlayerScene } from "../../scenes/PlayerScene/PlayerScene";
import { MeshGradientScene } from "../../scenes/MeshGradientScene/MeshGradientScene";

export default () => {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const [loaded, setLoaded] = useState(0);

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
    }, 100);

    return () => clearTimeout(loadingTimeout);
  }, [loading, loaded]);

  return (
    <React.Fragment>
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
                  <Progress color="primary"/>
                </React.Fragment>
              ) : (
                "Play"
              )}
            </Button>
          </CenteredControls>
        )}

        <StyledCanvas>
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
