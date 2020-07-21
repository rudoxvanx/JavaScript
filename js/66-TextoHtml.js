const $whatIsDOM=document.getElementById("que-es");

let text=`
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Deleniti, 
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Deleniti, omnis doloribus ducimus perspiciatis facilis 
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Deleniti, omnis doloribus ducimus perspiciatis facilis 
</p>
`;


$whatIsDOM.innerText=text;


/*ALGUNOS USOS
Algunas veces puede ser utilizado en aplicaciones que
algunas veces permiten como entrada codigo con formato html*/

//Solamente es utilizado cuando se insertara texto
$whatIsDOM.textContent=text;
//Solo se utiliza cuando se inserta código html
$whatIsDOM.innerHTML=text;

//Remplazar un contenido por un nuevo contenido
$whatIsDOM.outerHTML=text;
