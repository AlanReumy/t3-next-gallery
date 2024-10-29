import { getMyImages } from "@/server/quries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function ImageList() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((item) => {
        return (
          <div key={item.id} className="flex h-48 w-48 flex-col">
            <Image
              src={item.url}
              style={{
                objectFit: "contain",
              }}
              width={192}
              height={192}
              alt={item.name}
            />
            <div key={item.id}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>please sign in above</SignedOut>
      <SignedIn>
        <ImageList />
      </SignedIn>
    </main>
  );
}
