import { SearchRepositoryAction } from "../action";
import { RepositoryActionType } from "../action-type";

interface RepositoryInterface {
  data: string[],
  error: string | null;
  loading: boolean;
}

const RepositoryReducer = (state: RepositoryInterface, action: SearchRepositoryAction): RepositoryInterface => {
  switch(action.type) {
    case RepositoryActionType.SEARCH_REPOSITORY:
      return {
        data: [], 
        error: null, 
        loading: true 
      };
    case RepositoryActionType.SEARCH_REPOSITORY_SUCCESS:
      return { 
         data: action.payload,
         error: null,
         loading: false
      }
    case RepositoryActionType.SEARCH_REPOSITORY_ERROR:
      return {
        data: [],
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default RepositoryReducer;