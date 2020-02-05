export const store = {
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._subscriber = observer;
    this._callSubscriber = observer;
  },
  _state: {
    contentData: {
      dialogsPage: {
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
        ]
      },
      profilePage: {
        postsData: {
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
        }
      }
    }
  },
  getState() {
    return this._state;
  },
  addPost() {
    const newPost = {
      name: "Vasya Pupkin",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body: this._state.contentData.profilePage.postsData.textAreaValue
    };
    this._state.contentData.profilePage.postsData.postsArr.push(newPost);
    this._callSubscriber(this._state);
  },
  updateTextAreaValue(newValue) {
    this._state.contentData.profilePage.postsData.textAreaValue = newValue;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    switch (action.type) {
      case "ADD_POST":
        const newPost = {
          name: "Vasya Pupkin",
          img:
            "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
          body: this._state.contentData.profilePage.postsData.textAreaValue
        };
        this._state.contentData.profilePage.postsData.postsArr.push(newPost);
        this._callSubscriber(this._state);
        break;
      case "UPDATE-TEXTAREA-VALUE":
        this._state.contentData.profilePage.postsData.textAreaValue =
          action.payload;
        this._callSubscriber(this._state);
        break;
      default:
        console.log("there is no such action");
    }
  }
};
