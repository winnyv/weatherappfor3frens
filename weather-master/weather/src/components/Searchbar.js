import { AiOutlineSearch } from "react-icons/ai";
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