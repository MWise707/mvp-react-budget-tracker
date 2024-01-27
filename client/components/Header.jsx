import Title from "./Title.jsx";
import Tabs from "./Tabs.jsx";

const Header = ({ currentTab, handleTabSeletion, tabOptions }) => (
  <>
    <Title />
    <Tabs currentTab={currentTab} handleTabSeletion={handleTabSeletion} tabOptions={tabOptions}/>
  </>
);

export default Header;
