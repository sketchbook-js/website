import React from "react";

import SocialLink from "./SocialLink";
import GitHubIcon from "./GitHubIcon";
import Stack from "./Stack";

export default {
  title: "SocialLink",
  component: SocialLink,
};

const Template = (args) => (
  <Stack justify="start">
    <SocialLink {...args} />
  </Stack>
);

export const Github = Template.bind({});
Github.args = {
  icon: GitHubIcon,
  href: "https://github.com/sketchbook-js/sketchbook",
  label: "GitHub",
  color: "#000",
};
