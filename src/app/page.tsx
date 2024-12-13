type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>شروع بوت کمپ!</h1>

      {/* It's better to be "ltr", because of English content*/}
      <p dir="ltr">Post List</p>

      <ul dir="ltr">
        {posts.map((post: Post) => (
          <>
            <li key={post.id}>Title: {post.title}</li>
            <ul>
              <li>{post.body}</li>
            </ul>
          </>
        ))}
      </ul>
    </main>
  );
}
