import { ProfileDetails } from "@/components";
import { useValidateToken } from "@/hooks";
import { PrivateRoutes } from "@/models";
import { NavbarPrivate, ReadLater, Section } from "../../components";


function ReadLaterPage() {
  useValidateToken();
  
  return (
    <>
      <NavbarPrivate currentPage={PrivateRoutes.READLATER}/>
      <ProfileDetails />
      <Section>
        <h2>{"Read Later"}</h2>
        <ReadLater />
      </Section>
    </>
  )
}
export default ReadLaterPage