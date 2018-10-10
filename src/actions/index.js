//selectBook is an actionCreator and it needs to return an action.
//action creator will dispatch our actions to reducers
//the action is a plain javascript object.
//the action has two property : the type (the purpose of the action) and the payload (further information about the  action).
//action type is a string property, Once the application become large enough, the type must be moved into a seperate module.

export function selectBook (book)
{
    return {
        type : 'BOOK_SELECTED',
        payload: book

    };
};
