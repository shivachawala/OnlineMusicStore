$(document).ready(function () {
    
    $("#submit").click(function (e) {
       // alert("hello");
        e.preventDefault();
        $("#message").text("");
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var uname = $("#uname").val();
        var email = $("#email").val();
        var pwd = $("#password").val();
        var cpwd = $("#cpassword").val();
        //alert("hello");

        // var unameMsg = $("<span></span>");
        // $("#uname").after(unameMsg);


        if (pwd != cpwd || !email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3})+$/) || !pwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))
        {
            if(pwd != cpwd)
            {
                $("#message").append("<p>Error: Password and Confirm password should match</p>");
                $("#message").css("color","red");
            }

            if(!email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3})+$/))
            {
                $("#message").append("<p>Error: Please enter a valid email address</p>");
                $("#message").css("color","red");
            }

            if(!pwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))
            {
                $("#message").append("<p>Error: Please enter a valid password</p>");

                $("#message").css("color","red");

                $("#message").fadeOut(5000);
            }
        }

        else
        {   alert("ajax");
            var v = $("#signup").serialize();
            $.ajax({
                url: "signup.php",
                type: "POST",
                data: v,

                success:function (data) {
                    // alert(data);
                    if(data == "User exists")
                    {
                        // alert("message");
                        $("#message").append("<p>User name already exists. Please select different name.</p>");
                        $("#message").css("color","red");
                    }

                    if(data == "Successful")
                    {   var msgg="<p>Signup Successful. Login using the link at the bottom of the page</p>";
                        $("#message").append(msgg);
                        $("#message").css("color","green");
                    }

                }


            });
        }
        // alert("Working");

    });

});