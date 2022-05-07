import { PROJECTS } from "../shared/projects";
import { COMMENTS } from '../shared/comments';
import { BLOGS } from '../shared/blogs';
import { FEATURES } from '../shared/features';
import { SKILLS } from '../shared/skills';

export const initialState = {
    projects: PROJECTS,
    comments: COMMENTS,
    features: FEATURES,
    skills: SKILLS,
    blogs: BLOGS
};

// specified a default state state = initialState
export const Reducer = (state = initialState, action) => {
    return state;
}