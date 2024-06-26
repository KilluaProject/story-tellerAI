import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <Button asChild className="bg-purple-700 ">
          <Link href={'/story'}>Explore Story Library</Link>
        </Button>
      </section>
    </main>
  );
}
