import profileReducer, {
  addPostActionCreator,
  deletePost
} from "./profileReducer";

const initialState = {
  postsArr: [
    {
      id: 1,
      name: "Vasya Pupkin",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 2,
      name: "Pashok Surkov",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 3,
      name: "Petter Grick",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    }
  ]
};
it("newState.postsArr.length must be incremented", () => {
  const action = addPostActionCreator("new post body");
  const newState = profileReducer(initialState, action);

  expect(newState.postsArr.length).toBe(4);
});

it("postsArr[3].body must be new post body", () => {
  const action = addPostActionCreator("new post body");
  const newState = profileReducer(initialState, action);
  expect(newState.postsArr[3].body).toBe("new post body");
});

it("postsArr.length must be decremented", () => {
  const action = deletePost(3);
  const newState = profileReducer(initialState, action);

  expect(newState.postsArr.length).toBe(2);
});
