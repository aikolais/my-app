import TableOrganizations from './components/TableOrganizations/TableOrganizations';
import Navbar from './navbar/Navbar';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import DetailsListBasicExample from './components/TableOrganizations/DetailsListBasicExample';

initializeIcons();

function App() {
  return (
    <div className="container-geral">
    <Navbar />
    <TableOrganizations />
    <DetailsListBasicExample />
    </div>
  );
}

export default App;