const User = require('../models/User');

const resolvers = {

    Query: {
        getAllUsers: async () => {
            const users = await User.find();
            return users;
        },
        getUser: async (_: any, args: any) => {
            const user = await User.findById(args.id);
            return user;
        }
    },

    Mutation: {
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

        deleteUser: async (_: any, args: any) => {
            await User.findByIdAndDelete(args.id);
            return 'User deleted';
        },

        updateUser: async (_: any, args: any) => {
           const userUpdate = await User.findByIdAndUpdate(args.id, {
            $set: args.user // $set nos sirve para actualizar solo la informacion que nos llega.
           }, { new: true });
           return userUpdate;
        }
    }

}

export default resolvers;