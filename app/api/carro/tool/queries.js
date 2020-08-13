const QSelectAllCarros = `SELECT * FROM carro WHERE 1`;
const QSeletcCarro = `SELECT * FROM carro WHERE id=?`;
const QSaveCarro = `INSERT INTO carro (marca, ano, modelo, cor, combustivel, valor) VALUES (?,?,?,?,?,?)`;
const QUpdateCarro = `UPDATE carro SET marca=?, ano=?, modelo=?, cor=?, combustivel=?, valor=? WHERE id=? `;
const QDeleteCarro = `DELETE FROM carro WHERE id = ?`;


module.exports.QSelectAllCarros = QSelectAllCarros;
module.exports.QSeletcCarro = QSeletcCarro;
module.exports.QSaveCarro = QSaveCarro;
module.exports.QUpdateCarro = QUpdateCarro;
module.exports.QDeleteCarro = QDeleteCarro;
