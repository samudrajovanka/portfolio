/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

const DEFAULT_MODAL = {
  title: 'Title',
  description: 'Description',
  // eslint-disable-next-line no-console
  onConfirm: () => console.log('yes'),
};

const ModalContext = createContext({
  isShow: false,
  setIsShow: () => {},
  showModal: () => {},
  hideModal: () => {},
  modal: {},
  setLoading: () => {},
  loading: () => {},
  stopLoading: () => {},
});

export function ModalContextProvider({ children }) {
  const [isShow, setIsShow] = useState(false);
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = ({ title, description, onConfirm }) => {
    setIsLoading(false);
    setIsShow(true);
    setModal({ ...modal, title, description, onConfirm });
  };

  const hideModal = () => {
    if (!isLoading) {
      setIsShow(false);
      setModal(DEFAULT_MODAL);
    }
  };

  const loading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const context = {
    isShow,
    showModal,
    hideModal,
    modal,
    loading,
    stopLoading,
    isLoading,
  };

  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
}

export default ModalContext;
