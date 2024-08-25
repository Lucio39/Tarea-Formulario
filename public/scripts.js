function submitForm() {  

    // Obtener el formulario  
    const form = document.getElementById('myForm');  // Aquí está el cambio  




    // Obtener los valores de los campos del formulario  
    const input1 = document.getElementById('input1').value;  
    const input2 = document.getElementById('input2').value;  
    const select = document.getElementById('select').value;  
    const textarea = document.getElementById('textarea').value;  

    // Crear el objeto con los datos del formulario  
    const formData = {  
        campo1: input1,  
        campo2: input2,  
        opcionSeleccionada: select,  
        comentarios: textarea  
    };  

    // Imprimir el objeto en la consola  
    console.log(formData);  

    
    // Ocultar el formulario  
    form.style.display = 'none';  

    // Mostrar el mensaje de éxito  
    const successMessage = document.getElementById('successMessage');  
    successMessage.style.display = 'block'; 
}