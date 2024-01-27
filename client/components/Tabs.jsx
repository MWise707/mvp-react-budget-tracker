const Tabs = () => {
  const handleTab = (e) => {
    console.log("Tab has been selected: " + e.target.textContent);
  };

  return (
    <>
      <div onClick={() => handleTab()}>Planned</div>
      <div>Spent</div>
      <div>Progress</div>
    </>
  );
};

export default Tabs;
