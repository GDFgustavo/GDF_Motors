
    $('#slideRight').click(function() {
        $('#categorias').animate( { scrollLeft: '+=660' }, 500);
    });
    
    $('#slideLeft').click(function() {
        $('#categorias').animate( { scrollLeft: '-=660' }, 500);
    });
    
    $('#buttonnext').click(function() {
        $('#carousel-anuncios').animate( { scrollLeft: '+=412' }, 300);
    });

    $('#buttonprev').click(function() {
        $('#carousel-anuncios').animate( { scrollLeft: '-=412' }, 300);
    });
