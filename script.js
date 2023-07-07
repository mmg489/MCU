

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', function() {
      var query = document.getElementById('search-input').value;
      console.log(query);
    });
  });

  
//gotta write a fetch request to get the searchQuery function up and running
  searchQuery();