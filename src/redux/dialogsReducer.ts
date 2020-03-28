import { reset } from "redux-form";

const DELETE_DIALOG = "dialogs/DELETE_DIALOG";
const ADD_MESSAGE = "dialogs/ADD_MESSAGE";

type DialogType = {
  id: number | null;
  name: string | null;
  avatar: string | null;
  time: string | null;
  lastMessage: string | null;
};
type InterlocutorType = {
  id: number;
  name: string;
  avatar: string;
};
type MessageType = {
  id: number;
  whose: number;
  text: string;
  time: string;
};
type ConversationType = {
  id: number | null;
  interlocutor: InterlocutorType;
  messages: Array<MessageType>;
};
const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Petya Rogov",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
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
      id: 1111,
      name: "Джон Дир",
      avatar:
        "http://www.topoboi.com/pic/201401/1920x1080/topoboi.com-37232.jpg",
      time: "12:13",
      lastMessage: "Как дела?"
    },
    {
      id: 4,
      name: "Антонио",
      avatar:
        "https://www.meme-arsenal.com/memes/17ae26212e608608849dcbb2cfff103c.jpg",
      time: "18:44",
      lastMessage: "Все окей"
    }
  ] as Array<DialogType>,
  conversation: {
    id: 1,
    interlocutor: {
      id: 1111,
      name: "Джон Дир",
      avatar:
        "http://www.topoboi.com/pic/201401/1920x1080/topoboi.com-37232.jpg"
    },
    messages: [
      {
        id: 1,
        whose: 1111,
        text: "Привет",
        time: "12:24"
      },
      {
        id: 2,
        whose: 1111,
        text: "Как дела?",
        time: "13:45"
      },
      {
        id: 3,
        whose: 5896,
        text: "Нормально",
        time: "14:44"
      },
      {
        id: 4,
        whose: 5896,
        text: "А у тебя?",
        time: "14:44"
      }
    ]
  } as ConversationType
};

type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case DELETE_DIALOG:
      return {
        ...state,
        dialogs: state.dialogs.filter(dialog => dialog.id !== action.payload)
      };
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id:
          state.conversation.messages[state.conversation.messages.length - 1]
            .id + 1,
        whose: action.payload.id,
        text: action.payload.messageBody,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      };
      return {
        ...state,
        conversation: {
          ...state.conversation,
          messages: [...state.conversation.messages, newMessage]
        }
      };

    default:
      return state;
  }
};
export default dialogsReducer;

type DeleteDialogACActionType = {
  type: typeof DELETE_DIALOG;
  payload: number;
};

export const deleteDialogAC = (dialogId: number): DeleteDialogACActionType => {
  return { type: DELETE_DIALOG, payload: dialogId };
};

type AddMessageACActionType = {
  type: typeof ADD_MESSAGE;
  payload: { id: number; messageBody: string };
};
export const addMessageAC = (
  id: number,
  messageBody: string
): AddMessageACActionType => {
  return { type: ADD_MESSAGE, payload: { id, messageBody } };
};

export const deleteDialog = (dialogId: number) => (dispatch: any) => {
  dispatch(deleteDialogAC(dialogId));
};
export const addMessage = (messageBody: string) => {
  return (dispatch: any, getState: any) => {
    dispatch(addMessageAC(getState().owner.ownerData.id, messageBody));
    dispatch(reset("messageForm"));
  };
};
