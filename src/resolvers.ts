const User = require('../models/User');

const resolvers = {

    Query: {
        // Trae todos los registros existentes.
        getAllUsers: async () => {
            const users = await User.find();
            return users;
        },
        // Trae un solo registro especificado por su ID
        getUser: async (_: any, args: any) => {
            const user = await User.findById(args.id);
            return user;
        }
    },

    Mutation: {
        // Crea un nuevo registro de usuario
        createUser: async (_: any, args: any) => {
            const { name, email, password } = args.user;
            const newUser = new User({
                name,
                email,
                password,
            });

            await newUser.save();
            return newUser;
        },

        // Elimina un usuario por ID
        deleteUser: async (_: any, args: any) => {
            await User.findByIdAndDelete(args.id);
            return 'User deleted';
        },
        
        // Actualiza la información de un usuario por su ID
        updateUser: async (_: any, args: any) => {
           const userUpdate = await User.findByIdAndUpdate(args.id, {
            $set: args.user // $set nos sirve para actualizar solo la informacion que nos llega.
           }, { new: true });
           return userUpdate;
        }
    }

}

export default resolvers;