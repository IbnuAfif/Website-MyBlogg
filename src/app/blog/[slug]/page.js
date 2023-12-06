import axiosInstance from "@/app/axios";
import Image from "next/image";

async function getBlog(slug) {
  try {
    const res = await axiosInstance.get("/entries", {
      params: {
        "fields.slug": slug,
        limit: 1,
        content_type: "blogs",
      },
    });
    return {
      data: res.data.items[0],
      asset: res.data.includes.Asset[0],
    };
  } catch (error) {
    console.error(error);
    throw Error;
  }
}

export default async function Page({ params }) {
  const { data, asset } = await getBlog(params.slug);
  const { fields } = data;

  return (
    <>
      <section className="w-auto grid justify-center">
        <heading className="font-bold text-3xl mb-3">{fields.title}</heading>
        <div className="">
          <Image src={`https:${asset.fields.file.url}`} alt={asset.fields.title} height={400} width={400} />
        </div>
      </section>

      <section className="my-5 grid justify-center mx-4 md:mx-44">
        {fields.body.content.map((contentPart, index) => (
          <div className="text-justify mb-4" key={`documentPart-${index}`}>
            {contentPart.content[0].value}
          </div>
        ))}
      </section>
    </>
  );
}
