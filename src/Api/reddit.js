
//main URL
export const API_ROOT = 'https://www.reddit.com/';

//Get posts from subreddits
 export const fetchPosts = async (subreddit) =>{
  //fetch using the subreddit value as endopoint
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();
  const postArr = json.data.children;

  return postArr.map( post => post.data);
};

//get subreddits to populate Communities component
export const fetchCommunities = async () =>{
 const response = await fetch(`${API_ROOT}subreddits.json`);
 const json = await response.json();
 const subredditArr = json.data.children;
  
  return subredditArr.map( subreddit => subreddit.data);
};


//get comments for each post using the post's permalink url
//receives the post obj and extracts the permalink value
export const fetchComments = async ({permalink}) =>{
    const response = await fetch(`${API_ROOT}${permalink}.json`);
      const json = await response.json();
      const commentsArr = json[1].data.children;

      return  commentsArr.map( comment => comment.data);
};