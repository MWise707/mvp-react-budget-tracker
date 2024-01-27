const Tabs = ({ handleTabSeletion, tabOptions }) => {
  const switchTab = (tab) => {
    console.log("Tab has been selected: ", tab);
    handleTabSeletion(tab);
  };

  return tabOptions.map((tab) => (
    <div key={tab} onClick={() => switchTab(tab)}>
      {tab}
    </div>
  ));
};

export default Tabs;
