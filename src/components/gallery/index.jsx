import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";

const Gallery = ({ images }) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse w-full h-full'>
      <div className="mx-auto mt-6 w-full h-1/6 max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={'flex flex-row gap-6'}>
          {images.toReversed().map((image) => (
            <GalleryTab key={image} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={'w-full h-full'}>
        {images.toReversed().map((image) => (
          <Tab.Panel key={image} className="w-full h-full">
            <div className="aspect-auto relative sm:rounded-lg overflow-hidden flex justify-center items-center h-full">
              <div className="h-full w-full max-h-96 flex justify-center items-center">
                <img
                  src={image}
                  alt="project"
                  className="w-auto h-full"
                />
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
   );
}

export default Gallery;
