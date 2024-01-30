import "./header.css";
import Title from "./Title.jsx";
import Tabs from "./Tabs.jsx";

const Header = ({ currentTab, handleTabSeletion, tabOptions }) => (
  <>
    <div className="header">
      <Title />
      <Tabs
        currentTab={currentTab}
        handleTabSeletion={handleTabSeletion}
        tabOptions={tabOptions}
      />
    </div>
  </>
);

export default Header;
