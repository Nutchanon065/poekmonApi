import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Parent'
import Parent from './components/Parent'

const TeamContext = createContext();

const TeamProvider = ({childen}) =>{
    const [team, setTeam] = useState(["liverpool","manu"])
    return (<TeamContext.Provider value={{team, setTeam}}>
        {childen}
    </TeamContext.Provider>
    );
};

function test() {
  let arrTeams = ["liverpool","manu"];

  return (
    <>
        <TeamProvider>
            <Parent team={arrTeams}/>
        </TeamProvider>
    </>
  )
}

export default test
