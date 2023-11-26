import React, { useState } from "react";
import Modal from "react-responsive-modal";
import './ImageCard1.css'

function ImageCard1({ url }) {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openModal = (url) => {
    setOpen(true);
    setImageUrl(url);
  };

  return (
    <div className="h-[140px] w-[200px] lg:h-[230px] lg:w-[300px] ">
      <img
        src={url}
        alt="pic"
        loading="lazy"
        className="border border-white"
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
        classNames={{
          modal:'customModal'
        }}
      >
        <img src={imageUrl} alt="pic" />
      </Modal>
    </div>
  );
}

export default ImageCard1;
