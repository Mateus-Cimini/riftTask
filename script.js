$(document).ready(function() {


    //Funçao para quando clicar no btn de add
    $('#btnAdd').click(function(e) {
        e.preventDefault();
        const task = $('#inputTask').val();

        const novoItem = $('<li class="item"></li>');
        $(`
                <p>${task}
                <button class="check"><i class="fas fa-check"></i></button>
                <button class="trash"><i class="fas fa-trash"></i></button></p>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#inputTask').val('');
        
    });

    // funçao para quando clicar no lixo,usando `on` para elementos dinâmicos
    $('ul').on('click', '.trash',function() {
        // encontra o item mais proximo(li) e o remove do DOM
        $(this).closest('.item').remove();

    });
    
    //funçao para quando clicar no check
    $('ul').on('click', '.check',function() {
        $(this).closest('.item').toggleClass('completed'); // Exemplo de marcação
        
    })
});