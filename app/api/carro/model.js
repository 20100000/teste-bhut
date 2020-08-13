import database from "../../../lib/database";
import queries from "./tool/queries";

const _getCarros = async () => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return await database.execute(conn, queries.QSelectAllCarros);

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _getCarro = async (id) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return await database.execute(conn, queries.QSeletcCarro,[id]);

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _saveCarro = async (carro) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        const res =await database.execute(conn, queries.QSaveCarro,[carro.marca, carro.ano, carro.modelo,carro.cor,carro.combustivel,carro.valor]);
        return res.insertId;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _updateCarro = async (carro, id) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return await database.execute(conn, queries.QUpdateCarro,[carro.marca, carro.ano, carro.modelo,carro.cor,carro.combustivel,carro.valor, id]);
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _deleteCarro = async (id) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return await database.execute(conn, queries.QDeleteCarro,[id]);

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

module.exports.mGetCarros = _getCarros;
module.exports.mGetCarro = _getCarro;
module.exports.mSaveCarro = _saveCarro;
module.exports.mUpdateCarro = _updateCarro;
module.exports.mDeleteCarro = _deleteCarro;
