import { AppInfo } from '../AppInfo/AppInfo'
import { SearchPanel } from '../SearchPanel/SearchPanel'
import { AppFilter } from '../AppFilter/AppFilter'
import { EmployeesList } from '../EmployeesList/EmployeesList'
import { EmployeesAddForm } from '../EmployeesAddForm/EmployeesAddForm'
import './app.css'

export const App = () => {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList />
            <EmployeesAddForm />
        </div>
    )
}