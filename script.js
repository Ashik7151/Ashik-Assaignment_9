'use strict'
        document.write('<h1>JS Prgramming Language</h1>')

        // variable

        var name ='AshikurRahman'
        var age = 20;
        var cgpa = 3.15;
        var ismale = true;

        document.write('My name is ' +name+'.I am '+age + ' years old.My current cgpa is '+cgpa )
        // variable2

        var num1 = 1000
        var num2 = 300
        var num3 = 800

        if( num1 > num2 && num1 > num3){
        	document.write(' <br> Number 1 is bigger ')
        }
        if( num2 > num1 && num2 > num3){
        	document.write('Number 2 is bigger ')
        }
        if( num3 > num1 && num3 > num2){
        	document.write('Number 3 is bigger ')
        }

       // variable3

       var number = 22;

       if(number % 2 == 0){
       	document.write('<br> Even <br>')
       }
        if(number % 2 != 0){
       	document.write('<br> Odd <br>')
       }

       // variable 4 result

      var Bangla = 82;
      var Mathematics = 70;
      var English = 74;
      var Mathematics = 78;
      var Science = 92;
      var ICT = 90;

      var avg = 0;

      avg = (Bangla+Mathematics+English+Science+ICT) /5;


      if (avg >= 90 && avg <= 100){
         document.write('A+');
     	}
      if (avg >= 80 && avg <= 89){
         document.write('A ');
        }
      if (avg >= 70 && avg <= 79){
         document.write('B');
        }
      if (avg >= 60 && avg <= 69){
         document.write('C');
        }
      if (avg >= 33 && avg <= 59){
         document.write('D');
        }
      if (avg < 33){
         document.write('Congratulation');
        }      
        document.write('<br>');

       // variable 5 unite


        var unit = 376;
        var subtotal = 0;
        var total = 0;

        if(unit <= 50){
        	subtotal = unit * 5;
        }
        if(unit > 50 && unit <= 150){
        	subtotal = 50*5 + (unit-50)*7;
        }
        
        if(unit > 150 && unit <= 250){
        	subtotal = 50*5 + 100*7 + (unit-150)*10;
	    }	
         if(unit > 250 ){
        	subtotal = 50*5 + 100*7 + 100*10 + (unit-250)*15;
        }

        total = subtotal * 0.15 + subtotal; 

        document.write('subtotal: '+subtotal + '<br>' + 'total: ' + total)

         
            document.write('<br>');

        // variable weak section


          var day = 2

              if (day == 1) {
                document.write('Saturday');
              }
              else if (day == 2) {
                document.write('Sunday');
              }
              else if (day == 3) {
                document.write('Monday');
              }
              else if (day == 4) {
                document.write('Tuesday');
              }
              else if (day == 5) {
                document.write('Wednesday');
              }
              else if (day == 6) {
                document.write('Thursday');
              }
              else if (day == 7) 
                document.write('Friday');
              
              else{
                document.write('wrong input');
              }

            document.write('<br>');
              // varianle month section

              var month = 6


        if (month == 1) {
          document.write('January = 31');
        }
        else if (month == 2) {
          document.write('February = 29');
        }
        else if (month == 3) {
          document.write('March = 31');
        }
        else if (month == 4) {
          document.write('April = 30');
        }
        else if (month == 5) {
          document.write('May = 31');
        }
        else if (month == 6) {
          document.write('June = 30');
        }
        else if (month == 7) {
          document.write('July = 31');
        }
        else if (month == 8) {
          document.write('August = 31');
        }
        else if (month == 9) {
          document.write('September = 30');
        }
        else if (month == 10) {
          document.write('October = 31');
        }
        else if (month == 11) {
          document.write('November = 30');
        }
        else if (month == 12) {
          document.write('December = 31');
        }
        else{
             document.write('wrong input');
              }



                     





