import React from "react";
import './styles.css';
import { Icon } from '@fluentui/react/lib/Icon';

const MyIcon = () => <Icon iconName="Filter" />;


class Organizations extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="container-btn">
        <h2>Organizações</h2>
<div className="container-btn__btn">

          <button className="btn table-organizations__add" type="submit">
            + Nova Organização
          </button>
          <button className="btn table-organizations__filter" type="submit">
           <MyIcon /> Filtrar organizações
          </button>
</div>
        </div>

        <div className="table-organizations">
        <table className="table-organizations">
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