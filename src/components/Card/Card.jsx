import './Card.scss';

const Card = ({ title, price, children, variant = 'default' }) => {
  return (
    <div className={`card card--${variant}`}>
      {title && <h3 className="card__title">{title}</h3>}
      {price && <div className="card__price">{price}</div>}
      
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;