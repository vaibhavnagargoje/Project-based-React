import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return(
    <div>
      <h1>
        costom app | Vaibhav Nagargoje
      </h1>
    </div>
  )
}
const reactElement=React.createElement(
  'a',
  {href:"http://farmo.in",target:'_blank'},
  'click here to visit Farmo Official Site '
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement()
  
)
