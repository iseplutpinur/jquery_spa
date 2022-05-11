$(document).ready(() => {
    // set profile
    const user = repo.getUser();
    $('.user-profile>img').attr('src', '../template/img/bg-img/2.jpg');
    // $('.user-profile>img').attr('src', user.foto);
    $('.user-info>h6').text(user.name);
})

function logout() {
    repo.resetUser();
    window.location.href = '/';
}
function cekLogin() {
    if (repo.getUser() == null) logout();
}
cekLogin();