alert('Fuck!!');
var yoo  = {
    name : "yaswanth",
    class : 10 , 
    grade1 : 9 , 
    grade2 : 9.5,
    avg_grade : function() {
        let avg = (this.grade1+this.grade2)/2;
        console.log(avg);
    }
};
yoo.avg_grade();
console.log(yoo.name);