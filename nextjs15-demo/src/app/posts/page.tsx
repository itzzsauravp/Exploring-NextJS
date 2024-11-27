import { GET as fetchUsers, POST } from "@/app/api/posts/route";
const generateStaticParams = async () => {
  const response = await fetchUsers();
  const posts = await response.json();
  console.log(posts);
  return posts.map((post: POST) => ({
    slug: post.slug,
  }));
};
generateStaticParams();
const Post = () => {
  return (
    <div className="h-screen flex items-center justify-center text-2xl font-bold">
      Post
    </div>
  );
};

export default Post;
