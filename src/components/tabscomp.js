import './box.css';
import React, { useState } from  'react';

const Tabscomp = props => {
    // const textInput = useRef(null);
  
    const [name, setname] = useState("");
    const{list, setlist} = props;

  //  console.log(name);
 


   
return(
<div class = "box">

<div class="tab">



{
  list.map ((tab,i) =>(
    // <Task task = {task}    list = {list} />
    <button class="tablinks"   onClick={() => setname(tab)} >  {tab}  </button>

  ))
} 



</div>
<p> This content of  {name} .</p> 

</div>
 
       
    

);

}

export default Tabscomp;