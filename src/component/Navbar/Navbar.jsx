import { TbCoin } from "react-icons/tb";
import profile from "../../images/logo.png";
const Navbar = ({amount}) => {

  return (
    <div className=" p-4 sticky top-0 z-50 bg-white/30 backdrop-blur-xl border-b border-white/20">
      {/* navbar  */}
      <div class="navbar md:w-5/6 mx-auto">
        <div class="flex-1">
          <img className="size-12" src={profile} alt="" />
        </div>
        <div class="flex items-center md:gap-4">
          <div>
            <ul class="flex md:gap-5 gap-2 px-1 md:text-lg">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn">Coin: {amount} <TbCoin className="size-6 text-orange-600"></TbCoin> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
