import { GET as fetchUsers, POST } from "@/app/api/posts/route";
const generateStaticParams = async () => {
  const response = await fetchUsers();
  const posts = await response.json();
  return posts.map((post: POST) => ({
    slug: post.slug,
  }));
};
generateStaticParams();
const PostDynamic = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <div className="h-screen flex flex-col items-center justify-center text-2xl font-bold">
      This is a Dynamic Route : {slug}
      <br />
      <p>
        This path /posts uses the getStaticParams() to generate the pages during
        build time.
      </p>
      <p>app/posts/[slug]/page.tsx</p>
    </div>
  );
};

export default PostDynamic;
