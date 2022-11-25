import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    // предотвратить перезагрузку/обновление браузера
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Авторизация</h1>
      <label className="text-xs to-gray-400">
        Username:
        <input
          type="text"
          placeholder="Username"
          className="mt-1 to-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <label className="text-xs to-gray-400">
        Password:
        <input
          type="password"
          placeholder="Password"
          className="mt-1 to-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button type="submit"
        className="flex justify-center bg-gray-600 items-center text-xs text-white rounded-sm py-2 px-4"
        >
Войти
        </button>
        <Link to="/register"
        className="flex justify-center items-center text-xs text-white "
        >
Нет аккаунта?
        </Link>
      </div>
    </form>
  );
};
export default LoginPage;