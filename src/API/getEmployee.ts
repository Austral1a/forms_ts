import {home} from '../url'

interface Employee {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
}

export const getEmployee = (id: number): Promise<Employee> => {
    const resource: string = `${home}/employees?id=${id}`
    return fetch(resource)
        .then((res) => res.json())
        .then((employee: Employee) => employee)
}
