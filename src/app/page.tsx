import { getMyImages } from "@/server/quries";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function ImageList() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.url} className="w-48" alt="" />
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
