import React, { Component } from "react";

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: "",
    };
  }
  componentDidMount() {
    let { selectedUser } = this.props;
    this.setState({
      title: selectedUser.title,
      body: selectedUser.body,
      userId: selectedUser.userId,
    });
  }
  handleSubmit = () => {
    let { selectedUser } = this.props;
    let data = {
      title: this.state.title,
      userId: this.state.userId,
      body: this.state.body,
      id: selectedUser.id,
    };
    this.props.EditPost(data);
    this.props.handleCloseModal();
  };
  render() {
    return (
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> User</h5>
            </div>
            <div className="modal-body">
              <input
                placeholder="UserId"
                className="my-3 form-control"
                value={this.state.userId}
                onChange={(e) => {
                  this.setState({ userId: e.target.value });
                }}
              />
              <input
                placeholder="Title"
                className="my-3 form-control"
                value={this.state.title}
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
              />
              <input
                placeholder="Body"
                className="my-3 form-control"
                value={this.state.body}
                onChange={(e) => {
                  this.setState({ body: e.target.value });
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={this.props.handleCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditModal;
