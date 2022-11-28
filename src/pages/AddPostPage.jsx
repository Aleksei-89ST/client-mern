import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/post/postSlice";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      // специальная коллекция данных, которая позволяет передавать данные в виде пар [ключ, значение] на сервер
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);
      dispatch(createPost(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const clearForm = () => {
    setTitle("");
    setText("");
  };

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изображение
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <div className="flex object-cover py-2">
        {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
      </div>
      <label className="text-xs text-white opacity-70 ">
        Заголовок поста:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
          placeholder="Заголовок"
        />
      </label>
      <label className="text-xs text-white opacity-70 ">
        Текст поста:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none h-40 resize-none placeholder:text-gray-700"
          placeholder="Текст поста"
        />
      </label>
      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
          onClick={submitHandler}
        >
          Добавить пост
        </button>
        <button
          onClick={clearForm}
          className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
        >
          Отменить пост
        </button>
      </div>
    </form>
  );
};
export default AddPostPage;
