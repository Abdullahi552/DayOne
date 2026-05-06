import './Header.css'


function header(){
    return (
    <header className="header">
        <div className="header_brand">
            <h1>my portfolio</h1>
        </div>
        <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    )
}

export default header
