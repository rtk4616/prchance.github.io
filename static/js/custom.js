/* Write here your custom javascript codes */

jQuery(document).ready(function() {
  $("#id_contact_us_form").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
      type: form.attr("method"),
      url: form.attr("action"),
      data: form.serialize()
    }).done(function(data) {
      $("#contact-us").modal('hide');
      alert("留言已收到，我们会尽快联系您！");
    }).fail(function(data) {
      alert("发生错误，请更正错误重新再提交。");
    });
  });

});
