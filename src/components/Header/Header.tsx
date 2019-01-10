import * as React from "react";
import { NavLink } from "react-router-dom";

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => (
  <div className={`header ${className}`}>
    <header>
      <NavLink to="nikuda"> Тут много много ссылок вот таких</NavLink>
    </header>
  </div>
);
