
import { IsEmail, IsString } from "class-validator";

export class CreateDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
