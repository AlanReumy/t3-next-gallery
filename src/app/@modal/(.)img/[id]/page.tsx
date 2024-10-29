import { getImage } from "@/server/quries";

const PhotoModal = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const idAsNumber = Number(photoId);
  const image = await getImage(idAsNumber);

  return (
    <div>
      <img src={image.url} className="w-96" alt="" />
    </div>
  );
};

export default PhotoModal;
