import * as React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "src/store/intefaces";

interface ICategoriesContainerProps {
  categories: ICategory[];
}

export const CategoriesWrapper = ({
  categories
}: ICategoriesContainerProps) => (
  <div className="categories-container">
    {categories.map(category => (
      <React.Fragment>
        <h3>{category.name}</h3>
        {category.boards.map(board => (
          <Link to={`/${board.board}`}>{board.board_name}</Link>
        ))}
      </React.Fragment>
    ))}
  </div>
);
