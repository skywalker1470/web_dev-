/*        function freaky(x, y){
    let z = x + y;
    return z;
}
const ans = freaky(10,20);
console.log(ans);
//Objects
let obj = {
    name:"yaswanth" , 
    grade:"Btech" , 
    age : 19 
};
console.log(obj.name);
var obj_duplicate = obj ; 
console.log(obj_duplicate.age);   */
//Learning methods 
let devops = {
    function devops(A,B,C){
        this.A = A;
        this.B = B;
        this.C = C;
    }
    first_name : "Freaky" ;
    last_name : "Boi";
    concating : function() {
        return (this.first_name+" "+this.last_name);
    }
    viewing_constructing : function(){
        console.log("A : " + A +"\nB : "+B+"\nC : "+C);
    }
}
let new_obj = new devops(10,"siddu",false);
new_obj.viewing_constructing();
