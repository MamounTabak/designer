/* بسم الله الرحمن الرحيم */
/* BY AHMAD ESMAIL */
btn.onclick = function(){
    sider.classList.toggle('active');
}
document.onclick = function(e){
    if(e.target.id != 'btn')
    {
        sider.classList.remove('active');
    }
}

