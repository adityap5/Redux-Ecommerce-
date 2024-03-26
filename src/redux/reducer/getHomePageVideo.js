import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";
const API_KEY = process.env.API_KEY

export const getHomePageVideo = createAsyncThunk(
    "youtube/App/homePageVideos",
    async (isNext, { getState }) => {
        const {
            youtubeApp: {
                nextPageToken: nextPageTokenFromState, videos
            } } = getState();
        const { data: { items, nextPageToken }
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="msk"&key=${API_KEY}&part=snippet&type=video`);

    }
)