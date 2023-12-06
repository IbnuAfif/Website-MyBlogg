import Image from "next/image";

const CardContent = ({ title, image }) => {
  return (
    <div className="grid justify-center my-40">
      <div className="w-auto">
        <Image src={image} alt="..." width={250} height={250} />
      </div>
      <div className="grid justify-center my-2">
        <h3 className="font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default CardContent;
