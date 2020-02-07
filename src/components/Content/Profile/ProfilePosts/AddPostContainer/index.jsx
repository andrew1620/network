import React from "react";
import "./style.css";
import { connect } from "react-redux";

import {
  updateTextareaValueActionCreator,
  addPostActionCreator
} from "../../../../../redux/profileReducer";
import AddPost from "../AddPost/index";

import StoreContext from "../../../../../StoreContext";

// const AddPostContainerQQQQQQQ = ({ textAreaValue, dispatch, store }) => {
//   const handleBtnClick = () => {
//     store.dispatch(addPostActionCreator());
//   };
//   const handleTextAreaChange = newValue => {
//     store.dispatch(updateTextareaValueActionCreator(newValue));
//   };
//   return (
//     <StoreContext.Consumer>
//       {store => (
//         <AddPost
//           // textAreaValue={store.getState().postsData.textAreaValue}
//           handleBtnClick={handleBtnClick}
//           handleTextAreaChange={handleTextAreaChange}
//         />
//       )}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  console.log(state);
  return {
    textAreaValue: state.postsData.textAreaValue
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
