import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[974px] w-[196px] h-[152px] z-[5] text-right text-sm text-salmon-100 font-roboto ${className}`}
    >
      <div className="absolute top-[48px] left-[41px] w-[95px] h-[39px] hidden">
        <div className="absolute top-[0px] left-[0px] w-full h-full flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(5.615)]"
            alt=""
            src="/group-737-1@2x.png"
          />
        </div>
        <b className="absolute top-[12px] left-[14px] inline-block w-[59px] min-w-[59px]">
          + Create
        </b>
      </div>
      <img
        className="absolute top-[48px] left-[156px] w-10 h-[39px] object-contain hidden"
        alt=""
        src="/group-751@2x.png"
      />
      <div>
         
        <img
          className="absolute top-[80.3px] left-[4px] w-[190px] h-px z-[6]"
          alt=""
          src="/group-784.svg"
        />
        <div className="absolute top-[95.3px] left-[21px] w-[85px] h-[34px] z-[6] text-color-states-common-white">
          <div className="absolute top-[0px] left-[0px] w-full h-full flex items-center justify-center">

          </div>
          <div className="absolute top-[10px] left-[30px] inline-block min-w-[46px] z-[1]">
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent