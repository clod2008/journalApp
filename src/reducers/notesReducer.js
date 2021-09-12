/*
    {
        notes: []
        active: null
        active: {
            id: 'efsefsddfsgdfg',
            title: '',
            body: '',
            imageUrl: '',
            date: 12345656657

        }
    }


*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
         
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesAddNew:
            return{
                notes: [ action.payload, ...state.notes ]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        case types.notesUpdater:
            return{
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDelete:
            return{
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }

        case types.notesLogoutCleaning:
            return{
                ...state,
                active: null,
                notes: [],
                
            }


    
        default:
            return state;
    }
    
}