import Controller from '@ember/controller';

export default Controller.extend({
	fontSizes:['4px','8px','9px','10px','11px','12px','14px','18px','24px','30px','36px','48px','60px','72px','84px','96px'],
	selectedFont:'12px',
	switchContext:false,
	child:null,
	focusDiv(){
		let div=document.getElementById('editableddiv');
		div.focus(); 	
	},
	actions:{
		bold(){
			this.focusDiv();
			document.execCommand('bold');
		},
		underline(){
			this.focusDiv();
			document.execCommand('underline');
		},
		italic(){
			this.focusDiv();
			document.execCommand('italic');
		},
		strike(){
			this.focusDiv();
			document.execCommand('strikeThrough');
		},
		left(){
			this.focusDiv();
			document.execCommand('justifyLeft');
		},
		center(){
			this.focusDiv();
			document.execCommand('justifyCenter');
		},
		right(){
			this.focusDiv();
			document.execCommand('justifyRight');
		},
		justify(){
			this.focusDiv();
			document.execCommand('justifyFull');
		},
		hyperlink(){
			this.focusDiv();
			document.execCommand('createLink');
		},
		fontSize(event){
			this.focusDiv();
			let selection=document.getSelection();
			let string=selection.toString();
			if(string){
				let span=document.createElement('span');
				span.innerText=string;
				span.style.fontSize=event.target.value;
				document.execCommand('insertHTML',false,span.outerHTML);	
			}
			else{
				let selection=document.getSelection();
				let parentNode=selection.anchorNode.parentElement;
				let span=document.createElement('span');
				span.style.fontSize=event.target.value;
				parentNode.appendChild(span);
				document.execCommand('insertText',false,'\r\n');document.execCommand('delete');
			}
			this.set('selectedFont',event.target.value);

		},
		divContentChanged(event){
			
		}
}
});
