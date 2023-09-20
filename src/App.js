

import Layout from "./Component/layout"


const items = [
  {
    "id": "600dc3b5d617e547a0e74cb9",
    "name": "Mitchell Fitzgerald",
    "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
    "address": "48 Flatlands Avenue, Cutter, North Dakota",
    "company": "Scenty"
  },
  {
    "id": "600dc3b5c4e60ba2ebf06569",
    "name": "Howell Faulkner",
    "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
    "address": "77 Hemlock Street, Hasty, Florida",
    "company": "Fleetmix"
  }

]

function App(){
  return (
    <>
     <Layout items = {items}/>
    </>
  )
}

export default App 