$(document).ready(function() {
        $( "#application" ).validVal({
    fields: {
        onInvalid: function( $form, language ) {
            $(this).next().stop().fadeIn();
        },
        onValid: function( $form, language ) {
            $(this).next().stop().fadeOut();
        }
    },
    form: {
        onInvalid: function( $fields, language ) {
            alert( $fields.first().next().text() );
        }
    }
});
    });
});