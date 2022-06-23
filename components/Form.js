import { useSession } from "next-auth/react";
import { useState } from "react"

function Form(){
    const [input, setInput] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const {data: session } = useSession();
    const uploadPost = async(e) => {
        e.preventDefault();

        const response = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            input: input,
            photoUrl: photoUrl,
            username: session.user.name,
            email: session.user.email,
            userImg: session.user.image,
            createdAt: new Date().toString()
          })
        })
    };
    return (
        <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
        <textarea
          rows="4"
          placeholder="¿De qué quieres hablar?"
          className="bg-transparent focus:outline-none dark:placeholder-white/75"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
        type="text"
        placeholder="Añadir una foto URL (opcional)"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <button
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        type="submit"
        onClick={uploadPost}
        disabled={!input.trim() && !photoUrl.trim()}
      >
        Post
      </button>
        </form>
    )
}
export default Form