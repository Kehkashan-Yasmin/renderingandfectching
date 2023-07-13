import Link from 'next/link';
// by default behavior of fetch() API 
// we use dummyjson.com api to practice in this session
// 'https://dummyjson.com/posts'

// create a async await function to use fetch()

async function getPosts(){
    const posts = await fetch('https://dummyjson.com/posts');

    if(!posts.ok){
        throw new Error('Fetching Failed')
    }

    return posts.json();
}


// Function component that is responsible to show the page
const Blog = async() => {
    // we call / invoke above created fetch function here

    const posts = await getPosts();
    const allPosts = posts.posts;
    console.log(posts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-12">
        {/*we write js code within html tags using jsx curly braces*/}
        {allPosts.map(post=>{
            return <div className="border border-cyan-500 p-4 rounded-md">
                <h1 className="mb-5 text-2xl font-semibold">{post.title}</h1>
                <p>{`${post.body.slice(0,100)} [...]`}</p>
                <Link className="inline-block p-2 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 duration-500  rounded-md" href={`/blog/${post.id}`}>Read More</Link>
            </div>

                



        })}
    </div>
  )
}

export default Blog