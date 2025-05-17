import { Variant, Color } from "@/components/kui/types/Button";

const classMap: Record<Variant, Record<Color, string>> = {
  solid: {
    default: "bg-kui-default text-white hover:bg-kui-default/75",
    danger: "bg-kui-danger text-white hover:bg-kui-danger/75",
  },
  filled: {
    default: "bg-kui-default/5 text-kui-default hover:bg-kui-default/20",
    danger: "bg-kui-danger/10 text-kui-danger hover:bg-kui-danger/20",
  },
  text: {
    default: "text-kui-default hover:bg-kui-default/5",
    danger: "text-kui-danger hover:bg-kui-danger/10",
  },
};
export default classMap;
