import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import InputNumber from "./InputNumber";

const meta: Meta<typeof InputNumber> = {
  title: "KUI/InputNumber",
  component: InputNumber,
  argTypes: {
    value: { control: { type: "number", min: 0, max: 100 } },
    min: { control: { type: "number", min: 0, max: 100 } },
    max: { control: { type: "number", min: 0, max: 100 } },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: {
    value: 1,
    min: 1,
    max: 10,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Basic: Story = {
  render: (args) => {
    const [val, setVal] = useState(args.value);
    return <InputNumber {...args} value={val} onChange={setVal} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [val, setVal] = useState(args.value);
    return <InputNumber {...args} value={val} onChange={setVal} disabled />;
  },
};

export const MinMax: Story = {
  render: (args) => {
    const [val, setVal] = useState(args.value);
    return (
      <InputNumber {...args} value={val} onChange={setVal} min={3} max={7} />
    );
  },
};

export const CustomClass: Story = {
  render: (args) => {
    const [val, setVal] = useState(args.value);
    return (
      <InputNumber
        {...args}
        value={val}
        onChange={setVal}
        className="border-kui-success text-kui-success"
      />
    );
  },
};
