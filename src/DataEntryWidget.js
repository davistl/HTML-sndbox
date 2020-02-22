import React from 'react';

function DataBox () {
    return(
        <div>
            <div className='inputDiv' >
            <label className= 'NameDataEntryWidget' for="fname" id= 'llama'>First Name:   </label>
            <input  className= 'DataEntryWidget' type="text" id="fname" name="fname"/><br/><br/>
            </div>
            <div className='inputDiv' >
            <label className= 'NameDataEntryWidget' for="fname" id= 'llama'>Last Name:   </label>
            <input  className= 'DataEntryWidget' type="text" id="fname" name="fname"/><br/><br/>
            </div>
            <div className='inputDiv' >
            <label className= 'NameDataEntryWidget' for="fname" id= 'llama'>Salary:    </label>
            <input  className= 'DataEntryWidget' type="text" id="fname" name="fname"/><br/><br/>
            </div>
            <div className='inputDiv' >
            <label className= 'NameDataEntryWidget' for="fname" id= 'llama'>Age:    </label>
            <input  className= 'DataEntryWidget' type="text" id="fname" name="fname"/><br/><br/>
            </div>
            <input type="submit" value="Submit"/>
         
        </div>

    );
}

export default DataBox;