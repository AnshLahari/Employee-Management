import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee/AddEmployee.jsx';
import EmployeeListData from './Components/EmployeeData/EmployeeListData.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddEmployee />} />
        <Route path='/list' element={<EmployeeListData />} />
      </Routes>
    </BrowserRouter>
    //     <div>
    //  <AddEmployee/>
    //  <EmployeeListData/>

    //     </div>
  );
}

export default App;
