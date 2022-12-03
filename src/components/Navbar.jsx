import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { toast } from "react-toastify";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice";

export const Navbar = () => {
const isAuth = useSelector(checkIsAuth);
const dispatch = useDispatch();

const activeStyles = { color: "white" };

// логика выхода 
const logoutHandler = () => {
dispatch(logout())
window.localStorage.removeItem('token')
toast('Вы вышли из системы')
}

  return (
    <div className="flex py-4 justify-between items-center">
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/posts"}
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new"}
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white px-4 rounded-sm py-2">
        {isAuth ? <button onClick={logoutHandler}>Выйти</button> : <Link to={"/Login"}>Войти</Link>}
      </div>
    </div>
  );
};
