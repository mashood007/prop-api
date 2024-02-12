import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lat: string;

  @ApiProperty()
  long: string;

  @ApiProperty()
  cityId: number
}
