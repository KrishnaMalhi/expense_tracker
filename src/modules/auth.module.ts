import { Logger, Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { MongooseModule } from "@nestjs/mongoose"
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { AuthDatabase } from "src/database/auth.database";
import { UserSchema } from "src/schemas/user.schema";
import { jwtConstants } from "src/utils/constants.utils";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: jwtConstants.expiresIn },

        // inject: [ConfigService],
        // useFactory: (config: ConfigService) => {
        //     return {
        // secret: config.get<string>('JWT_SECRET_KEY'),
        // signOptions: { expiresIn: config.get<string | number>("JWT_EXPIRES_IN") },
        // }
        // }
    }),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
    controllers: [AuthController],
    providers: [AuthService, AuthDatabase, Logger]
})
export class AuthModule { };