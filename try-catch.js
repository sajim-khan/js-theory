function checkAge(){
    const searchField = document.getElementById('age')
    const text = searchField.value;
    const errorTag = document.getElementById('error')
    try{
       const age = parseInt(text)
       if(isNaN(age)){
            throw "please enter a number"
       }
       else if (age<18){
            throw('Children not allow');
       }
       errorTag.innerHTML = ''
    }
   
    catch(err){
        console.log('Error:', err);
        errorTag.innerHTML = 'Error ' + err;
    }
    finally{
        console.log('catching all done');
    }
}
//checkAge()

