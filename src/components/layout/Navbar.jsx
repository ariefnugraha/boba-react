export default function Navbar(props) {


    return (
        <nav className="d-flex justify-content-xl-between bg-white px-5 py-2 rounded">
            <div>
                <p className="fs-6 text-gray-800">{props.time}</p>
                <p className="fs-2 fw-bold">
                    {props.activeMenu === 'dashboard' ? 'Cashier' : props.activeMenu}
                </p>
            </div>

            <div className="dropdown">
                <button className="d-flex align-items-center btn bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={props.profileImage} className="avatar" alt="Profile Pic" width={36} height={36} />

                    Hi <span className="fw-bold d-inline-block ms-2">{props.profileName}</span>
                </button>
            </div>
        </nav>
    )
}