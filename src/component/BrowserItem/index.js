import './index.css'

const BrowserItem = props => {
  const {browserDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails
  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="card">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="title-container">
          <div className="domain-container">
            <img src={logoUrl} className="logo-img" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={onDeleteHistory}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              className="delete-img"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserItem
