import { Request, Response } from 'express';

import { sequelize } from '../instances/mysql';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/Users';

export const home = async (req: Request, res: Response) => {
    await User.update({age: 18}, {
        where: {
            age: {
                [Op.lt]: 18
            }
        }
    })




    let users = await User.findAll();

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};
export const novoUsuario = async (req: Request, res:Response) => {
    let body = req.body;

    let requestDB = await User.create({
        name: body.name,
        age: body.age
    });
    return 1;
    
    
}


// try {

     // ? Faz conexão com o banco de dados, e o catch devolve se tiver algum erro
    
//     await sequelize.authenticate();
//     console.log("Conexão estabelecida com sucesso!");
// } catch(error) {
//     console.log("Deu problema: ", error);
// }






  // ? FindAll() Pega todas informações
//   let users = await User.findAll({
    // ? Pega Itens Exatos
    // attributes: ['name', 'age']


    // ? Não Pega os itens exatos
    // attributes: { exclude: ['id', 'age']}


    // ? Fazer filtragem 
    // where: { age: 19 }


    // ? Operação de filtragem OR
    // where: {
    //     [Op.or]: [ 
    //         { age: 20 },
    //         { name: 'Leticia Pelizari'}
    //     ]
    // }


    // ? OP de Maior Ou Igual e Menor
    // ? GT = Greather Than, E = Equal, LT = Lower Than
    // where: {
    //     age: {
    //         [Op.gt]: 20, // > 20
    //         [Op.gte]: 20, // >= 20
    //         [Op.lt]: 20, // < 20
    //         [Op.lt]: 20, // <= 20
    //     }
    // }


    // ? Que tenha entre dois valores (Entre: [Op.between]) (Não Esta Entre: [Op.notBetween])
    // where: {
    //     age: {
    //         [Op.between]: [40,70]
    //     }
    // }

    // ? IN = Todo mundo que tenha esses valores, notIn = que não tenha o valor
    //  where: {
    //     age: {
    //         [Op.in]: [40,70]
    //     }
    // }

    // ? Função Like
    // where: {
    //     name: {
    //         [Op.like]: 'pa%'
    //     }
    // }

    // ? Ordenar
    // where: {
    //     age: {
    //         [Op.gte]: 18
    //     }
    // },
    // order: [['age', "ASC"]]

    // ? Limit
    //    where: {
    //     age: {
    //         [Op.gte]: 18
    //     }
    // },

    // ? Paginação
//     offset:2,
//     limit: 2


// });

// console.log("Usuarios: ", JSON.stringify(users));


    // ? build + save
    // const user = User.build({
    //     name: 'Jauzinho',
    //     age: 12
    // });
    //  await user.save();

    // ? Create 
    //     const user = await User.create({
    //         name: 'Testeee',
    //         age: 12
    //     });

    // ? Deletar
    // await User.destroy({
    //     where:{
    //         age: {
    //             [Op.lte]: 18
    //         }
    //     }
    // })

 
  



