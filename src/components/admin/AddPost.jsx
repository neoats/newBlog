import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [previewContent, setPreviewContent] = useState("");

  const handleAddPost = () => {
    // Ekleme işlemi burada gerçekleştirilebilir.
    console.log("Post eklendi:", title);
    setPreviewContent(title);
    setTitle("");
  };

  return (
    <div className="flex gap-8 mx-32">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Add Post</h2>
        <form>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        <button
          onClick={handleAddPost}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Post
        </button>
        </form>
      </div>
      <div id="preview" className="w-1/2 p-4 border border-gray-300 rounded">
        <h3 className="text-lg font-bold mb-2">Preview:</h3>
        <p>{previewContent}</p>
      </div>
    </div>
  );
};

export default AddPost;
