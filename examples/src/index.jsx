import React, { Component } from 'react';
import { render } from 'react-dom';
import Switch from '../../dist';
import './styles.css';

class Examples extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      disabledChecked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabledChange = this.handleDisabledChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleDisabledChange(checked) {
    this.setState({ disabledChecked: checked });
  }

  render() {
    return (
      <div id="examples">
        <h1>React Switch</h1>
        <div className="example">
          <h2>Simple usage</h2>
          <div className="switch-group">
            <label htmlFor="normal-switch">Switch with default style</label>
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              id="normal-switch"
            />
          </div>
          <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
          <pre>{`
constructor() {
  super();
  this.state = {
    checked: false
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(checked) {
  this.setState({ checked });
}
          `}
          </pre>
          <pre>
            {`
<label htmlFor="normal-switch">Switch with default style</label>
<Switch
  onChange={this.handleChange}
  checked={this.state.checked}
  id="normal-switch"
/>
            `}
          </pre>
        </div>
        <div className="example">
          <h2>Custom color and size</h2>
          <div className="switch-group">
            <label htmlFor="custom-switch">Switch with custom style</label>
            <Switch
              id="custom-switch"
              className="react-switch"
              onChange={this.handleChange}
              checked={this.state.checked}
              height={24}
              width={90}
              handleColor="orange"
              activeHandleColor="yellow"
              offColor="linear-gradient(45deg, steelblue, black)"
              onColor="repeating-radial-gradient(ellipse farthest-corner, darkgreen, lightgreen)"
            />
          </div>
          <pre>
            {`
<label htmlFor="custom-switch">Switch with custom style</label>
<Switch
  id="custom-switch"
  className="react-switch"
  onChange={this.handleChange}
  checked={this.state.checked}
  height={20}
  width={90}
  handleColor="orange"
  activeHandleColor="yellow"
  offColor="linear-gradient(45deg, steelblue, black)"
  onColor="repeating-radial-gradient(ellipse farthest-corner, darkgreen, lightgreen)"
/>
            `}
          </pre>
        </div>
        <div className="example">
          <h2>Disabled switch</h2>
          <div className="switch-group">
            <label htmlFor="disabled-switch">Toggle another switch to disable this switch</label>
            <Switch
              className="react-switch"
              onChange={this.handleDisabledChange}
              disabled={this.state.checked}
              checked={this.state.disabledChecked}
              id="disabled-switch"
            />
          </div>
          <pre>{`
<label htmlFor="disabled-switch">Toggle another switch to disable this switch</label>
<Switch
  className="react-switch"
  onChange={this.handleDisabledChange}
  disabled={this.state.checked}
  checked={this.state.disabledChecked}
  id="disabled-switch"
/>
            `}
          </pre>
        </div>
      </div>
    );
  }
}

render(
  <Examples />,
  document.getElementById('app')
);
