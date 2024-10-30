import { getImage } from "@/server/queries";

const FullPageImageView = async (props: { id: number }) => {
  const image = await getImage(props.id);
  return <img src={image.url} className="w-96" alt="" />;
};

export default FullPageImageView;
