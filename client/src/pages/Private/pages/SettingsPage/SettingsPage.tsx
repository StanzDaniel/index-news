import { useValidateToken } from "@/hooks";
import { PrivateRoutes } from "@/models";
import { NavbarPrivate, Section } from "../../components";
import { SettingsForm } from "./Components";


function SettingsPage() {
  useValidateToken();

  return (
    <>
      <NavbarPrivate currentPage={PrivateRoutes.SETTINGS} />
      <Section>
        <h2 className="paddingTop30px">{"Settings"}</h2>
        <SettingsForm />
      </Section>
    </>
  )
}
export default SettingsPage