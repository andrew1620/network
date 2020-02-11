import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };

  activateEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  render() {
    return (
      <div className="statusBox">
        {!this.state.editMode && (
          <div onClick={this.activateEditMode}>
            <span>status</span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input autoFocus={true} type="text" placeholder="Введите статус" />
            <button onClick={this.activateEditMode}>Сохранить</button>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
