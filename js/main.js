var modal = (function($) {

    function fireModal() {
        // DOM jqObject caching
        var $dialog = $('#dialog');
        var $mask = $('#mask');
        var $windows = $('.window');

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set heigth and width to mask to fill up the whole screen
        $mask.css({
            'width': maskWidth,
            'height': maskHeight
        });

        //transition effect
        $mask.fadeIn(500);
        $mask.fadeTo("slow", 0.9);

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $dialog.css('top', winH / 2 - $dialog.height() / 2);
        $dialog.css('left', winW / 2 - $dialog.width() / 2);

        //transition effect
        $dialog.fadeIn(200);

        //if close button is clicked
        $('.window .close').click(function(e) {
            //Cancel the link behavior
            e.preventDefault();

            $mask.hide();
            $windows.hide();
        });

        //if mask is clicked
        $mask.click(function() {
            $(this).hide();
            $windows.hide();
        });
    }

    return {
        fireModal : fireModal
    };

})(jQuery);
