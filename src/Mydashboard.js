import FrameComponent2 from "./components/FrameComponent2";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent from "./components/FrameComponent";
import GroupComponent1 from "./components/GroupComponent1";
import GroupComponent from "./components/GroupComponent";
import {SearchOutlined} from '@ant-design/icons'
import './header.css'
import { EyeOutlined,DeleteOutlined,MailOutlined,PrinterOutlined} from '@ant-design/icons';
import { MdOutlineModeEditOutline } from "react-icons/md";



const DASHBOARD = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="h-[1067px] flex-1 relative bg-gray-100 overflow-hidden max-w-full text-left text-5xl text-darkslategray font-roboto mq1050:h-auto mq1050:min-h-[1067]">
        <a className="[text-decoration:none] absolute top-[132px] left-[254px] font-medium text-[inherit] inline-block min-w-[105px] mq450:text-[19px]">
          Customer
        </a>
        <FrameComponent2 />
        <section className="absolute top-[191px] left-[254px] shadow-[0px_9px_16px_rgba(159,_162,_191,_0.18),_9px_0px_16px_rgba(159,_162,_191,_0.18)] rounded-mini bg-color-states-common-white w-[1156px] flex flex-col items-end justify-start pt-[20.1px] px-0 pb-10 box-border gap-[5px] max-w-full z-[3] text-right text-sm text-darkslategray font-roboto">
          <div className="self-stretch h-[624px] relative shadow-[0px_9px_16px_rgba(159,_162,_191,_0.18),_9px_0px_16px_rgba(159,_162,_191,_0.18)] rounded-mini bg-color-states-common-white hidden" />
          <div className="w-[195px] flex flex-row items-start justify-end pt-0 px-5 pb-[14.9px] box-border">
            <div className="flex-1 rounded-3xs bg-color-states-common-white flex flex-row items-start justify-start py-1 px-[7px] gap-[5px] z-[1] border-[1px] border-solid border-salmon-100">
               <SearchOutlined id="search-bar" />
              <input
                className="w-[calc(100%_-_38px)] [border:none] [outline:none] bg-[transparent] h-5 flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-roboto text-sm text-salmon-200 min-w-[66px]"
                placeholder="Search..."
                type="text" id="search-placeholder"
              />
            </div>
          </div>
          <div className="self-stretch bg-color-states-common-white flex flex-row items-end justify-start pt-3.5 px-[73px] pb-4 box-border gap-[171px] max-w-full z-[1] mq1050:flex-wrap">
            <div className="h-[46px] w-[1156px] relative bg-color-states-common-white hidden max-w-full" />
            <div className="w-[211px] flex flex-row items-end justify-between gap-[20px]">
              <b className="relative uppercase inline-block min-w-[119px] z-[2]">
                Customer Name
              </b>
              <b className="relative uppercase inline-block min-w-[35px] z-[2]">
                Date
              </b>
            </div>
            <div className="w-[530px] flex flex-row items-start justify-between max-w-full gap-[20px] mq725:flex-wrap">
              <b className="relative uppercase inline-block min-w-[88px] z-[2]">
                Job Number
              </b>
              <div className="w-[110px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                <b className="self-stretch relative uppercase inline-block min-w-[106px] z-[2]">
                  mobie number
                </b>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-[38px] pl-0">
                <b className="relative uppercase inline-block min-w-[52px] z-[2]">
                  Status
                </b>
              </div>
              <b className="w-[68px] relative uppercase flex items-center shrink-0 min-w-[68px] z-[2]">
                Actions
              </b>
            </div>
          </div>
          <div className="self-stretch h-[15px] flex flex-row items-start justify-end pt-0 pb-3.5 pr-7 pl-[27px] box-border max-w-full">
            <div className="self-stretch flex-1 relative box-border opacity-[0.1] max-w-full z-[4] border-t-[1px] border-solid border-color-states-common-black" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[15px] box-border max-w-full text-left">
            <div className="flex flex-row items-end justify-start gap-[71px] max-w-full mq1050:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-0 pb-[3px] pr-[38px] pl-0">
                <div className="flex flex-row items-start justify-start gap-[15px]">
                  <div className="h-[18px] w-[18px] relative rounded-[50%] box-border z-[1] border-[0px] border-solid border-gainsboro" />
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative inline-block min-w-[67px] z-[1]">
                      Rida Talbi
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[449px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative whitespace-nowrap z-[1]">
                    04/10/2021 ; 02:10 PM
                  </div>
                  <div className="w-[93px] relative flex items-center shrink-0 z-[1]">
                    ABC000006
                  </div>
                  <div className="w-[95px] relative flex items-center shrink-0 z-[1]">
                    0661425689
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 pb-1 pr-2 pl-0 text-color-states-success-success-dark">
                <div className="relative font-medium inline-block min-w-[69px] z-[1]">
                  Completed
                </div>
              </div>
              <div className="flex flex-row items-end justify-start gap-[15px]">

                <div className="rounded-md bg-color-states-common-white flex flex-row items-start justify-start py-[5px] px-0.5 z-[1]">
                  <div  >
                      <MdOutlineModeEditOutline className="h-4 w-4 relative overflow-hidden shrink-0" id="pencil-icon1" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                  
                <div >
                  <EyeOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" /> </div> 
                  <div className="eye-icon">
                  
                </div>
                  <div className="flex flex-row items-center justify-center">
                  </div>
                </div>
                <div >
                <DeleteOutlined className="h-4 w-4 relative overflow-hidden shrink-1" id="pencil-icon" />
                  {/* <img
                    className="w-3 h-[9.4px] relative z-[1]"
                    alt=""
                    src="/group-792.svg"
                  /> */}
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
          <FrameComponent1 />
          <FrameComponent />
        </section>
        <GroupComponent1 />
        <section className="absolute top-[74px] left-[240px] w-[1170px] h-[903px]">
          <GroupComponent />  
        </section>
      </main>
    </div>
  );
};

export default DASHBOARD