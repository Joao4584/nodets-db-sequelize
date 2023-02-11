import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql';

interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}
// ? Criando o DataTypes Modelo para a tabela users no db
export const User = sequelize.define<UserInstance>("User", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.STRING,
            defaultValue: 18
        }
    }, {
        tableName: 'users',
        timestamps: false
    }
);