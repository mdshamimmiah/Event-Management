import SingleCard from "../singleCard/SingleCard";

const Service = ({cards}) => {
   
    return (
        <div>
         <h2 className="text-3xl">  Our Services </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {
                cards?.map(card=><SingleCard key={card.id} card ={card}></SingleCard>)
            }
         </div>
        </div>
    );
};

export default Service;