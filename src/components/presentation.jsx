import { useEffect, useRef } from "react";
import { MySelf } from "../assets";
import EncryptAnimation from "../lib/encrypt-animation";

const Presentation = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1; // Velocidad de desplazamiento
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
          container.scrollLeft = 0; // Reiniciar cuando alcanza el final
        }
      }
    };

    const intervalId = setInterval(scroll, 50); // Velocidad de actualización

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col lg:flex-row text-white p-4 gap-16 justify-center items-center">
      <div className="flex lg:w-1/2 items-center justify-center lg:items-start">
        <div>
          <EncryptAnimation targetText="Hi I'm Manuel Rios" className='text-4xl font-bold' />
          <div className="text-xl lg:text-3xl flex flex-col items-center lg:items-start gap-4">
            Full Stack Developer with a background in:
            <div className="bg-white rounded-md flex flex-row p-0.5 w-64 overflow-x-hidden" ref={containerRef}>
              <img width="48" height="48" src="https://img.icons8.com/color/48/nextjs.png" alt="nextjs" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/ruby-programming-language.png" alt="ruby-programming-language" />
              <img width="48" height="48" src="https://img.icons8.com/plasticine/100/react.png" alt="react" />
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/angularjs.png" alt="angularjs"/>
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/laravel.png" alt="laravel"/>

              <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git" />
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo.png" alt="external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo"/>

              <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1" />

              <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" />
              <img width="48" height="48" src="https://img.icons8.com/plasticine/100/css3.png" alt="css3" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/sass.png" alt="sass" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2" />

              <img width="48" height="48" src="https://img.icons8.com/ios/50/prisma-orm.png" alt="prisma-orm" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase" />
              <img width="48" height="48" src="https://img.icons8.com/external-those-icons-flat-those-icons/24/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-flat-those-icons" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb" />
              <img width="48" height="48" src="https://img.icons8.com/color/48/maria-db.png" alt="maria-db" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 items-center justify-center aspect-square sm:h-80 lg:h-96 xl:h-[30rem]">
        <img src={MySelf} alt="Manuel Rios" className="rounded-md h-full shadow-xl hover:-translate-y-4 duration-200" />
      </div>
    </div>
  );
}

export default Presentation;
