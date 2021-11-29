import { EmployeesListItem } from '../EmployeesListItem/EmployeesListItem'
import './style.css'

export const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    )
}