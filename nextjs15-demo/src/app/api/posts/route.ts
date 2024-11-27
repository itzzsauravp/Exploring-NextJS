export type POST = {
  id: number;
  author: string;
  slug: string;
};

const MY_POSTS: POST[] = [
  { id: 1, author: "Saurav", slug: "first-post" },
  { id: 2, author: "Saurav", slug: "second-post" },
  { id: 3, author: "Saurav", slug: "third-post" },
];
const GET = async () => {
  return Response.json(MY_POSTS);
};
export { GET };
