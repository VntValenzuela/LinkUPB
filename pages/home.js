import Image from "next/image";
//import logo from '../media/Logo.png'
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function Home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
        <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
            </div>
            <div className="flex items-center sm:divide-x divide-gray-300">
              <div className="hidden sm:flex space-x-8 pr-4">
              <HeaderLink Icon={ExploreIcon} text="Discover" />
              <HeaderLink Icon={GroupIcon} text="People" />
              <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
              <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
              </div>
              <div className="pl-4"> 
                <button className="text-blue-700 font-semibold rounded-full
                border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
                  Sign in
                </button>
              </div>
              
            </div>

       </header>
       <main className="flex flex-col xl:flex-row items-center 
          max-w-screen-lg mx-auto">
              <div className="space-y-6 xl:space-y-10"> 
                  <hi1 className="text-3xl md:text-5xl text-blue-800/90
                  max-w-xl !leading-snug pl-4 xl:pl-0"> UPB garantiza excelencia ...</hi1>
              </div>
          </main>
    </div> 
    );
}
export default Home