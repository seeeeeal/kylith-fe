import { Variant, Color } from "@/components/kui/types/Button";

const classMap: Record<Variant, Record<Color, string>> = {
  solid: {
    default:
      "bg-kui-default text-white hover:not-disabled:bg-kui-default/75 disabled:text-kui-default/50 disabled:bg-kui-default/20",
    error:
      "bg-kui-error text-white hover:not-disabled:bg-kui-error/75 disabled:text-kui-error/50 disabled:bg-kui-error/20",
    success:
      "bg-kui-success text-white hover:not-disabled:bg-kui-success/75 disabled:text-kui-success/50 disabled:bg-kui-success/20",
    warning:
      "bg-kui-warning text-white hover:not-disabled:bg-kui-warning/75 disabled:text-kui-warning/50 disabled:bg-kui-warning/20",
    info: "bg-kui-info text-white hover:not-disabled:bg-kui-info/75 disabled:text-kui-info/50 disabled:bg-kui-info/20",
  },
  filled: {
    default:
      "bg-kui-default/5 text-kui-default hover:not-disabled:bg-kui-default/20 disabled:text-kui-default/20 disabled:bg-kui-default/5",
    error:
      "bg-kui-error/10 text-kui-error hover:not-disabled:bg-kui-error/20 disabled:text-kui-error/20 disabled:bg-kui-error/5",
    success:
      "bg-kui-success/10 text-kui-success hover:not-disabled:bg-kui-success/20 disabled:text-kui-success/20 disabled:bg-kui-success/5",
    warning:
      "bg-kui-warning/10 text-kui-warning hover:not-disabled:bg-kui-warning/20 disabled:text-kui-warning/20 disabled:bg-kui-warning/5",
    info: "bg-kui-info/10 text-kui-info hover:not-disabled:bg-kui-info/20 disabled:text-kui-info/20 disabled:bg-kui-info/5",
  },
  text: {
    default:
      "text-kui-default hover:not-disabled:bg-kui-default/5 disabled:text-kui-default/20 disabled:bg-kui-default/5",
    error:
      "text-kui-error hover:not-disabled:bg-kui-error/10 disabled:text-kui-error/20 disabled:bg-kui-error/5",
    success:
      "text-kui-success hover:not-disabled:bg-kui-success/10 disabled:text-kui-success/20 disabled:bg-kui-success/5",
    warning:
      "text-kui-warning hover:not-disabled:bg-kui-warning/10 disabled:text-kui-warning/20 disabled:bg-kui-warning/5",
    info: "text-kui-info hover:not-disabled:bg-kui-info/10 disabled:text-kui-info/20 disabled:bg-kui-info/5",
  },
};
export default classMap;
