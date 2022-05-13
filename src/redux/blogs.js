import { BLOGS } from '../shared/blogs';

export const Blogs = (state = BLOGS, action) => {
    switch(action.type){
        default:
            return state;
    }
}