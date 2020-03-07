const ADD_MESSAGE = "dialogs/ADD_MESSAGE";

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
  messages: [
    { id: 1, name: "Vasya", text: "Привет" },
    { id: 2, name: "Vasya", text: "Как дела" },
    { id: 3, name: "Vasya", text: "Отлично" }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        name: "Vasya",
        text: action.payload
      };
      return { ...state, messages: [...state.messages, newMessage] };

    default:
      return state;
  }
};
export default dialogsReducer;

export const addMessageAC = messageBody => {
  return { type: ADD_MESSAGE, payload: messageBody };
};

export const addMessage = messageBody => {
  return dispatch => {
    dispatch(addMessageAC(messageBody));
  };
};
