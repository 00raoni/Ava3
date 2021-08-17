import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns } from "./data";

export default function App(props) { 
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/00raoni/repos")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  
  const lista=data.map((item)=>{
    return (
      <li key={item.id}>
        {item.name}
      </li>
    )
  });  
  
  const outros = new Array();  

  function teste(e){                
    var AuxData=data;        
    var myArray = new Array();
    const listat = AuxData.map((item)=>{      
      if (item.language==e){        
        myArray.push(item);                
      }              
    });      
    setData(myArray);        
  }
  
  var tableData = {
    columns,
    data
  };  
  
  return (

    <div>            
    <div>
      Buscar
      <br/>
      <select onChange={function(e){teste(e.target.value)}} >
        <option selected value="">Selecione um item</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Java">Java</option>
        <option value="C#">C#</option>
        </select>
      </div>
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>    
</div>
  );
}