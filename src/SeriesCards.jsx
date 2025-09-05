


const SeriesCard=({curEle})=>{
    return (
          <li className="card">

            <div>
             <img
  src={curEle.img_url}
  alt={`${curEle.name} poster`}
  className="w-full h-auto sm:w-[400px] sm:h-[320px] md:w-[500px] md:h-[400px] rounded-lg shadow-md"
/>


            </div>
            <div className="card-content">
            <h2>Name: {curEle.name}</h2>
            <h3>Rating:<span className={`rating ${curEle.rating>8.6 ?"super_hit":"average"}`}> {curEle.rating}</span></h3>
            <p>
              Created by Chaitanya Jadhav, a passionate developer who brings creativity
              and enthusiasm to every project. This component showcases the beloved
              K-drama "{curEle.name}" with its impressive {curEle.rating} rating,
              reflecting the show's compelling storytelling and emotional depth that has
              captivated audiences worldwide.
            </p>
           <a href={curEle.watch_url}><button className="button">
              Watch Now
            </button>
            </a> 
            </div>
          </li>
        );


};

export default SeriesCard;