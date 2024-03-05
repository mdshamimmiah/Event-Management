import backgroundimage from '../assets/banner3.jpg'

const Banner = () => {
    return (
       <div className='h-screen' style={{backgroundSize:'cover',backgroundRepeat:'no repeat',backgroundImage:`url(${backgroundimage})`}}>
         <div className="hero min-h-screen">
        
      </div>
       </div>
    );
};

export default Banner;