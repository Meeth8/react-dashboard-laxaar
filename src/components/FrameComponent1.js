import PropTypes from "prop-types";
import { MdOutlineModeEditOutline } from "react-icons/md";
import '../header.css'
import { EyeOutlined,DeleteOutlined,MailOutlined,PrinterOutlined} from '@ant-design/icons';
import { Checkbox } from 'antd';
import { RiCheckboxCircleFill,RiCheckboxBlankCircleLine } from "react-icons/ri";



const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[35px] box-border max-w-full text-left text-sm text-darkslategray font-roboto ${className}`}
    >
      <div className="flex flex-row items-end justify-start gap-[54px] max-w-full mq1050:flex-wrap">
        <div className="w-[155px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
          <div className="w-[100px] flex flex-row items-start justify-start gap-[15px]">
          <RiCheckboxCircleFill color="#f87060" />
            <div className="h-[19px] flex-1 relative">
              {/* <img
                className="absolute top-[0px] left-[0px] w-[61px] h-[19px] z-[1]"
                loading="lazy"
                alt=""
                src="/typography11.svg"
              /> */}
              <div className="absolute top-[1px] left-[0px] flex items-center w-[67px] min-w-[67px] z-[2]">
                Rida Talbi
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="relative whitespace-nowrap z-[1]">
              04/10/2021 ; 02:10 PM
            </div>
            <div className="w-[93px] relative flex items-center shrink-0 z-[1]">
              ABC000006
            </div>
          </div>
        </div>
        <div className="w-28 flex flex-col items-start justify-end pt-0 pb-0.5 pr-[17px] pl-0 box-border">
          <div className="self-stretch relative z-[1]">0661425689</div>
        </div>
        <div className="w-[92px] flex flex-col items-start justify-end pt-0 pb-1 pr-5 pl-0 box-border text-color-states-success-success-dark">
          <div className="relative font-medium inline-block min-w-[69px] z-[1]">
            Completed
          </div>
        </div>
        <div className="w-[161.1px] flex flex-row items-start justify-start pt-0 px-0 pb-[24.3px] box-border relative gap-[33px] text-3xs text-color-states-common-white">
          <div className="h-[21.7px] w-[25px] relative">
            
            <div className="absolute top-[4px] left-[4px] flex items-center w-[17px] h-3 min-w-[17px] z-[5]">
              Edit
            </div>
          </div>
          <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start py-[3px] px-0.5 box-border gap-[11px] z-[5]">
            <div className="w-5 rounded bg-color-states-common-white box-border flex flex-row items-start justify-start p-px border-[0.5px] border-solid border-salmon-100">
              <MdOutlineModeEditOutline className="h-4 w-4 relative overflow-hidden shrink-0" id="pencil-icon" />
              <div className="flex flex-row items-center justify-center">
               
              </div>
            </div>
            <div className="h-5 w-5 relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-color-states-common-white box-border w-full h-full flex flex-row items-center justify-center p-0.5 border-[0.5px] border-solid border-salmon-100">
              <EyeOutlined lassName="h-4 w-4 relative overflow-hidden shrink-0" id="pencil-icon" />
                <div className="hidden flex-row items-center justify-center">
              </div>
                 
              </div>
              {/* <img
                className="absolute top-[5px] left-[3px] w-3.5 h-2.5 z-[1]"
                alt=""
                src="/group-1.svg"
                /> */}
            </div>
            <div className="w-5 rounded bg-color-states-common-white box-border flex flex-row items-start justify-start p-px border-[0.5px] border-solid border-salmon-100">
            <DeleteOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon"/>
              <div className="flex flex-row items-center justify-center">
                
              </div>
            </div>
            <div className="h-5 w-5 relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-color-states-common-white box-border w-full h-full flex flex-row items-center justify-center p-0.5 border-[0.5px] border-solid border-salmon-100">
            <MailOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
                <div className="hidden flex-row items-center justify-center">
                  
                </div>
              </div>
              <img
                className="absolute top-[6px] left-[4px] w-3 h-[9.4px] z-[1]"
                alt=""
                src="/group-792-1.svg"
              />
            </div>
            <div className="h-5 w-5 relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-color-states-common-white box-border w-full h-full flex flex-row items-center justify-center p-0.5 border-[0.5px] border-solid border-salmon-100">

              <PrinterOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />  
              </div>
              <div >
                <div className="hidden flex-row items-center justify-center">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/delete-4.svg"
                  />
                </div>
              </div>
              
            </div>
            <img
              className="h-1.5 w-2 absolute !m-[0] top-[-4px] left-[72px] rounded-12xs-5 object-contain z-[6]"
              alt=""
              src="/action-divider.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start pt-1 px-1 pb-0.5 relative z-[7]">
           
            <div className="relative inline-block min-w-[29px] z-[1]">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1