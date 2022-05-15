import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { Projects } from './projects';
import { Comments } from './comments';
import { Features } from './features';
import { Skills } from './skills';
import { Blogs } from './blogs';

let reducers = combineReducers({
    projects: Projects,
            comments: Comments,
            features: Features,
            skills: Skills,
            blogs: Blogs,
})
export const ConfigStore = () => {
    const store = configureStore(
        {reducer: reducers}
        );
    return store;
}
