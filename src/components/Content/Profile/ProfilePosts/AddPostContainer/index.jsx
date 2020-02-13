import "./style.css";
import { connect } from "react-redux";

import { addPostActionCreator } from "../../../../../redux/profileReducer";
import AddPost from "../AddPost/index";

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    addPost: postBody => {
      dispatch(addPostActionCreator(postBody));
    }
  };
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
