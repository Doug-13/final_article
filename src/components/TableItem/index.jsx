import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";
import "./index.css";

// Insira a prop necessária.
export const TableItem = () => {
  // Insira nos elementos td a className="tableColumn"
  return (
    <tr>
      <td>{formatDate(item.date)}</td>
      <td>
        <div
          className="category"
          style={{ color: categories[item.category].color }}
        >
          {categories[item.category].title}
        </div>
      </td>
      <td>{item.title}</td>
      <td>
        <div
          className="value"
          style={{
            color: categories[item.category].expense ? "red" : "green",
          }}
        >
          R$ {item.value}
        </div>
      </td>
    </tr>
  );
};
