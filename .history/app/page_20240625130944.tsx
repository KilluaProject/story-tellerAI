import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <Button asChild className="bg-purple-700 p-5 text-xl">
          <Link href={'/story'}>Explore Story Library</Link>
        </Button>
      </section>
    </main>
  );
}
