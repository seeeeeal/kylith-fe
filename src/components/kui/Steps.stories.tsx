import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiSteps from "./Steps";

const meta: Meta<typeof KuiSteps> = {
  title: "KUI/Steps",
  component: KuiSteps,
  argTypes: {
    currentStep: { control: { type: "number", min: 0, max: 4 } },
    steps: { control: "object" },
  },
  args: {
    steps: ["Cart", "Shipping", "Payment", "Complete"],
    currentStep: 1,
  },
};
export default meta;
type Story = StoryObj<typeof KuiSteps>;

export const Basic: Story = {
  args: {
    steps: ["Step 1", "Step 2", "Step 3"],
    currentStep: 1,
  },
};

export const Completed: Story = {
  args: {
    steps: ["Cart", "Shipping", "Payment", "Complete"],
    currentStep: 3,
  },
};

export const FirstStep: Story = {
  args: {
    steps: ["Cart", "Shipping", "Payment", "Complete"],
    currentStep: 0,
  },
};

export const LastStep: Story = {
  args: {
    steps: ["Cart", "Shipping", "Payment", "Complete"],
    currentStep: 3,
  },
};

export const TwoSteps: Story = {
  args: {
    steps: ["Start", "Finish"],
    currentStep: 0,
  },
};

export const FiveSteps: Story = {
  args: {
    steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
    currentStep: 2,
  },
};

export const LongStepNames: Story = {
  args: {
    steps: [
      "Add Items to Cart",
      "Enter Shipping Information",
      "Select Payment Method",
      "Review and Confirm",
      "Order Complete",
    ],
    currentStep: 1,
  },
};

export const AllCompleted: Story = {
  args: {
    steps: ["Cart", "Shipping", "Payment", "Complete"],
    currentStep: 4,
  },
};
