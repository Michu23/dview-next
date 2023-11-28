import React, { useContext, useEffect, useRef } from "react";
import StateContext from "../context/StateContext";

const Demo = () => {
  const { openModal, setOpenModal } = useContext(StateContext);

  const modalRef = useRef(null);

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.onkeydown = function (evt) {
        if (evt.keyCode === 27) {
            // Escape key pressed
        closeModal();
        }
    };

    if (openModal) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [openModal]);

  return (
    <>
      {openModal === true ? (
        <div className="full" onClick={closeModal}>
          <div
            style={{
              marginTop: "-20rem",
              height: "80vh",
              width: "100vw",
              position: "fixed",
              zIndex: "999",
              display: "flex",
              justifyContent: "center",
              transform: 'scale(1.1)',
            }}
            className={openModal ? "confirm show" : "confirm"}
          >
            <iframe
              title="demo"
              
              ref={modalRef}
              src="https://xd.adobe.com/embed/7d3d72c3-c611-41cd-6875-9e9757265842-0b0c/"
              className="iframe"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Demo;
