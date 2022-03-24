import { AiOutlineSearch } from "react-icons/ai";

const Topbar = ({toggleSearch}) => {
  return (
    <div id="topbar">
        <button id="search" onClick={toggleSearch}>
            <AiOutlineSearch/>
        </button>
    </div>
  )
}

export default Topbar