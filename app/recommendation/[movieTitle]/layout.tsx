import ShellLayout from "@/app/movies/[id]/layout";
import { createMetaData } from "@/app/utils/helper";

export const metadata = createMetaData({
  title: "Recommendation - Movar",
  description: "Recommendation based on your input",
});

export default ShellLayout;
