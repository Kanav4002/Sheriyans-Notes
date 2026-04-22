import { Bookmark } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { Ellipsis } from 'lucide-react';


const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <div className="card-top">
        <div className='card-top-top'>
          <h3>{props.pay}</h3>
          <Bookmark size={20} color="#4e4e4e" strokeWidth={1.25} />
        </div>
        <div className='card-top-center'>
          <h1>{props.post}</h1>
        </div>
        <div className='card-top-bottom'>
          <MoveRight size={16} color="#3c3b3b" strokeWidth={1.25} />
        </div>
        <div className='slider'>
          <Ellipsis size={16} color="#969696" strokeWidth={1.25} />
        </div>
      </div>
      <div className="card-bottom">
        <img src={props.brandLogo} alt="" />
        <h1>{props.post}</h1>
        <button>View</button>
      </div>
    </div>
  )
}

export default Card