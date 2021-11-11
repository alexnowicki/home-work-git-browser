import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Head from './head'

const Repo = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])
  const url = `https://api.github.com/users/${userName}/repos`
  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then()
  }, [])
  return (
    <div>
      <Head title="Repositories" />
      {userName}
    </div>
)
}
 
Repo.propTypes = {}

export default React.memo(Repo)
