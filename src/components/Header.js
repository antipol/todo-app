import React from "react";

//CLASS COMPONENT VERSION
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="header">
//         <h1>What to do?</h1>
//         <span className="tagline">
//           This could be your {this.props.tagline} list
//         </span>
//       </header>
//     );
//   }
// }

//FUNCTIONAL COMPONENT VERSION
const Header = props => {
  return (
    <header className="header">
      <h1>What to do?</h1>
      <span className="tagline">This could be your {props.tagline} list</span>
    </header>
  );
};

export default Header;
