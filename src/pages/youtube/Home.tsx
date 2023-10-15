import SearchIcon from "@mui/icons-material/Search"
import { Autocomplete, TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import { useEffect, useState } from "react"
import { videoListMock } from "./videoListMock"

type VideoType = {
  id: number
  movie: string
  rating: number
  image: string
  imdb_url: string
}
function Home() {
  const [videoList, setVideoList] = useState<VideoType[]>([])
  useEffect(() => {
    setVideoList(videoListMock)
  }, [])
  return (
    <div>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={videoList.map((video) => video.movie)}
        renderInput={(params) => (
          <>
            {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
            {/* <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
              <DirectionsIcon />
            </IconButton> */}
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          </>
        )}
      />
      {/* <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      > */}

      {/* </Paper> */}
    </div>
  )
}

export default Home
