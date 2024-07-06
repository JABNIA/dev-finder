import React, { useEffect, useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Search from './components/Search';
import Card from './components/Card';
import axios from 'axios';




function App() { 


  const [user, setUser] = useState<string>('octocat')
  const [isLight, setIsLight] = useState<boolean>(false)
  const [info, setInfo] = useState({
    login: "octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    bio: "unavilable",
    public_repos: 8,
    twitter_username: null,
    followers: 13905,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",

})


  
  useEffect(() =>{
   axios.get(`https://api.github.com/users/${user}`).then(res => setInfo(res.data))
  }, [user])

console.log(isLight)
  return (
    <div id='big-wrapper'>

    <div id='wrapper'>
      <Heading isLight={isLight} setIsLight={setIsLight}/>
      <Search setUser={setUser} isLight={isLight}/>
      <Card login={info.login}
        avatar_url={info.avatar_url}
        name={info.name}
        company={info.company}
        blog={info.blog}
        location={info.location}
        bio={info.bio}
        public_repos={info.public_repos}
        twitter_username={info.twitter_username}
        followers={info.followers}
        following={info.following}
        created_at={info.created_at}
        isLight={isLight}
        />
    </div>
        </div>
  )
}

export default App;
