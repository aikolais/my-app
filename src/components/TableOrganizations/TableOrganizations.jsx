import React from "react";
import './styles.css';
import { FiFilter } from 'react-icons/fi';



class Organizations extends React.Component {
  render() {
    return (
      <div className="container">

          <h2>Organizações</h2>

        <div className="container-btn">
          <button className="btn table-organizations__add" type="submit">
            + Nova Organização
          </button>
          <button className="btn table-organizations__filter" type="submit">
           <FiFilter size={15}/> Filtrar organizações
          </button>
        </div>
        
        <div className="table-organizations">
        <table className="table-organizations__items" border="1">
          <tr>
            <th className="table-name">Nome</th>
          </tr>
          <tr>
            <td className="table__item" rowspan="4">W3K</td>
            <td className="table__item" rowspan="4">Organization 1</td>
            <td className="table__item" rowspan="4">Organization 2</td>
            <td className="table__item" rowspan="4">Organization 3</td>
          </tr>
        </table>
        </div>
      </div>
    );
  }
}

export default Organizations;
