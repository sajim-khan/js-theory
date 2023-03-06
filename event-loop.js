function a (){
    console.log('a');
    b();
    console.log('aa');
}
function b (){
    console.log('b');
    c();
    console.log('bb');
}
function c (){
    d();
    console.log('c');
    console.log('cc');
}
function d (){
    console.log('d');
    console.log('dd');
}

a();