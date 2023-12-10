import { useState } from "react";
import SetImage from "./SetImage/SetImage";


function SetImageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? (
        <SetImage toggleModal={setIsModalOpen} />
      ) : (
        <p onClick={() => setIsModalOpen(!isModalOpen)}>{'Change Profile Image'}</p>
      )}
    </>
  );
}
export default SetImageModal;
