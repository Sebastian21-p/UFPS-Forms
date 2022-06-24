function agregarresp(y){
    let x=document.getElementById(y+"").value

    let cont=""
    if(x<=0){
        cont="<div class='col' id='error' ><label class='text-center mt-4 mb-4 ml-4'>" +
        "El numero digitado no es valido</label></div>";
        }
        else{
          for(var i=1;i<=x;i++){
            cont+=`<br><div class='form-check form-check' style='margin-left:20px'><input class="form-check-input" type="radio" name="respuesta" id="inlineRadio1" value="option1">
            <input name="`+y+`" class="form-check-label" for="inlineRadio1" placeholder="Ingrese respuesta"></div>`
          }
        }


    document.getElementById("resp"+y).innerHTML = cont;
				
}

function agregarresp2(y){
    let x=document.getElementById(y+"").value

    let cont=""
    if(x<=0){
        cont="<div class='col' id='error' ><label class='text-center mt-4 mb-4 ml-4'>" +
        "El numero digitado no es valido</label></div>";
        }
        else{
          for(var i=1;i<=x;i++){
            cont+=`<br><div class="form-check form-check" style="margin-left:20px">
                  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                  <input name="`+y+`" class="form-check-label" for="inlineCheck1" placeholder="Ingrese respuesta">
            </div>`
          }
        }


    document.getElementById("resp"+y).innerHTML = cont;
				
}

function agregarpregunta(){
    let z=document.getElementById("tipo").value;
    let x=encontrarultimoid();
    console.log(z);
    let cont=""
    if(z==1){
    cont+=`<br><div name="preguntaU" class="form-group">
			<div id="contenido4">
				<div class="row" style="margin-top: 5px;">
					<div class="col-md-9">
				<input name="pregunta" type="text" placeholder="Formule la pregunta" class="confondo" style="-webkit-border-radius:12px;	-moz-border-radius:5px;border-radius:5px; width: 400px; border-bottom:#FFFFFF; border-top: #FFFFFF; border-right:#FFFFFF ; border-left:#FFFFFF;background-color: #FFFFFF; margin-left:20px" required>
				<input name="tipo" type="hidden" value="1">	
                </div>
					
				</div>
			</div><br>
			<div>
				<label>Digite cantidad de respuestas</label>
				<input type="number" id="${x}" min="2" max="10">
				<button type="button" class="btn btn-primary" onclick=agregarresp(${x}) id="agregar">Agregar Respuestas</button>
			</div>
			<div id="contenido5"><div id="resp${x}"></div>
			</div>
		</div>`
    } else if(z==2){
        cont+=`<br><div id="preguntam">
		<div id="contenido4">
			<div class="row" style="margin-top: 5px;">
				<div class="col-md-1">
				<input name="pregunta" type="text" placeholder="Formule la pregunta" class="confondo" style="width: 400px; border-bottom:#FFFFFF; border-top: #FFFFFF; border-right:#FFFFFF ; border-left:#FFFFFF;background-color: #FFFFFF; margin-left:20px" required>
				<input name="tipo" type="hidden" value="2">
                </div>
			</div>
		</div>

		<br>
				<label>Digite cantidad de respuestas</label>
				<input type="number" id="`+x+`" min="2" max="10">
				<button type="button" class="btn btn-primary" onclick=agregarresp2(`+x+`) id="agregar">Agregar Respuestas</button>
			
			<div id="contenido5"><div id="resp`+x+`"></div></div>
			

	</div>`
    }else if(z==3){
        cont+=`<br>
<div id="preguntaA">
	<div id="contenido4">
		<div class="row" style="margin-top: 5px;">
			<div class="col-md-1">
				<input name="pregunta" type="text" placeholder="Formule la pregunta" class="confondo" style="width: 400px; border-bottom:#FFFFFF; border-top: #FFFFFF; border-right:#FFFFFF ; border-left:#FFFFFF;background-color: #ffffff; margin-left:20px" required>
                <input name="tipo" type="hidden" value="3">
			</div>
		</div>
		<br>
	    <div id="contenido5"><textarea style="margin-left: 70px; resize: none; " name="`+x+`" rows="4" cols="100"></textarea></div>
	</div>
</div><br><br><br><br><br>
<div id="contenido5"><div id="resp`+x+`"></div></div>`

    }
  
    let y=x+1;	
    cont+=`<div id="preg`+y+`"></div>`
    console.log(x)
    console.log(y)
    document.getElementById("preg"+x).innerHTML=cont  


}

function recargarPag(){
    alert("Se ha cargado la encuesta con éxito")
    location.reload();
}

function encontrarultimoid(){
    let x=document.getElementById("resp"+1);
    let y=1;    
    for(let i=2;x!=null;++i){
            y=i;
            if(x==null){
                return i-1;
            }else{x=document.getElementById("resp"+i);}
        }return y;
}

function crear(){
  nombre = true;

  let encuesta = {
    nombre
  }

  if(localStorage.getItem("Encuestas") == null){
    let encuestas = []
    encuestas.push(encuesta)
    localStorage.setItem("Encuestas",JSON.stringify(encuestas))
  } else{
    let encuestas = JSON.parse(localStorage.getItem("Encuestas"))
    encuestas.push(encuesta)
    localStorage.setItem("Encuestas",JSON.stringify(encuestas))
  }
  console.log("Las encuestas se han cargado Correctamente")
 
}