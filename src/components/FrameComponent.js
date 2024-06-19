import PropTypes from "prop-types";
import { Pagination } from 'antd';
import '../header.css'
import { EyeOutlined,DeleteOutlined,MailOutlined,PrinterOutlined} from '@ant-design/icons';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Checkbox } from 'antd';
import { RiCheckboxCircleFill,RiCheckboxBlankCircleLine } from "react-icons/ri";
import { IoRadioButtonOffOutline } from "react-icons/io5";


const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-sm text-darkslategray font-roboto ${className}`}
    >
      <div className="flex flex-col items-end justify-start gap-[40px] max-w-full">
        <div className="flex flex-row items-end justify-start gap-[54px] mq1050:flex-wrap">
          <div className="w-[155px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[47.7px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
                <div className="checkbox-all">

          <RiCheckboxCircleFill color="#f87060" />
          </div>

                <div className="h-[19px] flex-1 relative">
                  
                  <div className="absolute top-[1px] left-[0px] flex items-center w-[67px] min-w-[67px] z-[2]">
                    Rida Talbi
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="h-[18px] w-[18px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-gainsboro" />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block min-w-[67px] z-[0]">
                    
                    Rida Talbi
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="h-[18px] w-[18px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-gainsboro" />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative inline-block min-w-[67px] z-[1]">
                    Rida Talbi
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="h-[18px] w-[18px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-gainsboro" />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative inline-block min-w-[67px] z-[1]">
                    Rida Talbi
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[300px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[51px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative whitespace-nowrap z-[1]">
                  04/10/2021 ; 02:10 PM
                </div>
                <div className="w-[93px] relative flex items-center shrink-0 z-[1]">
                  ABC000006
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative whitespace-nowrap z-[1]">
                  04/10/2021 ; 02:10 PM
                </div>
                <div className="w-[93px] relative flex items-center shrink-0 z-[1]">
                  ABC000006
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative whitespace-nowrap z-[1]">
                  04/10/2021 ; 02:10 PM
                </div>
                <div className="w-[93px] relative flex items-center shrink-0 z-[1]">
                  ABC000006
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative whitespace-nowrap z-[1]">
                  04/10/2021 ; 02:10 PM
                </div>
                <div className="w-[93px] relative flex items-center shrink-0 z-[1]">
                  ABC000006
                </div>
              </div>
            </div>
          </div>
          <div className="w-28 flex flex-col items-start justify-end pt-0 pb-0.5 pr-[17px] pl-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[51px]">
              <div className="self-stretch relative z-[1]">0661425689</div>
              <div className="self-stretch relative z-[1]">0661425689</div>
              <div className="self-stretch relative z-[1]">0661425689</div>
              <div className="self-stretch relative z-[1]">0661425689</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 pb-1 pr-[23px] pl-0 text-color-states-success-success-dark">
            <div className="flex flex-col items-start justify-start gap-[50px]">
              <div className="relative font-medium text-orange inline-block min-w-[71px] z-[1]">
                Processing
              </div>
              <div className="relative font-medium inline-block min-w-[69px] z-[1]">
                Completed
              </div>
              <div className="relative font-medium text-crimson inline-block min-w-[43px] z-[1]">
                Cancel
              </div>
              <div className="relative font-medium inline-block min-w-[69px] z-[1]">
                Completed
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <div >
              <MdOutlineModeEditOutline className="h-4 w-4 relative overflow-hidden shrink-0" id="pencil-icon" />
                <div className="flex flex-row items-center justify-center">
                  
                </div>
              </div>
              <div >
                
                  <EyeOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon3" />   
              </div>
              <div >

                <DeleteOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
              </div>
              <div >

              <MailOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
              </div>
              <div >
              <PrinterOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="mail-icon3" />
                <div className="flex flex-row items-center justify-center">
                  
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7.6px]">
                
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <div className="rounded-md bg-color-states-common-white flex flex-row items-start justify-start py-[5px] px-0.5 z-[1]">
                <div  >
                <MdOutlineModeEditOutline className="h-4 w-4 relative overflow-hidden shrink-0 mt-5" id="pencil-icon4" />
                </div>
                <div >
                  
                <EyeOutlined className="h-4 w-4 relative overflow-hidden shrink-1 " id="eye-icon4" />
                <div className="flex flex-row items-center justify-center">
                  </div> 
              </div>
              </div>
              <div >
                <DeleteOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="delete-icon4" />
                <div className="flex flex-row items-center justify-center">
                </div>
              </div>
              <div >
              <MailOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="msg-icon4" />
              </div>
              <div >
              <PrinterOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="printer-icon4" />
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <div >
                <div className="flex flex-row items-center justify-center">
                <MdOutlineModeEditOutline className="h-4 w-4 relative overflow-hidden shrink-0 " id="edit-icon5" />
                </div>
              </div>
              <div >

              <div className="flex flex-row items-center justify-center">
              <EyeOutlined className="h-4 w-4 relative overflow-hidden shrink-1 " id="eye-icon5" /> </div> 
              <div className="eye-icon">
              </div>
              </div>
              <div >
                <div className="flex flex-row items-center justify-center">
                <DeleteOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="delete-icon5" />
                </div>
              </div>
              <div >
              <MailOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="mail-icon5" />
              </div>
              <div >
              <PrinterOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="printer-icon5" />
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[15px]">
              <div >
                <div className="flex flex-row items-center justify-center">
                <MdOutlineModeEditOutline className="h-4 w-4 relative overflow-hidden shrink-0" id="pencil-icon" />
                </div>
              </div>
              <div >
              <EyeOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
              </div>
              <div >
                <div className="flex flex-row items-center justify-center">
                <DeleteOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
                </div>
              </div>
              <div >
              <MailOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
              </div>
              <div >
              <PrinterOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[961.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-base text-salmon-100">
          <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq450:flex-wrap">
            <div className="rounded-md bg-color-states-common-white flex flex-row items-start justify-start py-[11px] pr-[15px] pl-4 z-[1]">
              <div />
            </div>
            <div className="page-container">
            <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className="rounded-md bg-color-states-common-white flex flex-row items-start justify-start py-[11px] pr-[15px] pl-4 z-[1]">
              <div />
            </div>
            <div >
              <div  />
              
            </div>
            <div className="rounded-md bg-color-states-common-white flex flex-row items-start justify-start py-[11px] pr-[15px] pl-4 z-[1]">
              <div />
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent