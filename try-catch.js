function checkAge(){
    const searchField = document.getElementById('age')
    const text = searchField.value
    const errorTag = document.getElementById('error')
    errorTag.innerHTML = ''
    try{
       const age = parseInt(text)
       if(isNaN(age)){
            throw "please enter a number"
       }
       else if (age<18){
            console.log('Children not allow');
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
checkAge()

