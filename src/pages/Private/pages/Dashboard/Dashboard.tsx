import { ProfileDetails } from "@/components";
import { useValidateToken } from "@/hooks";
import { COLORS, PrivateRoutes } from "@/models";
import { History, NavbarPrivate, ReadLater, Section } from "../../components";

function Dashboard() {
  useValidateToken();
  
  return (
    <>
      <NavbarPrivate currentPage={PrivateRoutes.DASHBOARD} />
      <ProfileDetails />
      <Section>
        <h2>{"My History"}</h2>
        <History isPreview/>
      </Section>
      <Section color={COLORS.SECONDARY_COLOR_ALPHA}>
        <h2>{"Read Later"}</h2>
        <ReadLater isPreview />
      </Section>
    </>
  )
}
export default Dashboard