import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepository } = useActions()
  const { data, error, loading } = useTypedSelector(state => state.repositoryReducer);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepository(term);
  }

  return (
  <div>
    <form onSubmit={onSearch}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button type="submit">Search</button>
    </form>
    {error && error}
    {loading && <div>loading... </div> }
    {!error && !loading && data && data.map(result => <p key={result}>{result}</p>) }
  </div>
  )
}

export default RepositoriesList;