import React from "react";

import SocialLink from "./SocialLink";
import GitHubIcon from "./GitHubIcon";
import Stack from "./Stack";

export default {
  title: "components/SocialLink",
  component: SocialLink,
};

export const Default = () => (
  <Stack justify="start">
    <SocialLink
      icon={GitHubIcon}
      href="https://github.com/sketchbook-js/sketchbook"
      label="GitHub"
      color="#000"
    />
  </Stack>
);

