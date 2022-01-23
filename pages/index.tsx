import React from "react";
import type { NextPage } from "next";
import {
  Link,
  Text,
  Spacer,
  Container,
  Card,
  Avatar,
  globalCss,
} from "@nextui-org/react";

const globalStyles = globalCss({
  html: {
    margin: 0,
  },
  body: {
    background: "transparent",
  },
});

const Home: NextPage = () => {
  globalStyles();

  return (
    <React.Fragment>
      <Container css={{ maxWidth: 880 }}>
        <Spacer y={8} />
        <Text
          h1
          size={60}
          css={{
            textAlign: "center",
          }}
          weight="bold"
        >
          Introducing a{" "}
          <Text
            span
            color="primary"
            css={{
              textGradient: "to bottom, #FF512F 0%, #DD2476  100%",
            }}
          >
            new way{" "}
          </Text>
          to listen &amp; chill with your lo-fi music.
        </Text>

        <Spacer y={2} />

        <Text
          size={16}
          css={{
            textAlign: "center",
            margin: "auto",
            maxWidth: 560,
          }}
        >
          Soon in your browsers. Something's cooking under the hood. If you're a
          developer,{" "}
          <Link
            href="https://github.com/bartaxyz/lo-fi"
            target="_blank"
            color="primary"
            css={{
              textGradient: "to bottom, #FF512F 0%, #DD2476  100%",
            }}
          >
            stay in touch on Github
          </Link>
          .
        </Text>

        <Spacer y={2} />

        <Card
          css={{
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <Text css={{ textAlign: "center" }}>Collaborators</Text>
          <Spacer y={0.5} />
          {[
            {
              githubUrl: "https://github.com/bartaxyz",
              avatar: "https://avatars.githubusercontent.com/u/4202010?v=4",
              name: "Ondřej Bárta",
            },
          ].map(({ githubUrl, avatar, name }, i) => (
            <Link
              href={githubUrl}
              target="_blank"
              css={{
                display: "flex",
                alignItems: "center",
                marginBottom: "$4",
              }}
            >
              <Avatar src={avatar} />
              <Text css={{ marginLeft: "$8" }}>{name}</Text>
            </Link>
          ))}

          <Link
            href="https://github.com/bartaxyz/lo-fi"
            target="_blank"
            css={{ display: "flex", alignItems: "center" }}
          >
            <Avatar text="+" />
            <Text css={{ marginLeft: "$8" }}>Join the effort</Text>
          </Link>
        </Card>

        <Spacer y={4} />

        <Text css={{ textAlign: "center" }}>
          In the meantime, a shameless plug of my music.
        </Text>

        <Spacer y={1} />

        <Container css={{ margin: "auto", maxWidth: 560 }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/CB-o9B7uoKc`}
            style={{
              height: "100%",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 8,
              overflow: "hidden",
            }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Container>

        <Spacer y={1} />

        <Container css={{ margin: "auto", maxWidth: 560 }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/2B01AwrdBPU`}
            style={{
              height: "100%",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 8,
              overflow: "hidden",
            }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Container>

        <Spacer y={4} />
      </Container>
    </React.Fragment>
  );
};

export default Home;
