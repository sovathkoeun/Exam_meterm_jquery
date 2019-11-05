$(document).ready(function(){
    var url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
    $.ajax({
        datatype: 'json',
        url: url,
        success: function(data){
            var result ="";
            data.hits.forEach(el => {
                result+=`
                   <div class="col-6">
                        <div class="container mt-3">
                            <div class="row">
                            <div class="card shadow-lg mb-4">
                            <div class="card-header">
                            <img src="${el.userImageURL}" style="border-radius:50%" width="50" height="50">&nbsp
                            ${el.user}
                        </div>
                        <!-- Modal body -->
                        <div class="modal-body">
                        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#db${el.id}">View</button>
                        <br>
                        <br>
                        <img src="${el.largeImageURL}" class="img-fluid">
                        </div>
                        </div>

                      <!-- The Modal -->
                        <div class="modal fade" id="db${el.id}">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <!-- Modal Header -->
                            <div class="modal-header">
                             <img src="${el.userImageURL}" style="border-radius:50%" width="50" height="50">
                             ${el.user}
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <!-- Modal body -->
                            <div class="modal-body">
                            <img src="${el.largeImageURL}" class="img-fluid">
                            </div>
                            
                            <!-- Modal footer -->
                            <div class="modal-footer">
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item">
                                    ${el.likes}
                                <i class="material-icons text-primary float-right">thumb_up</i></li>&nbsp
                               <li class="list-group-item">
                                    ${el.comments}
                               <i class="material-icons text-success float-right">message</i></li>
                               <li class="list-group-item">
                                    ${el.favorites}
                               <i class="material-icons btn-outline-danger float-right">favorites</i></li>
                               <li class="list-group-item">
                                    ${el.views}
                               <i class="material-icons text-info float-right">group</i></li>
                            </ul>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                </div>
              </div>
             <div>
            </div>
                `;
            });
            $('#result').append(result);
        }
    });
});