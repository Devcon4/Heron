import { Service } from "typedi";
import { getConnection, Connection, createConnection } from "typeorm";
import ormconfig from "../../ormconfig.docker"; 

async function getConnectionFactory() {
    return await getConnection(ormconfig as any);
}

@Service({factory: getConnectionFactory})
export class HeronContext extends Connection {}
