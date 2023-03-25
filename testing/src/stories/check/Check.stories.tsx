import { ComponentStory, ComponentMeta } from "@storybook/react";

import Check from "../../components/Check";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Check",
  component: Check,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Check>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Check",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Check",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Check",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Check",
};
