import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    statusValue: this.props.userStatus
  };

  componentDidUpdate(prevProps, prevState) {
    //Нужен для того, чтобы в инпуте текст по дефолту был из стейта редакса, а т.к. ProfileContainer может грузить стейт профайла раньше чем стейт статуса то в пропсах приходит пустое значение и отправляется по дефолту в инпут, а затем в пропсах приходит настоящий статус и ставится в спан, но в локальном стейте ничего поэтому инпут может быть пустым при перерендере страницы
    if (this.props.userStatus !== prevProps.userStatus) {
      this.setState({
        statusValue: this.props.userStatus
      });
    }
  }

  handleStatusChange = event => {
    this.setState({
      statusValue: event.target.value
    });
  };
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatusTC(this.state.statusValue);
  };

  render() {
    return (
      <div className="statusBox">
        {!this.state.editMode && (
          <div onClick={this.activateEditMode}>
            <span>{this.props.userStatus}</span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onChange={this.handleStatusChange}
              value={this.state.statusValue}
              type="text"
              placeholder="Введите статус"
            />
            <button onClick={this.deactivateEditMode}>Сохранить</button>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
