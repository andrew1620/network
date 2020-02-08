const initialState = {
  dialogsData: [
    {
      name: "Petya Rogov",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      id: 1
    },
    {
      name: "Kostik Dzu",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      id: 2
    },
    {
      name: "Pasha Chlenov",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      id: 3
    },
    {
      name: "Pasha Chlenov",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      id: 4
    }
  ],
  messagesId: {
    user_1: [
      { name: "Vasya", text: "Привет" },
      { name: "Vasya", text: "Как дела" },
      { name: "Vasya", text: "Пашок лох" }
    ]
  },
  messagesTextareaValue: ""
};

const dialogsReducer = (state = initialState, action) => {
  // const stateCopy = Object.create(state);
  const stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "ADD_MESSAGE":
      const newMessage = {
        name: "Vasya",
        text: stateCopy.messagesTextareaValue
      };
      stateCopy.messagesId.user_1.push(newMessage);
      return stateCopy;

    case "UPDATE_MESSAGES_TEXTAREA_VALUE":
      stateCopy.messagesTextareaValue = action.payload;
      return stateCopy;
    default:
      // console.log("there is no such action in dialogsReduce");
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
