
//main URL
export const API_ROOT = 'https://www.reddit.com/';

//Get posts
 export const fetchPosts= async (arg) =>{
//checks if arg is a subreddit or a searchTerm
//if it doesn't include 'search.json?q=' is a subreddit
  if(!arg.includes('search.json?q=')){
    //fetch will use subreddit endppoint to fetch posts
    const response = await fetch(`${API_ROOT}${arg}.json?raw_json=1`);
    const json = await response.json();
    const postArr = json.data.children; 
       
    return postArr

  }else{
    //fetch will use search endppoint to fetch posts
    const response = await fetch(`${API_ROOT}${arg}?raw_json=1`);
    const json = await response.json();
    const postArr = json.data.children; 
       
    return postArr
  }
  
};


//get subreddits to populate Communities component
export const fetchCommunities = async () =>{
 const response = await fetch(`${API_ROOT}subreddits.json?raw_json=1`);
 const json = await response.json();
 const subredditArr = json.data.children;
  
  return subredditArr
};


//get comments for each post using the post's permalink url
export const fetchComments = async (permalink) =>{
    const response = await fetch(`${API_ROOT}${permalink}.json?raw_json=1`);
      const json = await response.json();
      const jsonSubArr = json[1];
      const commentsArr = jsonSubArr.data.children;
      
      return  commentsArr
};


//get trending posts to make the trending slides
export const fetchSlides = async () =>{
  const response = await fetch(`${API_ROOT}r/pics.json?raw_json=1`);
  const json = await response.json();
  const slideArr = json.data.children;

  return slideArr
};


//load more post after the last shown
export const fetchMorePosts = async (obj) =>{
  const response = await fetch(`${API_ROOT}${obj.getPostsArg}.json?after=${obj.lastPostArg}?raw_json=1`);
  const json = await response.json();
  const postsArr = json.data.children;

  return postsArr
}