import React ,{useState} from 'react'

const ConditionRendering = () => {
    const [state,setState]=useState([
        {
          "name": "Mejia Herman",
          "email": "mejiaherman@idetica.com",
          "username": "mejiaherman@idetica.com",
          "password": "Dowling",
          "image": "Bladensburg",
          "age": 40,
          "universityId": 510636
        },
        {
          "name": "Shawna Good",
          "email": "shawnagood@idetica.com",
          "username": "shawnagood@idetica.com",
          "password": "Vincent",
          "image": "Dodge",
          "age": 60,
          "universityId": 400698
        },
        {
          "name": "Pacheco Ratliff",
          "email": "pachecoratliff@idetica.com",
          "username": "pachecoratliff@idetica.com",
          "password": "Chilton",
          "image": "Fairview",
          "age": 10,
          "universityId": 265682
        },
        {
          "name": "Hubbard Farley",
          "email": "hubbardfarley@idetica.com",
          "username": "hubbardfarley@idetica.com",
          "password": "Gloucester",
          "image": "Cornfields",
          "age": 38,
          "universityId": 544483
        },
        {
          "name": "Lina Obrien",
          "email": "linaobrien@idetica.com",
          "username": "linaobrien@idetica.com",
          "password": "Gardners",
          "image": "Warren",
          "age": 56,
          "universityId": 394588
        },
        {
          "name": "Valarie Galloway",
          "email": "valariegalloway@idetica.com",
          "username": "valariegalloway@idetica.com",
          "password": "Caspar",
          "image": "Rosburg",
          "age": 24,
          "universityId": 102737
        },
        {
          "name": "Harriett Richard",
          "email": "harriettrichard@idetica.com",
          "username": "harriettrichard@idetica.com",
          "password": "Gouglersville",
          "image": "Crawfordsville",
          "age": 37,
          "universityId": 28077
        },
        {
          "name": "Ellis Acevedo",
          "email": "ellisacevedo@idetica.com",
          "username": "ellisacevedo@idetica.com",
          "password": "Robinette",
          "image": "Catherine",
          "age": 21,
          "universityId": 623652
        },
        {
          "name": "Kim Branch",
          "email": "kimbranch@idetica.com",
          "username": "kimbranch@idetica.com",
          "password": "Coaldale",
          "image": "Lowell",
          "age": 24,
          "universityId": 915762
        },
        {
          "name": "Castro Brown",
          "email": "castrobrown@idetica.com",
          "username": "castrobrown@idetica.com",
          "password": "Jacksonburg",
          "image": "Osage",
          "age": 48,
          "universityId": 358792
        },
        {
          "name": "Collier Barker",
          "email": "collierbarker@idetica.com",
          "username": "collierbarker@idetica.com",
          "password": "Allison",
          "image": "Cochranville",
          "age": 50,
          "universityId": 583488
        },
        {
          "name": "Whitney Heath",
          "email": "whitneyheath@idetica.com",
          "username": "whitneyheath@idetica.com",
          "password": "Fruitdale",
          "image": "Sunriver",
          "age": 47,
          "universityId": 288698
        },
        {
          "name": "Browning Vinson",
          "email": "browningvinson@idetica.com",
          "username": "browningvinson@idetica.com",
          "password": "Henrietta",
          "image": "Elbert",
          "age": 45,
          "universityId": 868324
        },
        {
          "name": "Pat Nichols",
          "email": "patnichols@idetica.com",
          "username": "patnichols@idetica.com",
          "password": "Florence",
          "image": "Farmers",
          "age": 35,
          "universityId": 515059
        },
        {
          "name": "Annabelle Humphrey",
          "email": "annabellehumphrey@idetica.com",
          "username": "annabellehumphrey@idetica.com",
          "password": "Kingstowne",
          "image": "Maxville",
          "age": 28,
          "universityId": 685807
        },
        {
          "name": "Bryan Boyer",
          "email": "bryanboyer@idetica.com",
          "username": "bryanboyer@idetica.com",
          "password": "Chapin",
          "image": "Bluetown",
          "age": 35,
          "universityId": 747852
        },
        {
          "name": "Whitehead Schneider",
          "email": "whiteheadschneider@idetica.com",
          "username": "whiteheadschneider@idetica.com",
          "password": "Vaughn",
          "image": "Fillmore",
          "age": 11,
          "universityId": 528160
        },
        {
          "name": "Eula Gamble",
          "email": "eulagamble@idetica.com",
          "username": "eulagamble@idetica.com",
          "password": "Columbus",
          "image": "Riviera",
          "age": 39,
          "universityId": 907361
        },
        {
          "name": "Russell Merrill",
          "email": "russellmerrill@idetica.com",
          "username": "russellmerrill@idetica.com",
          "password": "Mulberry",
          "image": "Stewartville",
          "age": 33,
          "universityId": 252887
        },
        {
          "name": "Deloris Cooley",
          "email": "deloriscooley@idetica.com",
          "username": "deloriscooley@idetica.com",
          "password": "Torboy",
          "image": "Darbydale",
          "age": 38,
          "universityId": 313453
        },
        {
          "name": "George Meyers",
          "email": "georgemeyers@idetica.com",
          "username": "georgemeyers@idetica.com",
          "password": "Loomis",
          "image": "Nutrioso",
          "age": 28,
          "universityId": 48921
        },
        {
          "name": "Judith Whitley",
          "email": "judithwhitley@idetica.com",
          "username": "judithwhitley@idetica.com",
          "password": "Shawmut",
          "image": "Eastvale",
          "age": 14,
          "universityId": 142326
        },
        {
          "name": "Levine Wyatt",
          "email": "levinewyatt@idetica.com",
          "username": "levinewyatt@idetica.com",
          "password": "Carbonville",
          "image": "Beaulieu",
          "age": 29,
          "universityId": 169306
        },
        {
          "name": "Mayer Harper",
          "email": "mayerharper@idetica.com",
          "username": "mayerharper@idetica.com",
          "password": "Ona",
          "image": "Needmore",
          "age": 49,
          "universityId": 374352
        },
        {
          "name": "Victoria Harris",
          "email": "victoriaharris@idetica.com",
          "username": "victoriaharris@idetica.com",
          "password": "Malott",
          "image": "Harmon",
          "age": 11,
          "universityId": 288932
        },
        {
          "name": "Matthews Buchanan",
          "email": "matthewsbuchanan@idetica.com",
          "username": "matthewsbuchanan@idetica.com",
          "password": "Sanders",
          "image": "Stevens",
          "age": 57,
          "universityId": 934831
        },
        {
          "name": "Oneill Evans",
          "email": "oneillevans@idetica.com",
          "username": "oneillevans@idetica.com",
          "password": "Ripley",
          "image": "Saranap",
          "age": 55,
          "universityId": 750942
        },
        {
          "name": "Hunt Wallace",
          "email": "huntwallace@idetica.com",
          "username": "huntwallace@idetica.com",
          "password": "Salix",
          "image": "Twilight",
          "age": 22,
          "universityId": 541222
        },
        {
          "name": "Sweet Duke",
          "email": "sweetduke@idetica.com",
          "username": "sweetduke@idetica.com",
          "password": "Grandview",
          "image": "Selma",
          "age": 34,
          "universityId": 205743
        },
        {
          "name": "Jerri Leon",
          "email": "jerrileon@idetica.com",
          "username": "jerrileon@idetica.com",
          "password": "Seymour",
          "image": "Weogufka",
          "age": 49,
          "universityId": 667801
        }
      ])
  return (
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Image</th>
      <th scope="col">Driving Age</th>
      <th scope="col">UniversityId</th>

    </tr>
  </thead>
  <tbody>
    {
        state.map(ele=>{
            return <tr>
            <th scope="row">{ele.name}</th>
            <td>{ele.email}</td>
            <td>{ele.username}</td>
            <td>{ele.password}</td>
            <td>{ele.image}</td>
            <td style={{ color: ele.age>20? "green":"red"}}>{ele.age>20?'Legal':'Not Legal'}</td>
            <td>{ele.universityId}</td>
            
          </tr>
        })
    }
  
   
  </tbody>
</table>



    </div>
  )
}

export default ConditionRendering