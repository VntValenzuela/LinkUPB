import Image from "next/image";
import logo from '../media/Logo.png'
function Home() {
  return (
    <div>
      <header >
        <div className="relative w-36 h-10">
              <Image src={logo} layout="fill" objectFit="contain" />
            </div>
            <div className="flex items-center sm:divide-x divide-gray-300">
              <div >hola</div>
              
              <div >mundo</div>
            </div>
       </header>
    </div> 
    );
}
export default Home