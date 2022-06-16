import Image from "next/image";
import {Avatar} from "@mui/material";
function Sidebar() 
{
    return (
        <div className="space-y-2 min-w-max max-w-lg">
            `<div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
                <div className="relative w-full h-14">
                    <Image src="https://rb.gy/i26zak" layout="fill" priority/>
                </div>
            <Avatar 
            // onClick={signOut}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-q3WWsLEVdDsXEddGHxpoE00Y2knvcEJ5pAmjsoUM2DFPFxfZO7_Y2GjBunSUmlbJds&usqp=CAU"
                classname="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"    
            />
            </div>
            <div className="mt-5 py-4 spay-x-0.5">
                <h4 className="hover:underline decoration-blue-700 underline-offset-1 cursor-pointer">
                    Carolina Quiroga</h4>
                <p className="text-black/60 dark:text-white/75 text-sm">carolinaquiroga@upb.edu</p>
            </div>
            <div className="hidden md:inline text-left dark:text-white/75 text-sm">
                <div className="font-medium sidebarButton space-y-0.5">
                    <div className="flex justify-between space-x-2">
                        <h4>Who viewed you profile</h4>
                        <span className="text-blue-500">450</span>
                    </div>
                    <div className="flex justify-between space-x-2s">
                        <h4>Views of your post</h4>
                        <span className="text-blue-500">130</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;