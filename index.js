
window.Smart('#table', class {
    get properties() {
        return {    
            freezeHeader: true,
            selection: true,

        }
    }
});
window.onload = function (){

    let table = document.getElementById('table'),
        button = document.getElementById('ajaxRequestButton');

    button.addEventListener('click', () =>{
        $.ajax({
            url: "server.php",
            beforeSend: function( xhr ) {
            xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            }
        })
            .done(function( data ) {
            if ( console && console.log ) {
                let tableData =JSON.parse(data);
              

                table.dataSource= new window.Smart.DataAdapter({
                    dataSource: tableData,
                    dataSourceType: 'json',
                    autobind: true,
                    dataFields: [
                        'nationalityID: number',
                        'nationalityName: string'
                    ]
                }),
                table.columns = 
                [
                    {label: 'Nationality ID', dataField: 'nationalityID'},
                    {label: 'Nationality Name', dataField: 'nationalityName'}
                ];
            
            }
            });
    })
}