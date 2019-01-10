import * as React from "react";
import { NavLink } from "react-router-dom";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => (
  <div className={`header ${className}`}>
    <header>
      <NavLink to="nikuda"> Тут </NavLink>
      <NavLink to="nikuda"> много </NavLink>
      <NavLink to="nikuda"> много </NavLink>
      <NavLink to="nikuda"> много </NavLink>
      <NavLink to="nikuda"> много </NavLink>
      <NavLink to="nikuda"> много </NavLink>
      <NavLink to="nikuda"> ссылок </NavLink>
      <NavLink to="nikuda"> вот </NavLink>
      <NavLink to="nikuda"> таких</NavLink>
    </header>
    <div className="logo">
      <div className="logo-img">Logo</div>
      <div className="welcomefriend">Добро пожаловать. Снова.</div>
    </div>
  </div>
);
