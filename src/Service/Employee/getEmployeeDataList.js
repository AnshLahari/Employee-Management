import { ref,get, } from 'firebase/database';
import {database} from '../../firebase.js'


export const getEmployeesFromDatabase =() => {
    return new Promise((resolve) => {
        get(ref(database, '/Employees')).then((snapshot) => {
          const data = snapshot.val();
      
          
          // If the data is available and is not empty, map it to the desired format
          if (data) {
            const formattedData = Object.keys(data).map((empCode) => ({
              empCode,
              email: data[empCode].email,
              username: data[empCode].name, // Assuming 'name' is the username
              password: data[empCode].password,
            }));
      
            
            resolve(formattedData);
          } else {
            resolve([]); // In case there is no data, return an empty array
          }
        }).catch((error) => {
          
          resolve([]); // Return empty array in case of an error
        });
      });
  };