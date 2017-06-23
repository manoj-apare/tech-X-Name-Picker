$(document).ready(function(){
  $('#btn').click(function(){
    if (confirm('Are you sure you want to rest the list?')) {
       window.location = '../reset.php';
} else {
              // nothing!
}
});

});
