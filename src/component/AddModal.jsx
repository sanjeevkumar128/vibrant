import React, { Component } from "react";
import { AddPost } from "../actions/postActions";
class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: "",
      isSubmit: false,
    };
  }
  handleSubmit = () => {
    let data = {
      title: this.state.title,
      userId: this.state.userId,
      body: this.state.body,
    };
    if (
      this.state.title !== "" &&
      this.state.userId !== "" &&
      this.state.body !== ""
    ) {
      this.props.AddPost(data);
      this.props.handleCloseModal();
      this.setState({ isSubmit: false });
    } else {
      this.setState({ isSubmit: true });
    }
  };
  render() {
    return (
      <div className="modal  d-block w-100" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add User</h5>
            </div>
            <div className="modal-body">
              <input
                placeholder="UserId"
                className="my-3 form-control"
                onChange={(e) => {
                  this.setState({ userId: e.target.value });
                }}
              />
              {this.state.isSubmit && this.state.userId === "" && (
                <div className="text-danger my-2">Please enter user id</div>
              )}
              <input
                placeholder="Title"
                className="my-3 form-control"
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
              />
              {this.state.isSubmit && this.state.title === "" && (
                <div className="text-danger my-2">Please enter title</div>
              )}
              <input
                placeholder="Body"
                className="my-3 form-control"
                onChange={(e) => {
                  this.setState({ body: e.target.value });
                }}
              />
              {this.state.isSubmit && this.state.body === "" && (
                <div className="text-danger my-2">Please enter body</div>
              )}
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
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;
