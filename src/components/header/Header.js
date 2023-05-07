import { searchIcon, Logo } from "../../assets/icons"
import './Header.css'


const Header = () => {
   return (
      <header className="header flex justify-sb">
         <div className="logo">
            <img src={Logo} alt="Logo" />
         </div>
         <div className="search-icon">
            <img src={searchIcon} alt="SearchBar" />
         </div>
      </header>
   )
}

export default Header