import React, { useState } from "react";
import {Modal} from "react-responsive-modal";
import './ImageCard2.css'

function ImageCard2({url}) {

  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openModal = (url) => {
    setOpen(true);
    setImageUrl(url);
  };

  return (
    <>
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
    </>
  );
}

export default ImageCard2;
