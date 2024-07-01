import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";

const StarButton = () => {

  const [isStarred, setStarred] = useState(false)

  return (
    <div className='border-[0.2px] border-[#30363d] bg-[#21262D] flex items-center rounded-md cursor-pointer h-10' >
      <div
        onClick={() => setStarred(!isStarred)}
        className='flex flex-row gap-2 p-2 rounded-l-md hover:bg-[#292e36] font-semibold items-center'>
        <div>{isStarred ? <Star size={17} color='#e3b341' fill='#e3b341' /> : <Star size={17} color='#8d96a0' />}</div>
        <div className='text-[#c9d1d9]'>{isStarred ? 'Starred' : 'Star'}</div>
      </div>
      <div className='border-l-[0.2px] border-[#30363d] flex justify-center items-center p-2 rounded-r-md hover:bg-[#292e36]' >
        <ChevronDown size={17} color="#c9d1d9"/>
      </div>
    </div>
  );
}

export default StarButton;
