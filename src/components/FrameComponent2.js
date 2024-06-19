import PropTypes from "prop-types";
import { DashboardOutlined } from 'antd';
import { RxDashboard,} from "react-icons/rx";
import { HiOutlineWrenchScrewdriver} from "react-icons/hi2";
import { TbFileInvoice } from "react-icons/tb";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { BsListCheck } from "react-icons/bs";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrDocument } from "react-icons/gr";
import { LiaSmsSolid } from "react-icons/lia";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { CiCreditCard2 } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { PiUserCircleGearLight } from "react-icons/pi";
import { PiGearSixLight } from "react-icons/pi";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[80px] left-[0px] shadow-[0px_9px_16px_rgba(159,_162,_191,_0.18)] bg-color-states-common-white w-56 flex flex-col items-start justify-start pt-[45px] px-[3px] pb-[23px] box-border gap-[25px] text-left text-sm text-darkslategray font-roboto ${className}`}
    >
      <img
        className="w-56 h-[988px] relative hidden"
        alt=""
        src="/rectangle-2.svg"
      />
      <div className="w-[83px] h-[239px] relative hidden text-black font-proxima-nova">
        <div className="absolute top-[0%] left-[0%]">Products</div>
        <div className="absolute top-[15.48%] left-[0%]">Listings</div>
        <div className="absolute top-[30.96%] left-[0%]">Variants</div>
        <div className="absolute top-[46.44%] left-[0%]">Batches</div>
        <div className="absolute top-[61.92%] left-[0%]">Stock Control</div>
        <div className="absolute top-[77.41%] left-[0%]">Price Lists</div>
        <div className="absolute top-[92.89%] left-[0%]">Archive</div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <RxDashboard className="h-6 w-6 relative z-[1]" />
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[68px] z-[1]">
              Dashboard
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[41px] pl-[37px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-0 gap-[11px] z-[1]">
        <HiOutlineWrenchScrewdriver className="h-6 w-6 relative z-[1]" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <div className="relative inline-block min-w-[8  0px] z-[2]">
              Service Jobs
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-0 gap-[7px] text-salmon-100">
        <div className="flex flex-col items-start justify-start pt-[9.1px] px-0 pb-0">
          <div className="w-[5px] h-[18px] relative rounded-8xs bg-salmon-100 z-[1]" />
        </div>
        <div className="flex-1 rounded-18xl bg-lavenderblush flex flex-row items-start justify-start pt-[6.5px] px-[23px] pb-[7px] z-[1]">
          <div className="h-[37px] w-[194px] relative rounded-18xl bg-lavenderblush hidden" />
          <div className="h-[23.5px] w-[143px] flex flex-row items-start justify-start pt-[3.4px] px-px pb-[0.3px] box-border relative gap-[11px] z-[2]">
          <TbFileInvoice className="relative inline-block min-w-[8  0px] z-[2]" />
            <div className="w-[76px] relative font-medium inline-block shrink-0 z-[1]">
              Invoices
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <PiShoppingCartSimpleLight   className="relative inline-block min-w-[8  0px] z-[2]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[71px] z-[1]">
              Customers
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <CiStar className="relative inline-block min-w-[8  0px] z-[2]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[57px] z-[1]">
              Products
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[41px] pl-[37px]">
        <BsListCheck className="relative inline-block min-w-[8  0px] z-[2]" />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
          <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[67px] z-[1]">
            Offered Services
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <IoExtensionPuzzleOutline className="flex flex-col items-start justify-start pt-0 px-0 pb-0"  />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[36px] z-[1]">
              Parts
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <CiCircleAlert className="flex flex-col items-start justify-start pt-0 px-0 pb-0"  />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[58px] z-[1]">
              Enquiries
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <MdPeopleOutline className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-[0px] px-0 pb-0">
            <div className="relative inline-block min-w-[36px] z-[1]">
              Users
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <IoKeyOutline className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[80px] z-[1]">
              Permissions
            </div>
          </div> 
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <PiIdentificationBadgeLight  className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[35px] z-[1]">
              Roles
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[42px] pl-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <MdOutlineMailOutline className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[104px] z-[1]">
              Email Templates
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <GrDocument className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[96px] z-[1]">
              PDF Templates
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <LiaSmsSolid className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[98px] z-[1]">
              SMS Templates
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <HiOutlinePaintBrush className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[55px] z-[1]">
              Theming
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <CiCreditCard2 className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[120px] z-[1]">
              Payment Gateways
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <GoDatabase className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[47px] z-[1]">
              Backup
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[41px] pl-[37px]">
        <PiUserCircleGearLight className="flex flex-row items-start justify-start gap-[11px]"  />
        <div className="flex flex-row items-start justify-start pt-[0px] pb-[3px] pr-[13px] pl-[5px] relative z-[1]">
          <div className="relative inline-block min-w-[92px] z-[1]">
            Configurations
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[37px]">
        <div className="flex flex-row items-start justify-start gap-[11px]">
        <PiGearSixLight className="flex flex-row items-start justify-start gap-[11px]" />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0">
            <div className="relative inline-block min-w-[52px] z-[1]">
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2