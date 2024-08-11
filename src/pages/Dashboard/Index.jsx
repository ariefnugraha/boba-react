import Sidebar from "../../components/layout/Sidebar"
import Navbar from "../../components/layout/Navbar"
import { useState } from "react"
export default function Index() {
    const [time, setTime] = useState();
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [profile, setProfile] = useState({
        image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'John Doe'
    })

    function getTime() {
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        let date = new Date();
        let day = date.getDay()
        let getMonth = months[date.getMonth()];
        let getYear = date.getFullYear();
        let getHour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let getMinute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let getSecond = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

        setTime(date + ',' + day + "" + getMonth + "" + getYear + "" + getHour + getMinute + getSecond);
    }

    setInterval(() => {
        getTime();
        
    }, 1000);
    function handleMenu(newMenu) {
        setActiveMenu(newMenu)

        console.log(activeMenu);
    }
    return (
        <div className="main-dashboard row g-0">
            <Sidebar activeMenu={activeMenu} onClick={(newMenu) => handleMenu(newMenu)} />

            <div className="col-xl-11">
                <div className="p-5">
                    <Navbar activeMenu={activeMenu} time={time} profileImage={profile.image} profileName={profile.name}/>
                </div>
            </div>
        </div>
    )
}