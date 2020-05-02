import {userAPI} from "../api/api";
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET-USERS";
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
export const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS ";


let initialState =
    {
        users: [
            // {id: 1, photoUrl:'', followed: false, fullName: 'Dmitry', status: 'I am a boss', location:{city:'Minsk', country:'Belarus'} },
            // {id: 2, photoUrl:'', followed: false, fullName: 'Sasha', status: 'I am a boss too', location:{city:'Moskow', country:'Russia'} },
            // {id: 3, photoUrl:'', followed: true, fullName: 'Andrew', status: 'I am a boss too', location:{city:'Kiew', country:'Ukraine'} },
        ],
        pageSize: 5,
        totalUserCount: 11,
        currentPage: 2,
        isFetching: true,
        followInProgres: false
    };

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            return stateCopy
        }
            break;

        case SET_USERS: {
            return {...state, users: action.users}                  //  {...state, users: [...state.users, ...action.users]} объединение 2х массивов (если приходит массив то его тоже нужно развернуть)
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case FOLLOW:
        {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            return stateCopy
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }

        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUserCount: action.totalCount}
        }

        case TOGGLE_IS_FOLLOW_PROGRESS: {
            return {...state, followInProgres: action.totalCount}
        }

        default:
            return state;
    }
};

export const followSucsess = (userId) => { return {type: "FOLLOW", userId} };
export const unfollowSucsess = (userId) => { return {type: "UNFOLLOW", userId} };
export const setUsers = (users) => ({type: "SET-USERS", users});
export const setTotalUsersCount = (totalCount) => ({type: "SET-TOTAL-USER-COUNT", totalCount});
export const setCurrentPage = (pageNumber) => {return {type: "SET-CURRENT-PAGE", pageNumber}};
export const toggleIsFetching = (isFetching) => ({type: "TOGGLE_IS_FETCHING", isFetching});
export const toggleFollowInProgres = (pageNumber) => ({type: "TOGGLE_IS_FOLLOW_PROGRESS", pageNumber});

export const requestUsersTC = (CurrentPage, PageSize) => {
    return (dispatch) => {      dispatch(toggleIsFetching(true));
                                    userAPI.getUsers(CurrentPage, PageSize).then(data => {
                                        dispatch(toggleIsFetching(false));
                                        dispatch(setCurrentPage(CurrentPage));
                                        dispatch(setUsers(data.items));
                                        dispatch(setTotalUsersCount(data.totalCount)) })};
};


export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgres(true, userId));
        userAPI.follow (userId)
            .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSucsess(userId));
            }
            dispatch(toggleFollowInProgres(false, userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgres(true, userId));
        userAPI.unfollow (userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSucsess(userId));
                }
                dispatch(toggleFollowInProgres(false, userId));
            });
    }
}


export default usersReducer
