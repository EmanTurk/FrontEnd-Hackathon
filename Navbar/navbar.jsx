import "../Navbar/navstyle.css";

function Navbar() {
  return (
    <nav className="nav">
        <h1>AidMate</h1>
      <a href="/" className="site-title">AidMate</a>
      <ul>
        <li>
          <a href="/home">Home</a>
          <a href="/search">Search</a>
          <a href="/profile">Profile</a>
          <a href="/log-out">Log Out</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
