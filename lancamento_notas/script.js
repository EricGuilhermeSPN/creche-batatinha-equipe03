const ck1 = document.querySelector("#ck1")
const ck2 = document.querySelector("#ck2")
const ck3 = document.querySelector("#ck3")
const ck4 = document.querySelector("#ck4")
const ck5 = document.querySelector("#ck5")

ck1.addEventListener('click',pintarPatas )

function pintarPatas() {
   var input = document.getElementsByTagName('input');				
			
		if(ck1.checked) {
			ck2.nextSibling.nodeValue = input.value  + " [checked]"
            console.log(ck2)
		}
		else {
			item.nextSibling.nodeValue = item.id;
		}
	}

  
    
    
    // let at = document.createAttribute("class")
    // at.value = "pataClicada";
    // ck2.setAttributeNode(at)
