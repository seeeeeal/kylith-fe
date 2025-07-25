import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiButton from "./Button";
import { action } from "storybook/actions";

const meta: Meta<typeof KuiButton> = {
  title: "KUI/Button",
  component: KuiButton,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "filled", "text"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "error", "success", "warning", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["default", "round"],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: "solid",
    color: "default",
    size: "medium",
    shape: "default",
    disabled: false,
    onClick: action("clicked"),
  },
};
export default meta;
type Story = StoryObj<typeof KuiButton>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Solid Button",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    children: "Error Button",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning Button",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    children: "Info Button",
  },
};

export const Default: Story = {
  args: {
    color: "default",
    children: "Default Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Sizes: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 12 }}>
      <KuiButton {...args} size="small">
        Small
      </KuiButton>
      <KuiButton {...args} size="medium">
        Medium
      </KuiButton>
      <KuiButton {...args} size="large">
        Large
      </KuiButton>
    </div>
  ),
};

export const Shapes: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 12 }}>
      <KuiButton {...args} shape="default">
        Default
      </KuiButton>
      <KuiButton {...args} shape="round">
        Round
      </KuiButton>
    </div>
  ),
};
