
import { ApiProperty } from "@nestjs/swagger";
import { Furnishings, Aminities } from "@prisma/client";

export class CreatePropertyDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    furnish?: Furnishings;

    @ApiProperty()
    aminities?: Aminities[]

    @ApiProperty()
    buildingInfo: string

    @ApiProperty()
    categoryId: number;

    @ApiProperty()
    locationId: number;
}
