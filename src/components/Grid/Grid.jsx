import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

function Grid(props)
{
    const { pathname } = useLocation();
    return(
        <>
        <Navbar>{pathname === '/AfterImage/' || pathname === '/AfterImage' ? "Create" : "Comunity" }</Navbar>
        <div className="container-fluid justify-content-center">
            <div className="row p-3">
                   {props.children}
            </div>
        </div>
        </>
    );
}

export default Grid;