import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "/images/logo.png"
export default function Home() {
  return (
    <main>
      <section>
        <Image alt="logo" width={10} height={10} src={logo}/>
        <Button asChild className="bg-purple-700">
          <Link href={'/story'}>Explore Story Library</Link>
        </Button>
      </section>
    </main>
  );
}
