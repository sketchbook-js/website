import React from "react";

import Brandmark from "./Brandmark";

export default {
  title: "Brandmark",
  component: Brandmark,
};

const Template = (args) => <Brandmark {...args} />;

export const Default = Template.bind({});
Default.args = {};
