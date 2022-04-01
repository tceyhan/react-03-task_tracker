// import PropTypes from "prop-types";  // projemde string istiyorum demek için kullanılırı örneğin.
import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow }) => {
  // const handleClick = () => {
  //   console.log("Click with handle from HEader");
  // };
  return (
    <div className="header">
      <h1>{title}</h1>
      {/* <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      /> */}
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </div>
  );
};

// Header.propTypes = {
//   title: PropTypes.string.isRequired, // title string olmalı
// };

// Header.defaultProps = {
//   title: "Task Tracker", // default title
// };

// title = "Task Default"  in props area
export default Header;
