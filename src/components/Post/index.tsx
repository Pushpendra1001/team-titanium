import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from "react"
import { MdOutlineShareLocation } from "react-icons/md"
export default function () {
    const editorRef = useRef(null);
    const log = (e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <section className="relative left-0 w-full min-h-[100vh] bg-white  pt-8 pb-[70px]">
            <div className="w-full md:max-w-[750px] lg:max-w-[1000px] mx-auto px-6">
                <h2 className='text-lg text-brand-ember-l-3 mb-3'>Write Your Issue & Publish</h2>
                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full md:w-1/2 px-3 mb-5">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Issue Title
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " type="text" placeholder="Title" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Your Location
                            </label>
                            <div className="relative">
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Write Location or click on pin" />
                                <button className='w-[45px] h-[45px] rounded-md flex items-center justify-center bg-brand-ember-l-1 text-brand-ember-l-3 text-2xl absolute top-0 right-0'><MdOutlineShareLocation /></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Your Message
                            </label>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>Write Your Description.</p>"
                                apiKey='bfh1xf6f9lzo129vyx7jydqmlxrk82uv39aptmbxwklpzmgd'
                                init={{
                                    height: 500,
                                    menubar: true,
                                    plugins: [
                                        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                                        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                    ],
                                    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                        'alignleft aligncenter alignright alignjustify | ' +
                                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
                                }}
                            />
                            <button onClick={log}>Log editor content</button>
                        </div>
                    </div>
                    <div className="flex justify-end w-full px-3 mb-8">
                        <button className="shadow bg-brand-ember-l-3 hover:bg-brand-ember-l-4 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}