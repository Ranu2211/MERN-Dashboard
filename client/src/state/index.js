import { createSlice} from '@reduxjs/toolkit';
const initialState = {
    mode: "dark",
    userId: "6419a6d5040827a3a8a78626",
    // userId: "6410aaeea931a8bf8a76b2c7",
};
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    },
});
export const {setMode} = globalSlice.actions;

export default globalSlice.reducer;