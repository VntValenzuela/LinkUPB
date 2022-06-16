import Image from "next/image";

function Sidebar() 
{
    return (
        <div className="space-y-2 min-w-max max-w-lg">
        <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
            <Image src="https://rb.gy/i26zak" layout="fill" priority/>


        </div>
        </div>
    )
}

export default Sidebar;