function openBurguer()
{
    var menu = document.querySelector('#nav-bar');

    if(menu.style.display === 'none'){
        document.querySelector('#nav-bar').style.display = 'flex';
    }
    else{
        document.querySelector('#nav-bar').style.display = 'none';
    }
}

function openSearch()
{

    var search = document.querySelector('#search');

    if(search.style.display === 'none'){
        document.querySelector('#search').style.display = 'flex';

    }else{
        document.querySelector('#search').style.display = 'none';

    }

}
