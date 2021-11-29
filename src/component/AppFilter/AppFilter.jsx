import './style.css'

export const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light" type='button'>
                All employees
            </button>
            <button className="btn btn-outline-light" type='button'>
                Raise the salary!
            </button>
            <button className="btn btn-outline-light" type='button'>
                Salary more than 1000$
            </button>
        </div>
    )
}