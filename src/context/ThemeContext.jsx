import { createContext, useMemo, useReducer } from "react";

export const ThemeContext = createContext();

const initalState = {
	grid_view: true,
	isLoading: true,
	category: "freshflower",
	sorting_value: "ascending"
}



const reducer = (state, action) => {
	switch (action.type) {
		case "SET_GRIDVIEW":
			return {
				...state,
				grid_view: action.value
			};
		case "IS_LOADING":
			return {
				...state,
				isLoading: action.value
			}
		case "CATEGORY":
			return {
				...state,
				category: action.value
			}
		case "GET_SORT_VALUE":
			return {
				...state,
				sorting_value: action.value
			}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

export const ThemeProvider = ({ children }) => {

	const sorting = () => {
		dispatch({ type: "GET_SORT_VALUE" })
	}
	const [state, dispatch] = useReducer(reducer, initalState);

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}