import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiTooltip from "./Tooltip";
import KuiButton from "./Button";
import KuiIconButton from "./IconButton";

const meta: Meta<typeof KuiTooltip> = {
  title: "KUI/Tooltip",
  component: KuiTooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Simple tooltip component that displays text on hover.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "Position of the tooltip",
    },
    variant: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Visual variant of the tooltip",
    },
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
      description: "Size of the tooltip",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the tooltip is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なツールチップ
export const Basic: Story = {
  args: {
    title: "This is a tooltip",
    children: <KuiButton>Hover me</KuiButton>,
  },
};

// 削除アイコンボタンの例
export const DeleteIcon: Story = {
  args: {
    title: "Delete",
    children: (
      <KuiIconButton aria-label="Delete item">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </KuiIconButton>
    ),
  },
};

// 位置のバリエーション
export const Positions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8 items-center justify-center p-8">
      <KuiTooltip title="Top tooltip" position="top">
        <KuiButton>Top</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Bottom tooltip" position="bottom">
        <KuiButton>Bottom</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Left tooltip" position="left">
        <KuiButton>Left</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Right tooltip" position="right">
        <KuiButton>Right</KuiButton>
      </KuiTooltip>
    </div>
  ),
};

// バリアントのバリエーション
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <KuiTooltip title="Light variant" variant="light">
        <KuiButton>Light</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Dark variant" variant="dark">
        <KuiButton>Dark</KuiButton>
      </KuiTooltip>
    </div>
  ),
};

// サイズのバリエーション
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <KuiTooltip title="XSmall tooltip" size="xsmall">
        <KuiButton size="small">XSmall</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Small tooltip" size="small">
        <KuiButton size="small">Small</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Medium tooltip" size="medium">
        <KuiButton size="medium">Medium</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Large tooltip" size="large">
        <KuiButton size="large">Large</KuiButton>
      </KuiTooltip>
    </div>
  ),
};
