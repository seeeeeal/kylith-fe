import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiIconButton from "./IconButton";
import { action } from "storybook/actions";
import {
  FiPlus,
  FiMinus,
  FiEdit,
  FiTrash,
  FiHeart,
  FiStar,
  FiSettings,
  FiSearch,
  FiCheck,
  FiInfo,
} from "react-icons/fi";

const meta: Meta<typeof KuiIconButton> = {
  title: "KUI/IconButton",
  component: KuiIconButton,
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
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: <FiPlus />,
    "aria-label": "Add item",
    variant: "solid",
    color: "default",
    size: "medium",
    disabled: false,
    onClick: action("clicked"),
  },
};
export default meta;
type Story = StoryObj<typeof KuiIconButton>;

export const Add: Story = {
  args: {
    children: <FiPlus />,
    "aria-label": "Add item",
  },
};

export const Remove: Story = {
  args: {
    children: <FiMinus />,
    "aria-label": "Remove item",
  },
};

export const Edit: Story = {
  args: {
    children: <FiEdit />,
    "aria-label": "Edit item",
  },
};

export const Delete: Story = {
  args: {
    children: <FiTrash />,
    "aria-label": "Delete item",
    color: "error",
  },
};

export const Favorite: Story = {
  args: {
    children: <FiHeart />,
    "aria-label": "Add to favorites",
    color: "error",
  },
};

export const Star: Story = {
  args: {
    children: <FiStar />,
    "aria-label": "Rate item",
    color: "warning",
  },
};

export const Settings: Story = {
  args: {
    children: <FiSettings />,
    "aria-label": "Open settings",
  },
};

export const Search: Story = {
  args: {
    children: <FiSearch />,
    "aria-label": "Search",
  },
};

export const Disabled: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 12 }}>
      <KuiIconButton
        {...args}
        variant="solid"
        color="error"
        aria-label="Solid variant"
        disabled
      >
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton
        {...args}
        variant="filled"
        color="success"
        aria-label="Filled variant"
        disabled
      >
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton
        {...args}
        variant="text"
        color="warning"
        aria-label="Text variant"
        disabled
      >
        <FiPlus />
      </KuiIconButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <KuiIconButton {...args} size="small" aria-label="Small button">
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton {...args} size="medium" aria-label="Medium button">
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton {...args} size="large" aria-label="Large button">
        <FiPlus />
      </KuiIconButton>
    </div>
  ),
};

export const Colors: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 12 }}>
      <KuiIconButton {...args} color="default" aria-label="Default color">
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton {...args} color="error" aria-label="Error color">
        <FiTrash />
      </KuiIconButton>
      <KuiIconButton {...args} color="success" aria-label="Success color">
        <FiCheck />
      </KuiIconButton>
      <KuiIconButton {...args} color="warning" aria-label="Warning color">
        <FiStar />
      </KuiIconButton>
      <KuiIconButton {...args} color="info" aria-label="Info color">
        <FiInfo />
      </KuiIconButton>
    </div>
  ),
};

export const Variants: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 12 }}>
      <KuiIconButton {...args} variant="solid" aria-label="Solid variant">
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton {...args} variant="filled" aria-label="Filled variant">
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton {...args} variant="text" aria-label="Text variant">
        <FiPlus />
      </KuiIconButton>
    </div>
  ),
};

export const CommonActions: Story = {
  render: (args: any) => (
    <div style={{ display: "flex", gap: 8 }}>
      <KuiIconButton {...args} aria-label="Add to cart">
        <FiPlus />
      </KuiIconButton>
      <KuiIconButton {...args} aria-label="Remove from cart">
        <FiMinus />
      </KuiIconButton>
      <KuiIconButton {...args} aria-label="Edit item">
        <FiEdit />
      </KuiIconButton>
      <KuiIconButton {...args} aria-label="Delete item" color="error">
        <FiTrash />
      </KuiIconButton>
      <KuiIconButton {...args} aria-label="Add to favorites" color="error">
        <FiHeart />
      </KuiIconButton>
      <KuiIconButton {...args} aria-label="Search">
        <FiSearch />
      </KuiIconButton>
    </div>
  ),
};
