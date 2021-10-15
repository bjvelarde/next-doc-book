import SearchBar from "../SearchBar";
import SortButton from "../SortButton";
import LangMenu from "../LangMenu";
import SC from './style';

const ToolBar = () => {

  return <SC.Container>
    <SortButton />
    <SearchBar />
    <LangMenu />
  </SC.Container>;
}

export default ToolBar;