import { Layout } from "@/shared/ui/layout";
import { NavBarLayout as NavBar } from "@/widgets/navbar-layout";
import { SideBarLayout as SideBar } from "@/widgets/sidebar-layout";

export const BaseLayout = () => (
  <Layout navbar={<NavBar />} sidebar={<SideBar />}></Layout>
);
