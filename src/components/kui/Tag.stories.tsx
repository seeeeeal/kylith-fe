import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import KuiTag from "./Tag";

const meta: Meta<typeof KuiTag> = {
  title: "KUI/Tag",
  component: KuiTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "soft"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "error", "info", "default"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Tags
export const Primary: Story = {
  args: {
    children: "新製品",
    variant: "solid",
    color: "primary",
    size: "medium",
  },
};

export const Success: Story = {
  args: {
    children: "在庫あり",
    variant: "solid",
    color: "success",
    size: "medium",
  },
};

export const Warning: Story = {
  args: {
    children: "残りわずか",
    variant: "solid",
    color: "warning",
    size: "medium",
  },
};

export const Error: Story = {
  args: {
    children: "売り切れ",
    variant: "solid",
    color: "error",
    size: "medium",
  },
};

// Variants
export const Solid: Story = {
  args: {
    children: "新製品",
    variant: "solid",
    color: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "新製品",
    variant: "outline",
    color: "primary",
  },
};

export const Soft: Story = {
  args: {
    children: "新製品",
    variant: "soft",
    color: "primary",
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "新製品",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "新製品",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "新製品",
    size: "large",
  },
};

// Interactive
export const Clickable: Story = {
  args: {
    children: "クリック可能",
    onClick: action("tag clicked"),
  },
};

export const Removable: Story = {
  args: {
    children: "削除可能",
    removable: true,
    onRemove: action("tag removed"),
  },
};

// Color Variations
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <KuiTag color="primary">新製品</KuiTag>
      <KuiTag color="success">在庫あり</KuiTag>
      <KuiTag color="warning">残りわずか</KuiTag>
      <KuiTag color="error">売り切れ</KuiTag>
      <KuiTag color="info">限定版</KuiTag>
      <KuiTag color="default">通常</KuiTag>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <KuiTag variant="solid">Solid</KuiTag>
      <KuiTag variant="outline">Outline</KuiTag>
      <KuiTag variant="soft">Soft</KuiTag>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <KuiTag size="xsmall">XSmall</KuiTag>
      <KuiTag size="small">Small</KuiTag>
      <KuiTag size="medium">Medium</KuiTag>
      <KuiTag size="large">Large</KuiTag>
    </div>
  ),
};

// Real-world examples
export const ProductTags: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <KuiTag color="primary">新製品</KuiTag>
        <KuiTag color="success">在庫あり</KuiTag>
        <KuiTag color="info">限定版</KuiTag>
      </div>
      <div className="flex flex-wrap gap-2">
        <KuiTag color="warning" variant="outline">
          残りわずか
        </KuiTag>
        <KuiTag color="error" variant="soft">
          売り切れ
        </KuiTag>
        <KuiTag color="default" variant="outline">
          通常価格
        </KuiTag>
      </div>
    </div>
  ),
};

export const StatusTags: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <KuiTag color="success">完了</KuiTag>
        <KuiTag color="warning">処理中</KuiTag>
        <KuiTag color="error">エラー</KuiTag>
        <KuiTag color="info">情報</KuiTag>
      </div>
      <div className="flex flex-wrap gap-2">
        <KuiTag color="primary" removable>
          タグ1
        </KuiTag>
        <KuiTag color="success" removable>
          タグ2
        </KuiTag>
        <KuiTag color="warning" removable>
          タグ3
        </KuiTag>
      </div>
    </div>
  ),
};
