import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  qrText: string;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, qrText, handleClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-75'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-96 flex flex-col items-center'>
        <h1 className='text-xl font-semibold mb-4'>Generated QR Code</h1>
        <div className='mb-4'>{children}</div>
        <div className='text-center text-gray-600 mb-4'>{qrText}</div>
        <button
          className='mt-5 p-2 bg-blue-500 text-white rounded hover:bg-customBlue'
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
