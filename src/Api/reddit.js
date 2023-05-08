
//main URL
export const API_ROOT = 'https://www.reddit.com/';

//Get posts
 export const fetchPosts= async (arg) =>{
//checks if arg is a subreddit or a searchTerm
//if it doesn't include 'search.json?q=' is a subreddit
  if(!arg.includes('search.json?q=')){
    //fetch will use subreddit endppoint to fetch posts
    const response = await fetch(`${API_ROOT}${arg}.json`);
    const json = await response.json();
    const postArr = json.data.children;

    return postArr
  }else{
    //fetch will use search endppoint to fetch posts
    const response = await fetch(`${API_ROOT}${arg}`);
    const json = await response.json();
    const postArr = json.data.children;

    return postArr
  
  }
  
};


//get subreddits to populate Communities component
export const fetchCommunities = async () =>{
 const response = await fetch(`${API_ROOT}subreddits.json`);
 const json = await response.json();
 const subredditArr = json.data.children;
  
  return subredditArr
};


//get comments for each post using the post's permalink url
//receives the post obj and extracts the permalink value
export const fetchComments = async ({permalink}) =>{
    const response = await fetch(`${API_ROOT}${permalink}.json`);
      const json = await response.json();
      const commentsArr = json[1].data.children;

      return  commentsArr.map(comment => comment.data);
};


//get trending posts to make the trending slides
export const fetchSlides = async () =>{
  const response = await fetch(`${API_ROOT}r/popular/hot.json`);
  const json = await response.json();
  const slideArr = json.data.children;

  return slideArr.map(slide => slide.data);
}