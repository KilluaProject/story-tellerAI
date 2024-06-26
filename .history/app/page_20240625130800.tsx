import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <Button asChild className="bg-purple-600">Generate Story
          <Link href={'/story'}> </Link>
        </Button>
      </section>
    </main>
  );
}
