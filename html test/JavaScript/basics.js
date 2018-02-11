window.onload = function() {
    
    }
    
    document.ready = function() {
    
    }
    
    // jQuery
    
    $(document).ready(function() {
        // $('#myModal').modal('show');

        
    });

    
    
    var information = localStorage.getItem("namn");
    
    if (!information) {
        
    
    $(window).ready(function() {
       
         $('#myModal').modal('show');
           
         
            
    });
    
    }
    
    
        
     else if (information)
    {
    
        var mittnamn = localStorage.getItem("namn");
        var mittemail = localStorage.getItem("email");
        $('#spoFirstName').append(mittnamn);
        $('#spoProfession').append(mittemail);
        $('#spoFirstName2').append(mittnamn);
        $('#spoProfession2').append(mittemail);
        
    
        
        
    }
    
    
    function saveSettings() {
        const firstName = $('#inputName')[0].value;
        const profession = $('#inputold')[0].value;
       
    
        console.log(firstName);
        console.log(profession);
        
        
         $('#spoFirstName').append(firstName);
         $('#spoProfession').append(profession);
         $('#spoFirstName2').append(firstName);
         $('#spoProfession2').append(profession);
    
         
    
    
         localStorage.setItem("namn", firstName);
         localStorage.setItem("email",profession);
         
        
    }
    
    var ButtonElements = document.querySelectorAll(".ms-Button");
    for (var i = 0; i < ButtonElements.length; i++) {
      new fabric['Button'](ButtonElements[i], function() {

       
        
      });
    }
     $(document).ready(function(){
            
            $(".buttomknap").click(function(){
    
    
    
                       
                       location.reload();
    
                     
                       
    
                    });
                    
            
                });