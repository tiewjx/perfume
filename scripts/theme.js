const header=document.querySelector(".header")
const main=document.querySelector(".main")
const footer=document.querySelector(".footer")
const links=document.querySelectorAll(".nav__link")
const logo=document.querySelector(".logo")

let color='';
let navColor='';

if(localStorage.getItem('bg-color')!==null){
	color=localStorage.getItem('bg-color')
	
	header.style.background=color
	footer.style.background=color
}
if(localStorage.getItem("link-color")!==null){
	navColor=localStorage.getItem("link-color")

	links.forEach((el) => {
		el.style.color = navColor
	})
}
function choiceDark()
{
	header.style.background="grey"
	header.style.transition="0.3s ease-out 0.5s"
	main.style.background="lightgrey"
	main.style.transition="0.3s ease-out 0.5s"
	footer.style.background="grey"
	footer.style.transition="0.3s ease-out 0.5s"

	links.forEach((el) => {
		el.style.color = "lightgrey"
		el.style.transition = "0.3s ease-out 0.5s"
	})
	logo.style.color = "lightgrey"
		logo.style.transition = "0.3s ease-out 0.5s"
	
localStorage.setItem("bg-color","grey")
localStorage.setItem("link-color","lightgrey")
}

function choiceLight()
{
	header.style.background="lightpink"
	header.style.transition="0.3s ease-out 0.5s"
	main.style.background="pink"
	main.style.transition="0.3s ease-out 0.5s"
	footer.style.background="lightpink"
	footer.style.transition="0.3s ease-out 0.5s"

	links.forEach((el) => {
		el.style.color = "#fc6581"
		el.style.transition = "0.3s ease-out 0.5s"
	})
	
		logo.style.color = "#fc6581"
		logo.style.transition = "0.3s ease-out 0.5s"
	

localStorage.setItem("bg-color","lightpink")
localStorage.setItem("link-color","#fc6581")
}