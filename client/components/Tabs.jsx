import "./Tabs.css";

const Tabs = ({ handleTabSeletion, tabOptions }) => {
  const switchTab = (tab) => {
    console.log("Tab has been selected: ", tab);
    handleTabSeletion(tab);
  };

  return (
    <>
      <div className="tab-row">
        {tabOptions.map((tab) => (
          <div className="tabs" key={tab} onClick={() => switchTab(tab)}>
            {tab}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
