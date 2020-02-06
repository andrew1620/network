const initialState = {
  postsArr: [
    {
      name: "Vasya Pupkin",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      name: "Pashok Surkov",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      name: "Petter Grick",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    }
  ],
  textAreaValue: "value"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      const newPost = {
        name: "Vasya Pupkin",
        img:
          "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
        body: state.textAreaValue
      };
      state.postsArr.push(newPost);
      return state;
    case "UPDATE-TEXTAREA-VALUE":
      state.textAreaValue = action.payload;
      return state;
    default:
      console.log("there is no such action"); //Будет срабатывать потому что в dispatch в сторе мы прокинули все редьюсеры и в каждый редьюсер отправляется экшен. Меняется только та часть которая пришла остальные возвращаются по дефолту
      return state;
  }
};
export default profileReducer;

const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA_VALUE = "UPDATE-TEXTAREA-VALUE";

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateTextareaValueActionCreator = newValue => {
  return { type: UPDATE_TEXTAREA_VALUE, payload: newValue };
};
