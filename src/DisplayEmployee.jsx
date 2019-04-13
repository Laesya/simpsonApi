import  React  from  'react';


const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            
            <ul>
                <li> Quote: {employee.quote}</li>
                <li>
                    Character : {employee.character}  
                </li>
                
                <img  src={employee.image}  alt="picture" />
                 
                <li>CharacterDirection: {employee.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;