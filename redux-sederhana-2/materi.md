

# MATERI

1. Struktur Component
2. Install Redux dan Tambahkan Store Provider
```javascript
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```
3. connect Video List dengan redux.
  - Bikin reducer.js
  - Jelaskan useSelector dan cara ambil statenya

```javascript
// BASE VIDEO LIST
const VIDEO_LIST = [
  { 
    id: 1, 
    title: "Tutorial Menuangkan Kopi Bubuk",
    src: "/assets/videos/mixkit-coffee-powder-being-poured-on-the-coffee-maker-filter-4984.mp4",
    viewsCount: 1, 
  },
  { 
    id: 2, 
    title: "Manfaat Mengingat Waktu yang Terbatas",
    src: "/assets/videos/mixkit-slowly-approaching-a-clock-on-a-black-background-28897.mp4",
    viewsCount: 1, 
  },
  { 
    id: 3, 
    title: "Prank Mancing Buaya di Rawa",
    src: "/assets/videos/mixkit-forest-stream-in-the-sunlight-529-small.mp4",
    viewsCount: 1, 
  }
]
```

4. Bikin Video List bisa di-play
  - jelaskan fungsi state ini untuk apa
  - ubah null-nya, kasih statis state dulu pake data video 1

```javascript
// additional state
{
  currentVideo: null
}
```

5. Connect video player dengan redux
6. connect video info dengan redux


7. Bikin aksi untuk play video dari list
  - bikin rancangan action nya dulu

  ```javascript
  // bikin rancangan action
  const action = {
    type: PLAY_VIDEO,
    payload: 1 // id dari video
  }
  ```

  - bikin action creatornya

  ```javascript
  export const playVideoById = (id) => {
    return {
      type: PLAY_VIDEO,
      payload: id,
    }
  }
  ```

  - Bikin reducernya

  ```javascript
  case PLAY_VIDEO: {
    return {
      ...state,
      currentVideo: state.videoList.find((video) => video.id === action.payload)
    }
  }
  ```

8. Panggil action play video dari video item list


