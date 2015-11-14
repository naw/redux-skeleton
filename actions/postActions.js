export const ADD_POST = 'ADD_POST';

export function addPost(title, authorName) {
  return { type: ADD_POST, title: title, authorName: authorName };
}
