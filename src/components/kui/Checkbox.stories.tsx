import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiCheckbox from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof KuiCheckbox> = {
  title: "KUI/Checkbox",
  component: KuiCheckbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Checkbox component for multiple selection.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the checkbox",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なチェックボックス
export const Basic: Story = {
  args: {
    children: "Basic checkbox",
  },
};

// サイズのバリエーション
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KuiCheckbox size="small">Small checkbox</KuiCheckbox>
      <KuiCheckbox size="medium">Medium checkbox</KuiCheckbox>
      <KuiCheckbox size="large">Large checkbox</KuiCheckbox>
    </div>
  ),
};

// チェック状態の例
export const CheckedStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KuiCheckbox>Unchecked</KuiCheckbox>
      <KuiCheckbox checked>Checked</KuiCheckbox>
    </div>
  ),
};

// 無効化されたチェックボックス
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <KuiCheckbox disabled>Disabled unchecked</KuiCheckbox>
      <KuiCheckbox disabled checked>
        Disabled checked
      </KuiCheckbox>
    </div>
  ),
};

// インタラクティブな例
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <KuiCheckbox checked={checked} onChange={setChecked}>
          Interactive checkbox
        </KuiCheckbox>
        <p className="text-sm text-gray-600">
          Checked: {checked ? "Yes" : "No"}
        </p>
      </div>
    );
  },
};

// 複数選択の例
export const MultipleSelection: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const items = ["Option 1", "Option 2", "Option 3", "Option 4"];

    const handleToggle = (item: string) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };

    return (
      <div className="flex flex-col gap-4">
        <h3 className="font-medium">Select multiple options:</h3>
        {items.map((item) => (
          <KuiCheckbox
            key={item}
            checked={selectedItems.includes(item)}
            onChange={() => handleToggle(item)}
          >
            {item}
          </KuiCheckbox>
        ))}
        <p className="text-sm text-gray-600">
          Selected: {selectedItems.join(", ") || "None"}
        </p>
      </div>
    );
  },
};
