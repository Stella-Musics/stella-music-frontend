import { Layout } from "@/shared/ui/layout";
import { SideBarLayout as SideBar } from "@/widgets/sidebar-layout";

export const SideBarLayout = () => {
  return <Layout sidebar={<SideBar />}></Layout>;
};
