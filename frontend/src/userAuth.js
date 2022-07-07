import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuthorisor = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const navigate = useNavigate();

    if(currentUser === null){
        Swal.fire({
            icon : 'error'
        })
        return <Navigate to="/influencerlogin" />;
    }

  return children;
}

export default UserAuthorisor