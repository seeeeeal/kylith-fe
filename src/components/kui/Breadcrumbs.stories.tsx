import type { Meta, StoryObj } from "@storybook/react-vite";
import KuiBreadcrumbs from "./Breadcrumbs";
import { FiChevronRight, FiSlash, FiArrowRight } from "react-icons/fi";
import { MemoryRouter } from "react-router";

const meta: Meta<typeof KuiBreadcrumbs> = {
  title: "KUI/Breadcrumbs",
  component: KuiBreadcrumbs,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    items: { control: "object" },
    maxWidth: { control: "text" },
  },
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones" },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof KuiBreadcrumbs>;

export const Basic: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones" },
    ],
  },
};

export const Short: Story = {
  args: {
    items: [{ label: "Home", path: "/" }, { label: "About" }],
  },
};

export const Long: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones", path: "/products/electronics/smartphones" },
      { label: "Apple", path: "/products/electronics/smartphones/apple" },
      { label: "iPhone 15 Pro" },
    ],
  },
};

export const AllLinks: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones", path: "/products/electronics/smartphones" },
    ],
  },
};

export const NoLinks: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Products" },
      { label: "Electronics" },
      { label: "Smartphones" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones" },
    ],
    separator: <FiSlash className="w-3 h-3" />,
  },
};

export const ArrowSeparator: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones" },
    ],
    separator: <FiArrowRight className="w-3 h-3" />,
  },
};

export const Ecommerce: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Shop", path: "/shop" },
      { label: "Switches", path: "/shop/switches" },
      { label: "Kylith HE Series" },
    ],
  },
};

export const AdminPanel: Story = {
  args: {
    items: [
      { label: "Dashboard", path: "/admin" },
      { label: "Users", path: "/admin/users" },
      { label: "User Details" },
    ],
  },
};

export const LongLabels: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      {
        label: "Very Long Product Category Name That Might Overflow",
        path: "/products",
      },
      { label: "Another Extremely Long Product Name That Should Be Truncated" },
    ],
    maxWidth: "max-w-[150px] sm:max-w-[200px]",
  },
};

export const CustomStyling: Story = {
  args: {
    items: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Electronics", path: "/products/electronics" },
      { label: "Smartphones" },
    ],
    className: "text-sm text-kui-default",
    separator: <FiChevronRight className="w-4 h-4 text-kui-success" />,
  },
};
