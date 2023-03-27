import * as bcrypt from "bcrypt"
export const bcryptEncryption = (password: String) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
};

export const bcryptEncryptionComparision = (password: String, hashedPassword: String) => {
    return bcrypt.compareSync(password, hashedPassword);
};