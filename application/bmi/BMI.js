class BMI{
    constructor(height=0, weight=0){
        this.height=height;
        this.weight=weight;
    }
    getBMI(){
        let bmi=this.weight/Math.pow(this.height/100, 2)

        bmi=bmi*10;
        bmi=Math.round(bmi);
        bmi=bmi/10;
        this.bmi=bmi;

        return bmi;
    }
    getAdvice(){
        let idealweight=22*Math.pow(this.height/100, 2);
        idealweight=idealweight*10;
        idealweight=Math.round(idealweight);
        idealweight=idealweight/10;
        let adviceMessage='理想体重です。現状を維持しましょう。';

        if (this.bmi > 22){
            adviceMessage='太っています。体重'+idealweight+'kgを目指しましょう。';
        }else if(this.bmi<22){
            adviceMessage='痩せています。体重'+idealweight+'kgを目指しましょう。';
        }
        return adviceMessage;
    }
}