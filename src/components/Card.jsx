import PropTypes from 'prop-types';
const Card = ({idx, item, handleCardClick}) => {
    return (
        <button disabled={item.stat === 'correct'}
                className={"card " + item.stat}
                onClick={() => handleCardClick(idx)}>
            <span>{item.val}</span>
        </button>
    )
}

export default Card;

Card.propTypes = {
    idx: PropTypes.string,
    item: PropTypes.object,
    handleCardClick: PropTypes.func
};

