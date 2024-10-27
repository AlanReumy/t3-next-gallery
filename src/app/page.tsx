import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
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
    </main>
  );
}
