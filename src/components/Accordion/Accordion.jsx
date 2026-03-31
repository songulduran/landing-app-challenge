import { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, children, id }) => { // content yerine children daha profesyonel
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`c-accordion ${isOpen ? 'is-open' : ''}`} id={id}>
      <button 
        type="button" // Form içindeyse yanlışlıkla submit etmesin diye ekledik
        className="c-accordion__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && (
        <div className="c-accordion__body">
          {children} 
        </div>
      )}
    </div>
  );
};

export default Accordion;