
import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom'
const Details = () => {
    const [card, setCard] = useState()
    const {id} = useParams()
    
    const cards = useLoaderData()
    console.log(card);
    useEffect(()=>{
        const findCard = cards?.find(cart=>cart.id==id)
        setCard(findCard)

    }, [id, card])
    return (
   <div>
    
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={card?.image} alt="Shoes" /></figure>
        <div className="card-body">
          <p>{card?.board_description}</p>
          <div className="card-actions justify-end">
           <h1 className="text-3xl mx-auto">Price: {card?.price}</h1>
          </div>
        </div>
      
    </div>
   </div>
    );
};

export default Details;