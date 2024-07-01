import { Tab } from "@headlessui/react";

const GalleryTab = ({image}) => {
  return (
    <Tab className={'relative flex h-8 w-8 lg:h-20 lg:w-20 cursor-pointer items-center justify-center rounded-md border-borderColor border-[0.2px]'}>
      {({selected}) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md flex justify-center">
            <img
              src={image}
              alt="project"
              className="w-auto h-full object-cover"
            />
          </span>
          <span className={`
            absolute inset-0 rounded-md ring-2 ring-offset-2
            ${selected ? 'ring-black' : 'ring-transparent'} `
          }/>
        </div>
      )}
    </Tab>
   );
}

export default GalleryTab;
