import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiToast from "./Toast";
import { action } from "storybook/actions";

const meta: Meta<typeof KuiToast> = {
  title: "KUI/Toast",
  component: KuiToast,
  tags: ["autodocs"],
  args: {
    message: "This is a toast message!",
    duration: 0,
    showCloseButton: true,
    onClose: action("closed"),
  },
};

export default meta;
type Story = StoryObj<typeof KuiToast>;

export const Success: Story = {
  args: {
    type: "success",
    message: "Success! Operation completed.",
    position: "top-center",
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Error! Something went wrong.",
    position: "bottom-right",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    message: "Info! Here is some information.",
    position: "top-left",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Warning! Please be careful.",
    position: "bottom-center",
  },
};

export const AllPositions: Story = {
  render: (args) => (
    <>
      <KuiToast {...args} position="top-left" message="Top Left" />
      <KuiToast {...args} position="top-center" message="Top Center" />
      <KuiToast {...args} position="top-right" message="Top Right" />
      <KuiToast {...args} position="bottom-left" message="Bottom Left" />
      <KuiToast {...args} position="bottom-center" message="Bottom Center" />
      <KuiToast {...args} position="bottom-right" message="Bottom Right" />
    </>
  ),
  args: {
    type: "success",
    duration: 0,
    showCloseButton: true,
    onClose: action("closed"),
  },
};
