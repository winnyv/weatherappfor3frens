import { AiOutlineSearch } from "react-icons/ai";

// Allows the user to search for a location and displays the required weather forecast
const Searchbar = ({ showSearchBar, changeLocation }) => {

  const search = (event) => {
    event.preventDefault();
    changeLocation(document.getElementById("city").value)
  }
  return (
    <div className={showSearchBar ? 'Searchbar open' : 'Searchbar'}>
      <table id="SearchTable">
        <tbody>
          <tr>
            <th id="SearchInputTable">
              <div id="SearchInput">
                <input id="city" type="text" placeholder="Type location here"></input>
              </div>
            </th>
            <th id="SearchComfirmTable">
              <button onClick={search}>
                <AiOutlineSearch />
              </button>
            </th>
          </tr>

        </tbody>
      </table>
      
    </div>
  )
}

export default Searchbar