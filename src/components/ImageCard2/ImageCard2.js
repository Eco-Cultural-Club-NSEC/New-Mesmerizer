import React, { useState } from "react";
import {Modal} from "react-responsive-modal";

function ImageCard2({url}) {

  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openModal = (url) => {
    setOpen(true);
    setImageUrl(url);
  };

  return (
    <div className="pt-[40px] h-[250px] w-[250px] lg:h-[500px] lg:w-[500px]">
      <img
        src={url}
        alt="pic"
        className="border border-white h-[150px] w-[250px] lg:h-[250px] lg:w-[400px]"
        onClick={() => {
          openModal(url);
        }}
      ></img>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        center
      >
        <img src={imageUrl} alt="pic" />
      </Modal>
    </div>
  );
}

export default ImageCard2;
