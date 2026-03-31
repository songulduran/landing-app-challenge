import './Modal.scss';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Modal kapalıysa hiçbir şey basma

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </header>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;