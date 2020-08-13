const QLogin = "SELECT id, nome FROM usuario WHERE email=? AND senha=?";

module.exports.QLogin = QLogin;
