import { Variant, Color } from "@/components/kui/types/Button";

const classMap: Record<Variant, Record<Color, string>> = {
  solid: {
    default: "bg-kui-default text-white hover:bg-kui-default/75",
    error: "bg-kui-error text-white hover:bg-kui-error/75",
    success: "bg-kui-success text-white hover:bg-kui-success/75",
    warning: "bg-kui-warning text-white hover:bg-kui-warning/75",
    info: "bg-kui-info text-white hover:bg-kui-info/75",
  },
  filled: {
    default: "bg-kui-default/5 text-kui-default hover:bg-kui-default/20",
    error: "bg-kui-error/10 text-kui-error hover:bg-kui-error/20",
    success: "bg-kui-success/10 text-kui-success hover:bg-kui-success/20",
    warning: "bg-kui-warning/10 text-kui-warning hover:bg-kui-warning/20",
    info: "bg-kui-info/10 text-kui-info hover:bg-kui-info/20",
  },
  text: {
    default: "text-kui-default hover:bg-kui-default/5",
    error: "text-kui-error hover:bg-kui-error/10",
    success: "text-kui-success hover:bg-kui-success/10",
    warning: "text-kui-warning hover:bg-kui-warning/10",
    info: "text-kui-info hover:bg-kui-info/10",
  },
};
export default classMap;
