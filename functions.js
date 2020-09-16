function multiplicacion(){
    let count = 0;
    return{
        increment: function(){
            count++;
            mult=tabla*count;
        },
        show: function(){
            return count;
        }
    }
}

var tabla = 4;
var count = multiplicacion();

for(i=0;i<10;i++){
    count.increment();
    console.log(`${tabla} * ${count.show()} =  ${mult}`);
}