import axios from "axios"
import { Dispatch } from "redux"
import { SearchRepositoryAction } from "../action"
import { RepositoryActionType } from "../action-type"

export const searchRepository = (term: string) => {
  return async (dispatch: Dispatch<SearchRepositoryAction>) => {
    dispatch({
      type: RepositoryActionType.SEARCH_REPOSITORY
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: { text: term }
      });

      const names = data.objects.map((object: any) => object.package.name);
      dispatch({
        type: RepositoryActionType.SEARCH_REPOSITORY_SUCCESS,
        payload: names
      })
    } catch (err) {
      let errorMessage = '';

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      dispatch({
        type: RepositoryActionType.SEARCH_REPOSITORY_ERROR,
        payload: errorMessage
      })
    }

  }
}