
import { Link } from 'react-router-dom'
const SingleCard = ({card}) => {
  const {id, title, image,short_description, board_description, price} =card || {}
    return (
        <div data-aos="fade-up-right" className="card card-compact w-[350px] bg-base-100 shadow-xl">
        <figure><img className="w-82 h-[200px]" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{short_description}</p>
          <p className="text-xl"> Price: {price}</p>
          <div className="card-actions justify-end">
         <Link className='mx-auto w-full' to={`/card/${id}`}>
         <button className="btb btn-primary w-full p-3 text-xl rounded-xl mx-auto">Order</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleCard;