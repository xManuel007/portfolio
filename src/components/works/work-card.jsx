import StarButton from "../ui/star-button";
import { useLanguage } from '../../hooks/useLanguage';
import { BookMarked } from "lucide-react";
import { formatDuration } from "../../utils/time";

const WorkCard = ({
  languages = ['HTML'],
  title = 'foo',
  type = 'Public',
  time = (2 * 60 * 1000),
  logo,
  Description,
  bgImage = 'bg-[#70888e]',
  openModal
}) => {

  const GetColor = (language) => useLanguage(language);

  return (
    <div className="border-borderColor border-[0.2px] w-80 md:w-[40rem] h-96 md:h-40 rounded-md bg-[#0d1117] flex md:flex-row flex-col">
      <div onClick={openModal} className={`w-80 md:w-40 h-40 rounded-l-md border-r-[0.2px] border-borderColor flex justify-center items-center ${bgImage} p-2 cursor-pointer`}>
        <img src={logo} alt="Logo" className="w-40 drop-shadow-2xl"/>
      </div>
      <div className="flex flex-col gap-4 p-2 h-56 md:h-40 justify-between">
        <div className="flex flex-row justify-between md:w-[30rem] w-[19rem] items-center">
          <div className="flex flex-row gap-2 items-center">
            <div onClick={openModal} className="text-blue-500 text-xl font-bold hover:underline cursor-pointer flex flex-row gap-1 items-center">
              <BookMarked size={20} color="grey"/>
              <div>
                {title}
              </div>
            </div>
            <span className="h-6 w-fit hinline-flex items-center justify-center text-xs font-normal text-gray-400 border-gray-700 border-[0.2px] rounded-full p-0.5 px-2 cursor-default">
              {type}
            </span>
          </div>
          <StarButton />
        </div>
        <div className="flex flex-row justify-between text-gray-400 h-20 items-center">
          <div className="w-[19rem] h-[3rem] overflow-hidden text-ellipsis whitespace-pre-line line-clamp-2">{Description}</div>
        </div>
        <div className="flex md:flex-row flex-col justify-between text-gray-400">
          <div className='flex flex-row gap-2 items-center flex-wrap'>
            {languages.map((language, index) => (
              <div className='flex flex-row gap-1 items-center' key={index}>
                <div className={`h-3 w-3 ${GetColor(language)} rounded-full`} />
                <div>{language}</div>
              </div>
            ))}
          </div>
          <div>
            {'Updated ' + formatDuration(time) + " ago"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
