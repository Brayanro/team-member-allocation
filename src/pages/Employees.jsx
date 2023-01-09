import TeamMembers from "../components/TeamMembers"
import Teams from "../components/Teams"

const Employees = () => {
  return (
    <main className="container">
      <div className="row justify-content-center my-3">
        <div className="col-8">
          <Teams />
        </div>
      </div>
      <div className="row justify-content-center my-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees