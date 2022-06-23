import Input from "./Input"
import Post from "./Post";

function Feed({posts}){
    const [realtimePosts, setRealtimePosts] = useState([]);
    const [handlePost, setHandlePost] = useRecoilState(handlePostState);
    const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
    return (
        <div className="space-y-6 pb-24 max-w-lg">
        <Input />
        {/* Posts */}
        {!useSSRPosts
            ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
            : posts.map((post) => <Post key={post._id} post={post} />)}
        </div>
    )
}
export default Feed