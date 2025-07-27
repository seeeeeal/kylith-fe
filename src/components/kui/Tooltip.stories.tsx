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
        component:
          "Tooltips display informative text when users hover over, focus on, or tap an element. When activated, Tooltips display a text label identifying an element, such as a description of its function.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "Position of the tooltip relative to the trigger element",
    },
    variant: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Visual variant of the tooltip",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the tooltip",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the tooltip is disabled",
    },
    delay: {
      control: { type: "number" },
      description: "Delay before showing the tooltip (in milliseconds)",
    },
    maxWidth: {
      control: { type: "number" },
      description: "Maximum width of the tooltip",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なツールチップ
export const Basic: Story = {
  args: {
    title: "This is a basic tooltip",
    children: <KuiButton>Hover me</KuiButton>,
  },
};

// 削除アイコンボタンの例（画像の例に基づく）
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
      <KuiTooltip title="Light variant tooltip" variant="light">
        <KuiButton>Light</KuiButton>
      </KuiTooltip>

      <KuiTooltip title="Dark variant tooltip" variant="dark">
        <KuiButton>Dark</KuiButton>
      </KuiTooltip>
    </div>
  ),
};

// サイズのバリエーション
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center justify-center p-8">
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

// 長いテキストの例
export const LongText: Story = {
  args: {
    title:
      "This is a very long tooltip text that demonstrates how the tooltip handles longer content and wraps appropriately within the maximum width constraint.",
    maxWidth: 300,
    children: <KuiButton>Long text tooltip</KuiButton>,
  },
};

// 無効化されたツールチップ
export const Disabled: Story = {
  args: {
    title: "This tooltip is disabled",
    disabled: true,
    children: <KuiButton>Disabled tooltip</KuiButton>,
  },
};

// カスタム遅延
export const CustomDelay: Story = {
  args: {
    title: "This tooltip has a custom delay",
    delay: 1000,
    children: <KuiButton>Custom delay (1s)</KuiButton>,
  },
};

// アイコンボタンの例
export const IconButtons: Story = {
  render: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <KuiTooltip title="Settings">
        <KuiIconButton aria-label="Settings">
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </KuiIconButton>
      </KuiTooltip>

      <KuiTooltip title="Help">
        <KuiIconButton aria-label="Help">
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
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </KuiIconButton>
      </KuiTooltip>

      <KuiTooltip title="Notifications">
        <KuiIconButton aria-label="Notifications">
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </KuiIconButton>
      </KuiTooltip>
    </div>
  ),
};
