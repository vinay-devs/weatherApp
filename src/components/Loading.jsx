import backgroundImage from "../assets/bgimage.jpg";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div
      className="h-full w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="#000000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loading;
