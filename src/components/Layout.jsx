import { NavigationHeaderSection } from "../NavigationHeaderSection";
import { EngagementFooterSection } from "../EngagementFooterSection";

export const Layout = ({ children, cta }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeaderSection />
      <main id="main-content">{children}</main>
      <EngagementFooterSection cta={cta} />
    </div>
  );
};
