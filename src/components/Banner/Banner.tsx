import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="container">
      <div className="py-2">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/013/780/884/small_2x/beautiful-forest-panoramic-realistic-neon-vivid-background-landscape-purple-trees-pine-in-mist-design-mystery-fog-in-park-sunset-concept-nature-beauty-tourism-web-banner-free-vector.jpg"
          alt=""
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
