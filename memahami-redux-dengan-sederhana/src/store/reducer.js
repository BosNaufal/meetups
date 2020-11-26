// import dotProps from 'dot-prop-immutable'

const initialState = {
  currentVideo: null,
  videoList: [
    { 
      id: 1, 
      title: "Tutorial Menuangkan Kopi Bubuk",
      description: "Menuangkan kopi bubuk juga perlu belajar lho ges...",
      src: "/assets/videos/mixkit-coffee-powder-being-poured-on-the-coffee-maker-filter-4984.mp4",
      viewsCount: 1, 
    },
    { 
      id: 2, 
      title: "Manfaat Mengingat Waktu yang Terbatas",
      description: "Jangan pernah merasa waktu kita banyak guis, manfaatkan waktu sebaik mungkin untuk hidup dan mati kita.",
      src: "/assets/videos/mixkit-slowly-approaching-a-clock-on-a-black-background-28897.mp4",
      viewsCount: 1, 
    },
    { 
      id: 3, 
      title: "Prank Mancing Buaya di Rawa",
      description: "Niat awal mau ngeprank temen, eh gak taunya malah nyasar di rawa. dan gak nyangka bisa ketemu....",
      src: "/assets/videos/mixkit-forest-stream-in-the-sunlight-529-small.mp4",
      viewsCount: 1, 
    }
  ]
}

// Rancangan Action untuk play video
// const action = {
//   type: "PLAY_VIDEO",
//   dataVideo: {
//     // ... datanya video
//   }
// }

export const PLAY_VIDEO = "PLAY_VIDEO"
export const ADD_VIEW = "ADD_VIEW"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_VIEW: {
    //   const newState = dotProps.set(state, "currentVideo.viewsCount", (prevViewsCount) => prevViewsCount + 1)
    //   return newState
    // }
    case PLAY_VIDEO: {
      const videoTerpilih = state.videoList.find(
        (video) => video.id === action.id
      )
      return {
        ...state,
        currentVideo: videoTerpilih,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer