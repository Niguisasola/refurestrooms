import React from 'react';
import {Link} from 'react-router-dom';

function Titles() {
    return (
        <div className="welcome-container" style={{width: 28+'rem'}}>
            <div className="card-body">
                <h5 className="card-title ">ENCUENTRA TU SANITARIO SEGURO</h5>
                <h6 className="card-subtitle mb-2 text-muted">Dedicado a personas transgénero, intersexuales y no binarias</h6>
                <p className="card-text">Somos concientes que vivir en una sociedad violenta e intolerante a la diversidad puede ser agobiante y hasta peligroso. Por eso hermos ideado refurestroom para que encuentres aquí lo que estás buscando.</p>
                <Link to='/login'><button className='btn btn-light rounded-pill border-dark' type="submit">Login</button></Link>
                <Link to='/register'><button className='btn btn-light rounded-pill border-dark' type="submit">Register</button></Link>
            </div>
        </div>
    )
}

export default Titles   