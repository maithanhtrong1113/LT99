import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalXoaThuoc(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const deleteHandler = () => {
    props.OnClickYes(props.maThuoc);
    toggle();
  };
  return (
    <div>
      <Button
        color="danger"
        className="btn btn-danger btn-sm ms-2"
        onClick={toggle}
      >
        Xóa
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>Xóa Thuốc</ModalHeader>
        <ModalBody>
          <b>
            Bạn có chắc chắn muốn xóa thuốc này không? Hành động này không thể
            hoàn tác.
          </b>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Button color="secondary" onClick={toggle}>
            Quay Về
          </Button>
          <Button color="danger" onClick={deleteHandler}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalXoaThuoc;
