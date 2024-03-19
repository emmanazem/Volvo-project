import { useState } from 'react';
import './index.css'
import './MyMainSite.css';
import './loading.css'

function RandomUserFunction() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


const fetchRandomUser = async () => {
    try {
        setIsLoading(true);
        const response = await fetch ('https://randomuser.me/api/');
        if(!response.ok) {
            throw new Error('Error fetching random user')
        }
        const data = await response.json();
        setUser(data.results[0]);
    } catch (error) {
        console.error('Error fetching random user', error);
        setError('Ops.. something went wrong. Please try again later!');
    }
};

return (
    <div>
        {error && <p className="errorMassage">{error}</p>}
        { user ? ( 
            <div className="userInfoContainer">
                <button className="fetchButton" onClick={fetchRandomUser}>Provide details for another user</button>
                <p><strong>Name of user:</strong>  {user.name.title} {user.name.first} {user.name.last}</p>
                <p><strong>Location of user: </strong> {user.location.city} {user.location.country} {user.location.state} {user.location.postcode} {user.location.name} {user.location.number} </p>
                <p><strong>Coordinates: </strong> {user.location.coordinates.latitude} {user.location.coordinates.longitude}</p>
                <p><strong>Timezone: </strong> {user.location.timezone.offset} {user.location.timezone.description}</p>
                <p><strong>Email of user: </strong> {user.email}</p>
                <p><strong>Users Username: </strong>{user.login.username}</p>
                <p><strong>Users password: </strong>{user.login.password}</p> 
                <p><strong>Date of registration: </strong>{user.registered.date}</p> 
                <p><strong>Age of registration: </strong>{user.registered.age}</p> 
                <p><strong>Users UUID: </strong>{user.login.uuid}</p>
                <p><strong>Users date of birth: </strong>{user.dob.date}</p>
                <p><strong>Users age: </strong>{user.dob.age}</p>
                <p><strong>Users phone-number: </strong>{user.phone}</p>
                <p><strong>Users Cellphone-number: </strong>{user.cell}</p>
                <p><strong>Users ID-name: </strong>{user.id.name}</p>
                <p><strong>Users ID-value: </strong>{user.id.value}</p>
                <p><strong>Picture of user: </strong> <img src={user.picture.large} alt={'A picture of user ${user.name.first}'}/></p>
        </div>
         ) : (
            <div className="spinnerContainer">

                {isLoading && (
                    <div className="la-ball-clip-rotate">
                        <div></div>
                    </div>
                )}
                <button className="fetchButton" onClick={fetchRandomUser}>
                    Provide user information
                </button>
            </div>
        )}
    </div>
) }
         export default RandomUserFunction