import image from '../../assets/card6.jpg'
import imagge from '../../assets/card7.jpg'


const BCard = () => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 mb-6 ml-8 gap-5 '>
       
          <div className="card  w-[300px]  bg-purple-800">
        <figure><img className='w-[250px] h-[200px] rounded-t-lg' src={imagge} /></figure>
   
      
      </div>
      <div className="card  w-[300px]  bg-red-800 ">
        <figure><img className='w-[400px] h-[200px] rounded-t-lg' src={image} /></figure>
      
      </div>
        
      </div>
    );
};

export default BCard;