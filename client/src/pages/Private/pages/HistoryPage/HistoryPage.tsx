import { ProfileDetails } from "@/components";
import { useValidateToken } from "@/hooks";
import { PrivateRoutes } from "@/models";
import { History, NavbarPrivate, Section } from "../../components";


function HistoryPage() {
  useValidateToken();
  
  return (
    <>
      <NavbarPrivate currentPage={PrivateRoutes.HISTORY} />
      <ProfileDetails />
      <Section>
        <h2>{"My History"}</h2>
        <History />
      </Section>
    </>
  )
}
export default HistoryPage