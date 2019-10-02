/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

class DropDown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false
    };
  }

  showDropDown = () => {
    this.setState({
      active: true
    }, () => document.addEventListener('click', this.hideDropDown));
  }

  hideDropDown = () => {
    this.setState({ active: false }, () => document.removeEventListener('click', this.hideDropDown));
  }

  render() {
    const { children } = this.props;
    const { active } = this.state;
    return (
      <div
        className={`dropdown ${active ? 'active' : ''}`}
        onClick={this.showDropDown}
        role="button"
        tabIndex="0"
      >
        { children[0] }
        {active && children.length > 0
          && children[1]
        }
      </div>
    );
  }
}

export default DropDown;

export const DropDownMenu = ({ children }) => (
  <div className="dropdown-menu">
    { children }
  </div>
);
