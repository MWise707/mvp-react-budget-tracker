import Title from "./Title.jsx";
import Tabs from "./Tabs.jsx";

const Header = ({ currentTab }) => (
  <>
    <Title />
    <Tabs currentTab={currentTab}/>
  </>
);

export default Header;
