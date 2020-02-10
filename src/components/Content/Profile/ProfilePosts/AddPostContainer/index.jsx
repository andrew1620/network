import "./style.css";
import { connect } from "react-redux";

import {
  updateTextareaValueActionCreator,
  addPostActionCreator
} from "../../../../../redux/profileReducer";
import AddPost from "../AddPost/index";

const mapStateToProps = state => {
  return {
    textAreaValue: state.profilePage.textAreaValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleBtnClick: () => {
      dispatch(addPostActionCreator());
    },
    handleTextAreaChange: newValue => {
      dispatch(updateTextareaValueActionCreator(newValue));
    }
  };
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
