const DELETE_DIALOG = "dialogs/DELETE_DIALOG";
const ADD_MESSAGE = "dialogs/ADD_MESSAGE";

const initialState = {
  dialogs: [
    {
      name: "Petya Rogov",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      id: 1,
      time: "14:38",
      lastMessage: "Привет"
    },
    {
      name: "Костя Дзю",
      avatar:
        "https://comicvine1.cbsistatic.com/uploads/scale_super/11113/111136241/4423123-0973851850-invis.jpg",
      id: 2,
      time: "16:35",
      lastMessage: "Что делаешь?"
    },
    {
      name: "Джон Дир",
      avatar:
        "http://www.topoboi.com/pic/201401/1920x1080/topoboi.com-37232.jpg",
      id: 3,
      time: "12:13",
      lastMessage: "Как дела?"
    },
    {
      name: "Антонио",
      avatar:
        "https://www.meme-arsenal.com/memes/17ae26212e608608849dcbb2cfff103c.jpg",
      id: 4,
      time: "18:44",
      lastMessage: "Все окей"
    }
  ],
  messages: [
    { id: 1, name: "Vasya", text: "Привет" },
    { id: 2, name: "Vasya", text: "Как дела" },
    { id: 3, name: "Vasya", text: "Отлично" }
  ],
  conversation: {
    id: 1,
    interlocutors: [
      {
        id: 2222,
        name: "Джон Дир",
        avatar:
          "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200"
      },
      {
        id: 2222,
        name: "andrew",
        avatar:
          "https://i.pinimg.com/736x/23/ed/c6/23edc62e92dfc53b7738a8f3fee707b6--private-plane-private-jets.jpg"
      }
    ],
    messages: [
      { id: 1, who: 2222, text: "Привет", time: "12:24" },
      { id: 2, who: 2222, text: "Как дела", time: "13:45" },
      { id: 3, who: 5896, text: "Отлично", time: "14:44" }
    ]
  }
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_DIALOG:
      return {
        ...state,
        dialogs: state.dialogs.filter(dialog => dialog.id !== action.payload)
      };
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

export const deleteDialogAC = dialogId => {
  return { type: DELETE_DIALOG, payload: dialogId };
};
export const addMessageAC = messageBody => {
  return { type: ADD_MESSAGE, payload: messageBody };
};

export const deleteDialog = dialogId => dispatch => {
  dispatch(deleteDialogAC(dialogId));
};
export const addMessage = messageBody => {
  return dispatch => {
    dispatch(addMessageAC(messageBody));
  };
};
