const TitleHeader = ({ title }) => {
  const mydate = new Date();
  const showDate =
    mydate.getMonth() + 1 + "/" + mydate.getDate() + "/" + mydate.getFullYear();

  return (
    <div>
      <h1>{title}</h1>
      <span className="current-date">{showDate}</span>
    </div>
  );
};

export default TitleHeader;
