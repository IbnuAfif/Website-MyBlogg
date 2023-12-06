import Image from "next/image";
import CardContent from "./components/cardContent";
import Background from "./components/Background";
import axiosInstance from "./axios";
import Link from "next/link";

async function fetchBlogs() {
  try {
    const res = await axiosInstance.get("/entries", { params: { include: 2 } });
    return { items: res.data.items, asset: res.data.includes.Asset };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default async function Home() {
  const { items: blogsData, asset } = await fetchBlogs();
  const blogList = blogsData.map((blog) => blog.fields);

  return (
    <section>
      <Background />
      <div className="grid grid-cols-2 gap-4 mx-4 my-3">
        {blogList.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug}>
            {" "}
            <CardContent title={blog.title} image={`https:${asset[index].fields.file.url}`} />
          </Link>
        ))}
      </div>
    </section>
  );
}

// (<h1 key={blog.slug}>{blog.title}</h1>)
