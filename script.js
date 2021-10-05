let ultasks = $ ('#ultasks')
let btnadd = $('#btnadd')
let btnclean = $('#btnclean')
let btnsort = $('#btnsort')
let btnreset = $('#btnreset')
let inptask = $("#Inputnewtask")


function additem(){
    let lisitem= $('<li>',{
        'class':'list-group-item',
        'id':'notdone',
        text:inptask.val()
    })
    ultasks.append(lisitem)
    console.log(inptask.val())

    lisitem.click(()=>{
        console.log('clicked')
        $((lisitem).attr('class', "list-group-item disabled"));
        $((lisitem).attr('id', "done"));

    })
}
    

btnadd.click(additem);

inptask.keypress((e)=>{
    if(e.which==13){
        additem();
        inptask.val('');

    }

})


btnreset.click(()=>{
    inptask.val('');
})

function clear(){
$('#done').remove();
}


btnclean.click(clear)