import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: false,
    user: {
        isActivated: false,
        
    },
    name:null,
	otp: {
		phone: "",
		hash: "",
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state, action) => {
			const { user } = action.payload;
			state.user = user;
			state.isAuth = true;
		},
		setOtp: (state, action) => {
			const { phone, hash } = action.payload;
			state.otp.phone = phone;
			state.otp.hash = hash;

        },
        setUserName: (state, action) => {
            const { name } = action.payload
            state.name = name
        }
       
	},
});

export const { setAuth, setOtp, setUserName} = authSlice.actions;
export default authSlice.reducer;
