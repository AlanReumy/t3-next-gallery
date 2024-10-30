import FullPageImageView from "@/components/full-image-page";

const PhotoPage = async ({
  params: { id: photoId },
}: {
  params: { id: string };
}) => {
  const idAsNumber = Number(photoId);
  return <FullPageImageView id={idAsNumber} />;
};

export default PhotoPage;
