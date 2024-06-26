import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "/images/logo.png"
export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col bg-purple-400 gap-5 justify-center items-center">
          <Image alt="logo" width={250} height={250} src={logo}/>
          <Button asChild className="bg-purple-700">
            <Link href={'/story'}>Explore Story Library</Link>
          </Button>

        </div>
      </section>
    </main>
  );
}
