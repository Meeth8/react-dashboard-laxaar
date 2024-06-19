// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { Button } from 'antd';
import { FileTextOutlined,DownOutlined } from '@ant-design/icons';
import '../header.css'

const GroupComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-full flex flex-row items-end justify-between py-5 pr-[30px] pl-[42px] box-border gap-[20px] max-w-full z-[4] text-left text-5xl text-gray-200 font-roboto mq725:pl-[21px] mq725:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
        {/* <img
          className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[6px] [transform:scale(1.13)]"
          alt=""
          src="/sidebar-content@2x.png"
        /> */}
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          </div>
          <div className="flex flex-row items-start justify-start gap-[2px]">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="w-[18px] h-[18px] relative rounded-[50%] bg-gray-200 z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <a className="[text-decoration:none] relative font-black text-[inherit] inline-block min-w-[67px] shrink-0 [debug_commit:0448091] whitespace-nowrap z-[1]">
                arivaa
              </a>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[27px] mt-[-3px] text-xs">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[59px] shrink-0 [debug_commit:0448091] whitespace-nowrap z-[1]">
                  Service job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[462px] flex flex-row items-start justify-start gap-[30px] max-w-full text-right text-base text-color-states-common-white">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="self-stretch flex flex-row items-start justify-start pt-[11px] px-5 pb-[13px] relative gap-[10px] z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">
              
               
              
            </div>
            
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <Button  type="primary" danger>
      <FileTextOutlined id="first-btn" /> DOCUMENTATION
      </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="flex flex-row items-start justify-start py-2.5 px-5 relative gap-[10px] z-[1]">
            <Button id='second-btn' danger> English <DownOutlined id='dropdown' /> </Button>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full flex items-center justify-center z-[0]">

            
            
            </div>
              
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            </div>
          </div>
        </div>
        <div className="user-info">
        <div className="circle-mask">
    <img
      className="circle-image"
      alt=""
      src="https://images.pexels.com/photos/2759564/pexels-photo-2759564.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
  </div>
        
      </div>
      </div>
    </header>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};


export default GroupComponent1