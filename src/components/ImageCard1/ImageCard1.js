import React, { useState } from "react";
import Modal from "react-responsive-modal";
import ImageComponent from "../ImageComponent/ImageComponent";

function ImageCard1({url}) {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openModal = (url) => {
    setOpen(true);
    setImageUrl(url);
  };

  return (
    <div className="h-[200px] w-[200px] lg:h-[230px] lg:w-[300px] ">

   
       <img 
        src={url} 
        alt="pic"
       loading="lazy" 
       className="border border-white h-[130px] w-[200px] lg:h-[180px] lg:w-[300px]" 
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

export default ImageCard1;
