

let isLogged = true
//isLogged = false
function Header () {
    return (
        <header className="header">
            <h1>site logo</h1>
            <p>{isLogged ? "Welcome" : "you are guest"}</p>
            <p>{isLogged && "Welcome mate"} </p>
            <p></p>

        </header>
    )
}

export default Header;