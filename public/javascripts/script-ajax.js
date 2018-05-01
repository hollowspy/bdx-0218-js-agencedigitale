// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the user table on initial page load
  populateTableBar();
  populateTableBlog();

  // Add User button click
  $('#btnAddBa').on('click', addUser);
  $('#btnAddBlog').on('click', addUser);

  // Update
  $('#updateUser').on('click', updateUser);

  // Delete User link click
  $('#contentBar table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

  // remplir la modal dynamiquement
  $('#contentBar table tbody').on('click', 'td a.modifier', updateModal);

});

// Functions =============================================================

// Fill table with data
function populateTableBar() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/admin/bar', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td data-label="Nom" data-name="name">' + this.name + '</td>';
      tableContent += '<td data-label="Picto" data-name="picto">' + this.picto + '</td>';
      tableContent += '<td data-label="Chiffres" data-name="numbers">'+ this.numbers +'</td>';
      tableContent += '<td><a alt="Modifier" href="#" class="modifier bar" data-row-id="'+this.id+'" data-target="#Bar'+this.id+'" data-toggle="modal"><i class="far fa-edit fa-2x"></i></a></td>';
      tableContent += '<td><a alt="Supprimer" href="#" class="linkdeleteuser" rel="' + this.id + '"><i class="far fa-trash-alt fa-2x"></i></a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#contentBar table tbody').html(tableContent);
  });
};

// Fill table with data
function populateTableBlog() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/admin/blog', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td data-label="Titre" data-name="title">' + this.title + '</td>';
      tableContent += '<td data-label="Contenu" data-name="content">' + this.content + '</td>';
      tableContent += '<td data-label="Images" data-name="images">'+ this.images +'</td>';
      tableContent += '<td data-label="Auteur" data-name="autor">'+ this.autor +'</td>';
      tableContent += '<td data-label="Catégorie" data-name="category">'+ this.category +'</td>';
      tableContent += '<td data-label="Description" data-name="description">'+ this.description +'</td>';
      tableContent += '<td><a alt="Modifier" href="#" class="modifier blog" data-row-id="'+this.id+'" data-target="#Blog'+this.id+'" data-toggle="modal"><i class="far fa-edit fa-2x"></i></a></td>';
      tableContent += '<td><a alt="Supprimer" href="#" class="linkdeleteuser" rel="' + this.id + '"><i class="far fa-trash-alt fa-2x"></i></a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#contentBlog table tbody').html(tableContent);
  });
};

// Show User Info
function updateUser(e) {

  // Prevent Link from Firing
  e.preventDefault();

  // If it is, compile all user info into one object
  var data = {
    'name': $('#updateModalBa input#nameUp').val(),
    'picto': $('#updateModalBa input#pictoUp').val(),
    'numbers': $('#updateModalBa input#numbersUp').val(),
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'PUT',
    data: data,
    url: '/admin/bar/update/' + $(this).attr('rel'),
    dataType: 'JSON'
  }).done(function( response ) {
    // Check for successful (blank) response
    if (response.msg === '') {

      $('#modalAjoutBa input').val('');
      // Update the table
      populateTableBar();

    }
    else {

      // If something goes wrong, alert the error message that our service returned
      alert('Erreur: ' + response.msg);

    }
  });

};

// Add User
function addUser(event) {
  event.preventDefault();

  // Super basic validation - increase errorCount variable if any fields are blank
  var errorCount = 0;
  $('#createBa input').each(function(index, val) {
    if($(this).val() === '') { errorCount++; }
  });

  // Check and make sure errorCount's still at zero
  if(errorCount === 0) {

    // If it is, compile all user info into one object
    var newUser = {
      'name': $('#createBa input#nameAdd').val(),
      'picto': $('#createBa input#pictoAdd').val(),
      'numbers': $('#createBa input#numbersAdd').val(),
    }
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'POST',
      data: newUser,
      url: '/admin/bar/add',
      dataType: 'JSON'
    }).done(function( response ) {
      // Check for successful (blank) response
      if (response.msg === '') {

        // Clear the form inputs
        $('#createBa input').val('');
        $('#modalAjoutBa').hide();

        // Update the table
        populateTableBar();

      }
      else {

        // If something goes wrong, alert the error message that our service returned
        alert('Erreur: ' + response.msg);

      }
    });
  }
  else {
    // If errorCount is more than 0, error out
    alert('Merci de remplir tout les champs');
    return false;
  }
};

// Delete User
function deleteUser(event) {

  event.preventDefault();

  // Pop up a confirmation dialog
  var confirmation = confirm('Etes vous sur de vouloir supprimer cette ligne ?');

  // Check and make sure the user confirmed
  if (confirmation === true) {

    // If they did, do our delete
    $.ajax({
      type: 'DELETE',
      url: '/admin/bar/delete/' + $(this).attr('rel')
    }).done(function( response ) {

      // Check for a successful (blank) response
      if (response.msg === '') {
      }
      else {
        alert('Error: ' + response.msg);
      }

      // Update the table
      populateTableBar();

    });

  }
  else {

    // If they said no to the confirm, do nothing
    return false;

  }

};

function updateModal(e) {
  e.preventDefault;
  let idModal = $(this).data('target');
  idModal = idModal.substring(1);
  $(this).parents().prevAll('.modal').attr('id', idModal);

  let idTable = $(this).data('rowId');
  $(this).parents().prevAll('.modal').find('#updateUser').attr('rel', idTable);

  $('.modal-id form .form-group').remove();

  $(this).parent().prevAll('td').each(function(){
    let label = $(this).data('label');
    let Txt = $(this).text();
    let name = $(this).data('name');
    let input = '<div class="form-group"><label>'+label+'</label><input id="'+name+'Up" class="form-control" value="'+Txt+'" name="'+name+'" type="text"></input></div>';
    $('.modal-id form').prepend(input);
  });

  if ($(this).hasClass('bar')){
    let action = '/admin/bar/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalBa');
  } else if ($(this).hasClass('missions')){
    let action = '/admin/missions/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalMi');
  } else if ($(this).hasClass('collab')) {
    let action = '/admin/collab/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalCol');
  } else if ($(this).hasClass('contact')) {
    let action = '/admin/contact/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalCon');
  } else if ($(this).hasClass('blog')) {
    let action = '/admin/blog/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalBlo');
  }

  $(idModal).modal('show');

};
