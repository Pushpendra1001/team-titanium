import { BiDownvote, BiUpvote } from "react-icons/bi";
import posts from '../../utils/posts.json'
export default function PostInnerPage({post}:{post:{catagory:string,title:string}}) {

    return (
        <section className="relative left-0 w-full min-h-[100vh] bg-white ">
            <div className="md:max-w-[750px] mx-auto h-full px-6 pt-12 pb-[80px]">
                <small className='text-brand-ember-l-3 mb-3 text-xs font-medium' style={{ letterSpacing: "3px" }}>{post?.department || "Unknown Department"}</small>
                <h2 className='text-brand-ember-l-2 text-lg mb-3'> {post?.title}</h2>
                <p className='text-sm text-gray-600 mb-2 leading-6'> {post?.description}</p>
                <p className='mb-3 text-sm text-brand-ember-l-3 leading-6'>Are you satisfied with this Problems ?</p>
                <div className='flex items-center mb-4'>
                    <p className='text-brand-ember-l-2 text-xs flex gap-0.5 items-center pr-2 border-r border-gray-200'><BiUpvote />{post?.upvote} Upvote</p>
                    <p className='text-red-600 text-xs flex gap-0.5 items-center pl-2'><BiDownvote />{post?.downvote} Downvote</p>
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}