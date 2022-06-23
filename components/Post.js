function Post({post, modalPost}){
    return (
        <div className={`bg-white dark:bg-[#1D2226] ${
            modalPost ? "rounded-r-lg" : "rounded-lg"
          } space-y-2 py-2.5 border border-gray-300 dark:border-none`}>
            <img src={post.photoUrl} alt=""></img>
            <p>{post.input}</p>
        </div>
    );
}
export default Post;