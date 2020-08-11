var result=0;

function check(){
   
    var right_answer1=document.getElementById("ques1-c");
    var option1=document.getElementById('ques1-a');
    var option2=document.getElementById('ques1-b');
    var option3=document.getElementById('ques1-d');
    if(right_answer1.checked == true)
    {
        result++;
        alert("question 1 answer is right")
    }
    else
    {
        alert("question 1 answer is wrong")
    }



    var right_answer2=document.getElementById("ques2-a");
    var option1=document.getElementById('ques2-c');
    var option2=document.getElementById('ques1-b');
    var option3=document.getElementById('ques1-d');
    if(right_answer2.checked == true)
    {
        result++;
        alert("question 2 answer is right")
    }
    else
    {
        alert("question 2 answer is wrong")
    }


    var right_answer3=document.getElementById("ques3-c");
    var option1=document.getElementById('ques3-a');
    var option2=document.getElementById('ques3-b');
    var option3=document.getElementById('ques3-d');
    if(right_answer3.checked == true)
    {
        result++;
        alert("question 3 answer is right")
    }
    else
    {
        alert("question 3 answer is wrong")
    }



    var right_answer4=document.getElementById("ques4-a");
    var option1=document.getElementById('ques4-c');
    var option2=document.getElementById('ques4-b');
    var option3=document.getElementById('ques4-d');
    if(right_answer4.checked == true)
    {
        result++;
        alert("question 4 answer is right")
    }
    else
    {
        alert("question 4 answer is wrong")
    }


    var right_answer5=document.getElementById("ques5-b");
    var option1=document.getElementById('ques5-c');
    var option2=document.getElementById('ques5-a');
    var option3=document.getElementById('ques5-d');
    if(right_answer5.checked == true)
    {
        result++;
        alert("question 5 answer is right")
    }
    else
    {
        alert("question 5 answer is wrong")
    }
  alert("your score is " + result++)




}




    