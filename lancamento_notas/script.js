const selectSocializacao = document.querySelectorAll('[data-socializacao]')
// let todasPatas = selectSocializacao.forEach(item => item.id)

//addEventListener('click',pintarPatas)
for (let i = 0; i < selectSocializacao.length; i++) {
    const pataDavez = selectSocializacao[i]
    const pata = pataDavez.classList[1]; // classe ck
    //console.log(pata)
    
    const pataId = `#c-${pata}`;
    //console.log(pataId);

    pataDavez.onclick = function () {
        pintarPatas(pataId)
    } 
}

function pintarPatas(pataId) {
    console.log(pataId)
    // selectSocializacao.forEach(item => console.log(item))	
			
		if(pataId == '#c-ck5') {
			//check()
            console.log('clicado')
            document.getElementById("c-ck4").checked = true;
            document.getElementById("c-ck1").checked = true;
            document.getElementById("c-ck2").checked = true;
            document.getElementById("c-ck3").checked = true;
		    }else{
			//uncheck()
			console.log('não clicado')
            document.getElementById("c-ck1").checked = false;
            document.getElementById("c-ck2").checked = false;
            document.getElementById("c-ck3").checked = false;
            document.getElementById("c-ck4").checked = false;
		    }
       /* if(pataId == '#c-ck4') {
			//check()
            console.log('clicado')
            document.getElementById("c-ck1").checked = true;
            document.getElementById("c-ck2").checked = true;
            document.getElementById("c-ck3").checked = true;
		    }else{
			//uncheck()
			console.log('não clicado')
            document.getElementById("c-ck1").checked = false;
            document.getElementById("c-ck2").checked = false;
            document.getElementById("c-ck3").checked = false;
		    }
        if(pataId == '#c-ck3') {
			//check()
            console.log('clicado')
            document.getElementById("c-ck1").checked = true;
            document.getElementById("c-ck2").checked = true;
		    }else{
			//uncheck()
			console.log('não clicado')
            document.getElementById("c-ck1").checked = false;
            document.getElementById("c-ck2").checked = false;
		    }
        if(pataId == '#c-ck2') {
			//check()
            console.log('clicado')
            document.getElementById("c-ck1").checked = true;
		    }else{
			//uncheck()
			console.log('não clicado')
            document.getElementById("c-ck1").checked = false;
		    }
            */
}
/*
function check() {
    document.getElementById("ck1").checked = true;
}
function uncheck() {
    document.getElementById("ck1").checked = false;
}
*/
  
    
    
    // let at = document.createAttribute("class")
    // at.value = "pataClicada";
    // ck2.setAttributeNode(at)
