// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the user table on initial page load
  populateTableBar();
  populateTableBlog();
  populateTableMiss();
  populateTableCo();
  populateTableCon();

  // Add User button click
  $('#btnAddBa').on('click', addUser);
  $('#btnAddBlog').on('click', addBlog);
  $('#btnAddMiss').on('click', addMiss);
  $('#btnAddCo').on('click', addCo);
  $('#btnAddCon').on('click', addCon);

  // Update
  $('#updateUser').on('click', updateUser);

  // Delete User link click
  $('table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

  // remplir la modal dynamiquement
  $('table tbody').on('click', 'td a.modifier', updateModal);

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

function populateTableMiss() {
  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/admin/missions', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td data-label="Nom du poste" data-name="nom_poste">' + this.nom_poste + '</td>';
      tableContent += '<td data-label="Recruteur" data-name="recruteur">' + this.recruteur + '</td>';
      tableContent += '<td data-label="Durée" data-name="duree">'+ this.duree +'</td>';
      tableContent += '<td data-label="Localisation" data-name="localisation">'+ this.localisation +'</td>';
      tableContent += '<td data-label="Département" data-name="departement">'+ this.departement +'</td>';
      tableContent += '<td data-label="Diplôme" data-name="diplome">'+ this.diplome +'</td>';
      tableContent += '<td data-label="Expérience" data-name="experience">'+ this.experience +'</td>';
      tableContent += '<td data-label="Poste" data-name="poste">'+ this.poste +'</td>';
      tableContent += '<td data-label="Poste" data-name="entreprise">'+ this.entreprise +'</td>';
      tableContent += '<td data-label="Compétences" data-name="competences">'+ this.competences +'</td>';
      tableContent += '<td data-label="Logo" data-name="logo">'+ this.logo +'</td>';
      tableContent += '<td><a alt="Modifier" href="#" class="modifier missions" data-row-id="'+this.id+'" data-target="#Missions'+this.id+'" data-toggle="modal"><i class="far fa-edit fa-2x"></i></a></td>';
      tableContent += '<td><a alt="Supprimer" href="#" class="linkdeleteuser" rel="' + this.id + '"><i class="far fa-trash-alt fa-2x"></i></a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#contentOffres table tbody').html(tableContent);
  });
};

// Fill table with data
function populateTableCo() {
  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/admin/collab', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td data-label="Nom" data-name="name">' + this.name + '</td>';
      tableContent += '<td data-label="Age" data-name="age">' + this.age + '</td>';
      tableContent += '<td data-label="Technologies" data-name="techno">'+ this.techno +'</td>';
      tableContent += '<td data-label="Expérience" data-name="experience">'+ this.experience +'</td>';
      tableContent += '<td data-label="Description" data-name="description">'+ this.description +'</td>';
      tableContent += '<td data-label="Image" data-name="images">'+ this.images +'</td>';
      tableContent += '<td><a alt="Modifier" href="#" class="modifier collab" data-row-id="'+this.id+'" data-target="#Collab'+this.id+'" data-toggle="modal"><i class="far fa-edit fa-2x"></i></a></td>';
      tableContent += '<td><a alt="Supprimer" href="#" class="linkdeleteuser" rel="' + this.id + '"><i class="far fa-trash-alt fa-2x"></i></a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#contentCollab table tbody').html(tableContent);
  });
};

// Fill table with data
function populateTableCon() {
  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/admin/contact', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td data-label="Horaires" data-name="horaires">' + this.horaires + '</td>';
      tableContent += '<td data-label="Adresse" data-name="adresse">' + this.adresse + '</td>';
      tableContent += '<td data-label="Tél" data-name="tel">'+ this.tel +'</td>';
      tableContent += '<td data-label="Mail" data-name="mail">'+ this.mail +'</td>';
      tableContent += '<td><a alt="Modifier" href="#" class="modifier contact" data-row-id="'+this.id+'" data-target="#Footer'+this.id+'" data-toggle="modal"><i class="far fa-edit fa-2x"></i></a></td>';
      tableContent += '<td><a alt="Supprimer" href="#" class="linkdeleteuser" rel="' + this.id + '"><i class="far fa-trash-alt fa-2x"></i></a></td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#contentFooter table tbody').html(tableContent);
  });
};

// Show User Info
function updateUser(e) {
  e.preventDefault();

  if ($(this).parent().is('#updateModalBa')){

    let dataBar = {
      'name': $('#updateModalBa input#nameUp').val(),
      'picto': $('#updateModalBa input#pictoUp').val(),
      'numbers': $('#updateModalBa input#numbersUp').val(),
    }
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'PUT',
      data: dataBar,
      url: '/admin/bar/update/' + $(this).attr('rel'),
      dataType: 'JSON'
    }).done(function( response ) {
      // Check for successful (blank) response
      if (response.msg === '') {
        $('#updateModalBa input').val('');
        // Update the table
        populateTableBar();
      } else {
        alert('Erreur: ' + response.msg);
      }
    }); // fin ajax

  } else if ($(this).parent().is('#updateModalBlo')) {

    let dataBlog = {
      'title': $('#updateModalBlo input#titleUp').val(),
      'content': $('#updateModalBlo input#contentUp').val(),
      'images': $('#updateModalBlo input#imagesUp').val(),
      'autor': $('#updateModalBlo input#autorUp').val(),
      'category': $('#updateModalBlo input#categoryUp').val(),
      'description': $('#updateModalBlo input#descriptionUp').val(),
    }
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'PUT',
      data: dataBlog,
      url: '/admin/blog/update/' + $(this).attr('rel'),
      dataType: 'JSON'
    }).done(function( response ) {
      // Check for successful (blank) response
      if (response.msg === '') {
        $('#updateModalBlo input').val('');
        // Update the table
        populateTableBlog();
      } else {
        alert('Erreur: ' + response.msg);
      }
    }); // fin ajax

  } else if ($(this).parent().is('#updateModalMi')) {
    let dataMiss = {
      'nom_poste': $('#updateModalMi input#nom_posteUp').val(),
      'recruteur': $('#updateModalMi input#recruteurUp').val(),
      'duree': $('#updateModalMi input#dureeUp').val(),
      'localisation': $('#updateModalMi input#localisationUp').val(),
      'departement': $('#updateModalMi input#departementUp').val(),
      'diplome': $('#updateModalMi input#diplomeUp').val(),
      'experience': $('#updateModalMi input#experienceUp').val(),
      'poste': $('#updateModalMi input#posteUp').val(),
      'competences': $('#updateModalMi input#competencesUp').val(),
      'entreprise': $('#updateModalMi input#entrepriseUp').val(),
      'logo': $('#updateModalMi input#logoUp').val()
    }
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'PUT',
      data: dataMiss,
      url: '/admin/missions/update/' + $(this).attr('rel'),
      dataType: 'JSON'
    }).done(function( response ) {
      // Check for successful (blank) response
      if (response.msg === '') {
        $('#updateModalMi input').val('');
        // Update the table
        populateTableMiss();
      } else {
        alert('Erreur: ' + response.msg);
      }
    }); // fin ajax
  } else if ($(this).parent().is('#updateModalCol')) {
    let dataCo = {
      'name': $('#updateModalCol input#nameUp').val(),
      'age': $('#updateModalCol input#ageUp').val(),
      'techno': $('#updateModalCol input#technoUp').val(),
      'experience': $('#updateModalCol input#experienceUp').val(),
      'description': $('#updateModalCol input#descriptionUp').val(),
      'images': $('#updateModalCol input#imagesUp').val(),
    }
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'PUT',
      data: dataCo,
      url: '/admin/collab/update/' + $(this).attr('rel'),
      dataType: 'JSON'
    }).done(function( response ) {
      // Check for successful (blank) response
      if (response.msg === '') {
        $('#updateModalCol input').val('');
        // Update the table
        populateTableCo();
      } else {
        alert('Erreur: ' + response.msg);
      }
    }); // fin ajax
  } else if ($(this).parent().is('#updateModalCon')) {
    let dataCon = {
      'horaires': $('#updateModalCon input#horairesUp').val(),
      'adresse': $('#updateModalCon input#adresseUp').val(),
      'tel': $('#updateModalCon input#telUp').val(),
      'mail': $('#updateModalCon input#mailUp').val()
    }
    // Use AJAX to post the object to our adduser service
    $.ajax({
      type: 'PUT',
      data: dataCon,
      url: '/admin/contact/update/' + $(this).attr('rel'),
      dataType: 'JSON'
    }).done(function( response ) {
      // Check for successful (blank) response
      if (response.msg === '') {
        $('#updateModalCon input').val('');
        // Update the table
        populateTableCon();
      } else {
        alert('Erreur: ' + response.msg);
      }
    }); // fin ajax
  }

};

// Add User
function addUser(event) {
  event.preventDefault();

  // If it is, compile all user info into one object
  let addBa = {
    'name': $('#createBa input#nameAdd').val(),
    'picto': $('#createBa input#pictoAdd').val(),
    'numbers': $('#createBa input#numbersAdd').val(),
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: addBa,
    url: '/admin/bar/add',
    dataType: 'JSON'
  }).done(function( response ) {
    // Check for successful (blank) response
    if (response.msg === '') {
      // Clear the form inputs
      $('#createBa input').val('');
      // Update the table
      populateTableBar();
    } else {
      // If something goes wrong, alert the error message that our service returned
      alert('Erreur: ' + response.msg);
    }
  });
};

function addBlog (event){
  event.preventDefault();
  // If it is, compile all user info into one object
  let addBlog = {
    'title': $('#createBlog input#titreAdd').val(),
    'content': $('#createBlog input#contAdd').val(),
    'images': $('#createBlog input#imgAdd').val(),
    'autor': $('#createBlog input#autAdd').val(),
    'category': $('#createBlog input#catAdd').val(),
    'description': $('#createBlog input#descAdd').val(),
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: addBlog,
    url: '/admin/blog/add',
    dataType: 'JSON'
  }).done(function( response ) {
    // Check for successful (blank) response
    if (response.msg === '') {
      // Clear the form inputs
      $('#createBlog input').val('');
      // Update the table
      populateTableBlog();
    } else {
      // If something goes wrong, alert the error message that our service returned
      alert('Erreur: ' + response.msg);
    }
  });
};

function addMiss (event){
  event.preventDefault();
  // If it is, compile all user info into one object
  let addMiss = {
    'nom_poste': $('#createMiss input#nomAdd').val(),
    'recruteur': $('#createMiss input#recrutAdd').val(),
    'duree': $('#createMiss input#durAdd').val(),
    'localisation': $('#createMiss input#locAdd').val(),
    'departement': $('#createMiss input#depAdd').val(),
    'diplome': $('#createMiss input#diplAdd').val(),
    'experience': $('#createMiss input#expAdd').val(),
    'poste': $('#createMiss input#postAdd').val(),
    'entreprise': $('#createMiss input#entrAdd').val(),
    'competences': $('#createMiss input#compAdd').val(),
    'logo': $('#createMiss input#logoAdd').val(),
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: addMiss,
    url: '/admin/missions/add',
    dataType: 'JSON'
  }).done(function( response ) {
    // Check for successful (blank) response
    if (response.msg === '') {
      // Clear the form inputs
      $('#createMiss input').val('');
      // Update the table
      populateTableMiss();
    } else {
      // If something goes wrong, alert the error message that our service returned
      alert('Erreur: ' + response.msg);
    }
  });
};

function addCo (event){
  event.preventDefault();
  // If it is, compile all user info into one object
  let addCo = {
    'name': $('#createCo input#nomAdd').val(),
    'age': $('#createCo input#ageAdd').val(),
    'techno': $('#createCo input#techAdd').val(),
    'experience': $('#createCo input#expAdd').val(),
    'description': $('#createCo input#descAdd').val(),
    'images': $('#createCo input#imgAdd').val(),
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: addCo,
    url: '/admin/collab/add',
    dataType: 'JSON'
  }).done(function( response ) {
    // Check for successful (blank) response
    if (response.msg === '') {
      // Clear the form inputs
      $('#createCo input').val('');
      // Update the table
      populateTableCo();
    } else {
      // If something goes wrong, alert the error message that our service returned
      alert('Erreur: ' + response.msg);
    }
  });
};

// Add User
function addCon(event) {
  event.preventDefault();

  // If it is, compile all user info into one object
  let addCon = {
    'horaires': $('#createCon input#horAdd').val(),
    'adresse': $('#createCon input#adrAdd').val(),
    'tel': $('#createCon input#telAdd').val(),
    'mail': $('#createCon input#mailAdd').val()
  }
  // Use AJAX to post the object to our adduser service
  $.ajax({
    type: 'POST',
    data: addCon,
    url: '/admin/contact/add',
    dataType: 'JSON'
  }).done(function( response ) {
    // Check for successful (blank) response
    if (response.msg === '') {
      // Clear the form inputs
      $('#createCon input').val('');
      // Update the table
      populateTableCon();
    } else {
      // If something goes wrong, alert the error message that our service returned
      alert('Erreur: ' + response.msg);
    }
  });

};

// Delete User
function deleteUser(event) {

  event.preventDefault();

  // Pop up a confirmation dialog
  let confirmation = confirm('Etes vous sur de vouloir supprimer cette ligne ?');

  // Check and make sure the user confirmed
  if (confirmation === true) {
    if ($(this).parents().is('#contentBar')) {
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/admin/bar/delete/' + $(this).attr('rel')
      }).done(function( response ) {

        // Check for a successful (blank) response
        if (response.msg === '') {
        } else {
          alert('Error: ' + response.msg);
        }

        // Update the table
        populateTableBar();

      });
    } else if ($(this).parents().is('#contentBlog')) {
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/admin/blog/delete/' + $(this).attr('rel')
      }).done(function( response ) {

        // Check for a successful (blank) response
        if (response.msg === '') {
        } else {
          alert('Error: ' + response.msg);
        }

        // Update the table
        populateTableBlog();

      });
    } else if ($(this).parents().is('#contentOffres')) {
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/admin/missions/delete/' + $(this).attr('rel')
      }).done(function( response ) {

        // Check for a successful (blank) response
        if (response.msg === '') {
        } else {
          alert('Error: ' + response.msg);
        }

        // Update the table
        populateTableMiss();

      });
    } else if ($(this).parents().is('#contentCollab')) {
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/admin/collab/delete/' + $(this).attr('rel')
      }).done(function( response ) {

        // Check for a successful (blank) response
        if (response.msg === '') {
        } else {
          alert('Error: ' + response.msg);
        }

        // Update the table
        populateTableCo();

      });
    } else if ($(this).parents().is('#contentFooter')) {
      // If they did, do our delete
      $.ajax({
        type: 'DELETE',
        url: '/admin/contact/delete/' + $(this).attr('rel')
      }).done(function( response ) {

        // Check for a successful (blank) response
        if (response.msg === '') {
        } else {
          alert('Error: ' + response.msg);
        }

        // Update the table
        populateTableCon();

      });
    }

  } else {

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
    let action = '/admin/bar/update/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalBa');
  } else if ($(this).hasClass('missions')){
    let action = '/admin/missions/update/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalMi');
  } else if ($(this).hasClass('collab')) {
    let action = '/admin/collab/update/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalCol');
  } else if ($(this).hasClass('contact')) {
    let action = '/admin/contact/update/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalCon');
  } else if ($(this).hasClass('blog')) {
    let action = '/admin/blog/update/'+idTable;
    $('.modal-id form').attr('action', action).attr('id', 'updateModalBlo');
  }

  $(idModal).modal('show');

};
