import Image from "next/image"
import Transitions from "./Transitions"

const AvatarServices = () => {
  return (
   <Transitions position="bottom"className="bottom-0 left-0 hidden md:inline-block md:absolute" >
    <Image src="/Avatar2.png" width={300} height={300} className="w-full h-full" alt="Avatar"/>
   </Transitions>
  )
}

export default AvatarServices