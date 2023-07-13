import Link from 'next/link';
// by default behavior of fetch() API 
// we use dummyjson.com api to practice in this session
// 'https://dummyjson.com/posts'

// create a async await function to use fetch()

async function getPost(id){
    const post = await fetch(`https://dummyjson.com/post/${id}`);

    if(!post.ok){
        throw new Error('Fetching Failed')
    }

    return post.json();
}


// Function component that is responsible to show the page
const Blog = async({params}) => {
    // we call / invoke above created fetch function here

    const post = await getPost(params.id);
    //const allPosts = posts.posts;
    //console.log(posts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-12">
        {/*we write js code within html tags using jsx curly braces*/}
        
            <div className="border border-cyan-500 p-4 rounded-md">
                <h1 className="mb-5 text-2xl font-semibold">{post.title}</h1>
                <p className='mb-5'>{post.body}</p>
            </div>

             

      
    </div>
  )
}

export default Blog