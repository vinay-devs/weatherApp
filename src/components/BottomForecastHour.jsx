import { useState } from "react";

const BottomForecastHour = ({ setClickTime }) => {
  const fullDayHours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [AM, setAM] = useState(true);
  const [selected, setSelected] = useState(0);
  const [hourClicked, setHourClicked] = useState(0);

  //   console.log(hourClicked);
  const handleRightButton = () => {
    setAM(false);
    setClickTime(`${hourClicked} PM`);
  };
  const handleLeftButton = () => {
    setAM(true);
    setClickTime(`${hourClicked} AM`);
  };

  const handleClickTime = (hour) => {
    setHourClicked(hour);

    if (hour != 12) setSelected(hour);
    else setSelected(0);

    if (AM) setClickTime(`${hour} AM`);
    else setClickTime(`${hour} PM`);
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      className="flex gap-2 w-full justify-center  px-5 pb-4"
    >
      <button onClick={handleLeftButton}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBElEQVR4nO3YzSpEcRjA4afJLLCwcwFzAXMBroDIQlwHF8CKS5AboOxHXACxZG2D8rUgOxslmjo0Tf/JR8q8p/epd39+na/3HFJKKaWUUvpj87jFIxYFNYMXvFXzIKApPPdEdOdeMG089UW8YkkgLdz1RXRnWSCTOC9ErApkAmeFiE2BjOGoELGNhiCaOChEdDAiiAZ2CxHH1VkKY6sQMexzWb2oP20MwUH9dm56Q9brEhL10rrAtG/e7CcYF0wT+4WYvUiP3w+jOCzE7ER6IfauKKfRV5SvlsY1AbUGrPErAmoP+LBaUJNP3Ss1+flwLbC5alHrRsz+98GklFJKKaXkJ94B/FYc410EtlgAAAAASUVORK5CYII=" />
      </button>
      {fullDayHours.map((hour, index) => (
        <div
          onClick={() => handleClickTime(hour)}
          key={index}
          style={
            selected == index
              ? {
                  borderStyle: "solid",
                  borderWidth: "2px",
                  borderColor: "black",
                }
              : null
          }
          className="w-16 h-16 bg-black bg-opacity-10 justify-center flex items-center"
        >
          {AM ? <p>{hour}AM</p> : <p>{hour}PM</p>}
        </div>
      ))}
      <button onClick={handleRightButton}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO3YMWoCQRTG8b9uIWIqOy9g6QG8QUQQBO+ghzCgdSwtba30BDZ2prdWUQtRknQ2ghgWptBlbJIU+4bvBw+m2GI+mJl9MyAiIiIiYkwL+AIOQAPDPoGbqwvwilGnuyBxnYEqRpfWNRHmG6hgUDsRJK4jUMagrifMCihh0LsnzBIoYkwGGHnCfAAvGBMBE0+YGZDDmDww94SZuqAPasDG83Haa5gMskvBpH5b/VCC9O6DxD3NOgWTuv11aVnc7GMgixGRO51MH7+ZJz/EBVDAkEEILcpbCE1jJ4Q2vhnKxWobylV3H8rjQ92F2bixiIiIiAj/5gcWXRzuiXxnygAAAABJRU5ErkJggg==" />
      </button>
    </div>
  );
};

export default BottomForecastHour;
