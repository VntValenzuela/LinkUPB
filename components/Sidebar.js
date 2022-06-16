import Image from "next/image";
import {Avatar} from "@mui/material";
function Sidebar() 
{
    return (
        <div className="space-y-2 min-w-max max-w-lg">
        <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
            <div className="relative w-full h-14">
                <Image src="https://rb.gy/i26zak" layout="fill" priority/>
            </div>
        <Avatar 
           // onClick={signOut}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-q3WWsLEVdDsXEddGHxpoE00Y2knvcEJ5pAmjsoUM2DFPFxfZO7_Y2GjBunSUmlbJds&usqp=CAU"
            classname="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"    
        />
        </div>
        <div>
            <h4>Carolina Quiroga</h4>
            <p>carolinaquiroga@upb.edu</p>
        </div>
        </div>
    )
}

export default Sidebar;