import React, { useEffect, useState } from 'react'
import { getEmployeesFromDatabase } from '../../Service/Employee/getEmployeeDataList'
import styles from  "./EmployeeListTable.module.css"


const EmployeeListData = () => {
  const [getEmployeeListFromFirebse, setGetEmployeeListFromFirebse] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const result = await getEmployeesFromDatabase()
    console.log(result)
    setGetEmployeeListFromFirebse(result)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Employee List</h1>
      {getEmployeeListFromFirebse.length === 0 ? (
        <p className={styles.noData}>No employee data found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Employee Code</th>
              <th className={styles.tableHeader}>Email</th>
              <th className={styles.tableHeader}>Username</th>
              <th className={styles.tableHeader}>Password</th>
            </tr>
          </thead>
          <tbody>
            {getEmployeeListFromFirebse.map((employee) => (
              <tr key={employee.empCode} className={styles.tableRow}>
                <td className={styles.tableCell}>{employee.empCode}</td>
                <td className={styles.tableCell}>{employee.email}</td>
                <td className={styles.tableCell}>{employee.username}</td>
                <td className={styles.tableCell}>{employee.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default EmployeeListData
