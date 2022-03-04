import { EMAIL_EXIST_ERR_MSG, ROLE_REQUIRED_ERR_MSG } from '@constants/errorMessage';
import { EMAIL_EXIST, VALIDATION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';
import User from '@models/UserModel';
import bcrypt from 'bcrypt';

class UserService {
  async getAll() {
    // get data from db
    const users = await User.find();

    // remove password form data
    const usersData = users.map((user) => {
      const userObj = user.toObject();

      delete userObj.password;

      return userObj;
    });

    // return data
    return usersData;
  }

  async create({ name, email, password, role }) {
    // check email is unique
    const user = await UserService.getData({ email });

    if (user) {
      throw new InvariantError(EMAIL_EXIST_ERR_MSG, EMAIL_EXIST, 409);
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // role
    let roleUser = null;
    const users = await User.find();
    if (users.length === 0) {
      roleUser = 'super admin';
    } else if (!role) {
      throw new InvariantError(ROLE_REQUIRED_ERR_MSG, VALIDATION_ERR);
    }

    // save to db
    const newUser = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: roleUser ?? role.trim(),
    });

    const userSave = await newUser.save();

    return userSave._id;
  }

  static async getData(filter) {
    // get data from db
    const user = await User.findOne(filter);

    // return data
    return user;
  }
}

export default UserService;
