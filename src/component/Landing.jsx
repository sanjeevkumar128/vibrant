import React, { Component } from "react";
import {
  postList,
  AddPost,
  EditPost,
  CloseModal,
} from "../actions/postActions";
import { connect } from "react-redux";
import MessageModal from "./MessageModal";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addUser: false,
      editUser: false,
      selectedUser: {},
    };
  }
  componentDidMount() {
    this.props.postList();
  }
  handleAddUser = () => {
    this.setState({ addUser: true });
  };
  handleEditUser = (data) => {
    this.setState({ editUser: true, selectedUser: data });
  };
  handleCloseModal = () => {
    this.setState({ addUser: false, editUser: false, showMessage: false });
    this.props.CloseModal();
  };
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-center px-3 py-2">
          <button className="btn btn-success" onClick={this.handleAddUser}>
            Add User
          </button>
        </div>
        <table className="table table-border table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tilte</th>
              <th scope="col">Body</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.length > 0 &&
              list.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td
                      onClick={() => {
                        this.handleEditUser(data);
                      }}
                      className="edit-link"
                    >
                      Edit
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {this.state.addUser && (
          <AddModal
            AddPost={this.props.AddPost}
            handleCloseModal={this.handleCloseModal}
          />
        )}
        {this.state.editUser && (
          <EditModal
            selectedUser={this.state.selectedUser}
            EditPost={this.props.EditPost}
            handleCloseModal={this.handleCloseModal}
          />
        )}
        {this.props.isAddUser && this.props.isAddUser.isadded && (
          <MessageModal
            isAdd={this.props.isAddUser && this.props.isAddUser.isadded}
            message={this.props.isAddUser && this.props.isAddUser.message}
            handleCloseModal={this.handleCloseModal}
          />
        )}
        {this.props.isEditUser && this.props.isEditUser.isEdited && (
          <MessageModal
            isAdd={this.props.isEditUser && this.props.isEditUser.isEdited}
            message={this.props.isAddUser && this.props.isEditUser.message}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.postData,
  isEditUser: state.isEditUser,
  isAddUser: state.isAddUser,
});
export default connect(mapStateToProps, {
  postList,
  AddPost,
  EditPost,
  CloseModal,
})(Landing);
