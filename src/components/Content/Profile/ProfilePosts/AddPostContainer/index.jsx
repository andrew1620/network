import "./style.css";
import { connect } from "react-redux";

import {
  // addPostActionCreator,
  addPost
} from "../../../../../redux/profileReducer";
import AddPost from "../AddPost/index";

// const mapDispatchToProps = dispatch => {
//   return {
//     addPost: postBody => {
//       dispatch(addPostActionCreator(postBody));
//     }
//   };
// };
const mdtp = {
  addPost
};
const AddPostContainer = connect(null, mdtp)(AddPost);

export default AddPostContainer;
