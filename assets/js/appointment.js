jQuery(document).ready(function () {

            $("#proposed_date").datepicker();

            jQuery('#form-submit').click(function (e) {
                e.preventDefault();


                var name = $("#name").val();
                if (name == "") {
                    // alert("Name not Filled")
                    sweetAlert('Error', 'Kindly fill your name', 'error');
                    return false;
                }
                var email = $("#email").val();
                if (email == "") {
                    sweetAlert('Error', 'Your email is empty', 'error');
                    return false;
                }
                var phone = $("#phone").val();
                if (phone == "") {
                    sweetAlert('Error', 'Enter your Phone number', 'error');
                    return false;
                }

                var hour = $("#hour").val();
                if (hour == "") {
                    sweetAlert('Error', 'Enter the hour', 'error');
                    return false;
                }


                var date_of_ap = $("#date_of_ap").val();
                if (date_of_ap == "") {
                    sweetAlert('Error', 'Enter a valid date', 'error');
                    return false;
                }
                if (new Date(date_of_ap) === NaN) {
                    sweetAlert('Error', 'Enter a valid date', 'error');
                    return false;
                }


                

                var message = $("#message").val();
                if (message == "") {
                    sweetAlert('Error', 'Kindly enter a brief message', 'error');
                    return false;
                }



                jQuery.ajax({

                    type: 'POST',
                    url: "sendemail.php",
                    data: {
                        name: jQuery('#name').val(),
                        email: jQuery('#email').val(),
                        hour: jQuery('#hour').val(),
                        phone: jQuery('#phone').val(),
                        proposed_date: jQuery('#date_of_ap').val(),
                        message: jQuery('#message').val(),

                    },
                    success: function (result) {


                        jQuery('#name').val("")
                        jQuery('#email').val("")
                        jQuery('#hour').val("")
                        jQuery('#message').val("")
                        jQuery('#phone').val("")
                        jQuery('#date_of_ap').val("")


                        sweetAlert('Success', 'Your appointment Request sent successfully, you will receive communication from us soon', 'success');
                    },
                    error: function (jqXHR, textStatus, errorThrown) {

                        sweetAlert('Error', 'Your appointment had a error, please try again', 'error');
                        // window.location.reload()
                    }

                });
            });

        })
