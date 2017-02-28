$(document).ready(function() {
           var debug=true;

           $('select').material_select();
           $("#addEmpresa").submit(function(event){
             event.preventDefault(); //Evita el refreh automático que se produce al enviar el form
             if (debug) console.log("Se va a enviar el form"); //Se muestra por consola este mensaje para verificar que se produce el evento de submit.
             var serializado = $("#addEmpresa").serialize(); //Esta es la forma de obtener los datos de un formulario en formato serializado de texto, cada elemento de formulario está separado por el símbolo "&"             
             if (debug) console.log("Formulario serializado:"+serializado);
             var serializadoArray = $("#addEmpresa").serializeArray();
             if (debug) console.log("Formulario serializado en array:");
             if (debug) console.log(serializadoArray);
             //Esta es la forma de obtener datos del formulario y convertirlo en formato JSON
             var jsonData= JSON.stringify($("#addEmpresa").serializeArray());
             if (debug)console.log("Datos en Json:");
             if (debug)console.log(jsonData);
             $.ajax({
               url: 'php/recibeJson.php',
               type: 'POST',
               dataType: 'json',
               data: jsonData,
               success: function(result){ 
                   if (debug) console.log(result.sql);
                   },

               error: function(result){
                   alert("errorrrrr!!!!!");
               }
             })
             
             });
             
             
              
           });
           