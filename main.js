$(document).ready(function(){
    $('#botao-instrucoes').click(function(){
        $('main h2').slideToggle()
    })

    $('#botao-form').click(function(){
        $('form').fadeIn(1000)
    })

    $('#botao-cancelar').click(function(){
        $('form').hide(1000)
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('#nome-tarefa').val()
        $(`<li>${novaTarefa}</li>`).appendTo('ul')
        $('#nome-tarefa').val('')
    })

    $("ul").on('click','li',function(){
        $(this).addClass("novo-item")
    })
})

