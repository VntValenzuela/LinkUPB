import { Avatar,IconButton  } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Post({post, modalPost}){
    const [modalOpen, setModalOpen] = useRecoilState(modalState);
    return (
        <div className={`bg-white dark:bg-[#1D2226] ${
            modalPost ? "rounded-r-lg" : "rounded-lg"
          } space-y-2 py-2.5 border border-gray-300 dark:border-none`}>
            <img src={post.photoUrl} alt=""></img>
            <p>{post.input}</p>

            <div className="flex items-center px-2.5 cursor-pointer">
                <Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer"></Avatar>
                <div className="mr-auto ml-2 leading-none">
                    <h6 className="font-medium hover:text-blue-500 hover:underline">
                        {post.username}
                    </h6>
                    <p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
                    <TimeAgo
                        datetime={post.createdAt}
                        className="text-xs dark:text-white/75 opacity-80"
                    />
                </div>
                {modalPost ? (
                <IconButton onClick={() => setModalOpen(false)}>
                    <CloseRoundedIcon className="dark:text-white/75 h-7 w-7" />
                </IconButton>
                ) : (
                <IconButton>
                    <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
                </IconButton>
                )}
            </div>
        </div>
    );
}
export default Post;