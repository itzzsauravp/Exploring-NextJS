import { revalidatePath } from "next/cache";
type User = {
  name: string;
  id: number;
};
const MockUsers = async () => {
  const res = await fetch("https://6749657d868020296630d359.mockapi.io/users");
  const data = await res.json();
  const addUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("fullname");
    const res = await fetch(
      "https://6749657d868020296630d359.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    if (newUser) {
      revalidatePath("/mock-users");
    }
    console.log(newUser);
  };
  return (
    <div className="mt-12">
      <div>
        <form action={addUser} className="flex gap-4 justify-center">
          <input
            type="text"
            name="fullname"
            className="border px-2 outline-none focus:border-purple-900 text-black"
            placeholder="Full Name:"
          />
          <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md">
            Add User
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-12">
        {data.map((user: User, _: number) => (
          <div key={_} className="bg-white text-black p-4 rounded-md">
            {" "}
            {user.name}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockUsers;
