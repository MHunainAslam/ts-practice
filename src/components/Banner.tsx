import React from "react";
import { ReactTyped, Typed } from "react-typed";

type Props = {};
interface slider {
  h2: string;
  h3: string;
  para: string;
}

const Banner = (props: Props) => {
  const sliderdata: slider[] = [
    {
      h2: "heading",
      h3: "sub heading",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Exercitationem sequi ",
    },
    {
      h2: "heading",
      h3: "sub heading",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Exercitationem sequi tempore, voluptatem quam ut deleniti.Eos commodi sit, magnam voluptas explicabo praesentium sint,et nostrum pariatur dicta cum, quibusdam tempore!",
    },
    {
      h2: "heading",
      h3: "sub heading",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Exercitationem sequi tempore, voluptatem quam ut deleniti.Eos commodi sit, magnam voluptas explicabo praesentium sint,et nostrum pariatur dicta cum, quibusdam tempore!",
    },
  ];
  return (
    <div className="bg-info">
      <div className="container py-5">
        <div
          id="carouselExample"
          className="carousel slide "
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            {sliderdata?.map((item, i) => (
              <div
                className={`carousel-item ${i === 0 && "active"}`}
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h2>{item.h2}</h2>
                    <h3>{item.h3}</h3>
                    <p>
                      <ReactTyped
                        strings={[item.para]}
                        typeSpeed={100} // Speed of typing
                        backSpeed={10} // Speed of backspacing
                        backDelay={1000} // Delay before backspacing
                        loop={true} // Loops the animation
                      />
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/images/cover_image_1698325190.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
