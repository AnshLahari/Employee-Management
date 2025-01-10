import { ref, update } from "firebase/database";
import { database } from "../../firebase";

export const saveEmployeeToDatabase = (employeeCode, employeeName, email, password) => {
    return new Promise((resolve, reject) => {
        let path = `Employees/${employeeCode}`
        const employeeData = {
            name: employeeName,
            email: email,
            password: password,
        };
        const employeeRef = ref(database, path);
        update(employeeRef, employeeData)
            .then(() => {
                resolve("employee data save successfully");
            })
            .catch((error) => {
                reject("error saving employee data: " + error.message);
            });
    });
};
 
