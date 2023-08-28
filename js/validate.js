function validate()
{
    var name = form1.txt1.value;
    var desg =  form1.txt2.value;
    var email = form1.txt3.value;
   
    if(name=="")
    {
        alert("Please Enter Yor Name!!");
        form1.txt1.focus();
        return false;
    }
    else if( desg =="")
    {
        alert("Please Enter Your Designation!!");
        form1.txt2.focus();
        return false;
    }
    else if(email =="")
    {
        alert("Pleae Enter Your Email!!");
        form1.txt3.focus();
        return false;
    }
    else{
        alert("KYC Details Recieved!! Thank you for Registering " + name + "!");
        return true;
    }
}

function validate2()
{
    var name = document.getElementById("name").value;
    var math = document.getElementById("math").value;
    var science = document.getElementById("science").value;
    var computer = document.getElementById("computer").value;


    var mk1 = parseInt(math);
    var mk2 = parseInt(science);
    var mk3 = parseInt(computer);

    if(name == "")
    {
        alert("Please Enter Name!")
    }
    else if(math == "" || science == "" || computer =="")
    {
        alert("Please Enter Marks for all 3 subjects!")
    }
    else{
        var total = mk1+mk2+mk3;
        var perc = total/300 * 100;
        var max = 0;
        if(mk1 >= mk2 && mk1 >= mk3)
        {
            max = mk1;
        }
        else if(mk2 >= mk3 && mk2>= mk1)
        {
            max = mk2;
        }
        else{
            max = mk3;
        }
        
        document.getElementById("total").innerHTML = total;
        document.getElementById("perc").innerHTML = perc;
        document.getElementById("max").innerHTML = max;

    }
}

function sub()
{
    var name = prompt("Please Enter your Name!")
    var country = prompt("Please Enter Country!")
    if(country == "India" || country =="INDIA")
    {
        alert("Hi, 50% discount available!");

    }
    else{
        alert("No discount!")
    }


}

function instructions()
{
    window.open("instructions.html","", "width=600,height=200")
}

function sel()
{
    var e =  document.getElementById("drop");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    if (text == 'MEAN')
    {
        window.open("mean.html","", "width=600,height=200");

    }
    else if (text =='MERN'){ 

        window.open("mern.html","", "width=600,height=200")
       
    }
    else if(text =="MEVN"){

        window.open("mevn.html","", "width=600,height=200")

    }
    else{
        alert("No Option Selected!")
    }
}

function validate3(){
    var q1m = 0;

    if(frm1.r1[0].checked==true)
    {
        q1m=2
    }
    else 
    {
        q1m=0
    }

    if(frm1.r2[1].checked==true)
    {
        q2m=2
    }
    else 
    {
        q2m=0
    }

    fmarks=q1m+q2m;
    alert ("You Got Marks:"+fmarks)

  


}
