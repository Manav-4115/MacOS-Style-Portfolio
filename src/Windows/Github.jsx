import React from 'react'
import githubdata from '../assets/github.json'
import MacWindow from './MacWindow'
import "./github.scss"


const Gitcard=({data={id: 1,image:"",title:"",description:"",tags:[],repolink:"",demoLink:""}})=>{
    return  <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='desc'>{data.description}</p>
        <div className="tags">
            {
                data.tags.map(function(tag,i){
                    return <p id='i' className=' tag'>{tag}</p>
                })
            }

        </div>
        <div className="urls">
            <a href={data.repolink}>Repository</a>
                {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
        </div>
    </div>
}
const Github = ({windowName,setwindows,windows}) => {
  return (
    <MacWindow windowName={windowName} windows={windows} setwindows={setwindows}>
    <div className="cards">
        {githubdata.map(function(pro,idx){
            return <Gitcard data={pro}/>
        })}
    </div>
</MacWindow>
  )
}

export default Github