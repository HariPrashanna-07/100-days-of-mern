import "./ProfileCard.css"

function ProfileCard(props){
    return(
        <div className="card">
            <div className="card-header">
                <h2>{props.name}</h2>
                <span className="badge">{props.role}</span>

            </div>
            <div className="card-body">
                <p><strong>Location : </strong>{props.location}</p>
                <p><strong>Status :</strong>{props.status}</p>

            </div>
        </div>



    );
}export default ProfileCard;