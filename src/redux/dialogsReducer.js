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
      { id: 1, name: "Vasya", text: "Привет" },
      { id: 2, name: "Vasya", text: "Как дела" },
      { id: 3, name: "Vasya", text: "Пашок лох" }
    ]
  }
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: Date.now(),
        name: "Vasya",
        text: action.payload
      };
      return {
        ...state,
        messagesId: {
          ...state.messagesId,
          user_1: [...state.messagesId.user_1, newMessage]
        }
      };

    default:
      return state;
  }
};
export default dialogsReducer;

const ADD_MESSAGE = "dialogs/ADD_MESSAGE";

export const addMessageActionCreator = messageBody => {
  return { type: ADD_MESSAGE, payload: messageBody };
};

export const addMessage = messageBody => {
  return dispatch => {
    dispatch(addMessageActionCreator(messageBody));
  };
};
