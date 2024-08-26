
import Link from "next/link";
export default function Home() {

  return (
    <>
       <h1> Dynamic pages</h1>
       <ul>
        <li><Link href="/bilal">  bilal </Link></li>
        <li><Link href="/waseem"> waseem </Link></li>
        <li><Link href="/123"> ahmed </Link></li>
       </ul>
   
   </>
  );
}
