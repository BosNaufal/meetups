const initialState = {
  currentVideo: { 
    id: 1, 
    title: "Tutorial Menuangkan Kopi Bubuk",
    description: "Menuangkan kopi bubuk juga perlu belajar lho ges...",
    src: "/assets/videos/mixkit-coffee-powder-being-poured-on-the-coffee-maker-filter-4984.mp4",
    viewsCount: 1, 
  },
  videoList:  [
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
      src: "assets/videos/mixkit-forest-stream-in-the-sunlight-529-small.mp4",
      viewsCount: 1, 
    }
  ]
}

export const PLAY_VIDEO = "PLAY_VIDEO"

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case PLAY_VIDEO: {
      return {
        ...state,
        currentVideo: state.videoList.find((video) => video.id === action.payload)
      }
    }
    default: {
      return state
    }
  }
}

export default reducer