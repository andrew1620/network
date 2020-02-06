const dialogsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const newMessage = {
        name: "Vasya",
        text: state.messagesTextareaValue
      };
      state.messagesId.user_1.push(newMessage);
      return state;

    case "UPDATE_MESSAGES_TEXTAREA_VALUE":
      state.messagesTextareaValue = action.payload;
      return state;
    default:
      console.log("there is no such action");
      return state;
  }
};
export default dialogsReducer;

export const addMessageActionCreator = () => {
  return { type: "ADD_MESSAGE" };
};
export const updateMessagesTextareaValueActionCreator = newValue => {
  return { type: "UPDATE_MESSAGES_TEXTAREA_VALUE", payload: newValue };
};
