"use client";
import { usePathname } from 'next/navigation';

const Notfound = () => {

const pathname=usePathname();
const id=pathname.split("/")[2];
  return (
    <div>
      Only products code below 1000 for the id {id}
    </div>
  )
}

export default Notfound
