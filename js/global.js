// (function ($) {
//     'use strict';
//     /*==================================================================
//         [ Daterangepicker ]*/
//     try {
//         $('.js-datepicker').daterangepicker({
//             "singleDatePicker": true,
//             "showDropdowns": true,
//             "autoUpdateInput": false,
//             locale: {
//                 format: 'DD/MM/YYYY'
//             },
//         });
    
//         var myCalendar = $('.js-datepicker');
//         var isClick = 0;
    
//         $(window).on('click',function(){
//             isClick = 0;
//         });
    
//         $(myCalendar).on('apply.daterangepicker',function(ev, picker){
//             isClick = 0;
//             $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
//         });
    
//         $('.js-btn-calendar').on('click',function(e){
//             e.stopPropagation();
    
//             if(isClick === 1) isClick = 0;
//             else if(isClick === 0) isClick = 1;
    
//             if (isClick === 1) {
//                 myCalendar.focus();
//             }
//         });
    
//         $(myCalendar).on('click',function(e){
//             e.stopPropagation();
//             isClick = 1;
//         });
    
//         $('.daterangepicker').on('click',function(e){
//             e.stopPropagation();
//         });
    
    
//     } catch(er) {console.log(er);}
//     /*[ Select 2 Config ]
//         ===========================================================*/
    
//     try {
//         var selectSimple = $('.js-select-simple');
    
//         selectSimple.each(function () {
//             var that = $(this);
//             var selectBox = that.find('select');
//             var selectDropdown = that.find('.select-dropdown');
//             selectBox.select2({
//                 dropdownParent: selectDropdown
//             });
//         });
    
//     } catch (err) {
//         console.log(err);
//     }
    

// })(jQuery);

var i=1;
$("#add_row").click(function(){
 $('#particulars_deatils'+i).html("<td>"+ (i+1) +"</td><td><input name='particulars"+i+"' type='text' placeholder='Desc' class='form-control input-md'  /></td><td><input  name='opn_reading_km"+i+"' type='text' placeholder='Open KM'  class='form-control input-md'></td><td><input  name='closing_reading_km"+i+"' type='text' placeholder='Close KM'  class='form-control input-md'></td><td><input  name='total_reading_km"+i+"' type='text' placeholder='Total KM'  class='form-control input-md'></td><td><input  name='amount"+i+"' type='text' placeholder='Amount'  class='form-control input-md'></td>");

 $('#tab_logic').append('<tr id="particulars_deatils'+(i+1)+'"></tr>');
 i++; 
});
$("#delete_row").click(function(){
    if(i>1){
    $("#particulars_deatils"+(i-1)).html('');
    i--;
    }
});

// getFormData = (selector) => Object.fromEntries(new FormData(document.querySelector(selector)))

// console.log('Output of getFormData:')
// console.log(getFormData('#invoice_form'))

const loginForm = document.getElementById("invoice_form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log("---")
    console.log(formProps)
  }

  #invoice{
    padding: 30px;
}

.invoice {
    position: relative;
    background-color: #FFF;
    min-height: 680px;
    padding: 15px
}

.invoice header {
    padding: 10px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #3989c6
}

.invoice .company-details {
    text-align: right
}

.invoice .company-details .name {
    margin-top: 0;
    margin-bottom: 0
}

.invoice .contacts {
    margin-bottom: 20px
}

.invoice .invoice-to {
    text-align: left
}

.invoice .invoice-to .to {
    margin-top: 0;
    margin-bottom: 0
}

.invoice .invoice-details {
    text-align: right
}

.invoice .invoice-details .invoice-id {
    margin-top: 0;
    color: #3989c6
}

.invoice main {
    padding-bottom: 50px
}

.invoice main .thanks {
    margin-top: -100px;
    font-size: 2em;
    margin-bottom: 50px
}

.invoice main .notices {
    padding-left: 6px;
    border-left: 6px solid #3989c6
}

.invoice main .notices .notice {
    font-size: 1.2em
}

.invoice table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 20px
}

.invoice table td,.invoice table th {
    padding: 15px;
    background: #eee;
    border-bottom: 1px solid #fff
}

.invoice table th {
    white-space: nowrap;
    font-weight: 400;
    font-size: 16px
}

.invoice table td h3 {
    margin: 0;
    font-weight: 400;
    color: #3989c6;
    font-size: 1.2em
}

.invoice table .qty,.invoice table .total,.invoice table .unit {
    text-align: right;
    font-size: 1.2em
}

.invoice table .no {
    color: #fff;
    font-size: 1.6em;
    background: #3989c6
}

.invoice table .unit {
    background: #ddd
}

.invoice table .total {
    background: #3989c6;
    color: #fff
}

.invoice table tbody tr:last-child td {
    border: none
}

.invoice table tfoot td {
    background: 0 0;
    border-bottom: none;
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    border-top: 1px solid #aaa
}

.invoice table tfoot tr:first-child td {
    border-top: none
}

.invoice table tfoot tr:last-child td {
    color: #3989c6;
    font-size: 1.4em;
    border-top: 1px solid #3989c6
}

.invoice table tfoot tr td:first-child {
    border: none
}

.invoice footer {
    width: 100%;
    text-align: center;
    color: #777;
    border-top: 1px solid #aaa;
    padding: 8px 0
}

@media print {
    .invoice {
        font-size: 11px!important;
        overflow: hidden!important
    }

    .invoice footer {
        position: absolute;
        bottom: 10px;
        page-break-after: always
    }

    .invoice>div:last-child {
        page-break-before: always
    }
}
