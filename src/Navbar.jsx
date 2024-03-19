import './Navbar.css'

function Navbar() {
    return (
      <nav>
        <div className="navbarWrap">
            <img className="userIconNavbar" src="./public/user.png" alt="Picture of three users"/>
            <h1 className="navbarTitle">Fetch random users with the button below!</h1>
            </div>
      </nav>
    );
    }
  
  export default Navbar;