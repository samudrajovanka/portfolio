import ModalContext from '@contexts/ModalContext';
import useClickOutside from '@lib/hooks/useClickOutside';
import { useContext, useRef } from 'react';
import Button from '../Button';

export default function Modal() {
  const modalCtx = useContext(ModalContext);
  const modalRef = useRef(null);
  useClickOutside(modalRef, modalCtx.isShow, modalCtx.hideModal);

  const onConfirmClick = () => {
    modalCtx.modal.onConfirm();
  };

  const onCancelClick = () => {
    modalCtx.hideModal();
  };

  if (modalCtx.isShow) {
    return (
      <div className="modal center-flex">
        <div className="modal__content" ref={modalRef}>
          <h1 className="modal__content-title heading-3">{modalCtx.modal.title}</h1>

          <div className="modal__content-desc">
            <p className="heading-4">{modalCtx.modal.description}</p>
          </div>

          <div className="modal__content-action">
            <Button onClick={onConfirmClick} isLoading={modalCtx.isLoading}>
              OK
            </Button>
            <Button variant="danger" onClick={onCancelClick} disabled={modalCtx.isLoading}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
