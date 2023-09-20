import Layout from "./Component/layout"
const items = 
  {
    "id": "600dc3b5c4e60ba2ebf06569",
    "name": "Howell Faulkner",
    "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
    "address": "77 Hemlock Street, Hasty, Florida",
    "company": "Fleetmix"
    
  }



function App(){
  return (
    <>

   <Layout  {...items} list = 'numbered' />
   <Layout  {...items} list = 'alpha' />
   <Layout  {...items} list = 'bullet' />
    </>
  )
}

export default App 